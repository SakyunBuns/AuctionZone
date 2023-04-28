import React, { useEffect, useState } from 'react'
import ItemSection from './component/ItemSection'
import AuctionnedItem from './component/AuctionnedItem'
import Chat from './component/Chat'
import { Item } from './assets/Items'
import { ItemDAO } from './DAO/ItemDAO'


export default function AuctionPage(props) {


    // let currentItem = new Item()
    // currentItem.refresh(1)
    const currentUser = {
        username: 'johndoe'
    }

    const emptyDictionary = {}

    const statEnum = {
        'AUCTION_OFFLINE': 'Waiting',
        'AUCTION_ONLINE': <AuctionnedItem/>}

    const [currentItem, setCurrentItem] = useState(emptyDictionary);
    const [currentStatus, setCurrentStatus] = useState('AUCTION_OFFLINE');
    // useEffect(() => {
    //     setCurrentItem(currentItem.refresh());
    // }, [currentItem]);

    setTimeout(() => {
        ItemDAO.getItem(1, (result) => {
            if (result != null) {
                setCurrentStatus('AUCTION_ONLINE');
                setCurrentItem(Item.refresh(result))
            }
            else {
                setCurrentStatus('AUCTION_OFFLINE');
            }
            console.log(currentItem + " " + result)
        }, 5000);
    })

    return (
        <div className='auction--container'>

            <div className='auction--section--left'>
                {statEnum[currentStatus]}
                <div className='auction--left--bottom'>
                    <ItemSection sectionName="Upcoming" containerHeight={185} imageSize={90} />
                </div>
            </div>

            <div className='auction--section--right'>
                <Chat />
            </div>

        </div>
    )
}
