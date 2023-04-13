const http = require('http');
const db = require('./queries');
const express = require('express');
const app = express();


app.get('/users', function(req, res) {
  db.getUsers(req, res);
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUser);
app.get('/users/:username', db.userNameExist);

app.post('/users', db.createUser);

app.put('/users/:id', db.updateUser);

// Server listening on port 3000
http.createServer(app).listen(3000);
