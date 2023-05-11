import React, { useState, useContext } from "react";
import { paletteContext } from "./component/Context";

export default function SearchPage(props) {
    const { palette } = useContext(paletteContext);
    const [searchResult, setSearchResult] = useState([]);


    if (props.searchResult != null) {
        let listItems = [];
        for (let idx; idx < props.searchResult.length; idx++) {
            setSearchResult(listItems.push(<li>{props.searchResult[idx]}</li>));
        }
    }


    return (<div>SearchPage
        {searchResult}
    </div>);
}