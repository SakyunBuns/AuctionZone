import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import AuctionPage from './AuctionPage'
import NavBar from './component/navbar'

export default function App() {

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

    const navbarRoutes = pages.map((page) => {
        return (
        <Route path={page.path} element={page.element} key={page.id}/>
        )
    })

    return (
        <>
        <NavBar pages={pages}/>
        <Routes>
            {navbarRoutes}
            <Route path='*' element={<h1>error 404</h1>} key="0"/>
        </Routes>
        </>
    );
}