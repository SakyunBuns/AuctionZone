import React from 'react'
import { useState } from 'react';
import ItemSection from './component/ItemSection';


function HomePage(props){


    return(
        <div className='page'>
            <ItemSection palette={props.palette} bottomSpacing={true} containerHeight={320} imageSize={200}/>



        </div>

    )
}

export default HomePage;