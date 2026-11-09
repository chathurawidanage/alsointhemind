import fs from "fs";
import path from "path";

// Supported Pali Canon collection prefixes
const PREFIXES = [
  "DN", "MN", "SN", "AN",
  "Dhp", "Ud", "Iti", "Snp", "Thag", "Thig",
  "Kp", "Khp", "Cp", "Ja", "Jat",
  "Vv", "Pv", "Mnd", "Cnd", "Ps",
  "Ap", "Bv", "Ne", "Nett", "Pe", "Pet", "Mil"
].join("|");

// Regex matches e.g. SN22.22, SN 22.22, MN10, DN 16, Dhp 200, Snp1.11, SN22
const SUTTA_REGEX = new RegExp(
  `\\b(${PREFIXES})\\s*([0-9]+(?:\\.[0-9]+)?(?:-[0-9]+)?)\\b`,
  "gi"
);

// Normalization mapping for prefixes
const PREFIX_MAP = {
  khp: "kp",
  jat: "ja",
  nett: "ne",
  pet: "pe",
};

// Matches code fences, inline code, existing markdown links, and HTML/JSX tags
const TOKEN_REGEX = /(```[\s\S]*?```|`[^`\n]+`|\[[^\]]+\]\([^)]+\)|<[^>]+>)/g;

const CACHE_FILE = path.join(process.cwd(), ".sutta-cache.json");

let cacheLoaded = false;
const suttaCache = new Map();

function loadCache() {
  if (cacheLoaded) return;
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const raw = fs.readFileSync(CACHE_FILE, "utf-8");
      const obj = JSON.parse(raw);
      for (const [k, v] of Object.entries(obj)) {
        if (typeof v === "string") {
          suttaCache.set(k, v);
        }
      }
    }
  } catch {
    // Ignore cache load errors
  }
  cacheLoaded = true;
}

function saveCache() {
  try {
    const obj = {};
    for (const [k, v] of suttaCache.entries()) {
      obj[k] = v;
    }
    fs.writeFileSync(CACHE_FILE, JSON.stringify(obj, null, 2), "utf-8");
  } catch {
    // Ignore cache save errors
  }
}

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      const res = await fetch(url, {
        signal: controller.signal,
        headers: { "User-Agent": "alsointhemind-build/1.0" },
      });
      clearTimeout(timeoutId);
      return res;
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, 600 * (i + 1)));
    }
  }
  throw new Error(`Failed to fetch ${url} after ${retries} attempts`);
}

/**
 * Resolves a sutta identifier to its SuttaCentral URL.
 * Throws an Error if the sutta does not exist (failing deployment).
 */
export async function resolveSuttaUrl(prefix, number, filePath = "unknown file") {
  loadCache();

  let p = prefix.toLowerCase();
  if (PREFIX_MAP[p]) {
    p = PREFIX_MAP[p];
  }

  const num = number.toLowerCase();
  const uid = `${p}${num}`;

  if (suttaCache.has(uid)) {
    return suttaCache.get(uid);
  }

  const hasSubNumber = num.includes(".");
  // For SN and AN, whole samyutta/nipāta reference has no dot (e.g. SN22, AN7)
  const isWholeChapter = (p === "sn" || p === "an") && !hasSubNumber;

  let finalUrl = "";

  if (isWholeChapter) {
    try {
      const res = await fetchWithRetry(`https://suttacentral.net/api/suttas/${uid}`);
      if (res.ok) {
        const data = await res.json();
        if (data?.suttaplex?.uid) {
          finalUrl = `https://suttacentral.net/${uid}`;
        }
      }
      if (!finalUrl) {
        const plexRes = await fetchWithRetry(`https://suttacentral.net/api/suttaplex/${uid}`);
        if (plexRes.ok) {
          const plexData = await plexRes.json();
          if (Array.isArray(plexData) && plexData[0]?.uid) {
            finalUrl = `https://suttacentral.net/${uid}`;
          }
        }
      }
    } catch (err) {
      throw new Error(
        `\n\n❌ [sutta-validator] Network error validating whole-chapter reference "${prefix}${number}" in ${filePath}: ${err.message}\n`
      );
    }
  } else {
    // Individual sutta: check if Sujato translation is available
    try {
      const res = await fetchWithRetry(`https://suttacentral.net/api/suttas/${uid}/sujato`);
      if (res.ok) {
        const data = await res.json();
        if (data?.translation) {
          finalUrl = `https://suttacentral.net/${uid}/en/sujato`;
        } else if (data?.suttaplex?.uid || data?.root_text?.uid) {
          finalUrl = `https://suttacentral.net/${uid}`;
        }
      }

      if (!finalUrl) {
        const plexRes = await fetchWithRetry(`https://suttacentral.net/api/suttaplex/${uid}`);
        if (plexRes.ok) {
          const plexData = await plexRes.json();
          if (Array.isArray(plexData) && plexData[0]?.uid) {
            finalUrl = `https://suttacentral.net/${uid}`;
          }
        }
      }
    } catch (err) {
      throw new Error(
        `\n\n❌ [sutta-validator] Network error validating sutta reference "${prefix}${number}" in ${filePath}: ${err.message}\n`
      );
    }
  }

  if (!finalUrl) {
    throw new Error(
      `\n\n❌ [sutta-validator] INVALID SUTTA REFERENCE: "${prefix}${number}" (UID: "${uid}") found in ${filePath}.\n` +
      `SuttaCentral reported that this reference does not exist. Aborting site build and deployment!\n`
    );
  }

  suttaCache.set(uid, finalUrl);
  saveCache();
  return finalUrl;
}

function findMdxFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules" && entry.name !== ".next") {
        results.push(...findMdxFiles(fullPath));
      }
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      results.push(fullPath);
    }
  }

  return results;
}

export async function validateFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const parts = content.split(TOKEN_REGEX);

  let referencesFound = 0;

  for (const part of parts) {
    if (
      part.startsWith("```") ||
      part.startsWith("`") ||
      (part.startsWith("[") && part.includes("](")) ||
      (part.startsWith("<") && part.endsWith(">"))
    ) {
      continue;
    }

    SUTTA_REGEX.lastIndex = 0;
    if (!SUTTA_REGEX.test(part)) continue;

    SUTTA_REGEX.lastIndex = 0;
    let m;
    while ((m = SUTTA_REGEX.exec(part)) !== null) {
      referencesFound++;
      const prefix = m[1];
      const num = m[2];
      // Will throw and abort if invalid
      await resolveSuttaUrl(prefix, num, filePath);
    }
  }

  return referencesFound;
}

async function main() {
  console.log("☸️  Validating Sutta references against SuttaCentral...");

  const appDir = path.join(process.cwd(), "app");
  if (!fs.existsSync(appDir)) {
    console.error("❌ 'app' directory not found.");
    process.exit(1);
  }

  const mdxFiles = findMdxFiles(appDir);
  console.log(`   Found ${mdxFiles.length} MDX files to validate.`);

  let totalReferences = 0;

  try {
    for (const file of mdxFiles) {
      const count = await validateFile(file);
      totalReferences += count;
    }

    console.log(`✅ All ${totalReferences} Sutta references verified successfully against SuttaCentral.`);
    console.log(`   (Zero MDX source files were modified)`);
  } catch (error) {
    console.error("\n❌ DEPLOYMENT FAILED DUE TO INVALID SUTTA REFERENCE:");
    console.error(error.message);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

