import React, { useState, useContext} from "react";
import { paletteContext } from "./Context";
import Crown from "../assets/crown.gif";

export default function LeaderBid(props) {

    const {palette} = useContext(paletteContext)

    const currentItem  = props.currentItem
    console.log(currentItem.profile)

    return(
        <div className='chat--leader--container' style={{backgroundColor:`${palette.color3}`, color:`${palette.textColor}`}}>
            <div className='chat--leader'>
                
                <div className='chat--leader--left'>

                    <div className='chat--leader--crown' style={{backgroundImage: `url('${Crown}')`}}></div>
                    <div className='chat--leader--profile' style={{backgroundImage: `url('${currentItem.profile}')`}}></div>
                </div>
                <div className='chat--leader--right'>
                    <div style={{color:`${palette.textColor}`}}>{currentItem.username}</div>
                    <div style={{color:`${palette.textColor}`}}>{currentItem.highestBid}</div>
                </div>
            </div>
            
        </div>
    )
}