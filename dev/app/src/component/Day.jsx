// Nom du fichier: Day.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui représente une journée en heure, de 8h à 17h.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useContext } from "react";
import { paletteContext } from "./Context";

export default function Day(props) {

    const { palette } = useContext(paletteContext);

    //Fonction par chatGPT
    function getTimeIntervals(date) {
        let timeIntervals = [];
        let currentDate = new Date(date);
        
        // Set the start time to the nearest 30-minute interval after the hour
        currentDate.setMinutes(Math.ceil(currentDate.getMinutes() / 30) * 30);
        
        // Set the start time to the beginning of the hour if it's within the first 30 minutes
        if (currentDate.getMinutes() < 30) {
          currentDate.setMinutes(0);
        }
        
        // Extract the date string from currentDate without any time formatting
        const dateString = currentDate.toISOString().slice(0, 10);
        
        for (let i = 0; i < 9; i++) {
          timeIntervals.push(`${dateString}T${currentDate.toLocaleTimeString('en-US', { hour12: false })}`);
          currentDate.setMinutes(currentDate.getMinutes() + 60);
        }
        
        return timeIntervals;
    }
      
    //DAO of date of search
    const day = props.date
    const hourlyTimes = getTimeIntervals(day);
 
    const hourBoxes = hourlyTimes.map((hour) => {
        let tempStyle = {
            border: '1px solid black',
            width: '100px',
            height: '50px',
            backgroundColor:  `${props.usedDate.includes(hour) ? palette.color3 : palette.color1}`,
            cursor: `${props.usedDate.includes(hour) ? '' : 'pointer'}`
        }

        let formatedHour = new Date(hour).toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })

        
        return (
            <div 
            className="center" 
            key={hour} 
            style={tempStyle}
            onClick={() => {
                props.usedDate.includes(hour) ? console.log('Not available') : props.handleSelectDate(hour)
            }}
            >
                {formatedHour}
            </div>
        )
    })



    return (
        <div className="day--container">
            <div className="day--title">{new Date(day).toLocaleDateString('en-US', { month:'long', day: 'numeric'})}</div>
            {hourBoxes}
        </div>
    )
}