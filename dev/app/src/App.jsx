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
import TestPage from './TestPage'
import SellPage from './SellPage'
import { paletteContext, tagsContext } from './component/Context'
import ChangePasswordPage from './ChangePasswordPage'


//TO INTEGRATE USE CONTEXT FOR THE PALETTE
//https://www.youtube.com/watch?v=MCTB_w0Guso

export default function App() {

    const [signed, setSigned] = useState(false)

    const [darkMode, setDarkMode] = useState(false)
    
    const [currency, setCurrency] = useState(["CAD", "USD", "EUR"])

    const rates = {
        "CAD": 1,
        "USD": 0.75,
        "EUR": 0.68,
    }

    const tags = [  'Antique',
    'Art & Sculture',
    'Automobile',
    'Bijoux & Accessoire',
    'Collection',
    'Livre & Manuscrit',
    'Meuble',
    'Monnaie',
    'Musique',
    'Sport',
    'Vaisselle & Coutellerie',
    'Vêtement']

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
        },
        {
            id: "4",
            name: 'Test',
            element: <TestPage/>,
            path: '/Test'
        },
        {
            id: "5",
            name: 'Sell',
            element: <SellPage/>,
            path: '/Sell'
        },
        {
            id: "6",
            name: 'ChangePassword',
            element: <ChangePasswordPage/>,
            path: '/ChangePassword'
        }

    ]

    function handleDarkMode(){
        setDarkMode(!darkMode)
        darkMode ? setPalette(palette1) : setPalette(palette2)
    }

    const handleCurrencyChange = (newArray) => { 
        setCurrency(newArray)
    }

    const navbarRoutes = pages.map((page) => {
        return (
        <Route path={page.path} element={page.element} key={page.id}/>
        )
    })

    document.body.style.backgroundColor = `${palette.color1}`

    return (
        <div className='fullpage'>
            <paletteContext.Provider value={{palette}}>
                <tagsContext.Provider value={{tags}}>

                    <Header pages={pages} signed={signed} currency={currency} setCurrency={handleCurrencyChange}/>
                    <Routes>
                        {navbarRoutes}
                        <Route path='/SignUp' element={<SignUpPage/>}/>
                        <Route path='/SignIn' element={<SignInPage/>}/>
                        <Route path='*' element={<h1>error 404</h1>} key="0"/>
                    </Routes>
                </tagsContext.Provider>
            </paletteContext.Provider>
            <button onClick={handleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
    );
}