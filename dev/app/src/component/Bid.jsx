import React, {useState, useContext} from "react"
import { paletteContext } from "./Context"

export default function Bid(props) {

    const {palette} = useContext(paletteContext)
    const [bid, setBid] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        //INSERT DAO HERE, DO NOT FORGET bid is a STRING AND NEED TO BE CHECKED
    }   

    const handleChange = (event) => {
        setBid(event.target.value)
        // console.log(typeof(bid))
    }

    return (
        <form className='chat--bid--container' style={{backgroundColor: palette.color3}}>
            <div style={{marginRight:`10px`}}>
                <input onChange={handleChange} type='number' placeholder='Enter your bid'/>
            </div>
            <div>
                <button type='submit'>Place bid</button>
            </div>
        </form>
    )
}