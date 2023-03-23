import React from 'react'
import Navbar from './Navbar'
import Logo  from './Logo'
import SearchBar from  './SearchBar'

export default function Header(props){

    const rowHeight = '50px'
    const logoWidth = '150px'

    const styleHeaderContainer = {
        width : '100%',
        height: '100px',
        backgroundColor: '#11111111',
        display: 'grid',
        gridTemplateAreas: `'logo search' 'logo navbar'`,
        gridTemplateRows: `${rowHeight} 1fr`,
        gridTemplateColumns: `${logoWidth} 1fr`
    }

    return (
        <header>
            <div style={styleHeaderContainer}>
                <Navbar pages={props.pages} palette={props.palette} gridName="navbar"/>
                <Logo gridName="logo" logoWidth={logoWidth}/>
                <SearchBar gridName="search" height={rowHeight}/>
            </div>
        </header>
    )
}