import { ItemDAO } from "../DAO/ItemDAO";

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
    let close_time = new Date(start_time);
    let buffer =  new Date(0, 0, 0, 0, 15);
    console.log("/n" + close_time + " " + current_time);
    return close_time - current_time;
}