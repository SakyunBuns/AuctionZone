import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function Navbar(props){


  
  const styleContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: `${props.palette.color1}`,
    height: `${props.height}`,
  }

  const links = props.pages.map((page) => {
    return (
      <NavbarLink path={page.path} key={page.id} palette={props.palette} name={page.name}/>
    )
  })

  return(
      <div style={styleContainer}>
          {links}
      </div>
  );
}

function NavbarLink(props){ 

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const styleLink = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%', 
    maxWidth: '125px',
    margin:'auto 5px',
    transition:'.75s',
    cubicBezier:`(0.42, 0, 1.0, 1.0)`,
    color: `${props.palette.textColor}`,
    border: isHovered ? `1px solid ${props.palette.color3}` : `1px solid ${props.palette.color1}`,
    backgroundColor: isHovered ? `${props.palette.color2}` : `${props.palette.color1}`,
    borderRadius: '3px'
  }

  return (
    <Link to={props.path} style={styleLink} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {props.name}
    </Link>
  )
}

