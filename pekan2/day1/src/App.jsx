import React from "react";
import LinkPreventer from "./components/LinkPreventer";
import ButtonClicker from "./components/ButtonClicker";
import ControlledComponent from "./components/ControlledComponent";
import UncontrolledComponent from "./components/UncontrolledComponent"
import ValidasiForm from "./components/ValidationForm"
function App() {
  
 

  return (
    <div style={{textAlign:"center"}}>
          <ButtonClicker />
          <LinkPreventer />
          <ControlledComponent />
          <UncontrolledComponent/>
          <ValidasiForm/>
    </div>
  );
}

export default App;