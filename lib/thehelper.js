// Server-side reader for THE HELPER (https://www.thehelpers.tech), the
// student-run SRMIST site hosting past papers, CT papers, question banks,
// syllabus and notes.
//
// It does what a student does by hand: open the subject page, open the
// reader, and take the public "Download" links (files.thehelpers.tech/...).
// It never decodes the reader tokens. Requests are made only when a student
// asks for a subject, are spaced out, and results are cached, so the load on
// THE HELPER stays at "one student browsing one subject".

const SITE = "https://www.thehelpers.tech";
const FILES = "https://files.thehelpers.tech/";
const UA = { "user-agent": "SemPrep/1.0 (student exam-prep tool; fetches only on user request)" };
const TTL = 6 * 60 * 60 * 1000; // 6 h
const cache = new Map();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getText(url) {
  let r;
  try { r = await fetch(url, { headers: UA, redirect: "follow", signal: AbortSignal.timeout(20000) }); }
  catch (e) { throw Object.assign(new Error(e.name === "TimeoutError" ? "THE HELPER is not responding (timed out)" : `Can't reach THE HELPER: ${e.message}`), { status: 504 }); }
  if (!r.ok) throw Object.assign(new Error(`THE HELPER returned ${r.status} for ${url.replace(SITE, "")}`), { status: r.status });
  return r.text();
}
const uniq = (a) => [...new Set(a)];
const viewerLinks = (html, kind) => uniq([...html.matchAll(new RegExp(`/${kind}-viewer\\?document=[\\w.\\-]+`, "g"))].map((m) => SITE + m[0]));
const fileUrls = (html) => uniq([...html.matchAll(/https:\/\/files\.thehelpers\.tech\/[^"'\\\s<>]+/g)].map((m) => m[0]))
  .filter((u) => /^https:\/\/files\.thehelpers\.tech\/Semester%20\d/i.test(u));

// files.thehelpers.tech/Semester%204/<Subject>/<Category>[/<Sub>]/<File>.pdf
function classify(url) {
  const parts = url.replace(FILES, "").split("/").map((p) => { try { return decodeURIComponent(p); } catch { return p; } });
  const file = parts[parts.length - 1];
  const folders = parts.slice(2, -1);
  const where = folders.join(" / ");
  const name = file.replace(/\.[a-z0-9]+$/i, "");
  const ext = (file.match(/\.([a-z0-9]+)$/i) || [])[1]?.toLowerCase() || "";
  const t = `${where} ${name}`.toLowerCase();
  let kind = "notes";
  if (/syllabus/.test(t)) kind = "syllabus";
  // "Important Topics" sheets sit in the PYQs folder but are not question papers
  else if (/question\s*bank|\bqb\b|important/.test(t)) kind = "questionbank";
  else if (/\bct\b|cycle\s*test|ct[\s-]?\d/.test(t)) kind = "ct";
  else if (/pyq|end\s*sem|semester\s*exam|model|(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s*\d{4}/.test(t)) kind = "pyq";
  return { name, kind, folder: where, ext, url };
}

/** All materials for one subject: [{ name, kind, folder, ext, url }] */
export async function subjectMaterials(sem, subject) {
  const key = `${sem}|${subject}`;
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL) return hit.data;

  const pageUrl = `${SITE}/semesters/${encodeURIComponent(sem)}/subjects/${encodeURIComponent(subject)}`;
  const page = await getText(pageUrl);
  const urls = new Set(fileUrls(page));

  // One reader page lists every file in its folder (for prev/next), so open
  // one file reader at top level and one inside each folder.
  const files = viewerLinks(page, "file");
  const folders = viewerLinks(page, "folder");
  if (files[0]) { await sleep(250); fileUrls(await getText(files[0])).forEach((u) => urls.add(u)); }
  // Walk folders (and sub-folders, 2 levels) breadth-first with a hard cap on
  // requests. A reader page doesn't always list its siblings, so open file
  // readers in a folder until we've seen as many files as it holds.
  let budget = 45;
  const seenPages = new Set([pageUrl, files[0]]);
  const queue = folders.map((f) => [f, 0]);
  while (queue.length && budget > 0) {
    const [f, depth] = queue.shift();
    if (seenPages.has(f)) continue;
    seenPages.add(f); budget--;
    await sleep(150);
    const fh = await getText(f).catch(() => "");
    fileUrls(fh).forEach((u) => urls.add(u));
    if (depth < 2) viewerLinks(fh, "folder").forEach((sub) => { if (!seenPages.has(sub)) queue.push([sub, depth + 1]); });
    const inner = viewerLinks(fh, "file").filter((v) => !seenPages.has(v)).slice(0, 12);
    const found = new Set();
    for (const v of inner) {
      if (found.size >= inner.length || budget <= 0) break;
      seenPages.add(v); budget--;
      await sleep(150);
      fileUrls(await getText(v).catch(() => "")).forEach((u) => { urls.add(u); found.add(u); });
    }
  }

  // The subject's files may live under a slightly different folder name
  // (e.g. page "NN and ML(2nd year)" -> folder "Semester 3/NN and ML"), so
  // ignore bracketed parts and accept a prefix match either way.
  const norm = (s) => String(s).toLowerCase().replace(/\(.*?\)/g, "").replace(/&/g, "and").replace(/[^a-z0-9]/g, "");
  const want = norm(subject);
  const sameSubject = (f) => { const n = norm(f); return n && (n === want || n.startsWith(want) || want.startsWith(n)); };
  const subjectFolder = (u) => { try { return decodeURIComponent(u.replace(FILES, "").split("/")[1] || ""); } catch { return ""; } };
  const ORDER = ["pyq", "ct", "questionbank", "syllabus", "notes"];
  const items = [...urls]
    .filter((u) => sameSubject(subjectFolder(u)))
    .map(classify)
    .sort((a, b) => ORDER.indexOf(a.kind) - ORDER.indexOf(b.kind) || a.name.localeCompare(b.name, undefined, { numeric: true }));

  const data = { subject, sem: +sem, page: pageUrl, items, fetchedAt: new Date().toISOString() };
  cache.set(key, { at: Date.now(), data });
  return data;
}

/** Download one file; only THE HELPER's file host is allowed. */
export async function downloadFile(url, maxBytes = 15 * 1024 * 1024) {
  if (!String(url).startsWith(FILES)) throw Object.assign(new Error("Only files.thehelpers.tech links are allowed"), { status: 400 });
  let r;
  try { r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(45000) }); }
  catch (e) { throw Object.assign(new Error(e.name === "TimeoutError" ? "File download timed out" : `File download failed: ${e.message}`), { status: 504 }); }
  if (!r.ok) throw Object.assign(new Error(`File download failed (${r.status})`), { status: 502 });
  const len = Number(r.headers.get("content-length") || 0);
  if (len > maxBytes) throw Object.assign(new Error(`File too large (${(len / 1048576).toFixed(1)} MB)`), { status: 413 });
  const buf = Buffer.from(await r.arrayBuffer());
  if (buf.length > maxBytes) throw Object.assign(new Error("File too large"), { status: 413 });
  const mime = r.headers.get("content-type")?.split(";")[0] || (/\.pdf$/i.test(url) ? "application/pdf" : "application/octet-stream");
  return { buf, mime };
}

/** Download several THE HELPER files in parallel; a file that fails is dropped, not fatal. */
export async function pullRemote(remote) {
  const got = await Promise.all((remote || []).slice(0, 14).map(async (r) => {
    try { const { buf, mime } = await downloadFile(r.url); return { ...r, mime, data: buf.toString("base64") }; }
    catch { return null; }
  }));
  return got.filter(Boolean);
}

export const HELPER_SITE = SITE;
export const HELPER_FILES = FILES;
