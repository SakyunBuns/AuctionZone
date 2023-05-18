// Nom du fichier: Bid.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui sert à afficher le formulaire pour placer une enchère.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, {useState, useContext} from "react"
import { paletteContext, currencyContext } from "./Context"
import Converter from "../assets/CurrencyConverter"
import { ItemDAO } from "../DAO/ItemDAO"

export default function Bid(props) {

    
    const {palette} = useContext(paletteContext)
    const {currency, rates} = useContext(currencyContext)
    const [bid, setBid] = useState('')

    const converter = new Converter(rates, 'CAD');

    const handleSubmit = (event) => {
        event.preventDefault()
        //INSERT DAO HERE, DO NOT FORGET bid is a STRING AND NEED TO BE CHECKED
        ItemDAO.getHigherBid(props.currentItem.id_item, (highestBid)=>{
            if(highestBid[0].amount < bid){
                ItemDAO.addBid({idItem:props.currentItem.id_item, idUser:1,bid:bid},()=>
                console.log('bid added')
                )
            }
        })
        const amount = parseFloat(bid)
        const amountToServer = converter.convertToServeur(amount, currency[0])
        console.log(amountToServer)
    }   

    const handleChange = (event) => {
        setBid(event.target.value)
        console.log(converter.convertToInterface(parseFloat(event.target.value), currency[0]))
    }

    return (
        <form onSubmit={handleSubmit} className='chat--bid--container' style={{backgroundColor: palette.color3}}>
            <div style={{marginRight:`10px`}}>
                <input onChange={handleChange} type='number' placeholder='Enter your bid'/>
            </div>
            <div>
                <button type='submit'>Place bid</button>
            </div>
        </form>
    )
}