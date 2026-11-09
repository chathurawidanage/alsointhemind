import React from "react";
import suttaCacheData from "../.sutta-cache.json" with { type: "json" };

const PREFIXES = [
  "DN", "MN", "SN", "AN",
  "Dhp", "Ud", "Iti", "Snp", "Thag", "Thig",
  "Kp", "Khp", "Cp", "Ja", "Jat",
  "Vv", "Pv", "Mnd", "Cnd", "Ps",
  "Ap", "Bv", "Ne", "Nett", "Pe", "Pet", "Mil"
].join("|");

const SUTTA_REGEX = new RegExp(
  `\\b(${PREFIXES})\\s*([0-9]+(?:\\.[0-9]+)?(?:-[0-9]+)?)\\b`,
  "gi"
);

const PREFIX_MAP: Record<string, string> = {
  khp: "kp",
  jat: "ja",
  nett: "ne",
  pet: "pe",
};

const cache: Record<string, string> = (suttaCacheData as any) || {};

export function getSuttaUrl(prefix: string, num: string): string {
  const p = prefix.toLowerCase();
  const normalizedP = PREFIX_MAP[p] || p;
  const uid = `${normalizedP}${num.toLowerCase()}`;

  if (cache[uid]) {
    return cache[uid];
  }

  const isWholeChapter = (normalizedP === "sn" || normalizedP === "an") && !num.includes(".");
  return isWholeChapter
    ? `https://suttacentral.net/${uid}`
    : `https://suttacentral.net/${uid}/en/sujato`;
}

/**
 * Transforms string text nodes containing sutta references into clickable SuttaCentral links.
 * Leaves code blocks, existing links, and other elements untouched.
 */
export function linkSuttaText(node: React.ReactNode, keyPrefix = "sutta"): React.ReactNode {
  if (typeof node === "string") {
    SUTTA_REGEX.lastIndex = 0;
    if (!SUTTA_REGEX.test(node)) {
      return node;
    }

    SUTTA_REGEX.lastIndex = 0;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let matchIndex = 0;
    let m: RegExpExecArray | null;

    while ((m = SUTTA_REGEX.exec(node)) !== null) {
      const matched = m[0];
      const prefix = m[1];
      const num = m[2];
      const start = m.index;
      const end = m.index + matched.length;

      if (start > lastIndex) {
        elements.push(node.slice(lastIndex, start));
      }

      const url = getSuttaUrl(prefix, num);

      elements.push(
        <a
          key={`${keyPrefix}-link-${matchIndex++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="sutta-link font-medium underline underline-offset-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >
          {matched}
        </a>
      );

      lastIndex = end;
    }

    if (lastIndex < node.length) {
      elements.push(node.slice(lastIndex));
    }

    return elements;
  }

  if (Array.isArray(node)) {
    return node.map((child, i) => (
      <React.Fragment key={`${keyPrefix}-arr-${i}`}>
        {linkSuttaText(child, `${keyPrefix}-${i}`)}
      </React.Fragment>
    ));
  }

  if (React.isValidElement(node)) {
    // Never modify links, code blocks, or buttons
    const typeName = typeof node.type === "string" ? node.type : (node.type as any)?.name;
    if (
      typeName === "a" ||
      typeName === "code" ||
      typeName === "pre" ||
      typeName === "button"
    ) {
      return node;
    }

    // Don't modify elements that don't have children
    const props = node.props as { children?: React.ReactNode };
    if (!props || !props.children) {
      return node;
    }

    return React.cloneElement(
      node,
      undefined,
      linkSuttaText(props.children, `${keyPrefix}-el`)
    );
  }

  return node;
}

