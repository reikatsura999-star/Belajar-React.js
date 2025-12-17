import React, { useState } from "react";
import LanguageContext from "../contexts/LanguageContext";

// Provider terpisah
function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("Indonesia");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
