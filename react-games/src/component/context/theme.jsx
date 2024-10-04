import { useTheme } from "./UseContextProvider";

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="themer">
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default Toggle;
