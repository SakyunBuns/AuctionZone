import React from 'react'
import ItemSection from './component/ItemSection';


function HomePage(props){


    return(
        <div className='page'>
            <ItemSection palette={props.palette} sectionName={'Good doggo'} bottomSpacing={20} containerHeight={300} imageSize={200}/>
            <ItemSection palette={props.palette} sectionName={'Good doggo'} bottomSpacing={20} containerHeight={300} imageSize={200}/>
            <ItemSection palette={props.palette} sectionName={'Good doggo'} bottomSpacing={20} containerHeight={300} imageSize={200}/>
            <ItemSection palette={props.palette} sectionName={'Good doggo'} bottomSpacing={20} containerHeight={300} imageSize={200}/>
            <ItemSection palette={props.palette} sectionName={'Good doggo'} bottomSpacing={20} containerHeight={300} imageSize={200}/>
            <ItemSection palette={props.palette} sectionName={'Good doggo'} bottomSpacing={20} containerHeight={300} imageSize={200}/>

        </div>

    )
}

export default HomePage;