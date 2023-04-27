const http = require('http');
const db = require('./queries');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.get('/items', db.getItems);
app.get('/users', db.getUsers);
app.get('/item/:id', db.getItem);


app.get('/users/:id', db.getUser);
app.get('/user_name/:username', db.userNameExist);
app.get('/user_email/:email', db.userEmailExist);
app.get('/bid/:id', db.getBid);

app.post('/user', db.createUser);
app.post('/item', db.createItem);
app .post('/bid', db.createBid);

app.put('/users/:id', db.updateUser);

// Server listening on port 3000
http.createServer(app).listen(3000);
