import React, { useContext} from "react";
import { paletteContext } from "./Context";

export default function Message(props) {

    const {palette} = useContext(paletteContext)

    let style = {}
    props.index %2 === 0 ? 
    style = {backgroundColor: `${palette.color2}`}
    : style = {backgroundColor: `${palette.color3}`}

    return (
        <div className="chat--message" style={style}>
            <div className="chat--message--left">
                <div className="chat--message--left--profile" style={{backgroundImage:`url('${props.profile}')`}}></div>
                <p>{props.username}</p>
            </div>
            <div className="chat--message--right" >
                <div className="chat--message--right--emoji" style={{backgroundImage:`url('${props.message}')`}}></div>
            </div>
        </div>
    );
}