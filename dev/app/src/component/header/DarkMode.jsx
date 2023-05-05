import React from 'react'

export default function DarkMode(props) {

    const style = {
        gridAread: `${props.gridName}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }

    return(
        <div style={style}>
            <button onClick={props.handleDarkMode} style={{padding:'5px'}}>
                {props.darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}