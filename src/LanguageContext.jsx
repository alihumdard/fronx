import React, { useContext, useState, useEffect } from "react";

const LanguageContext = React.createContext("fr");

export const LanguageProvider = ({ children }) => {
  // Check localStorage first, fallback to "fr"
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "fr";
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);