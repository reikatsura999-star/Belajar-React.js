import { useState } from "react";

function useForm(initialvalue = {}){

   const [values,setvalue] = useState(initialvalue)

   const handleChange = (e) => {
     const {name, value} = e.target;
     setvalue({
        ...values,
        [name] : value
     })
   }

   const resetForm = () => {
    setvalue(initialvalue)
   }

   return {values,handleChange,resetForm}
}
export default useForm;