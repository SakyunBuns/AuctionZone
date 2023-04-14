const { Client } = require('pg');
const http = require('http');
const { parse } = require('pg-protocol');
const { parseArgs } = require('util');

const client = new Client({
    user: 'nath',
    host: 'localhost',
    database: 'AuctionZone',
    password: 'AAAaaa111',
    port: 5432,
});
client.connect();

const getUser = (request, response) => {
    const userId = parseInt(request.params.id);
    // const username = parseArgs(request.params.username);
    console.log(request.params);
    client.query('SELECT * FROM users WHERE id = $1', [userId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const userNameExist = (request, response) => {
    console.log(request.params);
    const username = request.params.username;
    client.query('SELECT * FROM users WHERE username = $1', [username], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const userEmailExist = (request, response) => {
    const email = request.params.email;
    client.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const getUsers = (request, response) => {
    client.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
    response.status(200).json(results.rows);
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body
  
    client.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { password, profilePicture } = request.body
    if (password != "") {
        client.query(
            'UPDATE users SET password = $1 WHERE id = $2',
            [password, id],
            (error, results) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`User modified with ID: ${id}`)
            }
        )
    } else {
        client.query(
            'UPDATE users SET profile_picture = $1 WHERE id = $2',
            [profilePicture, id],
            (error, results) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`User modified with ID: ${id}`)
            }
        )

    }
}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    createUser,
    userNameExist,
    userEmailExist
}

//https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/