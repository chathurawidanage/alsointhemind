# InDesign HTML to MDX Conversion Learnings & Playbook

This document captures the hard-won lessons, CSS class mappings, edge cases, and quality checks established when extracting chapters and reflections from raw InDesign HTML exports into Nextra MDX files for *This is Also in the Mind*.

---

## 0. Prime Directive: Absolute Text Fidelity

> [!IMPORTANT]
> **NEVER invent, generate, or summarize text.**
> - Do not write AI-generated introductory paragraphs, summaries, or narrative connective tissue.
> - Do not invent card descriptions.
> - Every word of body prose, dates, quotes, captions, and footnotes must originate directly from the physical book / InDesign export.
> - Landing pages only contain authentic chapter titles, metadata (dates and location), and clean navigation cards to the sub-pages.

---

## 1. Directory & File Conventions

- **Raw InDesign Assets**:
  Placed in `raw/`:
  - `raw/Chapter_XX-web-resources/`
    - `Chapter XX.html`
    - `css/idGeneratedStyles.css`
    - `image/`
  - `raw/Chapter_XX_-_Reflection_XX-web-resources/`
    - `Chapter XX - Reflection XX.html`
    - `css/idGeneratedStyles.css`
    - `image/`
- **Output MDX Structure**:
  Each chapter is published on a single page matching the physical book layout: `app/book/chapter{N}/page.mdx`.
  In the book, **Reflection comes first, and Notes comes second**:
  1. `# Chapter {N}: “Title”`
  2. `## Reflection 0{N}: Title`
     - Full narrative prose (biographical background, reflections, etc.)
     - Footnotes 1–5
     - Associated reflection photographs and authentic captions
  3. `---`
  4. `## Notes`
     - `*(Month Year – Month Year)*` (date range of notes)
     - `*Location of Hermitage/Monastery*`
     - Dated diary entries (`### DD Month YYYY`)
     - Footnotes 6+
     - `<PersonalNote>` styling for author's diary notes
     - Associated hermitage/diary photographs and authentic captions
- **Navigation Configuration**:
  In `app/_meta.global.ts`, register each chapter as a single clean entry under `book.items`:
  ```ts
  chapter{N}: {
      title: "Chapter N: Title",
  }
  ```
- **Extracted Images**:
  - Saved to `public/images/chapter{N}/` using semantic filenames (e.g., `ven-nanavimala-library-polgasduwa.png`, not `06._Page_52.png`).
- **Table of Contents**:
  - Updated card description in `app/book/page.mdx`.

---

## 2. InDesign CSS Class Mappings

Always inspect `css/idGeneratedStyles.css` for each export, as InDesign may shift class indices between documents. For Chapter 01:

| InDesign Class / Pattern | Semantic Meaning | Markdown / MDX Target |
| :--- | :--- | :--- |
| `CharOverride-6` (inside `p.Normal`) | Date header or section heading | `### 16 February 1994` |
| `CharOverride-7` (glyph `x` in `SARA-SERASILI`) | Bullet point marker | `- ` |
| `CharOverride-5` | Bold emphasis (author's diary emphasis) | `**text**` |
| `CharOverride-9`, `CharOverride-15` | Italics (Pāḷi terms, book titles) | `*text*` |
| `CharOverride-12` | Bold + Italic | Inside bold: `*text*`; standalone: `***text***` |
| `CharOverride-16` / `CharOverride-17` | Footnote text body (normal / italic) | Content inside `<Footnote>...</Footnote>` |
| `_idFootnoteLink` | Footnote reference anchor | `<Footnote id="N">...</Footnote>` |
| `_idFootnote` | Footnote definition block | Mapped directly into the inline `<Footnote>` tag |

---

## 3. Critical Formatting Lessons & Pitfalls

### A. Nested Bold & Italic Asterisks (Avoiding `*****`)
- **Problem**: When an entire sentence or bullet is bold (`**...**`), InDesign marks internal italicized Pāḷi words with a bold-italic class (`CharOverride-12`). If you wrap bold text in `**` and bold-italic text in `***`, markdown ends up with consecutive asterisks like `*****`:
  - ❌ `**You must observe this (*****piṇḍapāta*****) with Right View...**`
  - ❌ `- **Get established in *Satipaṭṭhāna*****.**`
- **Solution**: Inside an already-bold block (`**...**`), italicized words only need single asterisks:
  - ✅ `**You must observe this (*piṇḍapāta*) with Right View (*sammā-diṭṭhi*).**`
  - ✅ `- **Get established in *Satipaṭṭhāna*.**`

### B. Em-Dashes and Bold Spans (Avoiding `**—**`)
- **Problem**: InDesign often breaks spans around punctuation or footnotes. If an em-dash (`—`) is in its own bold span `<span class="Drop-Cap CharOverride-5">—</span>`, a naive span converter wraps it as `**—**`:
  - ❌ `**Keep in mind...**<Footnote id="23">...</Footnote>**—*****Sotāpattiphala Sutta*...**`
- **Solution**: Never isolate punctuation in bold wrappers. Connect the thought naturally:
  - ✅ `**Keep in mind...**<Footnote id="23">...</Footnote>—***Sotāpattiphala Sutta* (SN55.55; the fruit of stream-entry).**`

### C. Whitespace Trailing Inside Markdown Delimiters
- **Problem**: InDesign HTML often includes trailing spaces inside styled spans:
  - `<span class="CharOverride-9">burden </span>` &rarr; `*burden *`
  - When followed by punctuation: `*burden *—` or `(cloth)*, Sallekha`
- **Solution**: Strip trailing whitespace before closing delimiters, and strip leading whitespace before opening delimiters:
  - `*text* ` instead of `*text *`
  - `(cloth), *Sallekha*` instead of `(cloth)*, Sallekha*`

### D. Preserving Editorial Square Brackets
- Square brackets like `[For]`, `[that]`, `[at the moment of death]`, `[next]`, `[tīṇi sucaritāni]` represent editorial additions and must **never** be stripped or converted into markdown links.

### E. Author Reflections & `[Personal Note:]`
- **Context**: In Shanaka's handwritten diary, occasional reflections record his personal thoughts rather than Ven. Ñāṇavimala's direct instructions (e.g. `[Personal Note:] I have to go back and make a basis...`).
- **Component**: Use the `<PersonalNote>` component (globally registered in `mdx-components.js`):
  ```mdx
  - Memories that arise [are] connected to the sensual world. <PersonalNote>I have to go back and make a basis (exams and subsequent employment) in the world of the senses.</PersonalNote><Footnote id="24">...</Footnote>
  ```
  - Displays a subtle pill badge `[Personal Note]` with an author pen icon (`LuPenLine`) in warm amber.
  - The personal note text is styled in a contemplative tone (`italic text-neutral-700 dark:text-neutral-300`), clearly separating Shanaka's own voice from the teacher's instructions.
  - Can also be used standalone as a self-closing badge `<PersonalNote />` if needed.

---

## 4. Footnote Rules & Component Usage

1. **Inline Component**:
   Use the project's custom component:
   ```mdx
   <Footnote id="20">Refer to Reflection 08 for detailed elaboration.</Footnote>
   ```
2. **Numbering & Badges**:
   - The UI does **not** display bracketed numbers. Instead, it renders a subtle amber **exclamation icon `(!)`** (`LuCircleAlert`), allowing readers to discover annotations without distracting numbers.
   - Preserving `id="N"` in the MDX is still good practice for traceability back to the printed source.
3. **Punctuation Placement**:
   - Place the `<Footnote>` directly after the closing word or sentence punctuation, matching the print edition:
   - Example: `...take place consciousness is required.<Footnote id="20">...</Footnote> When his body...`
4. **Footnote Content**:
   - In Chapter Notes, footnotes are numbered continuously (e.g. 6 to 28 in Chapter 1).
   - In Reflections, footnotes start from 1 (e.g. 1 to 5 in Reflection 01).

---

## 5. Sutta Citations & Validation

1. **Standard Citation Format**:
   - Title in italics: `*Sammādiṭṭhi Sutta*`
   - Canonical abbreviation in parentheses: `(MN9; right view)`
   - Full example: `*Ambalaṭṭhikārāhulovāda Sutta* (MN61; advice to Rāhula at Ambalaṭṭhikā)`
2. **Automated Validation**:
   Run the project's SuttaCentral validator on the converted MDX:
   ```bash
   node scripts/validate-suttas.js app/book/chapter{N}/page.mdx
   ```
   All citations must validate against the SuttaCentral API (or `.sutta-cache.json`).

---

## 6. Image & Gallery Best Practices

1. **Next.js `<Image>` Component**:
   Always import Next.js `Image` at the top of the MDX:
   ```mdx
   import Image from 'next/image'
   ```
2. **Responsive Layout**:
   - Use `figure` with `aspect-[4/3]` or `aspect-[16/10]` for photos:
   ```tsx
   <div className="my-10 space-y-8">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <figure className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
         <div className="relative aspect-[4/3] w-full">
           <Image
             src="/images/chapter1/polgasduwa-island-hermitage-1990s.png"
             alt="Polgasduwa Island Hermitage (circa 1990s)"
             fill
             className="object-contain"
             sizes="(max-width: 768px) 100vw, 400px"
           />
         </div>
         <figcaption className="p-3 text-xs text-neutral-600 dark:text-neutral-400 text-center border-t border-neutral-200 dark:border-neutral-800">
           Polgasduwa Island Hermitage (circa 1990s)
         </figcaption>
       </figure>
     </div>
   </div>
   ```

---

## 7. Pre-Flight Verification Checklist

Before considering an extracted chapter complete:

- [ ] **Asterisk audit**: Run check for quadruple/quintuple asterisks (`****`, `*****`) and isolated dashes (`**—**`).
- [ ] **Character match check**: Compare sample paragraphs against physical book / printed scans (verify bold words, bracketed insertions, and single vs split bullet points).
- [ ] **Footnotes matched**: Every footnote in the chapter has an inline `<Footnote id="...">` with complete explanation text.
- [ ] **Sutta validation**: `node scripts/validate-suttas.js` passes with zero errors.
- [ ] **Next.js build**: `pnpm build` succeeds with zero errors, static page generation (15/15), and Pagefind index creation.
- [ ] **Catalog card**: `app/book/page.mdx` updated with the accurate Reflection title and summary.

