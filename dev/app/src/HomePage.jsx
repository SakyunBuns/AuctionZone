import React from 'react'
import { useState } from 'react';

function HomePage(props){

    const styleHome = {
        width: '100%',
        height: '100%',
        backgroundColor: `${props.palette.color1}`
    }

    return(
        <div style={styleHome}>
            Im homepage
        </div>

    )
}

export default HomePage;