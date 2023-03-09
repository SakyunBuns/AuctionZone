import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <div className='navBarGlobal'>
          <Link to="/">Home Page</Link>
          <Link to="/Profile">Profil Page</Link>
          <Link to="/Auction">Auction Page</Link>  
        </div>
    );
}