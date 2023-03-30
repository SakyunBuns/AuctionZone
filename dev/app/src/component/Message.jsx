import React from "react";

export default function Message(props) {

    
    let style = {}
    props.index %2 === 0 ? 
    style = {backgroundColor: `${props.palette.color2}`}
    : style = {backgroundColor: `${props.palette.color3}`}

    return (
        <div className="chat--message" style={style}>
            <p>{props.message}</p>
        </div>
    );
}