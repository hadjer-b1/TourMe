import React from "react";
import "../styles/header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./switcher"; 

const Header = () => {
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
