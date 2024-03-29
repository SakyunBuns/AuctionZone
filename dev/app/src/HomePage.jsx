// Nom du fichier: HomePage.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui la page d'accueuil, selon si l'utilisateur est loggé
//                          ce qui sera afficher sera différent
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useEffect, useState, useContext } from 'react'
import ItemSection from './component/ItemSection';
import { UserDAO } from './DAO/UserDAO';
import QuickSort from './assets/QuickSort';
import { userContext } from './component/Context';
import { ItemDAO } from './DAO/ItemDAO';

export default function HomePage(props) {

    const statEnum = {
        'USER_OFFLINE': <ItemSection sectionName={'Popular Item'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />,
        'USER_ONLINE': <ItemSection sectionName={'User recommendation'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
    }
    
    const [userLoggedIn, setUserLoggedIn] = useState('');
    const { user } = useContext(userContext)

    const qs = new QuickSort();

    const [itemsSections, setItemsSections] = useState(null);

    useEffect(() => {
        if(user.id == 0) {
            setUserLoggedIn('USER_OFFLINE');
        }else{
            setUserLoggedIn('USER_ONLINE');
        }
    }, [user])


    useEffect(() => {
        
        if(user.id === 0) {
            ItemDAO.getFavoriteTags((tagViewCount) => {
                console.log(tagViewCount)
                const sortedArray = qs.reverseSort(tagViewCount, "nbCount");
                const sortedArray5 = sortedArray.slice(0, 5);
                const tempArray = sortedArray5.map((item) => {
                    return <ItemSection sectionName={item.id_tag} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} key={item.id_tag}/>
                });
                
                setItemsSections(tempArray);
            })
        }else{
            UserDAO.getUserTags(user.id, (tagViewCount) => {
                const sortedArray = qs.reverseSort(tagViewCount, "nbCount");
                const sortedArray5 = sortedArray.slice(0, 5);
                const tempArray = sortedArray5.map((item) => {
                    return <ItemSection sectionName={item.id_tag} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} key={item.id_tag}/>
                });
        
                setItemsSections(tempArray);
            });
        }
    }, [userLoggedIn, user]);

    

    return (
        <div className='page'>
            {statEnum[userLoggedIn]}
            {itemsSections}
        </div>
    )
};