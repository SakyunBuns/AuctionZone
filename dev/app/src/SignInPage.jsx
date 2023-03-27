import React from 'react'
import { useState } from 'react'

export default function SignInPage(props){

    const [formData, setFormData] = useState(
        {
            username: "", 
            password: "",
        }
    )  
    
    console.log(formData)
    const handleChange = (event) => {
        const {username, password} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
    //INSERT DAO
    
     console.log(formData)
    };

    const formContainerStyle = {
        color: `${props.palette.textColor}`,
        border: `2px solid ${props.palette.color2}`
    }

    return (
      <form onSubmit={handleSubmit} className='page' style={{alignItem:'center', display:'flex'}}>
          <div className='form--container' style={formContainerStyle}>

            <label className='form--label'>
            <p>Username : </p>
            <input
                type="text"
                name="username"
                onChange={handleChange}
                value={formData.username}
            />
            </label>
           <br></br>

            <label className='form--label'>
            Password :
            <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
            />
            </label>
            <br />

            <button type="submit" style={{padding: `5px 10px`}}>Sign in</button>
          </div>
      </form>
    );
}