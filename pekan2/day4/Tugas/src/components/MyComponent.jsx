import React,{useState,useEffect} from "react";

function MyComponent(){
   const [message,setMessage] = useState ('')

   useEffect(()=>{
    const newMessage = "Komponen di update atau di render"
    console.log(newMessage);
    setMessage(newMessage);
   }, [])

   return(
    <div>
        <h1>Contoh Effect</h1>
        <p>{message}</p>
    </div>
   )
}
export default MyComponent;