import React, {useContext} from 'react'
import Navbar from './Navbar'
import Logo  from './Logo'
import SearchBar from  './SearchBar'
import Profile from './Profile'
import Currency from './Currency'
import { paletteContext } from '../Context'


export default function Header(props){

    const {palette} = useContext(paletteContext)

    const rowHeight = 50
    const logoWidth = 250
    const profileWidth = 100

    const styleHeaderContainer = {
        width : '100%',
        height: '100px',
        backgroundColor: `${palette.color1}`,
        display: 'grid',
        gridTemplateAreas: props.currency ? `'logo search currency profile' 'logo navbar none profile'` : `'logo search profile' 'logo navbar profile'`,
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
                <Profile gridName="profile" profileWidth={profileWidth} signed={props.signed}/>
                {props.currency && <Currency gridName="currency" currency={props.currency} setCurrency={props.setCurrency}/>}
            </div>
        </header>
    )
}