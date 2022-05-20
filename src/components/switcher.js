import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import useDarkTheme from "../hooks/useDarkTheme";

function Switcher() {
  const [colorTheme, setTheme] = useDarkTheme();
  const [isDark, setIsDark] = useState(colorTheme);

  const toggleDarkMode = (theme) => {
    setTheme(colorTheme);
    setIsDark(theme);
  };

  return (
      <div className="transition duration-500 ease-in-out rounded-full">
        {isDark === "dark" ? (
          <FaSun
            onClick={() => toggleDarkMode("light")}
            className="text-yellow-300 dark:text-gray-400 text-2xl cursor-pointer"
          />
        ) : (
          <FaMoon
            onClick={() => toggleDarkMode("dark")}
            className="text-gray-500 dark:text-simpsons-red text-2xl cursor-pointer"
          />
        )}
      </div>
  );
}

export default Switcher;
