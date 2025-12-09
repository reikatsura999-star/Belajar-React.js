import React, { useState } from 'react';

function ToggleButtonSwitch() {
  const [status, setStatus] = useState('OFF');

  const handleToggle = () => {
    if (status === 'OFF') {
      setStatus('ON');
    } else if (status === 'ON') {
      setStatus('SUCCESS');
    } else if (status === 'SUCCESS') {
      setStatus('OFF');
    }
  };

  let buttonText = '';
  let bgColor = '';

  switch (status) {
    case 'ON':
      buttonText = 'Status: AKTIF';
      bgColor = 'green';
      break;
    case 'SUCCESS':
      buttonText = 'Operasi: SUKSES';
      bgColor = 'blue';
      break;
    case 'ERROR':
      buttonText = 'Operasi: GAGAL';
      bgColor = 'red';
      break;
    default:
      buttonText = 'Status: NON-AKTIF';
      bgColor = 'gray';
      break;
  }

  return (
    <div>
      <p>Status saat ini: **{buttonText}**</p>
      <button
        onClick={handleToggle}
        style={{
          backgroundColor: bgColor,
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Klik untuk mengubah ({status})
      </button>
    </div>
  );
}

export default ToggleButtonSwitch;