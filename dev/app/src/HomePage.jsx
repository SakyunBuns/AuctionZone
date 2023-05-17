import React, { useEffect, useState } from 'react'
import ItemSection from './component/ItemSection';
import { UserDAO } from './DAO/UserDAO';

export default function HomePage(props) {

    const [userLoggedIn, setUserLoggedIn] = useState(null);

    useEffect(() => {
        UserDAO.getUserTags(1, (user) => {
            console.log(user);
        });
        setUserLoggedIn(true);
    }, [userLoggedIn]);

    return (
        <div className='page'>
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />
            <ItemSection sectionName={'Good doggo'} sectionLink={'https://www.google.com'} bottomSpacing={20} containerHeight={300} imageSize={200} />


        </div>

    )
};