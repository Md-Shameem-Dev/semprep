// GET /api/helper?sem=4&subject=Design%20And%20Analysis%20Of%20Algorithms
//   -> { subject, sem, page, items: [{ name, kind, folder, ext, url }] }
// GET /api/helper?file=https://files.thehelpers.tech/...
//   -> the file itself (so the browser can read it; THE HELPER's file host
//      sends no CORS headers). Only files.thehelpers.tech is allowed.
import { subjectMaterials, downloadFile } from "../lib/thehelper.js";

export default async function handler(req, res) {
  const q = new URL(req.url, "http://x").searchParams;
  try {
    if (q.get("file")) {
      const { buf, mime } = await downloadFile(q.get("file"), 4 * 1024 * 1024); // Vercel response cap ~4.5 MB
      res.setHeader("content-type", mime);
      res.setHeader("cache-control", "public, max-age=86400");
      res.statusCode = 200;
      return res.end(buf);
    }
    const sem = Number(q.get("sem")), subject = (q.get("subject") || "").trim();
    if (!sem || !subject) return res.status(400).json({ error: "bad-input", message: "sem and subject are required" });
    const data = await subjectMaterials(sem, subject);
    res.setHeader("cache-control", "public, s-maxage=21600"); // CDN only; browsers always ask (the service worker keeps the offline copy)
    return res.status(200).json(data);
  } catch (e) {
    return res.status(e.status && e.status < 600 ? e.status : 502).json({ error: "helper", message: e.message });
  }
}
