import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import "../styles/ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const switcherRef = useRef(null);
  const { theme, setTheme } = useTheme();

  // Map theme names to radio values
  const themeValueMap = {
    light: "1",
    dark: "2",
    dim: "3",
  };
  const valueThemeMap = {
    1: "light",
    2: "dark",
    3: "dim",
  };

  // Sync radio selection with context
  const selectedOption = themeValueMap[theme] || "1";

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <fieldset className="switcher" ref={switcherRef}>
      <legend className="switcher__legend">Choose theme</legend>

      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="light"
          c-option="1"
          checked={selectedOption === "1"}
          onChange={() => setTheme("light")}
        />
        <WbSunnyRoundedIcon className="switcher__icon" />
      </label>

      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="dark"
          c-option="2"
          checked={selectedOption === "2"}
          onChange={() => setTheme("dark")}
        />
        <NightlightRoundedIcon className="switcher__icon" />
      </label>

      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="dim"
          c-option="3"
          checked={selectedOption === "3"}
          onChange={() => setTheme("dim")}
        />
        <WbTwilightIcon className="switcher__icon" />
      </label>
    </fieldset>
  );
};

export default ThemeSwitcher;
