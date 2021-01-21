import React, { useContext } from 'react'
import { TileContext } from './TakingData'

const Componetns2 = () => {
    const { inputdata, setInputdata } = useContext(TileContext);
    const changeState = () => {
        console.log("clcik");

        setInputdata({ ...inputdata, bordOne: true });
    };
    return (
        <div onClick={changeState} className='componentTne'>
            <p className='para'>
                {inputdata.surName}
            </p>
        </div>
    )
}

export default Componetns2
