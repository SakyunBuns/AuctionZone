import React from 'react'
import ItemSection from './component/ItemSection'
import AuctionnedItem from './component/AuctionnedItem'
import Chat from './component/Chat'



export default function AuctionPage(props){

    const currentUser = {
        username: 'johndoe'
    }

    return(
        <div className='auction--container'>

            <div className='auction--section--left'>
                <AuctionnedItem/>
                <div className='auction--left--bottom'>
                    <ItemSection sectionName="Upcoming" containerHeight={185} imageSize={90}/>
                </div>
            </div>

            <div className='auction--section--right'>
                <Chat />
            </div>

        </div>
    )
}