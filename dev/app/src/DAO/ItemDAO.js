// Nom du fichier: ItemDAO.js
// Contexte de ce fichier: Ce fichier fait le lien entre le front-end et le back-end pour toutes les
//                         requêtes concernant les items
// Auteur : Nathaelle Fournier
// Autre auteurs: Quoc Huan Tran
// Date : Hiver 2023

export class ItemDAO {
    static createItem = ({ name, description, status, price, id_seller, auction_on, room_id }, callback) => {
        fetch('http://127.0.0.1:3000/item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": name, "description": description, "status": status, "bid_count": 0, "price": price, "id_seller": id_seller, "auction_on": auction_on, "room_id": room_id })
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

    static addTagItem = ({ id_item, id_tag }, callback) => {
        fetch('http://127.0.0.1:3000/itemTag', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id_item": id_item, "id_tag": id_tag })
        })
            .then(response => response.json())
            .then(data => {
                if (data != null && callback != null) {
                    callback(data)
                }
            })
            .catch(error => {
                console.error(error); // log any errors that occur during the request
            });
    }

    static addImageItem = ({ id_item, image }, callback) => {
        if (id_item != null && image != null && callback != null) {
            fetch('http://127.0.0.1:3000/itemImage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "id_item": id_item, "image": image })
            })
                .then(response => response.json())
                .then(data => {
                    if (data != null && callback != null) {
                        callback(data)
                    }
                }
                )
        }
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


    static getItemsByKeyword = (keyword, callback) => {
        if (keyword != null && keyword != "" && callback != null) {
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

    static getItemsByKeyTag = (tag, callback) => {
        if (tag != null && callback != null) {
            fetch('http://127.0.0.1:3000/items_tag/' + tag, {
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

    static getFavoriteTags = (callback) => {
        fetch('http://127.0.0.7:3000/favoriteTags', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                if (data != null && callback != null) {
                    callback(data)
                }
            }
            )
            .catch(error => {
                console.error(error); // log any errors that occur during the request
            }
            );
        }

}