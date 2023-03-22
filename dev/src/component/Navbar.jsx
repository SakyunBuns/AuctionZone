import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar(props){

  const links = props.pages.map((page) => {
    return (
      <Link to={page.path} key={page.id}>{page.name}</Link>
    )
  })

  const styleContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const styleLink = {
    border: '1px solid black'
  }
  return(
      <div style={styleContainer}>
        <div style={styleLink}>
          {links}
        </div>
      </div>
  );
}