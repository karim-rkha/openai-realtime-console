export default function handler(req, res) {
    // Extract the required verification header from the request
    const verificationHeader = req.headers['x-vercel-verify'];
  
    // Check if the request includes the correct verification header
    if (verificationHeader === '84e391d43aa038d3a5d205d692a8798e95381721') {
      res.setHeader('x-vercel-verify', verificationHeader); // Include the header in the response
      res.status(200).send('Verification successful');
    } else {
      res.status(400).send('Verification failed');
    }
  }
  