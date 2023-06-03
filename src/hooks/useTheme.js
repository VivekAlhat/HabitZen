import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  return { theme, setTheme, isDark };
};

export default useTheme;
