import { useState } from "react";

function useCounter(initialvalue = 0){
    
    const [value,setvalue] = useState(initialvalue)

    const increment = () => setvalue (prev => prev + 1);

    const decrement = () => setvalue (prev => prev - 1);

    const reset = () => setvalue (initialvalue)

    return {value,increment,decrement,reset}

}

export default useCounter;