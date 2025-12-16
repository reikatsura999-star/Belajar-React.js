import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import NotificationContext from "../contexts/NotificationContext";

function Header() {
  const { language } = useContext(LanguageContext);
  const { count } = useContext(NotificationContext);

  return (
    <header>
      <h1>Aplikasi</h1>
      <p>Bahasa aktif: {language}</p>
      <p>Jumlah notifikasi: {count}</p>
    </header>
  );
}

export default Header;
