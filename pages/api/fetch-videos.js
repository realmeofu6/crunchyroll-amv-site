export default async function handler(req, res) {
  const topAnime = ["One Piece", "Attack on Titan", "Demon Slayer", "Jujutsu Kaisen", "Chainsaw Man", "Naruto", "Bleach", "My Hero Academia", "Black Clover", "Vinland Saga"];

  // Simulating fetching clips from Crunchyroll (replace with real API call)
  const clips = topAnime.map((anime) => ({
    anime,
    clips: Array(10).fill(`https://fake-video-url.com/${anime}.mp4`), // Replace with actual video links
  }));

  res.status(200).json({ clips });
}
