import React, { useState, useContext } from 'react'
import { paletteContext } from './component/Context'


export default function SignInPage(props){

    const {palette} = useContext(paletteContext)

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
        color: `${palette.textColor}`,
        border: `2px solid ${palette.color2}`
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