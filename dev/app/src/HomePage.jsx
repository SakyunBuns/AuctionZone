import React from 'react'
import { useState } from 'react';
import ItemSection from './component/ItemSection';


function HomePage(props){


    return(
        <div className='page'>
            <ItemSection palette={props.palette}/>
        </div>

    )
}

export default HomePage;