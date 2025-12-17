import { useState } from "react";

function useLocalStorage(key,initialvalue){
 const [local,setLocal] = useState(() => {
    try {
        const get = window.localStorage.getItem(key)
        return get ? JSON.parse(get) : initialvalue;
    } catch (error) {
        console.log(error);
        return initialvalue;
        
    }
 })

 const setValue = (value) => {
  try {
    setLocal(value)
  window.localStorage.setItem(key,JSON.stringify(value))
  } catch (error) {
    console.log(error);
  }
 }

 return [local,setValue]
}
export default useLocalStorage;