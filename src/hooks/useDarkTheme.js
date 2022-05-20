import { useEffect, useState } from "react";

function useDarkTheme() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    //if localStorage theme is "dark", remove "light" class
    root.classList.remove(colorTheme);
    //and add "dark" class
    root.classList.add(theme);

    //Also set the localStorage theme item
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkTheme;
