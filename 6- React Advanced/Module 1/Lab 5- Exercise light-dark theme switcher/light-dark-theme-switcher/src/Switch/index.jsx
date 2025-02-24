import "./Styles.css";
import { useTheme } from "../ThemeContext.jsx";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={(e) => {toggleTheme(e.target.checked)}}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
