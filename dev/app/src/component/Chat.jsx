import React from 'react'
import Message from './Message'

export default function Chat(props){



    const [messages, setMessages] = React.useState([])
    const [counter, setCounter] = React.useState(0)

    const messageUpdated = messages.map((message, index) => {
        return(
            <Message palette={props.palette} message={message} index={index}/>
        )
    })


    React.useEffect(() => {
        const interval = setInterval(() => {
          setCounter(counter + 1)
          setMessages([`random message ${counter + 1}`, ...messages])
        }, 2000)
        return () => clearInterval(interval)
    }, [counter, messages])

    return(
        <div className='chat--container' style={{backgroundColor:`${props.palette.color2}`}}>
            <div className='chat--leader' style={{backgroundColor:`${props.palette.color3}`}}></div>

            <div className='chat--message--container' >
                {messageUpdated}
            </div>
        </div>  
    )
}