// Nom du fichier: DarkMode.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui sert à changer la palette de couleur de l'application.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React from 'react'

export default function DarkMode(props) {

    const style = {
        gridArea: `${props.gridName}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }

    return(
        <div style={style}>
            <button onClick={props.handleDarkMode} style={{padding:'5px'}}>
                {props.darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}