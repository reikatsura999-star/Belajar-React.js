import { useCallback, useState } from "react";

function useToggle(initialvalue = false){
    const [value,setValue] = useState(initialvalue)

    const toggle = useCallback(() =>{
        setValue ((prev) => !prev)

    },[])
    return [value,toggle]
}
export default useToggle;