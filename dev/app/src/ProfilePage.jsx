import React, { useContext } from 'react'
import ItemSection from './component/ItemSection'
import { paletteContext, userContext} from './component/Context'

export default function ProfilePage(props){

    const {palette} = useContext(paletteContext)
    const {user, setUser} = useContext(userContext)

    const fontColorStyle = {
        color: palette.textColor,
        borderColor: palette.textColor
    }

    return(
        <div className='profile--container' style={{backgroundColor:palette.color2}}>
            <div className='profile--section'>
                <div style={fontColorStyle} className='profile--content--title'>Profile</div>
                <div style={fontColorStyle} className='profile--content--section'>
                    <div className='profile--content--info--container'>
                        <div className='profile--content--info'>
                            <p >Username</p>
                            {user ? <p>{user.username}</p> : <p>Visitor</p>}
                        </div>
                        <div className='profile--content--info'>
                            <p >First name</p>
                            {user ? <p>{user.firstName}</p> : <p>Visitor</p>}
                        </div>
                        <div className='profile--content--info'>
                            <p>Last name</p>
                            {user ? <p>{user.lastName}</p> : <p>Visitor</p>}
                        </div>
                        <div className='profile--content--info'>
                            <p>Email</p>
                            {user ? <p>{user.email}</p> : <p>Visitor</p>}
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
                        <ItemSection sectionName="Bought" containerHeight={150} imageSize={90}/>
                    </div>
                    <div className='profile--content--items'>
                        <ItemSection sectionName="Sold" containerHeight={150} imageSize={90}/>
                    </div>
                </div>
            </div>

            <div className='profile--section'>
                <div className='profile--content--section'>
                    <div style={{width:'100%'}}>
                        <ItemSection  sectionName="Recently viewed" containerHeight={150} imageSize={90}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}