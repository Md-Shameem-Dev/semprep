// POST /api/generate — builds a study guide with Gemini using the server's key.
// Env: GEMINI_API_KEY (required), SEMPREP_ACCESS_CODE (optional: if set,
// callers must send it in the x-access-code header, so strangers can't spend
// your free quota), GEMINI_MODELS (optional, comma-separated override).
//
// input.remote = [{ label, url, role: "paper" | "reference", kind }] are files
// on THE HELPER; they're downloaded here and attached for the model.
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
  const remote = (input.remote || []).slice(0, 14);
  if ((input.papers || []).length + remote.length > 16) return res.status(400).json({ error: "bad-input", message: "Too many files for one guide" });

  try {
    // pull THE HELPER files (in parallel, small)
    const pulled = await pullRemote(remote); // a missing file shouldn't sink the whole guide
    input.papers = [...(input.papers || []), ...pulled.filter((p) => p.role === "paper")];
    input.references = [...(input.references || []), ...pulled.filter((p) => p.role !== "paper")];
    delete input.remote;

    const models = (process.env.GEMINI_MODELS || "").split(",").map((s) => s.trim()).filter(Boolean);
    const body = G.buildRequest(input);
    const { raw, model } = await G.callGemini(key, body, models);
    // tell the browser which papers actually made it in, so counts use real labels
    const sent = (l) => !body.skipped.includes(l);
    return res.status(200).json({ raw, model, papers: input.papers.map((p) => p.label).filter(sent), references: input.references.map((p) => p.label).filter(sent), skipped: body.skipped });
  } catch (e) {
    return res.status(e.status === 429 ? 429 : 502).json({ error: "gemini", message: e.message });
  }
}

function safeJson(s) { try { return JSON.parse(s); } catch { return null; } }
