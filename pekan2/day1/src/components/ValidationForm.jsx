import React, { useState } from "react";

function ValidationForm() {
    const [Pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [emailEror, setEmailEror] = useState('')
    const [PassEror, setPassEror] = useState('')

    //validasi email
    const ValidasiEmail = (email) => {
        if (!email.includes("@")) {
            setEmailEror("email harus mengandung karakter @")
        } else {
            setEmailEror('')
        }
    }
    //validasi password
    const ValidasiPassword = (Pass) => {
        if (Pass.length < 6) {
            setPassEror("password Minimal 6 Karakter")
        } else {
            setPassEror('')
        }
    }

    const HandleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail)//manggil setEmail buat ngasih tau perubahan
        ValidasiEmail(newEmail)//manggil validasi nama isinya inputan user
    }

    const HandlePassChange = (e) => {
        const newPass = e.target.value;
        setPass(newPass)
        ValidasiPassword(newPass)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        ValidasiEmail(email)
        ValidasiPassword(Pass)

        if (!emailEror && !PassEror && email && Pass) {
            alert("formulir berhasil di submit,Terimaksih Telah Berkontribusi")
            console.log(email, Pass);
        }else if (email === ""){
            alert("email masih kosong")
        }else if (Pass === ""){
            alert("password masih kosong")
        }
    }

    return(
        <form onSubmit={HandleSubmit}>
         <h1>Validasi Form</h1>
         <div>
            <label>
                Email:
                <input type="text"
                value={email} 
                onChange={HandleEmailChange}/>
            </label>
           {emailEror && <p style={{ color: 'red', fontSize: '0.8em' }}>{emailEror}</p>}
           <br />
            <label>
               Pass:
                <input type="password"
                value={Pass} 
                onChange={HandlePassChange}/>
            </label>
           {PassEror && <p style={{ color: 'red', fontSize: '0.8em' }}>{PassEror}</p>}
         </div>
         <button type="submit">submit</button>
        </form>
    )

}
export default ValidationForm