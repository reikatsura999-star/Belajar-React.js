import React,{useState,useEffect} from "react";

function MultiEffectComponent(){

    const [isOnline,setIsOnline] = useState(false)

    const [thema,setThema] = useState('light')

    useEffect(() =>{
        console.log(`status saat ini ${isOnline ? "online" : "ofline"}`)
    },[isOnline])

    useEffect(() =>{
        document.body.style.background = 
        thema === "light" ? "#ffffff" : "#333333"

        document.body.style.color = 
        thema === "light" ? "#000000" : "#ffffff"
    },[thema])

    return(
        <div style ={{padding : "30px"}}>
            <h2>EXAMPLE MULTI EFFECT</h2>

            <div>
                <p>Status : {isOnline ? "online" : "ofline"}</p>
                <button onClick={() => setIsOnline(!isOnline)}>Tombo ganti Status</button>
            </div>

            <div style={{marginTop : "30px"}}>
                <p>Current Thema : {thema}</p>
                <button onClick={() => setThema(thema === "light" ? "dark" : "light")}>
                    Toggle Tema
                </button>
            </div>

        </div>
    )
}

export default MultiEffectComponent