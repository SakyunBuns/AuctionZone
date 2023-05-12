// Nom du fichier: Header.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui sert à afficher le header de l'application.
//                          Si on utilise ce fichier ainsi que toutes le composantes du dossier header,
//                          on peut réutiliser le header pour une autre application tant qu'on y donne 
//                              -2 palettes de couleur,
//                              -les pages de l'application
//                              -le Logo
//                              -l'existance des pages SignIn, SignUp, Profile
//                          L'utilisation de Currency.jsx est optionnel pour un site non transactionnel.
//                          Après réflexion, il aurait possible de faire un ficher CSS séparé pour le header au lieu de tout le faire en javascript pour chaque composante.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, {useContext} from 'react'
import Navbar from './Navbar'
import Logo  from './Logo'
import SearchBar from  './SearchBar'
import Profile from './Profile'
import Currency from './Currency'
import DarkMode from './DarkMode'
import { paletteContext } from '../Context'


export default function Header(props){

    const {palette} = useContext(paletteContext)

    const rowHeight = props.rowHeight ? props.rowHeight : 100
    const logoWidth = props.logoWidth ? props.logoWidth : 250
    const profileWidth = props.profileWidth ? props.profileWidth : 150

    const styleHeaderContainer = {
        width : '100%',
        height: `calc(${rowHeight}px  + ${rowHeight}px ))`,
        backgroundColor: `${palette.color1}`,
        display: 'grid',
        gridTemplateAreas: props.currency ? `'logo search currency profile' 'logo navbar dark profile'` : `'logo search dark profile' 'logo navbar none profile'`,
        gridTemplateRows: `${rowHeight}px 1fr`,
        gridTemplateColumns: `${logoWidth}px 1fr ${profileWidth}px ${profileWidth}px`,
        borderBottom:`solid 2px ${palette.color2}`,
        paddingBottom: '5px'
    }

    
    return (
        <header>
            <div style={styleHeaderContainer}>
                <Navbar pages={props.pages} gridName="navbar"/>
                <Logo gridName="logo" path={props.pages[0].path} logoWidth={logoWidth}/>
                <SearchBar gridName="search" height={rowHeight}/>
                <Profile gridName="profile" profileWidth={profileWidth}/>
                <DarkMode gridName="dark" handleDarkMode={props.handleDarkMode} darkMode={props.darkMode}/>
                {props.currency && <Currency gridName="currency" currency={props.currency} setCurrency={props.setCurrency}/>}
            </div>
        </header>
    )
}