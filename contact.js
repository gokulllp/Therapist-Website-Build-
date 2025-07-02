export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log("Contact form data:", req.body)
    return res.status(200).json({ message: "Message received!" })
  }
  return res.status(405).json({ message: "Method not allowed" })
}
