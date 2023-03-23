import React from 'react'
import Navbar from './Navbar'
import Logo  from './Logo'
import SearchBar from  './SearchBar'

export default function Header(props){

    return (
        <header>
            <Navbar pages={props.pages} palette={props.palette}/>
            <Logo/>
            <SearchBar/>
        </header>
    )
}