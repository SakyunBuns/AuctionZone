import React, { useEffect, useState } from 'react'
import ItemSection from './component/ItemSection';
import { UserDAO } from './DAO/UserDAO';

export default function HomePage(props) {

    const statEnum = {
        'USER_OFFLINE': <ItemSection sectionName={'Popular Item'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />,
        'USER_ONLINE': <ItemSection sectionName={'User recommendation'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
    }
    
    const [userLoggedIn, setUserLoggedIn] = useState('USER_OFFLINE');

    useEffect(() => {
        UserDAO.getUserTags(1, (user) => {
            console.log(user);
            setUserLoggedIn('USER_ONLINE');
        });
    }, [userLoggedIn]);

    return (
        <div className='page'>
            {statEnum[userLoggedIn]}
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
        </div>

    )
};