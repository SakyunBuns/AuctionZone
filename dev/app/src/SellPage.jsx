import React, { useState, useContext } from 'react'
import ImageUpload from './component/ImageUpload'
import { paletteContext } from './component/Context'
import { ItemDAO } from './DAO/ItemDAO';

export default function SellPage(props) {

    const { palette } = useContext(paletteContext)

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
        // console.log(formData)
    }


        // Use FormData to send images to the API
        const formData = new FormData();
        uploadedImage.forEach((img, index) => formData.append(`file${index}`, img));
      
        // Convert the image files to binary data
        const binaryDataArray = await Promise.all(
          Array.from(formData).map(async ([key, file]) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            return new Promise((resolve) => {
              reader.onload = () => {
                resolve(reader.result);
              };
            });
          })
        );
      
        // Call the DAO with the binary data
        ItemDAO.create_item({ 
          name: formData.item, 
          description: "", 
          current_status: 'waiting', 
          bid_count: 0, 
          price: parseFloat(formData.price), 
          id_seller: 1, 
          auction_on: formData.date, 
          room_id: 1, 
          images: binaryDataArray
        });
        
        console.log(binaryDataArray)
      };
    const formContainerStyle = {
        color: `${palette.textColor}`,
        border: `2px solid ${palette.color2}`
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='page' style={{ alignItem: 'center', display: 'flex' }}>
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

                    {/* <br /> */}

                    <div className='form--button'>
                        <button type="submit" style={{ padding: `5px 10px` }}>Put to sale</button>
                    </div>

                </div>
            </form>
            <br />
            <ImageUpload updateParentArray={setUplaodedImage} />
        </div>
    );
}