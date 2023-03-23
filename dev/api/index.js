const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('/etc/ssl/private/myapp.key'),
  cert: fs.readFileSync('/etc/ssl/certs/myapp.crt')
};

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

https.createServer(options, app).listen(443);