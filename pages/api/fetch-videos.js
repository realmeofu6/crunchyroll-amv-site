export default function handler(req, res) {
  const user = req.query.user;
  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Fetch videos from GitHub (replace with Crunchyroll API later)
  res.status(200).json({
    clips: ["https://video-link-1.mp4", "https://video-link-2.mp4"]
  });
}
