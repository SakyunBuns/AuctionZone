import { ItemDAO } from "../DAO/ItemDAO";

export class Item {
    constructor(id_item) {
        ItemDAO.get_item(id_item, (data) => {
            this.id_item = data.id_item;
            this.name = data.name;
            this.description = data.description;
            this.status = data.status;
            this.bid_count = data.bid_count;
            this.price = data.price;
            this.id_seller = data.id_seller;
            this.auction_on = data.auction_on;
            this.room_id = data.room_id;
            this.images = data.images;
        });
    }

    add(id_item) {
        this.items.push(id_item);
    }

    remove(id_item) {
        this.items = this.items.filter((i) => i !== id_item);
    }

    get() {
        return this.items;
    }
}