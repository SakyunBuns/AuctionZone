import React, { useEffect, useState } from 'react'
import ItemSection from './component/ItemSection';
import { UserDAO } from './DAO/UserDAO';
import QuickSort from './assets/QuickSort';

export default function HomePage(props) {

    const statEnum = {
        'USER_OFFLINE': <ItemSection sectionName={'Popular Item'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />,
        'USER_ONLINE': <ItemSection sectionName={'User recommendation'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
    }
    
    const [userLoggedIn, setUserLoggedIn] = useState('USER_OFFLINE');

    const qs = new QuickSort();

    const [itemsSections, setItemsSections] = useState(null);

    useEffect(() => {
        UserDAO.getUserTags(1, (tagViewCount) => {
            // console.log(tagViewCount)
            const sortedArray = qs.reverseSort(tagViewCount, "nbCount");
            // console.log(sortedArray)
            const tempArray = sortedArray.map((item) => {
                return <ItemSection sectionName={item.id_tag} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} key={item.id_tag}/>
            });
            
            setItemsSections(tempArray);
        });
    }, [userLoggedIn]);

    return (
        <div className='page'>
            {statEnum[userLoggedIn]}
            {itemsSections}
        </div>
    )
};