import React, { useState } from 'react';

function ControlledComponent() {
  // 1. Konsistensi Penamaan State: Gunakan camelCase untuk variabel.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // 2. Konsistensi Penamaan Handler: Gunakan camelCase standar (mis. handle[EventName]).
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value); 
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    // Template literals (backticks) lebih bersih untuk string
    alert(`Nama yang disubmit: ${firstName} ${lastName}`);
    setFirstName(''); 
    setLastName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Component (Form Nama)</h2>
      
    
      <div style={{marginBottom: '10px'}}>
        <label>Nama Depan:</label>
        <input 
          value={firstName} 
          onChange={handleFirstNameChange} 
        />
      </div>

      <div style={{marginBottom: '15px'}}>
        <label>Nama Belakang:</label>
        <input 
          value={lastName} 
          onChange={handleLastNameChange} 
        />
      </div>
      
      {/* 4. Tampilkan Nama Lengkap */}
      <p>"{firstName}"</p>
      <p>"{lastName}"</p>
      
      <button type="submit">Submit Data</button>
    </form>
  );
}

export default ControlledComponent;