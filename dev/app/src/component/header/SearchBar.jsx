// Nom du fichier: SearchBar.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui sert à afficher la barre de recherche du siteweb.
//                          On peut faire une recherche par catégorie à partir des tags fournis.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useState } from 'react'
import { tagsContext, userContext } from "../Context"
import Select from 'react-select'
import { useContext } from 'react'
import { ItemDAO } from '../../DAO/ItemDAO'
import { UserDAO } from '../../DAO/UserDAO'

export default function SearchBar(props){

    const { tags } = useContext(tagsContext)
    const { user } = useContext(userContext)

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
                user.id != null ?
                UserDAO.addUserTag({id_user:user.id, id_tag:selectedOption}, (result)):
                console.log("not logged in")
            })
            
        }
    }

    return(
        <form style={styleContainer} onSubmit={handleSubmit}>
            <input type="text" placeholder='Seach...' style={styleInput} onChange={handleInputChange}/>
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