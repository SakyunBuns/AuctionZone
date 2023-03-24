import React from 'react'
import { useState } from 'react'

export default function SignupPage(props){
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [country, setCountry] = useState("")
    const [dob, setDob] = useState("")
  
    const handleSubmit = (event) => {
      event.preventDefault()
    //INSERT DAO
    
      //   console.log({
    //     username,
    //     name,
    //     lastname,
    //     email,
    //     password,
    //     address,
    //     dob,
    //   });
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
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            </label>
            <br />
            <label className='form--label'>
            Name :
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            </label>
            <br />
            <label className='form--label'>
            Lastname :
            <input
                type="text"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
            />
            </label>
            <br />
            <label className='form--label'>
            Email :
            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            </label>
            <br />
            <label className='form--label'>
            Password :
            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            </label>
            <br />
            <label className='form--label'>
            Address :
            <input
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
            />
            </label>
            <br />
            <label className='form--label'>
            Country :
            <input
                type="text"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
            />
            </label>
            <br />
            <label className='form--label'>
            Date of Birth :
            <input
                type="date"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
            />
            </label>
            <br />
            <button type="submit">Sign Up</button>
          </div>
      </form>
    );
}