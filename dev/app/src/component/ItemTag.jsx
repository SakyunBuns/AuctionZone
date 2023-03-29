import React from "react";

export default function ItemTag(props){

    console.log(props)

    const imageSizeStyle = {
        width: props.imageSize ? `${props.imageSize}px` : '200px',
        height: props.imageSize  ? `${props.imageSize}px` : '200px',
    }

    const textColorStyle = {
        color:`${props.palette.textColor}`
    }


    return (

        <div  className="item--container" style={{backgroundColor:`${props.palette.color1}`}}>
            <a href={props.link}>
                <div className="item--image--container" style={imageSizeStyle}>
                    <img className="item--image" src={props.img} style={{border:`5px solid ${props.palette.color3}`}}></img>
                </div>

                <div className="item--desc" style={{backgroundColor:`${props.palette.color3}`}}>
                    <div className="item--desc--title" style={textColorStyle}>{props.name}</div>
                    <div className="item--desc--info">
                        <div style={textColorStyle}>{props.price}$</div>
                        <div style={textColorStyle}>{props.date}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}