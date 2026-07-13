const http = require('http');
const VERSION = 'v1.0';
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body style="font-family:sans-serif;text-align:center;padding:50px">
        <h1>Watchtower Auto-Deploy Demo</h1>
        <h2 style="color:green">Version: ${VERSION}</h2>
        <p>Deployed at: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`App ${VERSION} running on port ${PORT}`);
});