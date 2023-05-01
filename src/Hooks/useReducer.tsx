import React, { useReducer } from "react";

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return {count:state.count+1, showText:state.showText};
            case "toggleShowText":
                return {count:state.count, showText:!state.showText};
                default : 
                return state
    }
}
function useReducerHook() {

    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

    return (
        <div>


            <h1>useReducer</h1>
            {state.showText && <h3> Current Count =  {state.count} </h3>}
            <button onClick={()=>{dispatch({type:"INCREMENT"})}}>click counter</button>
        </div>

    );
}

export default useReducerHook;