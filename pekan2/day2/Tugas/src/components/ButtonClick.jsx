import React from "react";

function ButtonClick(props){
    const isCompleted = props.isCompleted;
    return(
       <div>
        <button onClick={props.onClick}>
            {isCompleted ? "✅" : "⌛"}
        </button>
    </div>
    )
    
}
export default ButtonClick;