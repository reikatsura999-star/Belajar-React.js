import React, { useContext } from "react";
import UserProvider from "./context/UserProvider"; 
import { UserContext } from "./context/UserContext";
import UserProfile from "./components/UserProfile";
import "./App.css";

function AppProvider() {
  const { user, login } = useContext(UserContext);

  return (
    <div>
      <h1>Aplikasi User Context</h1>
      <button onClick={() => login("Nyong", "nyong@gmail.com")}>
        Login sebagai Nyong
      </button>
      <UserProfile />
    </div>
  );
}

////////////////
function App() {
  return (
    <UserProvider>
      <AppProvider />
    </UserProvider>
  );
}

export default App;
