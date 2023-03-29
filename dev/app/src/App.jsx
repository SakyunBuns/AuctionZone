import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Header from './component/header/Header'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import AuctionPage from './AuctionPage'
import SignUpPage from './SignUpPage'
import SignInPage from './SignInPage'

export default function App() {

    const [signed, setSigned] = useState(false)

    const [darkMode, setDarkMode] = useState(false)

    const palette1 = {
        color1: '#E1E8ED',
        color2: '#CCD6DD',
        color3: '#b3bbc0',
        textColor: '#292F33',
    }
    
    const palette2 = {
        color1: '#131313',
        color2: '#2a2a2a',
        color3: '#3f3f3f ',
        textColor: '#f5f5f5'
    }

    const [palette, setPalette] = useState(darkMode ? palette2 : palette1)

    const pages = [
        {
            id: "1",
            name: 'Home',
            element: <HomePage palette={palette}/>,
            path: '/'
        },
        {
            id: "2",
            name: 'Profile',
            element: <ProfilePage palette={palette}/>,
            path: '/Profile'
        },
        {
            id: "3",
            name: 'Auction',
            element: <AuctionPage palette={palette}/>,
            path: '/Auction'
        }
    ]

    function handleDarkMode(){
        setDarkMode(!darkMode)
        darkMode ? setPalette(palette1) : setPalette(palette2)
    }

    const navbarRoutes = pages.map((page) => {
        return (
        <Route path={page.path} element={page.element} key={page.id}/>
        )
    })

    document.body.style.backgroundColor = `${palette.color1}`

    return (
        <div className='fullpage'>
            <Header pages={pages} palette={palette} signed={signed}/>
            <Routes>
                {navbarRoutes}
                <Route path='/SignUpPage' element={<SignUpPage palette={palette}/>}/>
                <Route path='/SignInPage' element={<SignInPage palette={palette}/>}/>
                <Route path='*' element={<h1>error 404</h1>} key="0"/>
            </Routes>

            <button onClick={handleDarkMode}>DARKMODE</button>
        </div>
    );
}