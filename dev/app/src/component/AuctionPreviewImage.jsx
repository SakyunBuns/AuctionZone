import React from 'react'


export default function AuctionPreviewImage(props){

    return(
        <div className='auction--image--preview' id={props.id} style={props.previewStyle} onClick={props.handleClick}></div>
    )
}
   