import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardButton() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
     // Navigasi ke /dashboard
  };

  const goToHomeAndReplace = () => {
    navigate('/', { replace: true }); // Navigasi ke / dan mengganti entri di history stack
  };

  const goBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  return (
    <div>
      <button onClick={goToDashboard}>Pergi ke Dashboard</button>
      <button onClick={goToHomeAndReplace}>Pergi ke Beranda (Replace)</button>
      <button onClick={goBack}>Kembali</button>
    </div>
  );
}
export default DashboardButton;