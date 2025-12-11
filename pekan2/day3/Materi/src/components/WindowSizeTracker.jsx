import React, { useState, useEffect } from 'react';

function WindowSizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Menambahkan event listener saat komponen mounting
    window.addEventListener('resize', handleResize);
    console.log('Event listener "resize" ditambahkan.');

    // Fungsi cleanup: akan dijalankan saat komponen unmounting
    // atau sebelum effect dijalankan ulang (jika ada dependensi)
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event listener "resize" dihapus.');
    };
  }, []); // Array kosong: effect hanya berjalan sekali saat mounting

  return (
    <div>
      <h2>Ukuran Jendela Browser</h2>
      <p>Lebar: {width}px</p>
      <p>Tinggi: {height}px</p>
    </div>
  );
}


export default WindowSizeTracker;