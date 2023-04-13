import React from 'react'
import { paletteContext } from './component/Context'

export default function TestPage(){
    const {palette} = React.useContext(paletteContext)

    return(
        <div className='page'>
        </div>
    )
}