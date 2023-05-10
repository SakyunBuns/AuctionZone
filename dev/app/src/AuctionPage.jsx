import React, { useEffect, useState, useContext } from 'react'
import ItemSection from './component/ItemSection'
import AuctionnedItem from './component/AuctionnedItem'
import Chat from './component/Chat'
import { get_time_left } from './assets/Items'
import { ItemDAO } from './DAO/ItemDAO'
import { paletteContext } from './component/Context'
//USED FOR TESTING
import doggo from "./assets/doggo.png";
//USED FOR TESTING

export default function AuctionPage(props) {

    const { palette } = useContext(paletteContext)

    /**
     * References: 
     * https://www.delftstack.com/fr/howto/javascript/javascript-enum/#:~:text=Les%20Enums%2C%20%C3%A9galement%20appel%C3%A9es%20%C3%A9num%C3%A9rations%2C%20sont%20utilis%C3%A9es%20pour,pouvez%20utiliser%20le%20mot-cl%C3%A9%20const%20et%20des%20accolades.
     * 
     */
    const emptyDictionary = {}

    const [currentItem, setCurrentItem] = useState(emptyDictionary);
    const [currentStatus, setCurrentStatus] = useState('AUCTION_OFFLINE');


    const statEnum = {
        'AUCTION_OFFLINE': <div style={{color: `${palette.textColor}`}}>Waiting</div>,
        'AUCTION_ONLINE': <AuctionnedItem item={currentItem} />
    }


    //USED FOR TESTING
    const tempItem = {
        username: 'John Cena',
        profile: `${doggo}`,
        highestBid: 100
    }


    useEffect(() => {
        const interval = setInterval(() => {
            ItemDAO.getItemByTime((availableItem) => {
                ItemDAO.getItem(availableItem[0].id, (result) => {

                    if (result.id != null) {
                        ItemDAO.getHigherBid(result.id, (dataBid) => {
                            let new_item = {
                                "id_item": result.id,
                                "name": result.name,
                                "description": result.description,
                                "status": result.current_status,
                                "price": dataBid.price != null ? dataBid.price : result.price,
                                "id_seller": result.id_seller,
                                "auction_on": result.auction_on,
                                "room_id": result.room_id,
                                "images": result.images,
                                "time_remaining": get_time_left(result.auction_on)
                            };

                            setCurrentItem(new_item)
                            setCurrentStatus('AUCTION_ONLINE');
                        })
                    }
                    else {
                        setCurrentStatus('AUCTION_OFFLINE');
                    }
                    console.log(currentItem + " " + result)
                })
            })
        }
            , 5000);
        return () => clearInterval(interval);
    }, [currentItem]);

    return (
        <div className='auction--container'>

            <div className='auction--section--left'>
                {statEnum[currentStatus]}
                <div className='auction--left--bottom'>
                    <ItemSection sectionName="Upcoming" containerHeight={185} imageSize={90} />
                </div>
            </div>

            <div className='auction--section--right'>
                <Chat currentItem={tempItem} />
            </div>

        </div>
    )
}

