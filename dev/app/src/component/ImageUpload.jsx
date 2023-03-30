import React from 'react';
import axios from 'axios';

//Source for more updated code
//https://www.youtube.com/watch?v=YOGgaYUW1OA

//Source for more costum
//https://www.youtube.com/watch?v=XeiOnkEI7XI&t=17s


export default function ImageUpload(props) {

    const [image, setImage] = React.useState();

    const fileInput = React.useRef();

    function handleImage(event){
        console.log(event.target.files[0])
        setImage(event.target.files[0])
    }

    function handleSubmit(){
        const formData = new FormData();
        formData.append('file', image, image.name)
        //PROPS URL est le lien vers le serveur
        axios.post(props.url, formData)
        .then(res => console.log(res))
    }

    function handleInput(){
        fileInput.current.click();
    }

    return (
        <div>
            {image ? <img src={URL.createObjectURL(image)} alt='image'/> : null}

            <input 
            style={{display: 'none'}}
            type='file' name='file' 
            onChange={handleImage}
            ref={fileInput}
            />
            
            <button onClick={handleInput}>Upload</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}