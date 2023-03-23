import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props){

  
  const styleContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: `${props.palette.color1}`,
    height: `${props.height}`,
  }
  
  const styleLink = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%', 
    border: '1px solid white',
    backgroundColor: `${props.palette.color2}`,
    borderRadius: '3px',
    color: `${props.palette.textColor}`,
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