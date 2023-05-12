// Nom du fichier: Profile.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui sert à afficher le profile de l'utilisateur.
//                          On peut y définir la taille de l'image du profile et le chemin vers la page de profile, de sign in et de sign up.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, {useContext} from 'react'
import VisitorProfile from '../../assets/visitor.jpg'
import { Link } from 'react-router-dom';
import { paletteContext, userContext } from '../Context'


export default function Profile(props){

    const {palette} = useContext(paletteContext)
    const {user, setUser} = useContext(userContext)

    const imageHeight = props.profileWidth - 20

    const styleContainer = {
        gridArea:`${props.gridName}`,
        display: 'flex',
        flexDirection: 'column',
        justifieContent: 'center',
        alignItem: 'center',
    }

    const styleImg={
        margin:'auto',
        padding: '5px',
        height: `${imageHeight}px`,
        width: `${imageHeight}px`
    }

    const styleText = {
        fontSize : '10px',
        width: '100%',
        color: `${palette.textColor}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    } 

    const styleTextColor= {
        color: `${palette.textColor}`,
    }

    const handleSignOut = () => {   
        setUser(null)
    }

    const styleCenterContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

    return (
        <div style={styleContainer}>
            {
                user ? 
                <Link style={styleCenterContainer} to={props.profilePath ? props.profilePath : '/Profile'} ><img src={user.profile} style={styleImg}></img></Link> :
                <div style={styleCenterContainer}><img src={VisitorProfile} style={styleImg}></img></div>
            }

            {
                user ? 
                <div style={styleCenterContainer} onClick={handleSignOut}>
                    <Link style={styleTextColor} to='/'>Sign out</Link>
                </div> :
                <div style={styleCenterContainer}>
                    <div><Link style={styleTextColor} to={props.signInPath ? props.signInPath : '/SignIn'}>Sign in</Link></div> 
                    <div style={styleTextColor}>|</div>
                    <div><Link style={styleTextColor} to={props.signUpPath ? props.signUpPath : '/SignUp'}>Sign up</Link></div>
                </div>
            }  

        </div>
    )

}