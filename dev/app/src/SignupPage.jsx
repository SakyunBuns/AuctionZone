import React, { useEffect, useState } from 'react'


export default function SignUpPage(props){

    const reset = {
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

    const regexNumber = /\d/
    const regexLenght8 = /.{8,}/
    const regexUpperLower = /(?=.*[a-z])(?=.*[A-Z])/


    const [checkCapital, setCheckCapital] = useState(false)
    const [checkNumber, setCheckNumber] = useState(false)
    const [checkLength, setCheckLength] = useState(false)
    const [checkPasswordSame, setCheckPasswordSame] = useState(false)

    const [missingUsername, setMissingUsername] = useState(false)
    const [missingFirstname, setMissingFirstname] = useState(false)
    const [missingLastname, setMissingLastname] = useState(false)
    const [missingEmail, setMissingEmail] = useState(false)
    const [missingPassword, setMissingPassword] = useState(false)
    const [missingAdress, setMissingAdress] = useState(false)
    const [missingCountry, setMissingCountry] = useState(false)
    const [missingDob, setMissingDob] = useState(false)

    const [signUpAttempt, setsignUpAttempt] = useState(0)

    const [formData, setFormData] = useState(reset)  
    
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

    useEffect(() => {
        regexNumber.test(formData.password) ? setCheckNumber(true) : setCheckNumber(false)
        regexLenght8.test(formData.password) ? setCheckLength(true) : setCheckLength(false)
        regexUpperLower.test(formData.password) ? setCheckCapital(true) : setCheckCapital(false)
        formData.passwordVer === formData.password ? setCheckPasswordSame(true) : setCheckPasswordSame(false)

    }, [formData.password, formData.passwordVer, formData.username, checkPasswordSame])

    useEffect(() => {
        if (signUpAttempt > 0){
            formData.username ? setMissingUsername(false) : setMissingUsername(true)
            formData.firstname ? setMissingFirstname(false) : setMissingFirstname(true)
            formData.lastname ? setMissingLastname(false) : setMissingLastname(true)
            formData.email ? setMissingEmail(false) : setMissingEmail(true)
            formData.password ? setMissingPassword(false) : setMissingPassword(true)
            formData.address ? setMissingAdress(false) : setMissingAdress(true)
            formData.country ? setMissingCountry(false) : setMissingCountry(true)
            formData.dob ? setMissingDob(false) : setMissingDob(true)
        }
    }, [signUpAttempt, formData.username, formData.firstname, formData.lastname, formData.email, formData.password, formData.address, formData.country, formData.dob])

    const handleSubmit = (event) => {
        event.preventDefault()

        setsignUpAttempt(signUpAttempt + 1)
    };

    const handleReset = (event) => {
        event.preventDefault()
      
        setFormData(reset)
      };

    const formContainerStyle = {
        color: `${props.palette.textColor}`,
        border: `2px solid ${props.palette.color2}`
    }

    return (
      <form onSubmit={handleSubmit} onReset={handleReset} className='page' style={{alignItem:'center', display:'flex'}}>
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
            <p className='form--notification' style={{display: missingUsername ? 'flex' : 'none', color: 'red'}}>
                {missingUsername ? 'Username is missing' : ''}
            </p>
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
            <p className='form--notification' style={{display: missingFirstname ? 'flex' : 'none', color: 'red'}}>
                {missingFirstname ? 'Firstname is missing' : ''}
            </p>
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
            <p className='form--notification' style={{display: missingLastname ? 'flex' : 'none', color: 'red'}}>
                {missingLastname ? 'Lastname is missing' : ''}
            </p>
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
            <p className='form--notification' style={{display: missingEmail ? 'flex' : 'none', color: 'red'}}>
                {missingEmail ? 'Email is missing' : ''}
            </p>
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
                <div className='form--notification--lines'>
                    <p className='form--notification' style={{display: missingPassword ? 'flex' : 'none', color: 'red'}}>
                    {missingPassword ? 'Password is missing' : ''}
                    </p>
                    <p style={formData.password ? {color: checkCapital ? 'green' : 'red'} : null}>Have at lease 1 lower and 1 upper case letter</p>
                    <p style={formData.password ? {color: checkLength ? 'green' : 'red'} : null}>Must be 8 characters long</p>
                    <p style={formData.password ? {color: checkNumber ? 'green' : 'red'} : null}>Must contain a number</p>
                    
                </div>
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
                <p style={formData.passwordVer ? {color: checkPasswordSame ? 'green' : 'red', display:'block'} : {display:'none'} }>
                    {checkPasswordSame ? 'Password match' : 'Password does not match'}
                </p>
            </div>
            <br />

            <label className='form--label'>
            <p>Adresse: </p>
            <input
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
            />
            </label>
            <div className='form--notification'>
                <div className='form--notification--lines'>
                    <p className='form--notification' style={{display: missingAdress ? 'flex' : 'none', color: 'red'}}>
                        {missingAdress ? 'Adress is missing' : ''}
                    </p>
                    <p>
                        Apt, Street, City
                    </p>
                </div>
            </div>
            <br />

            <label className='form--label'>
            <p>Country :</p>
            <input
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
            />
            </label>
            <p className='form--notification' style={{display: missingCountry ? 'flex' : 'none', color: 'red'}}>
                {missingCountry ? 'Country is missing' : ''}
            </p>
            <br />

            <label className='form--label'>
            <p>Date of Birth :</p>
            <input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
            />
            </label>
            <p className='form--notification' style={{display: missingDob ? 'flex' : 'none', color: 'red'}}>
                {missingDob ? 'Date of birth is missing' : ''}
            </p>
            <br />

            <div className='form--button'>
                <button type="reset" style={{padding: `5px 10px`}}>Reset</button>
                <button type="submit" style={{padding: `5px 10px`}}>Sign Up</button>
            </div>

          </div>
      </form>
    );
}