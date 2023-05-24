// Nom du fichier: LeaderBid.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui représente le leader d'une enchère. 
//                          Elle a un gif de crown au dessus de son profil d'utilisateur.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useContext } from "react";
import { paletteContext } from "./Context";
import Crown from "../assets/crown.gif";
import Price from './price';
import doggo from "../assets/doggo.png";


export default function LeaderBid(props) {

    const { palette } = useContext(paletteContext)

    const currentItem = props.currentItem

    //USED FOR TESTING
    const tempItem = {
        username: 'Happy Doggo',
        profile: `${doggo}`,
        highestBid: 100
    }


    return (
        <div className='chat--leader--container' style={{ backgroundColor: `${palette.color3}`, color: `${palette.textColor}` }}>
            <div className='chat--leader'>

                <div className='chat--leader--left'>

                    <div className='chat--leader--crown' style={{ backgroundImage: `url('${Crown}')` }}></div>
                    <div className='chat--leader--profile' style={{ backgroundImage: `url('${tempItem.profile}')` }}></div>
                </div>
                <div className='chat--leader--right'>
                    <div style={{ color: `${palette.textColor}` }}>Apex Dogg</div>
                    <div style={{ color: `${palette.textColor}` }}>{<Price price={parseFloat(currentItem.price)} />}</div>
                </div>
            </div>

        </div>
    )
}