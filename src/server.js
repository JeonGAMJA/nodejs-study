const http = require('http');
const port = 4000;
const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify({ a: 'a', b: 'b' }));
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>AboutPage</h1>');
    res.write('</body>');
    res.write('</html>');
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
