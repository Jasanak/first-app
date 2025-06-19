// src/components/ThemeToggle.jsx
import { useTheme } from "./src/contexts/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm"
      style={{
        backgroundColor: darkMode ? "#333" : "#f8f9fa",
        color: darkMode ? "#fff" : "#333",
        border: darkMode ? "1px solid #555" : "1px solid #ddd",
      }}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
