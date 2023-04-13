import React, {useContext} from 'react'
import VisitorProfile from '../../assets/doggo.png'
import { Link } from 'react-router-dom';
import { paletteContext } from '../Context'


export default function Profile(props){

    const {palette} = useContext(paletteContext)

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
        height: `${imageHeight}px`,
        width: `${imageHeight}px`
    }

    const styleText = {
        fontSize : '10px',
        width: '100%',
        textAlign:'center',
        color: `${palette.textColor}`
    } 

    const styleLink= {
        color: `${palette.textColor}`
    }

    return (
        <div style={styleContainer}>
            <img src={VisitorProfile} style={styleImg}></img>
            {/* {props.signed ? 
            <div style={styleText}><Link style={styleLink} to='/SignInPage'>Sign in</Link></div> : 
            <div style={styleText}><Link style={styleLink} to='/SignUpPage'>Sign up</Link></div> } */}
            <div style={styleText}><Link style={styleLink} to='/SignIn'>Sign in</Link></div> 
            <div style={styleText}><Link style={styleLink} to='/SignUp'>Sign up</Link></div> 

        </div>
    )
}