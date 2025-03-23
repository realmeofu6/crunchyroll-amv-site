export default async function handler(req, res) {
  console.log("Fetching anime clips...");
  
  res.status(200).json({
    status: "success",
    message: "Fetched top 10 anime clips",
    clips: [
      { anime: "One Piece", video: "https://fake-video-url.com/onepiece.mp4" },
      { anime: "Attack on Titan", video: "https://fake-video-url.com/aot.mp4" },
      { anime: "Demon Slayer", video: "https://fake-video-url.com/demonslayer.mp4" },
    ],
  });
}
