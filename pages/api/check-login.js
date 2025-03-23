export default function handler(req, res) {
  console.log("Checking user session...");
  
  // Simulate a logged-in user
  res.status(200).json({ user: "test_user" });
}
