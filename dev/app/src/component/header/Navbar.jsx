import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react'
import { paletteContext } from '../Context'

export default function Navbar(props){

  const {palette} = useContext(paletteContext)

  const styleContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: `${palette.color1}`,
    height: `${props.height}`,
  }

  const links = props.pages.map((page) => {
    return (
      <NavbarLink path={page.path} key={page.id} name={page.name}/>
    )
  })

  return(
      <div style={styleContainer}>
          {links}
      </div>
  );
}

function NavbarLink(props){ 

  const {palette} = useContext(paletteContext)

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
    minWidth: '100px',
    maxWidth: 'fit-content',
    padding: '0 5px',
    margin:'auto 5px',
    borderRadius: '3px',
    transition:'.75s',
    fontWeight: 'bold',
    cubicBezier:`(0.42, 0, 1.0, 1.0)`,
    color: `${palette.textColor}`,
    border: isHovered ? `2px solid ${palette.color3}` : `2px solid ${palette.color1}`,
    backgroundColor: isHovered ? `${palette.color2}` : `${palette.color1}`
  }

  return (
    <Link 
      to={props.path} style={styleLink} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {props.name}
    </Link>
  )
}

