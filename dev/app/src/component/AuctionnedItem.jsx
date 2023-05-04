import React, { useState, useContext } from 'react'
import AuctionPreviewImage from './AuctionPreviewImage'
import { paletteContext, itemContext } from './Context'

export default function AuctionnedItem(props){

    const {palette} = useContext(paletteContext)
    // const {item} = useContext(itemContext)
    

    //ARRAY OF IMAGES FROM SERVER 
    const [testImages, setTestImages] = useState([
        {
        id: 0,    
        img : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`
        },
        {
        id: 1,    
        img : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`
        },
        {
        id: 2,    
        img : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`
        },
        {
        id: 3,    
        img : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`
        },
        {
        id: 4,    
        img : `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`
        },

    ])

    const previewTestImages = testImages.map( image => {

        const numberImage =  testImages.length - 1
        const height = 100 / numberImage - 1
        const previewStyle = {
            height: `${height}%`,
            backgroundImage:`url(${image['img']})`
        }
    
        if (image !== testImages[0]){
            return(
                <AuctionPreviewImage key={image.id} id={image.id} previewStyle={previewStyle} handleClick={handleClick}/>
            )
        }
    })
    
    
    function handleClick(event) {
        const id = event.target.id;
        const index = testImages.findIndex(image => image.id === Number(id));
        const temp = [...testImages];
        const tempImageMain = temp[0];
        const tempImage = temp[index];
        temp.splice(index, 1);
        temp.unshift(tempImage);
        temp.splice(1, 1)
        temp.splice(index, 0, tempImageMain)
        setTestImages(temp);
        console.log(item)

    }


    return(
        <div className='auction--left--upper'>
            <div className='auction--text' style={{backgroundColor: palette.color3}}>
                <p> {props.item.name != null ? props.item.name : "dumdummy"}</p>
                <p>Remaining Time : {props.item.time_remaining}</p>
                <p>Starting bid : {props.item.price}</p>
            </div>

            <div className='auction--image--section' style={{backgroundColor: palette.color2}}>
                <div className='auction--image--selected' style={{backgroundImage:`url(${testImages[0]['img']})`, transition: '0.5s'}}></div>
                <div className='auction--image--preview--container'>
                    {previewTestImages}
                </div>

        
            </div>
        </div>
    )
}