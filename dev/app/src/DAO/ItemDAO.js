export class ItemDAO {
    static createItem = ({ name, description, status, price, id_seller, auction_on, room_id, images }, callback) => {
        console.log(images);
        fetch('http://127.0.0.1:3000/item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": name, "description": description, "status": status, "bid_count": 0, "price": price, "id_seller": id_seller, "auction_on": auction_on, "room_id": room_id, "images": images[0] })
        })
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    callback(data)
                }
            })
            .catch(error => {
                console.error(error); // log any errors that occur during the request
            });
    }

    static getItem = (id_item, callback) => {
        if (id_item != null && callback != null) {
            fetch('http://127.0.0.1:3000/item/' + id_item, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    callback(data[0])
                })
                .catch(error => {
                    console.error(error); // log any errors that occur during the request
                });
        }
    }

    static getItemByTime = (callback) => {
        if (callback != null) {
            fetch('http://127.0.0.1:3000/item_time', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    if (data != null) {
                        callback(data)
                    }
                })
                .catch(error => {
                    console.error(error); // log any errors that occur during the request
                }); 
        }
    }

    //TODO - Rendre les keywords non sensible a la case
    static getItemsByKeyword = (keyword, callback) => {
        if (keyword != null && callback != null) {
            fetch('http://127.0.0.1:3000/items_keyword/' + keyword, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    if (data != null) {
                        callback(data)
                    }
                })
                .catch(error => {
                    console.error(error); // log any errors that occur during the request
                });
        }
    }

    static getHigherBid = (id_item, callback) => {
        if (id_item != null && callback != null) {
            let id = parseInt(id_item)
            fetch('http://127.0.0.1:3000/bid/' + id, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    if (data != null) {
                        callback(data)
                    }
                })
                .catch(error => {
                    console.error(error); // log any errors that occur during the request
                });
        }
    }

    static addBid = ({ idItem, idUser, bid }, callback) => {
        fetch('http://127.0.0.1:3000/bid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id_item": idItem, "id_user": idUser, "amount": bid })
        })
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    callback(data)
                }
            })
            .catch(error => {
                console.error(error); // log any errors that occur during the request
            });
    }

}