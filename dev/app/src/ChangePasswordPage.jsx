import React, { useState, useEffect, useContext} from "react";
import { paletteContext } from "./component/Context";

export default function ChangePasswordPage(props) {

    const { palette } = useContext(paletteContext);

    const fakeDB = {
        username: "johndoe", 
        firstname: "john", 
        lastname: "doe", 
        email: "john.doe@gmail.com", 
        password: "AAAaaa111",
        passwordVer: "AAAaaa111",
        address: "123 baker street",
        country: "CA",
        dob: "1900-01-01"
    }

    const [formData, setFormData] = useState(
        {
            oldPassword: "",
            newPassword: "",
            newPasswordVer: ""
        }
    )  

    const regexNumber = /\d/
    const regexLenght8 = /.{8,}/
    const regexUpperLower = /(?=.*[a-z])(?=.*[A-Z])/

    const [checkCapital, setCheckCapital] = useState(false)
    const [checkNumber, setCheckNumber] = useState(false)
    const [checkLength, setCheckLength] = useState(false)
    const [checkPasswordSame, setCheckPasswordSame] = useState(false)

    const [missingPassword, setMissingPassword] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)
    const [signUpAttempt, setsignUpAttempt] = useState(0)

    const handleChange = (event) => {
        const {oldPassword, newPassword, newPasswordVer} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    useEffect(() => {
        regexNumber.test(formData.newPassword) ? setCheckNumber(true) : setCheckNumber(false)
        regexLenght8.test(formData.newPassword) ? setCheckLength(true) : setCheckLength(false)
        regexUpperLower.test(formData.newPassword) ? setCheckCapital(true) : setCheckCapital(false)
        formData.newPasswordVer === formData.newPassword ? setCheckPasswordSame(true) : setCheckPasswordSame(false)
    }, [formData.newPassword, formData.newPasswordVer, checkPasswordSame])

    useEffect(() => {
        if (signUpAttempt > 0){
            formData.newPassword ? setMissingPassword(false) : setMissingPassword(true)
        }else{
            setMissingPassword(false)
        }
    }, [signUpAttempt, formData.newPassword])


    const handleSubmit = (event) => {
        event.preventDefault()
        
        setsignUpAttempt(signUpAttempt + 1)

        let success = true

        //À utiliser un DAO qui check avec DB si le password est le même que l'ancien
        if(formData.oldPassword != fakeDB.password){
            success = false
            setWrongPassword(true)
            console.log('wrong password')
        }
        else{
            setWrongPassword(true)
            console.log('wrong password')
        }

        if(!checkCapital || !checkLength || !checkNumber || !checkPasswordSame){
            success = false
            console.log('password not strong enough')
        }

        if(success){
            console.log('success')
            setTimeout(() => {
                location.href = '/'
            }, 1500)
        }
    };

    const formContainerStyle = {
        color: `${palette.textColor}`,
        border: `2px solid ${palette.color2}`
    }

    return (
        <form onSubmit={handleSubmit} className='page' style={{alignItem:'center', display:'flex'}}>
            <div className='form--container' style={formContainerStyle}>
                <label className='form--label'>
                    Old Password :
                <input
                    name="oldPassword"
                    type="password"
                    value={formData.oldPassword}
                    onChange={handleChange}
                />
                </label>
                <div className='form--notification'>
                    <div className='form--notification--lines'>
                        <p className='form--notification' style={{display: wrongPassword ? 'flex' : 'none', color: 'red'}}>
                            {wrongPassword ? 'Wrong Password' : ''}
                        </p>
                    </div>
                </div>
                <br />

                <label className='form--label'>
                    New Password :
                <input
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleChange}
                />
                </label>
                <div className='form--notification'>
                    <div className='form--notification--lines'>
                        <p className='form--notification' style={{display: missingPassword ? 'flex' : 'none', color: 'red'}}>
                        {missingPassword ? 'Password is missing' : ''}
                        </p>
                        <p style={formData.newPassword ? {color: checkCapital ? 'green' : 'red'} : null}>Have at lease 1 lower and 1 upper case letter</p>
                        <p style={formData.newPassword ? {color: checkLength ? 'green' : 'red'} : null}>Must be 8 characters long</p>
                        <p style={formData.newPassword ? {color: checkNumber ? 'green' : 'red'} : null}>Must contain a number</p>
                        
                    </div>
                </div>
                <br />
  
                <label className='form--label'>
                Password Confirm :
                <input
                    name="newPasswordVer"  
                    type="password"
                    value={formData.newPasswordVer}
                    onChange={handleChange}
                />
                </label>
                <div className='form--notification'>
                    <p style={formData.newPasswordVer ? {color: checkPasswordSame ? 'green' : 'red', display:'block'} : {display:'none'} }>
                        {checkPasswordSame ? 'Password match' : 'Password does not match'}
                    </p>
                </div>
                <br/>

                <div className='form--button'>
                    <button type="submit" style={{padding: `5px 10px`}}>Update</button>
                </div>
    
            </div>
        </form>
      );
  }