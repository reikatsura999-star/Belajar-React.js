import React,{useRef} from "react";

function UncontrolledComponent(){
    const nameInputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nama yg di submit   "${nameInputRef.current.value}"`)
        nameInputRef.current.value = '';
    }

    return(
        <form onSubmit={handleSubmit}>
        <h1>UncontrolledComponent</h1>
            <label>
                Nama:
                <input type="text" ref={nameInputRef} defaultValue={"jefri nicol"} />
            </label>
            <button type="submit">submit</button>
        </form>
    )
}

export default UncontrolledComponent;
