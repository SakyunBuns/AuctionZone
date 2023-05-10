import React, {useContext} from 'react'
import Navbar from './Navbar'
import Logo  from './Logo'
import SearchBar from  './SearchBar'
import Profile from './Profile'
import Currency from './Currency'
import DarkMode from './DarkMode'
import { paletteContext, userContext } from '../Context'


export default function Header(props){

    const {palette} = useContext(paletteContext)

    const rowHeight = 100
    const logoWidth = 250
    const profileWidth = 150

    const styleHeaderContainer = {
        width : '100%',
        height: `calc(${rowHeight}px  + ${rowHeight}px ))`,
        backgroundColor: `${palette.color1}`,
        display: 'grid',
        gridTemplateAreas: props.currency ? `'logo search currency profile' 'logo navbar dark profile'` : `'logo search dark profile' 'logo navbar none profile'`,
        gridTemplateRows: `${rowHeight}px 1fr`,
        gridTemplateColumns: `${logoWidth}px 1fr ${profileWidth}px`,
        borderBottom:`solid 2px ${palette.color2}`,
        paddingBottom: '5px'
    }

    
    return (
        <header>
            <div style={styleHeaderContainer}>
                <Navbar pages={props.pages} gridName="navbar"/>
                <Logo gridName="logo" path={props.pages[0].path} logoWidth={logoWidth}/>
                <SearchBar gridName="search" height={rowHeight}/>
                <Profile gridName="profile" profileWidth={profileWidth}/>
                <DarkMode gridName="dark" handleDarkMode={props.handleDarkMode} darkMode={props.darkMode}/>
                {props.currency && <Currency gridName="currency" currency={props.currency} setCurrency={props.setCurrency}/>}
            </div>
        </header>
    )
}