import React, { useContext } from 'react'
import { Title } from './TakingData'

const Component1 = () => {
    const title = useContext(Title)
    return (
        <div className='componentOne'>
            <p className='para'>
                {title.title}
            </p>
        </div>
    )
}

export default Component1
