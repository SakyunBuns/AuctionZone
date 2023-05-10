import React, {useContext} from 'react'
import VisitorProfile from '../../assets/visitor.jpg'
import { Link } from 'react-router-dom';
import { paletteContext, userContext } from '../Context'


export default function Profile(props){

    const {palette} = useContext(paletteContext)
    const {user, setUser} = useContext(userContext)

    const imageHeight = props.profileWidth - 20

    const styleContainer = {
        gridArea:`${props.gridName}`,
        display: 'flex',
        flexDirection: 'column',
        justifieContent: 'center',
        alignItem: 'center',
    }

    const styleImg={
        margin:'auto',
        padding: '5px',
        height: `${imageHeight}px`,
        width: `${imageHeight}px`
    }

    const styleText = {
        fontSize : '10px',
        width: '100%',
        textAlign:'center',
        color: `${palette.textColor}`
    } 

    const styleLink= {
        color: `${palette.textColor}`
    }

    const handleSignOut = () => {   
        setUser(null)
    }

    const styleSignInOutBox = {
        display: 'flex',
        flexDirection: 'row',
    }

    return (
        <div style={styleContainer}>
            {
                user ? 
                <Link style={styleLink} to='/Profile'><img src={user.profile} style={styleImg}></img></Link> :
                <img src={VisitorProfile} style={styleImg}></img>
            }

            {
                user ? 
                <div onClick={handleSignOut} style={styleText}><Link style={styleLink} to='/'>Sign out</Link></div> :
                <div style={styleSignInOutBox}>
                    <div style={styleText}><Link style={styleLink} to='/SignIn'>Sign in</Link></div> 
                    <div style={styleText}>|</div>
                    <div style={styleText}><Link style={styleLink} to='/SignUp'>Sign up</Link></div>
                </div>
            }  

        </div>
    )
}