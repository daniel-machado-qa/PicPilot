export default function handler(req, res) {
  const { name = "mundo" } = req.query;
  res.status(200).json({
    ok: true,
    message: `Olá, ${name}!`,
    now: new Date().toISOString(),
  });
}