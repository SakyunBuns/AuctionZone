var http = require('http');
const db = require('./queries');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  console.log(db.getUsers());
}).listen(8080);