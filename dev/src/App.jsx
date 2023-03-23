import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import AuctionPage from './AuctionPage'
import NavBar from './Navbar'
import Header from './Header'

export default function App() {

    const [darkMode, setDarkMode] = useState(false)

    const pages = [
        {
            id: "1",
            name: 'Home',
            element: <HomePage/>,
            path: '/'
        },
        {
            id: "2",
            name: 'Profile',
            element: <ProfilePage/>,
            path: '/Profile'
        },
        {
            id: "3",
            name: 'Auction',
            element: <AuctionPage/>,
            path: '/Auction'
        }
    ]

    const palette1 = {
        color1: '#f5f5f5',
        color2: '#e0e0e0',
        color3: '#bdbdbd',
        textColor: '#000000',
    }
    
    const palette2 = {
        color1: '#000000',
        color2: '#212121',
        color3: '#424242',
        textColor: '#ffffff',
    }

    const [palette, setPalette] = useState(palette1)
    
    
    function handleDarkMode(){
        setDarkMode(!darkMode)
        darkMode ? setPalette(palette1) : setPalette(palette2)
    }

    const navbarRoutes = pages.map((page) => {
        return (
        <Route path={page.path} element={page.element} key={page.id}/>
        )
    })

    return (
        <div>
            <Header pages={pages} palette={palette}/>
            <Routes>
                {navbarRoutes}
                <Route path='*' element={<h1>error 404</h1>} key="0"/>
            </Routes>
            <button onClick={handleDarkMode}>HERE</button>
        </div>
    );
}