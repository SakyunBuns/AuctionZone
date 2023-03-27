import React from "react";
import ItemTag from "./ItemTag";

export default function ItemSection(props){

    const test= [{
        name: 'Barbie'
    }]

    const items = test.map(
        (item) => {}
    )

    // à faire: carousel
    // https://blog.logrocket.com/building-carousel-component-react-hooks/
    
    return(
        <div className="section--container" style={{backgroundColor:props.palette.color2}}>
            <div className="section--title" style={{backgroundColor:props.palette.color3, color:props.palette.textColor}}>BARBIES | See all</div>
            <div className="section--content">
                <div className="section--content--arrow" style={{backgroundColor:props.palette.color3}}>{`<<`}</div>
                <div className="section--content--items" style={{backgroundColor:props.palette.color1}}> 
                    <ItemTag palette={props.palette} img={`../dist/assets/doggo.png`} name='doggo' price={15.00} date={`10-10-21`}/> 
                    <ItemTag palette={props.palette} img={`../dist/assets/doggo2.jpg`} name='doggo' price={15.00} date={`10-10-21`}/> 
                    <ItemTag palette={props.palette} img={`../dist/assets/doggo2.jpg`} name='doggo' price={15.00} date={`10-10-21`}/> 
                    <ItemTag palette={props.palette} img={`../dist/assets/doggo2.jpg`} name='doggo' price={15.00} date={`10-10-21`}/> 
                    <ItemTag palette={props.palette} img={`../dist/assets/doggo2.jpg`} name='doggo' price={15.00} date={`10-10-21`}/> 
                    <ItemTag palette={props.palette} img={`../dist/assets/doggo2.jpg`} name='doggo' price={15.00} date={`10-10-21`}/> 
                    <ItemTag palette={props.palette} img={`../dist/assets/doggo2.jpg`} name='doggo' price={15.00} date={`10-10-21`}/> 
                    <ItemTag palette={props.palette} img={`../dist/assets/doggo2.jpg`} name='doggo' price={15.00} date={`10-10-21`}/> 
                    <ItemTag palette={props.palette} img={`../dist/assets/doggo2.jpg`} name='doggo' price={15.00} date={`10-10-21`}/> 
                    <ItemTag palette={props.palette} img={`../dist/assets/doggo2.jpg`} name='doggo' price={15.00} date={`10-10-21`}/> 
                </div>
                <div className="section--content--arrow" style={{backgroundColor:props.palette.color3}}>{`>>`}</div>

            </div>
        </div>
    )
}