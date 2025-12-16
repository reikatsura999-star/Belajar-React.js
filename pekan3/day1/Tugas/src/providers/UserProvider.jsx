import React, { useState } from 'react';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Guest', email: '', isLoggedIn: false });

  const login = (username, email) => {
    setUser({ name: username, email, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ name: 'Guest', email: '', isLoggedIn: false });
  };

  const updateProfile = (name, email) => {
    setUser({ name, email, isLoggedIn: true });
  };

  const contextValue = { user, login, logout, updateProfile };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
