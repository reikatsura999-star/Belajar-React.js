import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    // contoh validasi sederhana
    if (username === "admin" && password === "123") {
      localStorage.setItem("token", "12345"); // simpan token
      alert("Login berhasil!");

      // kalau ada halaman asal, balik ke sana
      const from = location.state?.from?.pathname || "/Theme";
      navigate(from, { replace: true });
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
