import React from 'react'

export default function SearchBar(props){
    
    const styleContainer = {
        gridArea:`${props.gridName}`,
        display: 'flex',
        flexDirection: 'row',
    }

    const styleCenter = {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    }

    const styleInput = {
        alignSelf: 'center',
        width: '100%'
    }

    return(
        <div style={styleContainer}>
            <div style={styleCenter}>
                <input type="text" placeholder='SEARCH HERE!' style={styleInput}/>
            </div>
        </div>
    )   
}