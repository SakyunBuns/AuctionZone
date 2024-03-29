// Nom du fichier: RadioTag.jsx
// Contexte de ce fichier:  Ce fichier est la composante  le selecteur de tags pour les items.
//                          Il permet de choisir plusieurs tags pour un item.     
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useContext, useState } from "react"
import { tagsContext } from "./Context"
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

export default function RadioTag(props) {

    const { tags } = useContext(tagsContext)
    const animatedComponents = makeAnimated();
    const [selectedOptions, setSelectedOptions] = useState([]);

    const option = tags.map((tag) => {
        return { value: tag, label: tag }
    })

    const handleSelectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        let temp = []
        selectedOptions.forEach(element => {
            temp.push(element.value)
        });
        //console.log(temp)

        props.setTags(temp)
    };

    return(
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={option}
            placeholder="Select tags"
            onChange={handleSelectChange}
            value={selectedOptions}
        />
    )
}
