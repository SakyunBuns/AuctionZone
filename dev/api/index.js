const fs = require('fs');
const https = require('https');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const db = require('./queries');

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const options = {
  key: fs.readFileSync('/etc/ssl/private/myapp.key'),
  cert: fs.readFileSync('/etc/ssl/certs/myapp.crt')
};

app.get('/', function(req, res) {
  res.send('Hello');
});

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
});


//updateAvatar & updatePassword
app.put('/api/users/:id', db.updateUser);
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUser);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
//app.delete('/users/:id', db.deleteUser)
https.createServer(options, app).listen(443);
