const { request, response } = require('express');

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'AuctionZone',
    password: 'AAAaaa111',
    port: 5432,
});

const getUser = (request, response) => {
    const userId = parseInt(request.params.id);
    pool.query('SELECT * FROM users WHERE id = 1$', [userId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
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
        pool.query(
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
        pool.query(
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
    createUser
}

//https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/