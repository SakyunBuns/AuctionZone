import React from "react";

export default function ItemTag(props){

    const imageSizeStyle = {
        width: props.imageSize ? `${props.imageSize}px` : '200px',
        height: props.imageSize  ? `${props.imageSize}px` : '200px',
    }

    return (
        <div className="item--container" style={{backgroundColor:`${props.palette.color3}`}}>
            
            <div className="item--image--container" style={imageSizeStyle}>
                <img className="item--image" src={props.img} style={{border:`3px solid ${props.palette.color2}`}}></img>
            </div>

            <div className="item--desc">
                <div className="item--desc--title">{props.name}</div>
                <div className="item--desc--info">
                    <div>{props.price}$</div>
                    <div>{props.date}</div>
                </div>
            </div>
            
        </div>
    )
}