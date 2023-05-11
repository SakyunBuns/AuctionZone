import React, {useState, useContext} from "react"
import { paletteContext, currencyContext } from "./Context"
import Converter from "../assets/CurrencyConverter"


export default function Bid(props) {

    
    const {palette} = useContext(paletteContext)
    const {currency, rates} = useContext(currencyContext)
    const [bid, setBid] = useState('')

    const converter = new Converter(rates, 'CAD');

    const handleSubmit = (event) => {
        event.preventDefault()
        //INSERT DAO HERE, DO NOT FORGET bid is a STRING AND NEED TO BE CHECKED
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