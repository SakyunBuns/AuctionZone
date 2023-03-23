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

    // const profile = props.profile.map((elem) => {
    //     return(
    //         props.elem.image ? 
    //         <div style={styleContainer}>
    //             <img src={props.elem.image}></img>
    //         </div> : 
    //         <div style={styleContainer}>
    //             <img src={VisitorProfile}></img>
    //         </div>
    //     )
    // })

    
    return (
        <div style={styleContainer}>
            <img src={VisitorProfile} style={styleImg}></img>
            <div style={styleText}><Link style={styleLink} to='/Profile'>User</Link> | Logout</div>


        </div>
    )
}