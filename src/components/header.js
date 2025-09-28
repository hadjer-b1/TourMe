import React, { useEffect } from "react";
import "../styles/header.css";
import { useTheme } from "./ThemeContext";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./switcher"; 

const Header = () => {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme", "dim-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="TourMe Logo" className="logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/experiences">Experiences</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="login-signup">
          <ThemeSwitcher />
          <Link to="/login" className="login-btn ">Login</Link>
        </div>
      </div>
      <div className="header-line"></div>
    </header>
  );
};

export default Header;
