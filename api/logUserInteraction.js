export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { userInput, aiResponse } = req.body;
  
      // Log user data - these logs will show up in your Vercel dashboard under "Functions"
      console.log("User Input:", userInput);
      console.log("AI Response:", aiResponse);
  
      res.status(200).json({ message: "Data logged successfully" });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
  