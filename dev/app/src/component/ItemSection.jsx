// Nom du fichier: ItemSection.jsx
// Contexte de ce fichier:  Ce fichier est la composante qui représente une section d'item.
// Auteur : Quoc Huan Tran
// Autre auteurs: Nathaelle Fournier
// Date : Hiver 2023

import React, { useContext, useEffect, useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItemTag from './ItemTag';
import { paletteContext, tagsContext } from "./Context";
import { ItemDAO } from "../DAO/ItemDAO";

export default function ItemSection(props){

    const {palette} = useContext(paletteContext)
    const {tags} = useContext(tagsContext)
    const [items, setItems] = useState([])

    // AU LIEU DE TEST UTILISER APPEL API
    // const test= [
    //     {   
    //         id: 1,
    //         name: 'Barbie',
    //         price: 15.00,
    //         date: '10-10-21',
    //         img: `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`,
    //         link: 'https://www.google.com'
    //     },
    //     {
    //         id: 2,
    //         name: 'Doggo',
    //         price: 15.00,
    //         date: '10-10-21',
    //         img: `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`,
    //         link: 'https://www.google.com'
    //     },
    //     {
    //         id: 3,
    //         name: 'Doggo',
    //         price: 15.00,
    //         date: '10-10-21',
    //         img: `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`,
    //         link: 'https://www.google.com'
    //     },
    //     {
    //         id: 4,
    //         name: 'Doggo',
    //         price: 15.00,
    //         date: '10-10-21',
    //         img: `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`,
    //         link: 'https://www.google.com'
    //     },
    //     {
    //         id: 5,
    //         name: 'Doggo',
    //         price: 15.00,
    //         date: '10-10-21',
    //         img: `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`,
    //         link: 'https://www.google.com'
    //     },
    //     {
    //         id: 6,
    //         name: 'Doggo',
    //         price: 15.00,
    //         date: '10-10-21',
    //         img: `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`,
    //         link: 'https://www.google.com'
    //     },
    //     {
    //         id: 7,
    //         name: 'Doggo',
    //         price: 15.00,
    //         date: '10-10-21',
    //         img: `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`,
    //         link: 'https://www.google.com'
    //     },
    //     {
    //         id: 8,
    //         name: 'Doggo',
    //         price: 15.00,
    //         date: '10-10-21',
    //         img: `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`,
    //         link: 'https://www.google.com'
    //     },
    //     {
    //         id: 9,
    //         name: 'Doggo',
    //         price: 15.00,
    //         date: '10-10-21',
    //         img: `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`,
    //         link: 'https://www.google.com'
    //     }
    // ]

    useEffect(() => {
        if (tags.includes(props.sectionName)) {
            ItemDAO.getItemsByKeyTag(props.sectionName, (result) => {
                const mappedItems = result.map((element) => {
                    return (
                        <ItemTag
                        key={element.id}
                        img={`https://picsum.photos/id/${Math.floor(Math.random() * 500)}/200`}
                        name={element.name}
                        price={parseFloat(element.price)}
                        date={new Date(element.auction_on).toLocaleDateString()}
                        imageSize={props.imageSize}
                        link={element.link}
                        />
                    );
                });
                setItems(mappedItems);
            });
        }
    }, [props.sectionName, tags])

    // const items = test.map(
    //     (item) => {
    //         return(
    //                 <ItemTag 
    //                 key={item.id} 
    //                 img={item.img} 
    //                 name={item.name} 
    //                 price={item.price} 
    //                 date={item.date} 
    //                 imageSize={props.imageSize} 
    //                 link={item.link}
    //                 />
    //         )
    //     }
    // )

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };


    // à faire: carousel
    // https://blog.logrocket.com/building-carousel-component-react-hooks/
    // https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/
    // https://www.youtube.com/watch?v=sR5Z8AJ-zRU
    //  https://www.npmjs.com/package/react-multi-carousel

    const containerStyle = {
        backgroundColor: palette.color2,
        marginBottom : props.bottomSpacing ? `${props.bottomSpacing}px` : '0px', 
        height: props.containerHeight ? `${props.containerHeight}px` : '320px',
    }

    return(
        <div>
            
            <div className="section--title" style={{backgroundColor:palette.color3, color:palette.textColor}}>
                <span>
                    {props.sectionName} | <a href={props.sectionLink}> See all</a>
                </span>
            </div>
            <div className="section--container" style={containerStyle}>
                <Carousel 
                responsive={responsive}
                infinite={true}
                >
                    {items}
                </Carousel>
            </div>
        </div>
    )
}