import React from "react";

function ButtonClicker() {
  const handleClick = () => {
    alert("Tombol telah diklik!");
  }

  const handleMouseEnter = () => {
    console.log("Mouse Masuk di Area tombol");
  }

  const handleMouseLeave = () => {
    console.log("Mouse Keluar dari Area tombol");
  }

  return (
    <div>
    <button onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}>Click Here</button>
    </div>
  )
}
export default ButtonClicker;