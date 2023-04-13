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
            <p>{props.message}</p>
        </div>
    );
}