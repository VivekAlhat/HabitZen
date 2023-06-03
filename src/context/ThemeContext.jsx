import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getThemeFromStorage = () => {
  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme) {
    return JSON.parse(savedTheme);
  }
  return "dark";
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getThemeFromStorage());

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(theme));
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
