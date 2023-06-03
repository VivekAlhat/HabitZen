import { BsSun, BsMoon } from "react-icons/bs";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, setTheme, isDark } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      {isDark ? (
        <BsMoon
          className="h-7 w-7 cursor-pointer"
          onClick={handleThemeChange}
        />
      ) : (
        <BsSun className="h-7 w-7 cursor-pointer" onClick={handleThemeChange} />
      )}
    </div>
  );
};

export default ThemeToggle;
