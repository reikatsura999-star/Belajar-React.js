import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Timer dimulai!');
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Fungsi cleanup akan dijalankan saat komponen di-unmount
    return () => {
      clearInterval(intervalId);
      console.log('Timer dibersihkan!');
    };
  }, []); // Array kosong: hanya berjalan sekali saat mounting

  return (
    <div>
      <h2>Timer: {count} detik</h2>
    </div>
  );
}

export default Timer;