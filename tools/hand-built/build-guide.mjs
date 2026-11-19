// Usage (from the semprep folder): node tools/hand-built/build-guide.mjs <fla|dm> [--save]
// The *-data.mjs files hold every Part B/C question read by hand from the papers on THE HELPER;
// *-content.mjs holds the written guide. Run with --save while the SemPrep server is running.
// Counts the hand-read questions with the app's own tally(), merges them with the
// hand-written content through the app's own normalize(), checks the result, and
// (with --save) stores it through the running local server so it shows in My Guides.
import { writeFileSync } from "node:fs";

const HERE = new URL(".", import.meta.url).href;
const APP = new URL("../../lib/gen.js", import.meta.url).href;
const key = process.argv[2];
const save = process.argv.includes("--save");
await import(APP);
const G = globalThis.SEMPREP_GEN;

const data = await import(HERE + `${key}-data.mjs`);
const { raw } = await import(HERE + `${key}-content.mjs`);
const { SUBJECT, asExtraction, LABELS } = data;

const tally = G.tally(asExtraction(), LABELS);
const input = {
  subject: SUBJECT.subject, course: "SRMIST — B.Tech (2021 Regulation)", courseId: "srmist-2021",
  institution: "SRM Institute of Science and Technology", year: SUBJECT.year, sem: SUBJECT.sem,
  units: SUBJECT.units, tally, papers: tally.read.map((label) => ({ label })),
  _model: "claude-sonnet-5-5 (papers read by hand)"
};
const guide = G.normalize(raw, input);
guide.meta.key = SUBJECT.key; guide.meta.custom = false;
guide.helper = { ...SUBJECT.helper, used: LABELS };

// ---- checks ----
const problems = [];
const N = guide.papers.length;
if (N !== LABELS.length) problems.push(`papers counted ${N} of ${LABELS.length}`);
if (tally.unread.length) problems.push("unread papers: " + tally.unread.join(", "));
const uncounted = guide.top.filter((t) => !t.counted);
if (uncounted.length) problems.push("top items not linked to the table: " + uncounted.map((t) => t.q.slice(0, 40)).join(" | "));
if (guide.units.length !== 5) problems.push("units: " + guide.units.length);
for (const u of guide.units) if (u.topics.length < 4) problems.push(`unit ${u.n} has ${u.topics.length} topics`);
if (guide.format.length !== 3) problems.push("format parts: " + guide.format.length);
if (guide.callouts.length !== 2) problems.push("callouts: " + guide.callouts.length);
if (guide.predict.rows.length < 10) problems.push("predictions: " + guide.predict.rows.length);
if (guide.formulas.length < 5) problems.push("formulas: " + guide.formulas.length);
for (const k of ["must", "ifTime", "mcq"]) if (guide.revision[k].length < 8) problems.push(`revision.${k}: ${guide.revision[k].length}`);
// every paper must appear in at least one topic (sanity on the data)
for (const l of LABELS) if (!guide.repeats.some((t) => t.papers.includes(l))) problems.push("paper has no topics: " + l);
// no duplicate top items
const seenTop = new Set(); for (const t of guide.top) { const k = t.q.toLowerCase(); if (seenTop.has(k)) problems.push("duplicate top: " + t.q.slice(0, 40)); seenTop.add(k); }

console.log(`${guide.name}: ${N} papers, ${guide.repeats.length} topics, ${guide.top.length} top items, ${guide.generated.method}`);
console.log(guide.top.map((t) => `  ${t.freq}/${N}  U${t.unit}  ${t.q.slice(0, 80)}`).join("\n"));
console.log(problems.length ? "PROBLEMS:\n  - " + problems.join("\n  - ") : "checks: all passed");
writeFileSync(new URL(`${key}-guide.json`, HERE), JSON.stringify(guide));
if (problems.length) process.exit(1);

if (save) {
  const base = "http://127.0.0.1:5178/store/";
  const put = async (k, v) => { const r = await fetch(base + encodeURIComponent(k), { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(v) }); if (!r.ok) throw new Error(`PUT ${k}: ${r.status}`); };
  const disk = await (await fetch("http://127.0.0.1:5178/store")).json();
  const entry = { id: SUBJECT.id, code: guide.code, name: guide.name, year: guide.meta.year, sem: guide.meta.sem, courseId: guide.meta.courseId, course: guide.meta.course, at: guide.generated.at, basis: guide.basis };
  const index = [entry, ...(disk["guides-index"] || []).filter((g) => g.id !== SUBJECT.id)];
  await put("guide:" + SUBJECT.id, guide);
  await put("guides-index", index);
  console.log(`saved guide:${SUBJECT.id} (${Math.round(JSON.stringify(guide).length / 1024)} KB) and updated guides-index (${index.length} guides)`);
}
