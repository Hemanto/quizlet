import React, { createContext, useState } from "react";
import Component1 from "./Component1";
import Componetns2 from "./Componetns2";
export const TileContext = createContext();

const TakingData = () => {
    const [inputdata, setInputdata] = useState({
        title: "",
        surName: "",
        bordOne: true,
        bordTwo: false
    });
    console.log({ inputdata });

    return (
        <div>
            <input
                onChange={(e) => setInputdata({ ...inputdata, title: e.target.value })}
                placeholder="for first tile"
            />
            <input
                onChange={(e) =>
                    setInputdata({ ...inputdata, surName: e.target.value })
                }
                placeholder="for second tile"
            />
            <TileContext.Provider value={{ inputdata, setInputdata }}>
                {/* {inputdata.bordOne ? <Component1 /> : <Componetns2 />} */}
                {inputdata.bordOne && <Component1 />}
                {!inputdata.bordOne && <Componetns2 />}
            </TileContext.Provider>
        </div>
    );
};

export default TakingData;
