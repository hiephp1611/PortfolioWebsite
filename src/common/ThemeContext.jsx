import { flushSync } from "react-dom";
import { createContext, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useLayoutEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (element) => {
    const nextTheme = theme === "light" ? "dark" : "light";

    if (typeof document.startViewTransition !== "function") {
      setTheme(nextTheme);
      return null;
    }

    const { left, top, width, height } =
      element.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const now = new Date();
    const startAngle = (now.getMinutes() + now.getSeconds() / 60) * 6;

    document.documentElement.style.setProperty("--theme-transition-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-transition-y", `${y}px`);
    document.documentElement.style.setProperty(
      "--theme-transition-start",
      `${startAngle}deg`
    );

    return document.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme));
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
