export class ItemDAO {
    static create_item = ({ name, description, status, bid_count, price, id_seller, auction_on, room_id, images }, callback) => {
        let lstImages = images[0].props.src;
        console.log(lstImages);
        fetch('http://127.0.0.1:3000/item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": name, "description": description, "status": status, "bid_count": bid_count, "price": price, "id_seller": id_seller, "auction_on": auction_on, "room_id": room_id, "images": lstImages })
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

    static get_item = (id_item, callback) => {
        if (id_item != null && callback != null) {
            fetch('http://127.0.0.1:3000/item/' + id_item, {
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
}