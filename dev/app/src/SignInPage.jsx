// Nom du fichier: SignInPage.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui permet de se connecter à son compte
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useState, useContext } from 'react'
import { paletteContext, userContext } from './component/Context'
import { UserDAO } from './DAO/UserDAO';
import noissette from "./assets/doggo3.jpg";
// import { useHistory } from 'react-router-dom';



export default function SignInPage(props) {

    const { palette } = useContext(paletteContext)
    const {user, setUser} = useContext(userContext)
    const [formData, setFormData] = useState(
        {
            username: "",
            password: "",
        }
    )

    // const history = useHistory()

    console.log(formData)
    const handleChange = (event) => {
        const { username, password } = event.target
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
        UserDAO.is_login_valid(formData.username, formData.password, (res) => {
            if (res) {
                console.log("Login success")
                let loggedUser = {
                    id: res[0].id,
                    username: res[0].username,
                    firstName: res[0].name,
                    lastName: res[0].lastname,
                    email: res[0].email,
                    password: res[0].password,
                    profile : noissette
                }
                setUser(loggedUser)
                // setTimeout(() => {
                //     history.push('/')
                //   }, 1500)
            } else {
                console.log("Login failed")
            }
        })

        console.log(formData)
    };

    const formContainerStyle = {
        color: `${palette.textColor}`,
        border: `2px solid ${palette.color2}`
    }

    return (
        <form onSubmit={handleSubmit} className='page' style={{ alignItem: 'center', display: 'flex' }}>
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

                <button type="submit" style={{ padding: `5px 10px` }}>Sign in</button>
            </div>
        </form>
    );
}