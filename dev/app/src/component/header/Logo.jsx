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
        backgroundRepeat: 'no-repeat'
    }
    
    return(
        <Link to={props.path} style={style}></Link>
    )   
}