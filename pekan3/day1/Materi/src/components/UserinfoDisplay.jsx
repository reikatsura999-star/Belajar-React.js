import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserInfoDisplay() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      <p>Selamat datang, {user.name}!</p>
      {user.isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login('Simon')}>Login sebagai Simon</button>
      )}
    </div>
  );
}
export default UserInfoDisplay;