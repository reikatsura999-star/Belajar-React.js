import React, { useState, useEffect } from 'react';

function MultiEffectComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Effect 1: Berjalan setiap kali count berubah
  useEffect(() => {
    console.log(`Count telah berubah menjadi: ${count}`);
    document.title = `Count: ${count}`;
  }, [count]);

  // Effect 2: Berjalan setiap kali name berubah
  useEffect(() => {
    console.log(`Nama telah berubah menjadi: ${name}`);
  }, [name]);

  // Effect 3: Berjalan hanya sekali saat mounting
  useEffect(() => {
    console.log('Komponen ini pertama kali dimuat!');
    // Contoh: Mengatur event listener global yang hanya perlu sekali
    const handleKeyDown = (e) => {
      console.log(`Tombol ${e.key} ditekan.`);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log('Event listener keydown dihapus.');
    };
  }, []);

  return (
    <div>
      <h2>Komponen dengan Multiple Effects</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Tambah Count</button>
      <br /><br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ketik nama Anda"
      />
      <p>Nama: {name}</p>
    </div>
  );
}

export default MultiEffectComponent;