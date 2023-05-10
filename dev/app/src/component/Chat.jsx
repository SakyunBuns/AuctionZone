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
import LinkedList from '../assets/LinkedList'


export default function Chat(props){

    const {palette} = useContext(paletteContext)

    const listEmoji = [EmojiDead, EmojiMoney, EmojiScared, EmojiSmiley]

    const [messages, setMessages] = useState(new LinkedList())
    const [displayedMessages, setDisplayedMessages] = useState([])

    const fakeUsers = [{
        username : 'Happy Doggo',
        profile : `${doggo}`
    },
    {
        username : 'Snackosaurus',
        profile : `${doggo2}`
    }]

    const myUser = {
        username : 'ChienMechant',
        profile : `${doggo3}`
    }


 

    // const messageUpdated = messages.map((message, index) => {
    //     return(
    //         <Message message={message.message} username={message.username} profile={message.profile} index={index} key={index}/>
    //     )
    // })

    function newMessage(username, profile, message){
        let temp = messages
        let newMessage = 
        {
            username: username,
            profile: profile,
            message: message
        }

        let tempIndex = temp.getDataFirstIndex(newMessage, "username")

        if( tempIndex !== null){
            temp.removeAt(tempIndex)
            temp.insertToFirst(newMessage)
        }else{
            temp.insertToFirst(newMessage)
        }

        setMessages(temp)


        let messageUpdated = []

        for (let i = 0; i < messages.getSize(); i++) {
            messageUpdated.push(
                <Message message={messages.getAt(i).message} username={messages.getAt(i).username} profile={messages.getAt(i).profile} index={i} key={i}/>
            )
        }

        setDisplayedMessages(messageUpdated)
    }

    //used for testing
    useEffect(() => {
        const interval = setInterval(() => {
            let indexUsed  = Math.floor(Math.random() * fakeUsers.length)
            let indexMessage = Math.floor(Math.random() * listEmoji.length)
            newMessage(fakeUsers[indexUsed].username, fakeUsers[indexUsed].profile, listEmoji[indexMessage])
        }, 2000)
        return () => clearInterval(interval)
    }, [messages])

    const handleEmojiClick = (emoji) => {
        newMessage(myUser.username, myUser.profile, emoji)
    }

    return(
        <div className='chat--container' style={{backgroundColor:`${palette.color2}`}}>
            <LeaderBid currentItem={props.currentItem}/>

            <div className='chat--message--container' >
                {displayedMessages}
            </div>

            <EmojiBox listEmoji={listEmoji} handleEmojiClick={handleEmojiClick}/>
            <Bid/>

        </div>  
    )
}