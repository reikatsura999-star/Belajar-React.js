import React from 'react';
import useUserContext from '../contexts/useUserContext';

function UserInfoDisplay() {
  const { user, login, logout } = useUserContext();

  return (
    <div>
      <p>Selamat datang, {user.name}!</p>
      <p>Email: {user.email || '-'}</p>
      {user.isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login('Alice', 'alice@gmail.com')}>
          Login sebagai Alice
        </button>
      )}
    </div>
  );
}

export default UserInfoDisplay;
