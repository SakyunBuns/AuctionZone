import React from 'react'
import Navbar from './Navbar'
import Logo  from './Logo'
import SearchBar from  './SearchBar'
import Profile from './Profile'


export default function Header(props){

    const rowHeight = 50
    const logoWidth = 150
    const profileWidth = 100

    const styleHeaderContainer = {
        width : '100%',
        height: '100px',
        backgroundColor: '#11111111',
        display: 'grid',
        gridTemplateAreas: `'logo search profile' 'logo navbar profile'`,
        gridTemplateRows: `${rowHeight}px 1fr`,
        gridTemplateColumns: `${logoWidth}px 1fr ${profileWidth}px`,
        columnGap: '10px'
    }

    return (
        <header>
            <div style={styleHeaderContainer}>
                <Navbar pages={props.pages} palette={props.palette} gridName="navbar"/>
                <Logo gridName="logo" logoWidth={logoWidth}/>
                <SearchBar gridName="search" height={rowHeight}/>
                <Profile gridName="profile" profileWidth={profileWidth}/>
            </div>
        </header>
    )
}