export default function handler(req, res) {
    // Set the required verification header directly in the response
    res.setHeader('x-vercel-verify', '84e391d43aa038d3a5d205d692a8798e95381721');
    // Send a 200 OK status
    res.status(200).end();
  }
  