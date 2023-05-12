// Nom du fichier: Logo.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui sert à afficher le logo du siteweb.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React from 'react'
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.png'


export default function Logo(props){

    const style = {
        gridArea:`${props.gridName}`,
        width: `${props.logoWidth}`,
        height: '100%',
        backgroundImage:`url(${LogoImage})`,
        backgroundSize: `contain`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginRight: '10px',
    }
    
    return(
        <Link to={props.path} style={style}></Link>
    )   
}