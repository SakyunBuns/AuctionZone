import React, { useContext} from "react";
import { paletteContext} from "./Context";
import Price from './price';


export default function ItemTag(props) {
    const { palette } = useContext(paletteContext);

    const imageSizeStyle = {
        width: props.imageSize ? `${props.imageSize}px` : '200px',
        height: props.imageSize ? `${props.imageSize}px` : '200px',
    };

    const textColorStyle = {
        color: `${palette.textColor}`,
    };

    return (
        <div className="item--container" style={{ backgroundColor: `${palette.color1}` }}>
        <a href={props.link}>
            <div className="item--image--container" style={imageSizeStyle}>
            <img className="item--image" src={props.img} style={{ border: `5px solid ${palette.color3}` }}></img>
            </div>

            <div className="item--desc" style={{ backgroundColor: `${palette.color3}` }}>
            <div className="item--desc--title" style={textColorStyle}>{props.name}</div>
            <div className="item--desc--info">
                {props.price && <div style={textColorStyle}><Price price={props.price}/></div>}
                <div style={textColorStyle}>{props.date}</div>
            </div>
            </div>
        </a>
        </div>
    );
}
