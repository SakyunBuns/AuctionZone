import React from "react";

export default function ItemSection(props){

    return(
        <div className="section--container" style={{backgroundColor:props.palette.color2}}>
            <div className="section--title" style={{backgroundColor:props.palette.color3}}>BARBIES | See all</div>
            <div className="section--content">
                <div className="section--content--arrow" style={{backgroundColor:props.palette.color3}}>{`<<`}</div>
                <div className="section--content--items" style={{backgroundColor:props.palette.color1}}> ALL ITEMS GOES HERE</div>
                <div className="section--content--arrow" style={{backgroundColor:props.palette.color3}}>{`>>`}</div>

            </div>
        </div>
    )
}