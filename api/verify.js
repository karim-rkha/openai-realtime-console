export default function handler(req, res) {
    // Set headers exactly as expected by Vercel
    res.setHeader('Content-Length', '0');
    res.setHeader('x-vercel-verify', '84e391d43aa038d3a5d205d692a8798e95381721');
    
    // Respond with a 200 status code
    res.status(200).end();
  }
  