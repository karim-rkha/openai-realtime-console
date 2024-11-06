export default function handler(req, res) {
    // Set the verification header received from Vercel
    const requiredHeader = "84e391d43aa038d3a5d205d692a8798e95381721"; // Replace with your exact verification token
  
    // Check if the incoming request has the correct header
    if (req.headers['x-vercel-verify'] === requiredHeader) {
      res.setHeader('x-vercel-verify', requiredHeader); // Return the verification header
      res.status(200).send('Verification successful'); // Respond with a 200 status code
    } else {
      res.status(400).send('Verification failed'); // Return a 400 error if the header doesn’t match
    }
  }
  