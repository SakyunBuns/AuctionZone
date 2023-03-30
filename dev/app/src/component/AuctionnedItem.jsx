import React from 'react'

export default function AuctionnedItem(props){
    return(
        <div className='auction--left--upper'>
            <div className='auction--text' style={{backgroundColor: props.palette.color3}}>
                <p>Barbi goes homeless</p>
                <p>Remaining Time :</p>
                <p>Starting bid :</p>
            </div>
            <div className='auction--image--section' style={{backgroundColor: props.palette.color2}}>
                <div style={{backgroundImage:'url(../dist/assets/doggo.png)'}} className='auction--image--selected'></div>
                <div className='auction--image--preview--container'>
                    
                </div>

        
            </div>
        </div>
    )
}