import React from 'react'
import ItemSection from './component/ItemSection'
import AuctionnedItem from './component/AuctionnedItem'
import Chat from './component/Chat'

export default function AuctionPage(props){

    return(
        <div className='auction--container'>
            <div className='auction--section--left'>
                
                <AuctionnedItem palette={props.palette}/>
                <div className='auction--left--bottom'>
                    <ItemSection palette={props.palette} sectionName="Upcoming" containerHeight={185} imageSize={90}/>
                </div>
                
            </div>
            <div className='auction--section--right'>
                <Chat palette={props.palette}/>
            </div>
        </div>

    )
}