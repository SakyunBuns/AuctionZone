import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import AuctionPage from './AuctionPage'
import NavBar from './component/navbar'

function App() {
    return (
        <>
        <NavBar/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Profile' element={<ProfilePage/>}/>
            <Route path='/auction' element={<AuctionPage/>}/>
            <Route path='*' element={<h1>error 404</h1>}/>
        </Routes>
        </>
    );
}

export default App;