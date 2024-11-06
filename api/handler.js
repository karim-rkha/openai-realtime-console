export default function handler(req, res) {
    // Check if this is the verification request from Vercel
    const verificationToken = '84e391d43aa038d3a5d205d692a8798e95381721';
  
    if (req.headers['x-vercel-verify'] === verificationToken) {
      // Respond with the verification header for Vercel's verification
      res.setHeader('x-vercel-verify', verificationToken);
      res.status(200).end();  // End the response with status 200 and no body
      return;
    }
  
    // If it's a normal POST request for logging
    if (req.method === 'POST') {
      const { userInput, aiResponse } = req.body;
  
      // Log data to Vercel's logs
      console.log("User Input:", userInput);
      console.log("AI Response:", aiResponse);
  
      res.status(200).json({ message: "Data logged successfully" });
    } else {
      // Respond with 405 if the method is not allowed
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }  