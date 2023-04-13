import React, { useState, useEffect, useContext}from 'react'
import Message from './Message'
import { paletteContext } from './Context'

export default function Chat(props){

    const {palette} = useContext(paletteContext)

    const [messages, setMessages] = useState([])
    const [counter, setCounter] = useState(0)

    const messageUpdated = messages.map((message, index) => {
        return(
            <Message palette={palette} message={message} index={index}/>
        )
    })


    useEffect(() => {
        const interval = setInterval(() => {
          setCounter(counter + 1)
          setMessages([`random message ${counter + 1}`, ...messages])
        }, 2000)
        return () => clearInterval(interval)
    }, [counter, messages])

    return(
        <div className='chat--container' style={{backgroundColor:`${palette.color2}`}}>
            <div className='chat--leader' style={{backgroundColor:`${palette.color3}`}}></div>

            <div className='chat--message--container' >
                {messageUpdated}
            </div>
        </div>  
    )
}