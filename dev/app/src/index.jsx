// Nom du fichier: index.jsx
// Contexte de ce fichier:  Ce fichier contient le root de notre app React
//                          
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
