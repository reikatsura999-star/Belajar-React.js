import React from "react";
import useForm from "../hooks/useForm";


function FormComponent(){
    const {values,handleChange,resetForm} = useForm({
        username : "",
        email : "",
    });

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log("form di submit",values);
      resetForm()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="masukan nama anda"
            />
            <br />
            <input type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="masukan email anda"
            />
            <hr />
            <button type="submit">submit</button>
            <button type="button" onClick={resetForm}>reset</button>
        </form>
    )
}

export default FormComponent;