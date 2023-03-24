import React from 'react'
import VisitorProfile from '../dist/assets/doggo.png'
import { Link } from 'react-router-dom';

export default function Profile(props){

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
        color: `${props.palette.textColor}`
    } 

    const styleLink= {
        color: `${props.palette.textColor}`
    }

    return (
        <div style={styleContainer}>
            <img src={VisitorProfile} style={styleImg}></img>
            {props.signed ? <div style={styleText}>LOGGED</div> : <div style={styleText}><Link style={styleLink} to='/SignupPage'>Sign up</Link></div> }
            

        </div>
    )
}