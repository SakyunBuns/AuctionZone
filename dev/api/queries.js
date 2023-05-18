// Nom du fichier: queries.js
// Contexte de ce fichier: Ce fichier regroupent les différentes requêtes 
//                         SQL associées qui sont appelées dans le fichier index.js.
// Auteur : Nathaelle Fournier
// Autre auteurs: Quoc Huan Tran
// Date : Hiver 2023


const { Client } = require('pg');

const client = new Client({
    user: 'nath',
    host: 'localhost',
    database: 'AuctionZone',
    password: 'AAAaaa111',
    port: 5432,
});
client.connect();


/////////////////////////////////////////////////////////////////////////////////////
// Requetes pour la table users

const getUser = (request, response) => {
    const userId = parseInt(request.params.id);
    // const username = parseArgs(request.params.username);

    client.query('SELECT * FROM users WHERE id = $1', [userId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const userNameExist = (request, response) => {

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

const addUserTag = (request, response) => {
    const { id_user, id_tag } = request.body
    client.query('INSERT INTO favorite_tag_list VALUES ($1, $2) RETURNING *', [id_user, id_tag], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getFavoriteTagsByUser = (request, response) => {
    const userId = parseInt(request.params.id);
    client.query('SELECT id_tag, COUNT(id_tag) FROM favorite_tag_list WHERE id_user = $1 GROUP BY id_tag', [userId], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
        response.status(200).json(results.rows);
    })
}

/////////////////////////////////////////////////////////////////////////////////////
// Requete pour la table items

const getItems = (request, response) => {
    client.query('SELECT * FROM items ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getItem = (request, response) => {
    const itemId = parseInt(request.params.id);
    client.query('SELECT * FROM items WHERE id = $1 LIMIT 1', [itemId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getItemWithinTime = (request, response) => {
    client.query('SELECT *,( items.auction_on - CURRENT_TIMESTAMP) AS "time_idx"' +
        ' FROM items WHERE ( items.auction_on - CURRENT_TIMESTAMP) >= INTERVAL \'0 SECONDS\' ' +
        'ORDER BY "time_idx" ASC LIMIT 1;', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows);
        })
}

const getItemsByKeyword = (request, response) => {
    const keyword = request.params.keyword;
    client.query('SELECT * FROM items WHERE LOWER(name) LIKE \'%\' || LOWER($1) || \'%\' OR LOWER(description) LIKE \'%\' || LOWER($1) || \'%\'', [keyword], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getItemsByTag = (request, response) => {
    const category = request.params.tag;
    client.query('SELECT * FROM items INNER JOIN tag_list ON tag_list.id_item = items.id WHERE tag_list.id_tag = $1::tag', [category], (error, results) => {
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
        response.status(200).json(results.rows);
    })

    if (images != null) {
        for (image in images) {

            client.query('INSERT INTO pictures_list VALUES ($1, $2) RETURNING *', [id_seller, image], (error, results) => {
                if (error) {
                    throw error
                }
                response.status(201).send(`Item added with ID: ${results.rows[0].id}`)
            })
        }
    }
}

const addItemTag = (request, response) => {
    const { id_item, id_tag } = request.body
    client.query('INSERT INTO tag_list VALUES ($1, $2) RETURNING *', [id_item, id_tag], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const addItemImage = (request, response) => {
    const { id_item, image } = request.body
    client.query('INSERT INTO list_pictures VALUES ($1, $2) RETURNING *', [id_item, image], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}



/////////////////////////////////////////////////////////////////////////////////////
// Requete relie a la table bids

const getBid = (request, response) => {

    const itemId = parseInt(request.params.id);
    client.query('SELECT * FROM bids WHERE id_item = $1 ORDER BY amount DESC', [itemId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const createBid = (request, response) => {
    let { id_item, id_user, amount } = request.body
    client.query('INSERT INTO bids VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *', [id_item, id_user, amount], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

//////////////////////////////////////////////////////////////////////////////////////
// Requetes reliees au tags

const getFavoriteTags = (request, response) => {
    client.query('SELECT id_tag as "TAG", COUNT(id_tag) as "NbTime" FROM favorite_tag_list GROUP BY id_tag;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}


/////////////////////////////////////////////////////////////////////////////////////
// Exportation des fonctions

module.exports = {
    getUser,
    getUsers,
    updateUser,
    createUser,
    userNameExist,
    userEmailExist,
    addUserTag,

    getItems,
    getItem,
    getItemWithinTime,
    getItemsByKeyword,
    getItemsByTag,
    createItem,
    addItemTag,
    addItemImage,
    getFavoriteTagsByUser,

    getBid,
    createBid,

    getFavoriteTags
}

/*https://www.postgresql.org/docs/current/datatype-datetime.html#DATATYPE-INTERVAL-INPUT
//https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
*/