import React, { useState, useEffect, useContext}from 'react'
import Message from './Message'
import LeaderBid from './LeaderBid'
import { paletteContext } from './Context'
import Bid from './Bid'
import EmojiBox from './EmojiBox'
import EmojiDead from "../assets/emoji/emojiDead.png";
import EmojiMoney from "../assets/emoji/emojiMoney.png";
import EmojiScared from "../assets/emoji/emojiScared.png";
import EmojiSmiley from "../assets/emoji/emojiSmiley.png";
import doggo from "../assets/doggo.png";
import doggo2 from "../assets/doggo2.jpg";
import doggo3 from "../assets/doggo3.jpg";


export default function Chat(props){

    const {palette} = useContext(paletteContext)

    const listEmoji = [EmojiDead, EmojiMoney, EmojiScared, EmojiSmiley]

    const [messages, setMessages] = useState([])

    const fakeUsers = [{
        username : 'Happy Doggo',
        profile : `${doggo}`
    },
    {
        username : 'Snackosaurus',
        profile : `${doggo2}`
    }]

    const myUser = {
        username : 'Chien Mechant',
        profile : `${doggo3}`
    }

    const messageUpdated = messages.map((message, index) => {
        return(
            <Message message={message.message} username={message.username} profile={message.profile} index={index} key={index}/>
        )
    })

    //used for testing
    useEffect(() => {
        const interval = setInterval(() => {
            let indexUsed  = Math.floor(Math.random() * fakeUsers.length)
            let indexMessage = Math.floor(Math.random() * listEmoji.length)
            setMessages([{
                username: fakeUsers[indexUsed].username,
                profile: fakeUsers[indexUsed].profile,
                message: listEmoji[indexMessage]
            }, ...messages])
        }, 5000)
        return () => clearInterval(interval)
    }, [messages])

    const handleEmojiClick = (emoji) => {
        setMessages([{
            username: myUser.username,
            profile: myUser.profile,
            message: emoji
        }, ...messages])
    }

    return(
        <div className='chat--container' style={{backgroundColor:`${palette.color2}`}}>
            <LeaderBid currentItem={props.currentItem}/>

            <div className='chat--message--container' >
                {messageUpdated}
            </div>

            <EmojiBox listEmoji={listEmoji} handleEmojiClick={handleEmojiClick}/>
            <Bid/>

        </div>  
    )
}