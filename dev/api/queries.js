const { Client } = require('pg');

const client = new Client({
    user: 'nath',
    host: 'localhost',
    database: 'AuctionZone',
    password: 'AAAaaa111',
    port: 5432,
});
client.connect();

// Requetes pour la table users

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
    console.log(request.body);
    let { username, name, lastname, email, password, profilePicture, dob } = request.body

    if (profilePicture != null) {
        client.query('INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7) RETURNING *', [username, name, lastname, email, password, profilePicture, dob], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`User added with ID: ${results.rows[0].id}`)
        })
    }
    else {
        client.query('INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4, $5, null, $6) RETURNING *', [username, name, lastname, email, password, dob], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`User added with ID: ${results.rows[0].id}`)
        })
    }
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


// Requete pour la table items

const getItems = (request, response) => {
    client.query('SELECT * FROM items ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const createItem = (request, response) => {
    let { name, description, current_status, bid_count, price, id_seller, auction_on, room_id, images } = request.body
    console.log(name + " " + description + " " + current_status + " " + bid_count + " " + price + " " + id_seller + " " + auction_on + " " + room_id + " " + images);
    client.query('INSERT INTO items VALUES (DEFAULT, $1, $2, DEFAULT, $3, $4, $5, $6, $7) RETURNING *', [name, description, bid_count, price, id_seller, auction_on, room_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
    
    if (images != null) {
        for(image in images){

            client.query('INSERT INTO pictures_list VALUES ($1, $2) RETURNING *', [id_seller, image], (error, results) => {
                if (error) {
                    throw error
                }
                response.status(201).send(`User added with ID: ${results.rows[0].id}`)
            })
        }
    }

}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    createUser,
    userNameExist,
    userEmailExist,

    getItems,
    createItem
}

//https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/