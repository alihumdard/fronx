import React, { useContext, useState } from "react";

const LanguageContext = React.createContext("fr");

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");
  const toggleLanguage = () => setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 