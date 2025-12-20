import { useState } from "react";

function Auth(){
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("email:",email);
        console.log("password:",password);
        console.log(`login dengan email: ${email}`);
        
        
    }
    

    return(
        <div>
            <h1>Form login</h1>
            
            <label>Email</label>
            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label>Password</label>
            <input type="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">kirim</button>
        </div>
    )
}
export default Auth;