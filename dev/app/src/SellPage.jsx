// Nom du fichier: SellPage.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui la page de mise en vente d'un item
//                          elle devrait afficher les plages d'horaires de disponible et permettre un usager d'entrer les informations de sont item à vendre
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useState, useContext } from 'react'
import ImageUpload from './component/ImageUpload'
import { paletteContext, currencyContext } from './component/Context'
import { ItemDAO } from './DAO/ItemDAO';
import Weekend from './component/Weekend'
import RadioTag from './component/RadioTag';
import Converter from './assets/CurrencyConverter';

export default function SellPage(props) {

    const { palette } = useContext(paletteContext)
    const { currency, rates } = useContext(currencyContext);
    const converter = new Converter(rates, 'CAD');

    const reset = {
        item: "",
        itemDescription: "",
        price: "",
        date: "",
    }

    const [tags, setTags] = React.useState([])

    const [formData, setFormData] = useState(reset)

    const [uploadedImage, setUplaodedImage] = useState([])

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
        //console.log(formData)
    }

    const handleSelectDate = (dateSelected) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                date: dateSelected
            }
        })
        // console.log(formData)
    }

    // Solution par ChatGPT
    // Use FormData to send images to the API 
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Use FormData to send images to the API
        const imgFormData = new FormData();
        uploadedImage.forEach((img, index) => imgFormData.append(`file${index}`, img));

        // Convert the image files to binary data
        const binaryDataArray = await Promise.all(
            Array.from(imgFormData).map(async ([key, file]) => {
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
        ItemDAO.createItem({
            name: formData.item,
            description: formData.itemDescription,
            current_status: 'waiting',
            bid_count: 0,
            price: converter.convertToServeur(parseFloat(formData.price), currency[0]),
            id_seller: 1,
            auction_on: formData.date,
            room_id: 1,
        }, (response) => {
            tags.forEach(tag => {
                ItemDAO.addTagItem({ id_item: response[0].id, id_tag: tag })
            });
            if (binaryDataArray.length > 0) {
                ItemDAO.addImageItem({ id_item: response[0].id, images: binaryDataArray })
            }

        });

        console.log(binaryDataArray)
    };

    const formContainerStyle = {
        color: `${palette.textColor}`,
        border: `2px solid ${palette.color2}`,
        padding: `20px`,
        height: `fit-content`,
        alignSelf: `center`,
    }

    function dateFormating(date) {
        if (date != "") {
            const convertDate = new Date(date)

            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            }
            return convertDate.toLocaleString('en-US', options)
        }
        else {
            return ""
        }
    }

    return (
        <form onSubmit={handleSubmit} className='page' style={{ alignItem: 'center', display: 'flex', justifyContent: 'center' }}>
            <div className='flex--row' style={formContainerStyle}>
                <div className='form--container' >
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
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </label>
                    <div className='form--notification'>
                        Placeholder for notification
                    </div>
                    <br />

                    <label className='form--label'>
                        Auction start time :
                        <input
                            disabled
                            value={dateFormating(formData.date)} />
                    </label>
                    <div className='form--notification'>
                        Click on avaible schedule to the right
                    </div>
                    <br />

                    <label className='form--label'>
                        <p>Item Description : </p>
                        <textarea
                            rows={6}
                            cols={50}
                            type="text"
                            name="itemDescription"
                            onChange={handleChange}
                            value={formData.itemDescription}
                        />
                    </label>
                    <div className='form--notification'>
                        Placeholder for notification
                    </div>
                    <br />

                    <RadioTag setTags={setTags} />
                    <br />

                    <ImageUpload updateParentArray={setUplaodedImage} maxImage={5}/>


                    <br />
                    <div className='form--button'>
                        <button type="submit" style={{ padding: `5px 10px` }}>Put to sale</button>
                    </div>

                    <br />
                </div>

                <Weekend date={'2021-04-29T08:00:00'} handleSelectDate={handleSelectDate} />
            </div>
        </form>

    );
}