/*
 * SemPrep service worker — makes the app open and work with no internet and
 * even with the local server switched off.
 *
 *  - App files (page, scripts, styles, subject lists, icons): network first,
 *    so you always get the newest version when online; the saved copy is used
 *    when offline. (Bump VERSION to drop old copies.)
 *  - THE HELPER file lists (/api/helper?sem=...): network first, saved copy
 *    offline, so a subject's papers/notes list still shows.
 *  - Fonts: saved after first use.
 *  - Never touched: /api/generate, /api/extract, /api/merge, /store, /admin
 *    and downloaded PDFs. Your guides are not stored here; they live in the
 *    page's own storage (and saved/store.json on this computer).
 */
const VERSION = "semprep-v2";
const SHELL = [
  "./", "index.html", "styles.css", "app.js", "lib/gen.js", "manifest.webmanifest",
  "data/srm-2021.js", "data/helper-subjects.js", "data/catalog.js", "data/guides/srm-21csc204j.js",
  "data/guides/gen-21csc301t.js", "data/guides/gen-discrete-mathematics.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    // one missing file must not stop the install
    await Promise.allSettled(SHELL.map((u) => cache.add(new Request(u, { cache: "reload" }))));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION) await caches.delete(k);
    await self.clients.claim();
  })());
});

const BYPASS = /^\/(store|admin|api\/(generate|extract|merge|status))(\/|$|\?)/;

async function networkFirst(req, { navigation = false } = {}) {
  const cache = await caches.open(VERSION);
  try {
    const res = await Promise.race([
      fetch(req),
      new Promise((_, rej) => setTimeout(() => rej(new Error("slow")), 4000))
    ]);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch {
    const hit = await cache.match(req, { ignoreSearch: !req.url.includes("/api/") });
    if (hit) return hit;
    if (navigation) { const shell = await cache.match("index.html"); if (shell) return shell; }
    return new Response("Offline and not saved yet.", { status: 503, headers: { "content-type": "text/plain" } });
  }
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(req);
  const refresh = fetch(req).then((res) => { if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone()); return res; }).catch(() => null);
  return hit || (await refresh) || new Response("", { status: 504 });
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    if (BYPASS.test(url.pathname + url.search)) return;
    if (url.pathname === "/api/helper") {
      if (url.searchParams.has("file")) return; // PDFs: never stored here
      e.respondWith(networkFirst(req));
      return;
    }
    e.respondWith(networkFirst(req, { navigation: req.mode === "navigate" }));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(staleWhileRevalidate(req));
  }
});
