import React from 'react'
import { useState } from 'react'

export default function SignupPage(props){

    const [formData, setFormData] = useState(
        {
            username: "", 
            firstname: "", 
            lastname: "", 
            email: "", 
            password: "",
            passwordVer: "",
            address: "",
            country: "",
            dob: ""
        }
    )  
    
    console.log(formData)
    const handleChange = (event) => {
        const {username, firstname, lastname, email, password, passwordVer, address, country, dob} = event.target
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
            <div className='form--notification'>
                Placeholder for notification
            </div>
            <br />

            <label className='form--label'>
            Firstame :
            <input
                name="firstname"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
            />
            </label>
            <div className='form--notification'>
                Placeholder for notification
            </div>
            <br />
            
            <label className='form--label'>
            Lastname :
            <input
                name="lastname"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
            />
            </label>
            <div className='form--notification'>
                Placeholder for notification
            </div>
            <br />

            <label className='form--label'>
            Email :
            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
            />
            </label>
            <div className='form--notification'>
                Placeholder for notification
            </div>
            <br />

            <label className='form--label'>
            Password :
            <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
            />
            </label>
            <div className='form--notification'>
                Placeholder for notification
            </div>
            <br />

            <label className='form--label'>
            Password Confirm :
            <input
                name="passwordVer"  
                type="password"
                value={formData.passwordVer}
                onChange={handleChange}
            />
            </label>
            <div className='form--notification'>
                Placeholder for notification
            </div>
            <br />

            <label className='form--label'>
            Address :
            <input
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
            />
            </label>
            <div className='form--notification'>
                Placeholder for notification
            </div>
            <br />

            <label className='form--label'>
            Country :
            <input
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
            />
            </label>
            <div className='form--notification'>
                Placeholder for notification
            </div>
            <br />

            <label className='form--label'>
            Date of Birth :
            <input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
            />
            </label>
            <div className='form--notification'>
                Placeholder for notification
            </div>
            <br />

            <button type="submit" style={{padding: `5px 10px`}}>Sign Up</button>
          </div>
      </form>
    );
}