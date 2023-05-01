import React, { useState } from "react";

function useStateHook() {
    const [counter, setCounter] = useState(0);
    const [showCounter, setShowCounter] = useState(false);
    const increment = () => {
        setCounter(counter + 1);
        setShowCounter(!showCounter);
    }
    return (
        <div>
            <h1>Use State</h1>
            {showCounter && <h3> Current Count =  {counter} </h3>}
            <button onClick={increment}>click counter</button>
        </div>


    );
}

export default useStateHook;