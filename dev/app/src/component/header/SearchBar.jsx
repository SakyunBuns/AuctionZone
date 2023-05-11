import React, { useState } from 'react'
import { tagsContext } from "../Context"
import Select from 'react-select'
import { useContext } from 'react'
import { ItemDAO } from '../../DAO/ItemDAO'
import { UserDAO } from '../../DAO/UserDAO'

export default function SearchBar(props){

    const { tags } = useContext(tagsContext)

    const [selectedOption, setSelectedOption] = useState("")

    const [searchedWord, setSearchedWord] = useState("")

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
        (element != null) ? setSelectedOption(element.label) : setSelectedOption("") 
    }

    const handleInputChange = (event) => {
        setSearchedWord(event.target.value)
        // console.log(searchedWord)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(selectedOption == ""){
            //INSERT DAO FOR ALL SEARCH
            ItemDAO.getItemsByKeyword(searchedWord, (result) => {
                console.log(result)

            })
        }
        else{
            ItemDAO.getItemsByKeyTag(selectedOption, (result) => {
                console.log(result)
                UserDAO.addUserTag({id_user:1, id_tag:selectedOption}, (result))
            })
            
        }
    }

    return(
        <form style={styleContainer} onSubmit={handleSubmit}>
            <input type="text" placeholder='SEARCH HERE!' style={styleInput} onChange={handleInputChange}/>
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