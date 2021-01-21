import React, { createContext, useState } from 'react'
import Component1 from './Component1';
import Componetns2 from './Componetns2';
export const Title = createContext();

const TakingData = () => {

    const [inputdata, setInputdata] = useState([
        {
            title: '',
            surName: '',
            bordOne: true,
            bordTwo: true
        }

    ])
    console.log(inputdata.bordOne);
    console.log(inputdata.title);
    return (
        <div>
            <input onChange={(e) => setInputdata({ ...inputdata, title: e.target.value })} placeholder='for first tile' />
            <input onChange={(e) => setInputdata({ ...inputdata, surName: e.target.value })} placeholder='for second tile' />
            <Title.Provider value={inputdata}>
                {inputdata.bordOne && <Component1 />}
                {inputdata.bordOne && <Componetns2 />}
            </Title.Provider>

        </div>
    )
}

export default TakingData
