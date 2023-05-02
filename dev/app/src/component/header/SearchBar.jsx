import React, { useState } from 'react'
import { tagsContext } from "../Context"
import Select from 'react-select'
import { useContext } from 'react'

export default function SearchBar(props){

    const { tags } = useContext(tagsContext)

    const [selectedOption, setSelectedOption] = useState("")

    const option = tags.map((tag) => {
        return { value: tag, label: tag }
    })

    const optionWidth = 200
    const searchHeight = 38

    const styleContainer = {
        gridArea:`${props.gridName}`,
        display: 'flex',
        width: '100%',
    }

    const styleInput = {
        alignSelf: 'center',
        width:`calc(100% - ${optionWidth}px)`,
        maxWidth: '800px',
        height: `${searchHeight}px`,
        border: '0',
        paddingLeft: '5px'
    }

    const styleSearch = {
        width: `${optionWidth}px`,
        height: `${searchHeight}px`,
        alignSelf: 'center'
    }

    const stylesSelect = {
        control: (base) => ({
          ...base,
            border:0,
            borderRadius: 0,
        })
    }

    const handleSelectChange = (element) => {
        setSelectedOption(element.label)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(selectedOption == ""){
            //INSERT DAO FOR ALL SEARCH
        }
        else{
            //INSERT DAO WITH SEARCH WITH CATEGORIE == selectedOption
        }
    }

    return(
        <form style={styleContainer} onSubmit={handleSubmit}>
            <input type="text" placeholder='SEARCH HERE!' style={styleInput}/>
            <div style={styleSearch}>
                <Select
                    styles={stylesSelect}
                    closeMenuOnSelect={false}
                    options={option}
                    placeholder="Categories"
                    isClearable={true}
                    onChange={handleSelectChange}
                />
            </div>
            <input type="submit" hidden />
        </form>
    )   
}