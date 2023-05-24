// Nom du fichier: Chat.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui sert à afficher le chat d'émoji entre les utilisateur
//                          ainsi qu'afficher l'offre la plus haute.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useState, useEffect, useContext}from 'react'
import Message from './Message'
import LeaderBid from './LeaderBid'
import { paletteContext, userContext } from './Context'
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
import Bob from '../assets/fakeprofile/bob.webp'
import Godot from '../assets/fakeprofile/godot.webp'
import Angel from '../assets/fakeprofile/angel.jpg'
import JeanPol from '../assets/fakeprofile/jeanpol.jpg'
import SuppaMan from '../assets/fakeprofile/suppaman.jpg'
import GodDog from '../assets/fakeprofile/goddog.jpg'
import SnugDog from '../assets/fakeprofile/snugdog.png'
import ArtLait from '../assets/fakeprofile/artlait.webp'



export default function Chat(props){

    const {palette} = useContext(paletteContext)
    const {user} = useContext(userContext)

    //To change with a fetch from API
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
    },
    {
        username : 'Bob Stewart',
        profile : `${Bob}`
    },
    {
        username : 'Excentrique Café',
        profile : `${Godot}`
    },
    {
        username : 'xxDeadxxAngelxx',
        profile : `${Angel}`
    },
    {
        username : 'JeanPol',
        profile : `${JeanPol}`
    },
    {
        username : 'SuppaMan',
        profile : `${SuppaMan}`
    },
    {
        username : 'Goddoggo',
        profile : `${GodDog}`
    },
    {
        username : 'SnugDog',
        profile : `${SnugDog}`
    },
    {
        username : 'ArtLait',
        profile : `${ArtLait}`
    },
    ]

    const myUser = {
        username : user != null ? user.username : 'Anonydoggo',
        profile : user != null ? user.profile : `${doggo3}`
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

    //used for testing, change with a API fetch
    useEffect(() => {
        const interval = setInterval(() => {
            let indexUsed  = Math.floor(Math.random() * fakeUsers.length)
            let indexMessage = Math.floor(Math.random() * listEmoji.length)
            //Insert API to send message to server
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
            {user.id ? <Bid currentItem={props.currentItem}/> : <></>}

        </div>  
    )
}