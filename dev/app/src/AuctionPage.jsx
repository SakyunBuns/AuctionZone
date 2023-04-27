import React, { useEffect, useState } from 'react'
import ItemSection from './component/ItemSection'
import AuctionnedItem from './component/AuctionnedItem'
import Chat from './component/Chat'
import { Item } from './assets/Items'
import { ItemDAO } from './DAO/ItemDAO'


export default function AuctionPage(props) {

    // const [currentItem, setCurrentItem] = React.useState(new Item(1))
    // let currentItem = new Item()
    // currentItem.refresh(1)
    const currentUser = {
        username: 'johndoe'
    }

    const emptyDictionary = {}

    const [currentItem, setCurrentItem] = useState(emptyDictionary);
    // useEffect(() => {
    //     setCurrentItem(currentItem.refresh());
    // }, [currentItem]);

    setTimeout(() => {
        ItemDAO.getItem(1, (result) => {
            if (result != null) {
                setCurrentItem(Item.refresh(result))
            }
            console.log(currentItem + " " + result)
        }, 5000);
    })

    return (
        <div className='auction--container'>

            <div className='auction--section--left'>
                <AuctionnedItem />
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
