import React from "react"
import { paletteContext } from "./Context"
import Day from "./Day"

export default function Weekend(props) {

    //DAO to get what date are already used
    const usedDate = ["2021-04-29T08:00:00", "2021-04-29T08:30:00", "2021-04-29T09:00:00", "2021-04-30T09:00:00"]

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