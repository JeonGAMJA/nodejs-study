const http = require('http');
const port = 4000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Hello, world');
});

server.listen(port, () => {
  console.log('Listening on port ${port}');
});
