const http = require('http');
const port = 4000;
const targetobject = { a: 'a', b: 'b' };
const server = http.createServer((req, res) => {
  if ((req, method === 'POST' && req.url === '/home')) {
    req.on('data', (data) => {
      console.log(data);
      const stringifiedData = data.toString();
      console.log(stringifiedData);
      Object.assign(targetobject, JSON.parse(stringifiedData));
    });
  } else if (req.url === '/home') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify(targetobject));
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
