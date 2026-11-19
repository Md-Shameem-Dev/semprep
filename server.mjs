// Local dev server: serves the static app and runs the /api routes exactly
// as Vercel would. No dependencies. Usage: node server.mjs  (PORT=5178)
// The Gemini key comes from, in order: the GEMINI_API_KEY environment variable,
// .env.local next to this file, or ~/.semprep/env (written by Settings → Save,
// outside OneDrive so the key isn't synced to the cloud). Never committed.
import http from "node:http";
import { readFile, stat, writeFile, rename, mkdir } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const ROOT = dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 5178;
// Loopback only by default: the server can spend your Gemini key, so other
// devices on the network must not reach it. For your phone on the same Wi-Fi:
//   HOST=0.0.0.0  (and set SEMPREP_ACCESS_CODE in .env.local)
const HOST = process.env.HOST || "127.0.0.1";

const KEY_FILE = process.env.SEMPREP_KEY_FILE || join(homedir(), ".semprep", "env");
// minimal env-file loader (first value found wins)
for (const envFile of [join(ROOT, ".env.local"), KEY_FILE]) {
  if (!existsSync(envFile)) continue;
  for (const line of readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const routes = {
  "/api/generate": (await import("./api/generate.js")).default,
  "/api/status": (await import("./api/status.js")).default,
  "/api/helper": (await import("./api/helper.js")).default,
  "/api/extract": (await import("./api/extract.js")).default,
  "/api/merge": (await import("./api/merge.js")).default
};

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".txt": "text/plain; charset=utf-8", ".webmanifest": "application/manifest+json; charset=utf-8" };

/* ---------- saved/: your guides, progress and dates survive browser resets ---------- */
// The app mirrors its localStorage here (never the API key or access code).
// Vercel has no such routes; there the app simply keeps using the browser.
const SAVED = process.env.SEMPREP_SAVED_DIR || join(ROOT, "saved"), STORE_FILE = join(SAVED, "store.json");
let store = {};
try { store = JSON.parse(readFileSync(STORE_FILE, "utf8")); } catch { /* first run */ }
let writing = Promise.resolve();
const persist = () => (writing = writing.then(async () => {
  await mkdir(SAVED, { recursive: true });
  await writeFile(STORE_FILE + ".tmp", JSON.stringify(store));
  await rename(STORE_FILE + ".tmp", STORE_FILE); // atomic: a crash can't leave half a file
}).catch((e) => console.error("could not save:", e.message)));
const NEVER_STORE = /^(ai:key|ai:code|theme)$/;

async function handleStore(req, res, url) {
  let key = "";
  try { key = decodeURIComponent(url.pathname.slice("/store/".length)); } catch { /* bad escape */ }
  res.setHeader("content-type", "application/json");
  if (req.method === "GET" && url.pathname === "/store") return res.end(JSON.stringify(store));
  if (!/^[a-z0-9:_.\-]{1,120}$/i.test(key) || NEVER_STORE.test(key)) { res.statusCode = 400; return res.end('{"error":"bad key"}'); }
  if (req.method === "DELETE") { delete store[key]; await persist(); return res.end('{"ok":true}'); }
  if (req.method === "PUT") {
    let body = "", size = 0;
    for await (const chunk of req) { size += chunk.length; if (size > 6e6) { res.statusCode = 413; return res.end('{"error":"too large"}'); } body += chunk; }
    try { store[key] = JSON.parse(body); } catch { res.statusCode = 400; return res.end('{"error":"bad json"}'); }
    await persist();
    return res.end('{"ok":true}');
  }
  res.statusCode = 405; res.end('{"error":"method"}');
}

/* ---------- /admin/key: save the Gemini key on this computer ---------- */
// Only same-origin requests from this machine, with a custom header (which a
// web page on another site cannot send without our permission).
async function handleKey(req, res) {
  res.setHeader("content-type", "application/json");
  let sameOrigin = true;
  if (req.headers.origin) { try { sameOrigin = new URL(req.headers.origin).host === req.headers.host; } catch { sameOrigin = false; } }
  const local = ["127.0.0.1", "::1", "::ffff:127.0.0.1"].includes(req.socket.remoteAddress);
  if (!sameOrigin || !local || req.headers["x-semprep"] !== "1") { res.statusCode = 403; return res.end('{"error":"not allowed"}'); }
  const keep = existsSync(KEY_FILE) ? readFileSync(KEY_FILE, "utf8").split(/\r?\n/).filter((l) => l.trim() && !/^\s*GEMINI_API_KEY\s*=/.test(l)) : [];
  const write = async (lines) => { await mkdir(dirname(KEY_FILE), { recursive: true }); await writeFile(KEY_FILE, lines.join("\n") + (lines.length ? "\n" : ""), { mode: 0o600 }); };
  if (req.method === "DELETE") { await write(keep); delete process.env.GEMINI_API_KEY; return res.end('{"ok":true}'); }
  if (req.method === "PUT") {
    let body = ""; for await (const chunk of req) { body += chunk; if (body.length > 4096) { res.statusCode = 413; return res.end('{"error":"too large"}'); } }
    let key = ""; try { key = String(JSON.parse(body).key || "").trim(); } catch { /* handled below */ }
    if (!/^AIza[0-9A-Za-z_\-]{30,60}$/.test(key)) { res.statusCode = 400; return res.end('{"error":"not a Gemini key"}'); }
    await write([...keep, `GEMINI_API_KEY=${key}`]);
    process.env.GEMINI_API_KEY = key;
    return res.end('{"ok":true}');
  }
  res.statusCode = 405; res.end('{"error":"method"}');
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (url.pathname === "/admin/key") {
    try { return await handleKey(req, res); } catch (e) { res.statusCode = 500; return res.end(JSON.stringify({ error: e.message })); }
  }
  if (url.pathname === "/store" || url.pathname.startsWith("/store/")) {
    try { return await handleStore(req, res, url); } catch (e) { res.statusCode = 500; return res.end(JSON.stringify({ error: e.message })); }
  }
  const api = routes[url.pathname];
  if (api) {
    let body = "";
    for await (const chunk of req) body += chunk;
    try { req.body = body ? JSON.parse(body) : undefined; } catch { req.body = undefined; }
    res.status = (c) => { res.statusCode = c; return res; };
    res.json = (o) => { res.setHeader("content-type", "application/json"); res.end(JSON.stringify(o)); };
    try { await api(req, res); } catch (e) { res.statusCode = 500; res.end(JSON.stringify({ error: "server", message: e.message })); }
    return;
  }
  // static files; never serve dotfiles (.env.local)
  let path = normalize(decodeURIComponent(url.pathname)).replace(/^([/\\])+/, "");
  if (!path || path.endsWith("/") || path.endsWith("\\")) path += "index.html";
  if (path.split(/[/\\]/).some((seg) => seg.startsWith(".") || seg === ".." || seg === "saved")) { res.statusCode = 404; return res.end("Not found"); }
  const file = join(ROOT, path);
  try {
    if (!(await stat(file)).isFile()) throw 0;
    res.setHeader("content-type", TYPES[extname(file)] || "application/octet-stream");
    res.setHeader("cache-control", "no-cache"); // always check for the newest app files; the service worker handles offline
    res.end(await readFile(file));
  } catch { res.statusCode = 404; res.end("Not found"); }
}).listen(PORT, HOST, () => console.log(`SemPrep running at http://localhost:${PORT}${HOST === "127.0.0.1" ? "" : `  (listening on ${HOST})`}  (server key: ${process.env.GEMINI_API_KEY ? "yes" : "no — add one in .env.local or in the app's Settings"}; ${Object.keys(store).length} saved items)`));
