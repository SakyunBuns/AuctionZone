import React, { useState, useContext } from 'react'
import ImageUpload from './component/ImageUpload'
import { paletteContext } from './component/Context'

export default function SellPage(props){

    const {palette} = useContext(paletteContext)

    const reset = {
        item: "", 
        price: "",
        password: "",
        date: ""
}

const [formData, setFormData] = useState(reset)  

const [uploadedImage, setUplaodedImage] = useState([])

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
    console.log(uploadedImage)
};

const formContainerStyle = {
    color: `${palette.textColor}`,
    border: `2px solid ${palette.color2}`
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

        <ImageUpload updateParentArray={setUplaodedImage}/> 
        <br />

        <div className='form--button'>
            <button type="submit" style={{padding: `5px 10px`}}>Put to sale</button>
        </div>

      </div>
  </form>
);
}