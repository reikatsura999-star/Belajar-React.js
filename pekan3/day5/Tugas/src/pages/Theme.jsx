import React, { useState } from "react";

function Theme() {
  // state untuk simpan mode (light/dark)
  const [isDark, setIsDark] = useState(false);

  // definisi tema
  const lightTheme = {
    background: "#f5f5f5",
    color: "#333",
  };

  const darkTheme = {
    background: "#333",
    color: "#f5f5f5",
  };

  // pilih tema sesuai state
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        minHeight: "100vh",
        padding: "20px",
        transition: "all 0.3s ease", // biar halus saat ganti
      }}
    >
      <h1>Halo User</h1>
      <p>Ini contoh tema yang bisa bolak balik.</p>

      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          backgroundColor: theme.color,
          color: theme.background,
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Ganti ke {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Theme;
