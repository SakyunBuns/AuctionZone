import { ItemDAO } from "../DAO/ItemDAO";


/**
 * @class Item
 * 
 * References used:
 * https://www.w3schools.com/js/js_dates.asp
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date
 * 
 */
export class Item {

    add_bid(bid, id_user_sudmit) {
        if (bid != null) {
            ItemDAO.getHigherBid(this.id_item, (data) => {
                if (data != null && bid > data.price) {
                    ItemDAO.addBid(this.id_item, bid, id_user_sudmit, (data) => {
                        if (data != null) {
                            return price;
                        }
                    });
                }
            });
        }
    }

    static refresh(dataItem) {
        if (dataItem.id != null) {
            ItemDAO.getHigherBid(dataItem.id, (dataBid) => {
                let new_item = {
                    "id_item": dataItem.id_item,
                    "name": dataItem.name,
                    "description": dataItem.description,
                    "status": dataItem.status,
                    "price": dataBid.amount,
                    "id_seller": dataItem.id_seller,
                    "auction_on": dataItem.auction_on,
                    "room_id": dataItem.room_id,
                    "images": dataItem.images,
                    "time_remaining": get_time_left(dataItem.auction_on) 
                };
                return new_item;
            });
        };
    }
}

function get_time_left(start_time) {
    let current_time = Date.now();
    let close_time = new Date(start_time).getTime();
    console.log(close_time);
    close_time +=  new Date(0, 0, 0, 0, 15).getMinutes() * 60 * 1000; // Pour avoir la valeur de 15 minutes en millisecondes
    
    console.log(close_time + " " + current_time);
    console.log((close_time - current_time)/1000 );
    return (close_time - current_time) / 1000;
}