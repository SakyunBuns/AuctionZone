import React from 'react'
import { useState } from 'react'
import ImageUpload from './component/ImageUpload'

export default function SellPage(props){
    const reset = {
        item: "", 
        price: "",
        password: "",
        date: "",
        image: ""
}

const [formData, setFormData] = useState(reset)  

console.log(formData)
const handleChange = (event) => {
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
            <p>Item title : </p>
            <input
                type="text"
                name="item"
                onChange={handleChange}
                value={formData.item}
            />
        </label>
        <div className='form--notification'>
            Placeholder for notification
        </div>
        <br />

        <label className='form--label'>
            Price :
            <input
                name="price"
                type="text"
                value={formData.price}
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
            Date :
            <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
            />
        </label>
        <div className='form--notification'>
            Placeholder for notification
        </div>
        <br />

        <ImageUpload value={formData.image} handleChange={handleChange}/> 
        <br />

        <div className='form--button'>
            <button type="submit" style={{padding: `5px 10px`}}>Put to sale</button>
        </div>

      </div>
  </form>
);
}