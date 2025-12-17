import React from "react";
import useCounter from "../hooks/useCounter";

function CounterComponent(){

    const {value,increment,decrement,reset} = useCounter()

    return(
        <div>
            <p>count : {value}</p>
            <button onClick={increment}>Tambah</button>
            <button onClick={decrement}>kurang</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default CounterComponent;