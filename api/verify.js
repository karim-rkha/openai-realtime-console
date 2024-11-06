export default function handler(req, res) {
    // Set only the exact verification header with the exact expected value
    res.setHeader('x-vercel-verify', '84e391d43aa038d3a5d205d692a8798e95381721');
    
    // Set Content-Length explicitly to zero and end the response without any body
    res.writeHead(200, { 'Content-Length': '0' });
    res.end();
  }
  