// Nom du fichier: AuctionnedItem.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui affiche les informations d'un item en vente aux enchères. 
//                          Il est utilisé dans la composante AuctionPage.jsx
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useState, useContext } from 'react'
import AuctionPreviewImage from './AuctionPreviewImage'
import { paletteContext } from './Context'
import Price from './price'

export default function AuctionnedItem(props){

    const {palette} = useContext(paletteContext)

    //ARRAY OF IMAGES FROM SERVER 
    const [testImages, setTestImages] = useState([
        {
        id: 0,    
        img : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`
        },
        {
        id: 1,    
        img : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`
        },
        {
        id: 2,    
        img : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`
        },
        {
        id: 3,    
        img : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`
        },
        {
        id: 4,    
        img : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`
        },

    ])

    const previewTestImages = testImages.map( image => {

        const numberImage =  testImages.length - 1
        const height = 100 / numberImage - 1
        const previewStyle = {
            height: `${height}%`,
            backgroundImage:`url(${image['img']})`
        }
    
        if (image !== testImages[0]){
            return(
                <AuctionPreviewImage key={image.id} id={image.id} previewStyle={previewStyle} handleClick={handleClick}/>
            )
        }
    })
    
    
    function handleClick(event) {
        const id = event.target.id;
        const index = testImages.findIndex(image => image.id === Number(id));
        const temp = [...testImages];
        const tempImageMain = temp[0];
        const tempImage = temp[index];
        temp.splice(index, 1);
        temp.unshift(tempImage);
        temp.splice(1, 1)
        temp.splice(index, 0, tempImageMain)
        setTestImages(temp);
    }


    return(
        <div className='auction--left--upper'>
            <div className='auction--text' style={{backgroundColor: palette.color3}}>
                <p> {props.item.name != null ? props.item.name : "dummy"}</p>
                <p>Remaining Time : {props.item.time_remaining}</p>
                <p>Starting bid : <Price price={props.item.price}/></p>
            </div>

            <div className='auction--image--section' style={{backgroundColor: palette.color2}}>
                <div className='auction--image--selected' style={{backgroundImage:`url(${testImages[0]['img']})`, transition: '0.5s'}}></div>
                <div className='auction--image--preview--container'>
                    {previewTestImages}
                </div>

        
            </div>
        </div>
    )
}