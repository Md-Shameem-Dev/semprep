// POST /api/extract — step 1 of a paper-based guide: Gemini reads every past
// paper and returns its questions as structured data. Counting happens in
// the browser (SEMPREP_GEN.tally), so frequencies are exact and checkable.
// Body: { subject, units, papers: [{label, text?|mime+data?}], remote: [{label, url}] }
import "../lib/gen.js";
import { pullRemote } from "../lib/thehelper.js";

const G = globalThis.SEMPREP_GEN;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const key = process.env.GEMINI_API_KEY;
  if (!key) return res.status(503).json({ error: "no-server-key", message: "This server has no GEMINI_API_KEY set. Add your own key in Settings." });
  const code = process.env.SEMPREP_ACCESS_CODE;
  if (code && req.headers["x-access-code"] !== code) return res.status(401).json({ error: "access-code", message: "Wrong or missing access code (Settings)." });

  const input = typeof req.body === "string" ? safeJson(req.body) : req.body;
  if (!input || !input.subject || !input.subject.name) return res.status(400).json({ error: "bad-input", message: "subject.name is required" });

  try {
    const pulled = await pullRemote(input.remote);
    input.papers = [...(input.papers || []), ...pulled];
    if (!input.papers.length) return res.status(400).json({ error: "bad-input", message: "No papers could be downloaded" });
    const body = G.buildExtractRequest(input);
    const models = (process.env.GEMINI_MODELS || "").split(",").map((s) => s.trim()).filter(Boolean);
    const { raw, model } = await G.callGemini(key, body, models);
    const sent = input.papers.map((p) => p.label).filter((l) => !body.skipped.includes(l));
    return res.status(200).json({ raw, model, papers: sent, skipped: body.skipped });
  } catch (e) {
    return res.status(e.status === 429 ? 429 : 502).json({ error: "gemini", message: e.message });
  }
}

function safeJson(s) { try { return JSON.parse(s); } catch { return null; } }
