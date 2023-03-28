import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItemTag from './ItemTag';

export default function ItemSection(props){

    //AU LIEU DE TEST UTILISER APPEL API
    const test= [
        {   
            id: 1,
            name: 'Barbie',
            price: 15.00,
            date: '10-10-21',
            img: '../dist/assets/doggo.png'
        },
        {
            id: 2,
            name: 'Doggo',
            price: 15.00,
            date: '10-10-21',
            img: '../dist/assets/doggo2.jpg'
        },
        {
            id: 3,
            name: 'Doggo',
            price: 15.00,
            date: '10-10-21',
            img: '../dist/assets/doggo2.jpg'
        },
        {
            id: 4,
            name: 'Doggo',
            price: 15.00,
            date: '10-10-21',
            img: '../dist/assets/doggo2.jpg'
        },
        {
            id: 5,
            name: 'Doggo',
            price: 15.00,
            date: '10-10-21',
            img: '../dist/assets/doggo2.jpg'
        },
        {
            id: 6,
            name: 'Doggo',
            price: 15.00,
            date: '10-10-21',
            img: '../dist/assets/doggo2.jpg'
        },
        {
            id: 7,
            name: 'Doggo',
            price: 15.00,
            date: '10-10-21',
            img: '../dist/assets/doggo2.jpg'
        },
        {
            id: 8,
            name: 'Doggo',
            price: 15.00,
            date: '10-10-21',
            img: '../dist/assets/doggo2.jpg'
        },
        {
            id: 9,
            name: 'Doggo',
            price: 15.00,
            date: '10-10-21',
            img: '../dist/assets/doggo2.jpg'
        }
    ]

    const items = test.map(
        (item) => {
            return <ItemTag palette={props.palette} key={item.id} img={item.img} name={item.name} price={item.price} date={item.date} imageSize={props.imageSize}/>
        }
    )

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
        backgroundColor: props.palette.color2,
        marginBottom : props.bottomSpacing ? `${props.bottomSpacing}px` : '0px', 
        height: props.containerHeight ? `${props.containerHeight}px` : '320px',
    }

    return(
        <div>

            <div className="section--title" style={{backgroundColor:props.palette.color3, color:props.palette.textColor}}>{props.sectionName} | See all</div>
            
            
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