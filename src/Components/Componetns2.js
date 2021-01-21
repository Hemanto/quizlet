import React, { useContext } from 'react'
import { Title } from './TakingData'

const Componetns2 = () => {
    const surName = useContext(Title)
    return (
        <div className='componentOne'>
            <p className='para'>
                {surName.surName}
            </p>
        </div>
    )
}

export default Componetns2
