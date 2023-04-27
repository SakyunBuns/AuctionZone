import React from 'react'
import { paletteContext } from './component/Context'
import Weekend from './component/Weekend'

export default function TestPage(){
    const {palette} = React.useContext(paletteContext)

    return(
        <div className='page'>
            <Weekend date={'2021-04-29T08:00:00'}/>
        </div>
    )
}