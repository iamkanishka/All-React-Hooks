import React, { useState } from "react";

function UseState() {
    const [counter, setCounter] = useState(0);
     const increment = () => {
        setCounter(counter + 1);
    }

    return (
      <div>
            <p>Hello world</p>
              {counter}

            <button onClick={increment}>click counter</button>
     </div>
 

    );
}

export default UseState;