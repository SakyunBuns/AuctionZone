import { useState } from "react";

export default function Square() {
    const [value, setValue] = useState(null);
    
    function handleClick() {
        if(value == "X"){
            setValue(null);
        }
        else{
            setValue("X")
        }
    }


    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    );
}