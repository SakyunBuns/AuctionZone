import React from 'react'
import ItemSection from './component/ItemSection'

export default function ProfilePage(props){

    const fontColorStyle = {
        color: props.palette.textColor,
        borderColor: props.palette.textColor
    }

    // This is where the info will be fetched from the database
    const info = {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@gmail.com'

    }




    return(
        <div className='profile--container' style={{backgroundColor:props.palette.color2}}>
            <div className='profile--section'>
                <div style={fontColorStyle} className='profile--content--title'>Profile</div>
                <div style={fontColorStyle} className='profile--content--section'>
                    <div className='profile--content--info--container'>
                        <div className='profile--content--info'>
                            <p >First name</p>
                            <p>{info.firstname}</p>
                        </div>
                        <div className='profile--content--info'>
                            <p>Last name</p>
                            <p>{info.lastname}</p>
                        </div>
                        <div className='profile--content--info'>
                            <p>Email</p>
                            <p>{info.email}</p>
                        </div>
                    </div>
                    <div className='profile--content--button'>
                        <button>Change info</button>
                    </div>
                </div>
            </div>

            <div className='profile--section'>
                <div style={fontColorStyle} className='profile--content--title'>History</div>
                <div className='profile--content--section'>
                    <div className='profile--content--items'>
                        <ItemSection palette={props.palette} sectionName="Bought" containerHeight={150} imageSize={90}/>
                    </div>
                    <div className='profile--content--items'>
                        <ItemSection palette={props.palette} sectionName="Sold" containerHeight={150} imageSize={90}/>
                    </div>
                </div>
            </div>

            <div className='profile--section'>

                <div className='profile--content--section'>
                    <div style={{width:'100%'}}>
                        <ItemSection palette={props.palette} sectionName="Recently viewed" containerHeight={150} imageSize={90}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}