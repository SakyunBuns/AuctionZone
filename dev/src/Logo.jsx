import React from 'react'
import LogoImage from '../dist/assets/logo.png'

export default function Logo(props){
    const style = {
        gridArea:`${props.gridName}`,
        width: `${props.logoWidth}`,
        height: '100%',
        color:'#ffffff',
        backgroundImage:`url(${LogoImage})`,
        backgroundSize: `contain`,
        backgroundRepeat: 'no-repeat'
    }


    return(
        <div style={style}></div>
    )   
}