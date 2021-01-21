import React, { useContext } from 'react'
import { TileContext } from './TakingData'

const Componetns2 = () => {
    const surName = useContext(TileContext)
    return (
        <div className='componentOne'>
            <p className='para'>
                {surName.surName}
            </p>
        </div>
    )
}

export default Componetns2
