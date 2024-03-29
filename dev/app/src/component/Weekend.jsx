// Nom du fichier: Weekend.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui représente une fin de semaine, soit deux Day.
//                          C'est la période où on peut faire aux enchères.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React from "react"
import { paletteContext } from "./Context"
import Day from "./Day"

export default function Weekend(props) {

    //DAO to get what date are already used
    const usedDate = ["2023-05-27T14:00:00", "2023-05-28T08:00:00", "2023-05-27T12:00:00"]

    const day2 = new Date(props.date)
    day2.setDate(day2.getDate() + 1)
    
    const day2String = day2.toISOString()

    return (
        <div className="weekend--container">
            <Day date={props.date} usedDate={usedDate} handleSelectDate={props.handleSelectDate}/>
            <Day date={day2String} usedDate={usedDate} handleSelectDate={props.handleSelectDate}/>
        </div>

    )


}