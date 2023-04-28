import React, { useContext } from "react";
import { paletteContext } from "./Context";

export default function Day(props) {

    const { palette } = useContext(paletteContext);
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
        
        for (let i = 0; i < 18; i++) {
          timeIntervals.push(`${dateString}T${currentDate.toLocaleTimeString('en-US', { hour12: false })}`);
          currentDate.setMinutes(currentDate.getMinutes() + 30);
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
        }

        //Insert disable logic here
        props.usedDate.includes(hour) ? tempStyle.backgroundColor = 'red' : tempStyle.backgroundColor = 'none'

        let formatedHour = new Date(hour).toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' })
        
        //Inser on click function here
        return (
            <div className="center" key={hour} style={tempStyle}>{formatedHour}</div>
        )
    })

    return (
        <div className="day--container">
            <div className="day--title">{new Date(day).toLocaleDateString('en-US', { month:'long', day: 'numeric'})}</div>
            {hourBoxes}
        </div>
    )
}