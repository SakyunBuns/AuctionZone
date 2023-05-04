import React, { useEffect, useState, useContext } from 'react'
import ItemSection from './component/ItemSection'
import AuctionnedItem from './component/AuctionnedItem'
import Chat from './component/Chat'
import { Item } from './assets/Items'
import { ItemDAO } from './DAO/ItemDAO'
import { itemContext } from './component/Context'
import { paletteContext } from './component/Context';


export default function AuctionPage(props) {

    const { palette } = useContext(paletteContext)

    /**
     * References: 
     * https://www.delftstack.com/fr/howto/javascript/javascript-enum/#:~:text=Les%20Enums%2C%20%C3%A9galement%20appel%C3%A9es%20%C3%A9num%C3%A9rations%2C%20sont%20utilis%C3%A9es%20pour,pouvez%20utiliser%20le%20mot-cl%C3%A9%20const%20et%20des%20accolades.
     * 
     */

    const currentUser = {
        username: 'johndoe'
    }

    const emptyDictionary = {}

    const statEnum = {
        'AUCTION_OFFLINE': <p style={{ color: palette.textColor }}>Waiting</p>,
        'AUCTION_ONLINE': <AuctionnedItem />
    }

    const [currentItem, setCurrentItem] = useState(emptyDictionary);
    const [currentStatus, setCurrentStatus] = useState('AUCTION_OFFLINE');

    useEffect(() => {
        const interval = setInterval(() => {
            ItemDAO.getItem(1, (result) => {
                if (result != null) {
                    setCurrentStatus('AUCTION_ONLINE');
                    setCurrentItem(Item.refresh(result))
                }
                else {
                    setCurrentStatus('AUCTION_OFFLINE');
                }
                console.log(currentItem + " " + result)
            })
        }, 5000);
        return () => clearInterval(interval);
    }, [currentItem]);

    return (
        <div className='auction--container'>

            <div className='auction--section--left'>
                <itemContext.Provider value={{ item: currentItem }}>
                    {statEnum[currentStatus]}
                    <div className='auction--left--bottom'>
                        <ItemSection sectionName="Upcoming" containerHeight={185} imageSize={90} />
                    </div>
                </itemContext.Provider>
            </div>

            <div className='auction--section--right'>
                <Chat />
            </div>

        </div>
    )
}
