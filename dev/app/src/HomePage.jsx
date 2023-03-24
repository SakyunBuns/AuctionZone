import React from 'react'
import { useState } from 'react';

function HomePage(props){

    const styleHome = {
        width: '100%',
        height: 'calc(100% - 100px)',
        backgroundColor: `${props.palette.color1}`
    }

    return(
        <div style={styleHome} className='page'>
            Im homepage
        </div>

    )
}

export default HomePage;