import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function FormForlocal(){

    const [name,setName] = useLocalStorage("ussername","")

    return(
        <div>
            <h1>hallo {name}</h1>
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="masukan nama"
            />
            <hr />
            <button onClick={() => setName("")}>reset</button>
        </div>
    )
}
export default FormForlocal