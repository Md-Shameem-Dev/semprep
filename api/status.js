// GET /api/status — tells the browser whether server-side generation is available.
export default function handler(req, res) {
  res.status(200).json({
    serverKey: Boolean(process.env.GEMINI_API_KEY),
    accessCode: Boolean(process.env.SEMPREP_ACCESS_CODE)
  });
}
