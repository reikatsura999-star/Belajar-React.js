import React from "react";
import FirstStatus from "./FirstStatus";
import SecondStatus from "./SecondStatus";

function Status(props){
    const isLoggedIn = props.isLoggedIn
    
    if (isLoggedIn) {
     return <FirstStatus/>   
    }else{
     return <SecondStatus/>
    }
}
export default Status;