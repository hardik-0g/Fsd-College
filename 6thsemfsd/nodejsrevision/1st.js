//create a node server that listen port 3000 and print hello node

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello Node');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
