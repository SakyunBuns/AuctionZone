import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props){

  
  const styleContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: `${props.palette.color1}`,
    height: '50px',
  }
  
  const styleLink = {
    border: '2px solid black',
    backgroundColor: `${props.palette.color2}`,
    padding: '10px',
    borderRadius: '3px',
    color: `${props.palette.textColor}`,
  }

  const links = props.pages.map((page) => {
    return (
      <Link to={page.path} key={page.id}>
        <div style={styleLink}> 
          {page.name}
        </div>
      </Link>
    )
  })

  return(
      <div style={styleContainer}>
          {links}
      </div>
  );
}