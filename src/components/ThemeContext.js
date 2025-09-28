import React, { createContext, useState, useContext, useEffect } from "react";
import { themes } from "../styles/colors";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Directly set theme (light, dark, dim)
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    // Apply CSS variables for the theme colors
    applyThemeVariables(newTheme);
  };

  // Apply theme colors as CSS variables
  const applyThemeVariables = (themeName) => {
    const themeColors = themes[themeName]?.colors;
    if (themeColors) {
      const root = document.documentElement;
      Object.entries(themeColors).forEach(([key, value]) => {
        root.style.setProperty(`--theme-${key}`, value);
      });
      // Also set body class for global CSS
      document.body.className = `${themeName}-theme`;
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    applyThemeVariables(theme);
  }, [theme]);

  // Get current theme colors
  const getThemeColors = () => themes[theme]?.colors || themes.light.colors;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: changeTheme,
        colors: getThemeColors(),
        themes: themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
