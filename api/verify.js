export default function handler(req, res) {
    // The verification token required by Vercel
    const verificationToken = "84e391d43aa038d3a5d205d692a8798e95381721";
  
    // Check if the request header matches the verification token
    if (req.headers['x-vercel-verify'] === verificationToken) {
      // Set the required verification header in the response
      res.setHeader('x-vercel-verify', verificationToken);
      // Respond with a 200 status code
      res.status(200).send('Verification successful');
    } else {
      // If the header doesn't match, respond with 400 status code
      res.status(400).send('Verification failed');
    }
  }
  