import React from 'react'
import ItemSection from './component/ItemSection'
import AuctionnedItem from './component/AuctionnedItem'

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
            
            </div>
        </div>

    )
}