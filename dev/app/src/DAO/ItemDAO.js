export class ItemDAO {

        console.log(images);
        fetch('http://127.0.0.1:3000/item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
          
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
                    if (data != null) {
                        callback(data[0])
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