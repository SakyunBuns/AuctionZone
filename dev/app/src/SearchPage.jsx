// Nom du fichier: SearchPage.jsx
// Contexte de ce fichier:  Ce fichier n'est pas complété, il représentait la page qui affiche le résultat de la recherche.
// Auteur : Nathaelle Fournier
// Autre auteurs: Quoc Huan Tran
// Date : Hiver 2023

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