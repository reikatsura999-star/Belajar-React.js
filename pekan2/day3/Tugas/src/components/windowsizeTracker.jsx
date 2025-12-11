import React, { useState, useEffect } from 'react';


function WindowSizeTracker() {
 
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Fungsi handler untuk update state ketika jendela di-resize
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Tambahkan event listener saat komponen mount
    window.addEventListener('resize', handleResize);
    console.log('Event listener "resize" ditambahkan.');

   
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event listener "resize" dihapus.');
    };
  }, []); // [] artinya effect hanya dijalankan sekali saat mount

  return (
    <div>
      <h2>Ukuran Jendela Browser</h2>
      <p>Lebar: {width}px</p>
      <p>Tinggi: {height}px</p>
    </div>
  );
}

export default WindowSizeTracker;