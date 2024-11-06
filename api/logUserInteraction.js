export default async function handler(req, res) {
    const verificationToken = '84e391d43aa038d3a5d205d692a8798e95381721';
    if (req.method === 'POST') {
      const { userInput, aiResponse } = req.body;
  
      // Log user data - these logs will show up in your Vercel dashboard under "Functions"
      console.log("User Input:", userInput);
      console.log("AI Response:", aiResponse);
      res.setHeader('x-vercel-verify', verificationToken);
  
      res.status(200).json({ message: "Data logged successfully" });
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
  