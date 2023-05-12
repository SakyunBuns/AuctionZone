// Nom du fichier: ImageUpload.jsx
// Contexte de ce fichier:  Ce fichier repésente la composante qui permet de télécharger des images.
//                          On peut choisir le nombre d'images maximum qu'on peut télécharger avec maxImage.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'

export default function ImageUpload(props) {
  
  const [image, setImage] = useState([])
  const [allImages, setAllImages] = useState(null)
  const fileInput = useRef(null)

  
  function handleImage(event) {
    setImage(prevImage => [...prevImage, event.target.files[0]]) 
  }
  
  //ChatGPT solution to keep only a certain number of images
  useEffect(() => {
    const images = image.slice(-props.maxImage).map((image, index) => (
      <img key={index} className='img-uploader--image' src={URL.createObjectURL(image)} alt='image' />
  ))

    setAllImages(images)

    props.updateParentArray(image.slice(-5))
  }, [image])

  function handleInput() {
    fileInput.current.click();
  }

//   function handleSubmit() {
//     const formData = new FormData();
//     image.forEach((img, index) => formData.append(`file${index}`, img));
//     axios.post(props.url, formData).then(res => console.log(res));
//   }


  const imageContainerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    flexWrap: 'nowrap'
  }

  return (
    <div className='img-uploader--container'>
      <div style={imageContainerStyle}>
        {allImages}
      </div>

      <input 
      style={{ display: 'none' }} 
      type='file' 
      name='file' 
      onChange={handleImage} 
      ref={fileInput} multiple />

      <button type="button" className='img-uploader--button' onClick={handleInput}>
        Choose up to {props.maxImage} image{props.maxImage > 1 ? 's' : '' }
      </button>

      {/* <button className='img-uploader--button' onClick={handleSubmit}>
        Upload image(s)
      </button> */}
    </div>
  )
}
