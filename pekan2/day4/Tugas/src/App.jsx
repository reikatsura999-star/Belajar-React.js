import MultiEffectComponent from "./components/MultiEffectComponent";
import MyComponent from "./components/MyComponent"
import UserProfile from "./components/UserProfile"
import WindowSizeTracker from "./components/windowsizeTracker";
import React, { useState } from "react";
function App() {
  const [currentId, setCurrentId] = useState(1);
  const [showTracker,setShowTracker] = useState(true)
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {/* <h1>Tugas Effect Day 4</h1>
      <hr />
      <MyComponent />
      <UserProfile userId={currentId} />
      <button onClick={() => setCurrentId(prevId => prevId + 1)}>
        lihat User selanjutnya
      </button> */}

      
      {/* <h1>Aplikasi Pelacak Ukuran Jendela</h1>
      <button onClick={() => setShowTracker(prev => !prev)}>
        {showTracker ? 'Sembunyikan' : 'Tampilkan'} Pelacak
      </button>

      {showTracker && <WindowSizeTracker />}
     */}

     <MultiEffectComponent/>
    </div>
  )

}

export default App
