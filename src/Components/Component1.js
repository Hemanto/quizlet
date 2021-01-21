import React, { useContext, useEffect, useState } from "react";
import { TileContext } from "./TakingData";

const Component1 = () => {
    //const inputdata = useContext(TileContext);

    const { inputdata, setInputdata } = useContext(TileContext);

    const changeState = () => {
        console.log("clcik");

        setInputdata({ ...inputdata, bordOne: false });
    };

    // useEffect(() => {
    //   setInputdata({
    //     ...inputdata,
    //       bordOne: false,
    //   })
    //   }, []);

    console.log({ inputdata, setInputdata });

    return (
        <div onClick={changeState} className="componentOne">
            <p className="para">{inputdata.title}</p>
        </div>
    );
};

export default Component1;
