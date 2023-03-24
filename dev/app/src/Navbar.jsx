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
  


 console.log(props)

  const links = props.pages.map((page) => {
    return (
      <NavbarLink path={props.pages.path} key={props.pages.id} palette={props.palette} name={props.name}/>
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
    maxWidth: '100px',
    margin:'auto 10px',
    transition:'.5s',
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

