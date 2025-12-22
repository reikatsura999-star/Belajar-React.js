import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams(); // Mengambil parameter 'userId' dari URL

  return (
    <div>
      <h3>Profil Pengguna: {userId}</h3>
      <p>Menampilkan detail untuk pengguna dengan ID: {userId}</p>
    </div>
  );
}
export default UserProfile;