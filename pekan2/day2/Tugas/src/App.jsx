import React from "react";
import Status from "./components/Status"
import ButtonClick from "./components/ButtonClick"
import ToggleButton from  "./components/ToggleButton"
import DaftarProduk from "./components/DaftarProduk";

function App(){
  return(
    <div>
     <DaftarProduk/>
      <ToggleButton/>
    </div>
  )
}

export default App;