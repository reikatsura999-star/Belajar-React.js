import React, { useState } from "react";
import { UserContext } from "./UserContext.jsx";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isLoggedIn: false,
  });

  const login = (name, email) => setUser({ name, email, isLoggedIn: true });
  const logout = () => setUser({ name: "", email: "", isLoggedIn: false });

  
  const updateProfile = (newName, newEmail) => {
    setUser((prev) => ({
      ...prev,
      name: newName || prev.name,
      email: newEmail || prev.email,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
