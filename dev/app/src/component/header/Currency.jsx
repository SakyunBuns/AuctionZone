import React from "react"

export default function Currency(props){
    //https://www.simplilearn.com/tutorials/reactjs-tutorial/how-to-create-functional-react-dropdown-menu#:~:text=DevelopmentExplore%20Program-,What%20Are%20Dropdowns%3F,the%20dropdown%20list%20is%20fixed.

    const currencyOption =  props.currency.map( (option) => {
        return(
            <option value={option} key={option}>{option}</option>
        )
    })
    
    const style = {
        gridArea:`${props.gridName}`,
        display: 'flex',
        alignItems: 'center',
        width: '100%'

    }

    const handleCurrencyChange = (event) => {
        const currency = event.target.value;
        let temp = props.currency
        let index = temp.indexOf(currency);
        if (index > -1) {
            temp.splice(index, 1);
            temp.unshift(currency);
        }
        props.setCurrency(temp)
    };
    
    return (
        <div style={style}>
            <select onChange={handleCurrencyChange}>
                {currencyOption}
            </select>
        </div>
    );
}