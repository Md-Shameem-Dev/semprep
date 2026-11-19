// Re-imports the SRMIST 2021 subject map from SRM Helper (srmhelper.pro) into
// data/srm-2021.js: course codes, semesters, credits and official unit titles.
// SRM Helper hosts no papers or notes; this only reads its public syllabus map.
// Usage: node tools/import-srm-helper.mjs
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const BASE = "https://srmhelper.pro";
const OUT = fileURLToPath(new URL("../data/srm-2021.js", import.meta.url));
const UA = { "user-agent": "SemPrep-importer/1.0 (student study tool)" };

const get = async (path) => {
  const r = await fetch(BASE + path, { headers: UA });
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
  return r.text();
};
const text = (html) => html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, "")
  .replace(/<\/(p|div|li|h\d|tr|td|th|br)>/gi, "\n").replace(/<[^>]+>/g, "")
  .replace(/&amp;/g, "&").replace(/&#39;|&rsquo;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ").replace(/&mdash;/g, "—");

// 1. course-code table: code | course | sem | credits | units (+ link)
const table = await get("/course-codes/");
const rows = [...table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((m) => {
  const cells = [...m[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((c) => text(c[1]).trim());
  const href = (m[1].match(/href="\/subjects\/([^/"]+)\/?"/) || [])[1];
  return { cells, slug: href };
}).filter((r) => r.slug && /^\d{2}[A-Z]{3}\d{3}[A-Z]$/.test(r.cells[0]));

// 2. short names (e.g. "DBMS") from the semester pages
const shortBySlug = {};
for (let s = 1; s <= 8; s++) {
  const html = await get(`/semesters/${s}/`).catch(() => "");
  for (const m of html.matchAll(/href="\/subjects\/([^/"]+)\/?"[\s\S]{0,400}?\(([A-Za-z&]{2,6})\)/g)) shortBySlug[m[1]] ??= m[2];
}

// 3. unit titles from each subject page
const out = [];
for (const r of rows) {
  const page = text(await get(`/subjects/${r.slug}/`).catch(() => ""));
  const units = [];
  for (const m of page.matchAll(/Unit\s+(\d)\s+[—–-]\s+([^\n]+)/g)) {
    const t = m[2].trim();
    if (!units[m[1] - 1] && t && !/^unit\b/i.test(t) && !/view full/i.test(t)) units[m[1] - 1] = t;
  }
  out.push([+r.cells[2], r.cells[0], r.cells[1], shortBySlug[r.slug] || "", +r.cells[3] || null, r.slug, units.filter(Boolean)]);
  await new Promise((ok) => setTimeout(ok, 150)); // be polite
}
out.sort((a, b) => a[0] - b[0] || a[2].localeCompare(b[2]));

const header = `/*
 * SRMIST 2021-regulation subject map: semester, course code, name, short
 * name, credits, SRM Helper slug, official unit titles.
 *
 * Imported ${new Date().toISOString().slice(0, 10)} from SRM Helper (https://srmhelper.pro, unofficial
 * student site; robots.txt allows crawling). SRM Helper does NOT host past
 * papers or notes, so papers come from the student (see the Generate page).
 * Re-import with: node tools/import-srm-helper.mjs
 */
window.SEMPREP = window.SEMPREP || { guides: {} };

window.SEMPREP.srm2021 = `;
await writeFile(OUT, header + JSON.stringify(out) + ";\n");
console.log(`Wrote ${out.length} subjects (${out.filter((r) => r[6].length).length} with units) to data/srm-2021.js`);
