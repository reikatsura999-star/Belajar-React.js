import { useState,useEffect } from "react";

function useFetch(url){

    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(false)
    const [eror,setEror] = useState (null)

    useEffect(() =>{
       const fetchData = async () => {

        setIsLoading(true)
        setEror(false)

        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error("https eror status",res.eror);
                
            }
            const result = await res.json()
            setData(result)
        } catch (error) {
           setEror(eror) 
        } finally{
            setIsLoading(false)
        }
       }
       fetchData()
        
    },[url])
    return {data,isLoading,eror}
}
export default useFetch;