// Nom du fichier: AuctionPreviewImage.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui sert à afficher les images de l'article en enchère.
//                          La séparation permet de faire que chacun a son propre handleClick et que le parent sache lequel a été cliqué.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React from 'react'

export default function AuctionPreviewImage(props){

    return(
        <div className='auction--image--preview' id={props.id} style={props.previewStyle} onClick={props.handleClick}></div>
    )
}
   