import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props){

  
  const styleContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: `${props.palette.color1}`,
    height: `${props.height}`,
  }
  
  const styleLink = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    width: '100%', 
    maxWidth: '100px',
    border: `1px solid ${props.palette.color3}`,
    backgroundColor: `${props.palette.color2}`,
    borderRadius: '3px',
    color: `${props.palette.textColor}`,
    margin:'auto 10px'
  }

  const links = props.pages.map((page) => {
    return (
      <Link to={page.path} key={page.id} style={styleLink}>
          {page.name}
      </Link>
    )
  })

  return(
      <div style={styleContainer}>
          {links}
      </div>
  );
}