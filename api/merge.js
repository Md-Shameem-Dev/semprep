// POST /api/merge — step 1b: unify the topic names that separate paper batches
// came up with. Text only (no PDFs), so it is quick and cheap.
// Body: { subject, batches: [rawExtract, ...] } -> { raw, model }
import "../lib/gen.js";

const G = globalThis.SEMPREP_GEN;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const key = process.env.GEMINI_API_KEY;
  if (!key) return res.status(503).json({ error: "no-server-key", message: "This server has no GEMINI_API_KEY set. Add your own key in Settings." });
  const code = process.env.SEMPREP_ACCESS_CODE;
  if (code && req.headers["x-access-code"] !== code) return res.status(401).json({ error: "access-code", message: "Wrong or missing access code (Settings)." });

  const input = typeof req.body === "string" ? safeJson(req.body) : req.body;
  if (!input || !input.subject || !input.subject.name || !Array.isArray(input.batches)) return res.status(400).json({ error: "bad-input", message: "subject and batches are required" });

  try {
    const models = (process.env.GEMINI_MODELS || "").split(",").map((s) => s.trim()).filter(Boolean);
    const { raw, model } = await G.callGemini(key, G.buildMergeRequest(input, input.batches), models);
    return res.status(200).json({ raw, model });
  } catch (e) {
    return res.status(e.status === 429 ? 429 : 502).json({ error: "gemini", message: e.message });
  }
}

function safeJson(s) { try { return JSON.parse(s); } catch { return null; } }
