import "../styles/footer.css";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { FaFacebookF, FaTimes, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme", "dim-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
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
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-middle">
          <div className="footer-info">
            <h3>About This Site</h3>
            <p>
              We help curious travelers discover culturally rich and
              halal-friendly destinations around the world — with insights on
              where, when, and how to explore.
            </p>
            <p>Email: info@TourMe.com</p>
          </div>
          <div className="footer-newsletter">
            <h3>Subscribe to our Newsletter</h3>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
                required
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </form>
            <button type="submit" className="subscribe-button btn" onClick={() => { (email)? alert(`Subscribed with ${email}`): alert('Please enter a valid email'); setEmail('');}}>
              Subscribe
            </button>
          </div>
        </div>
        <div className="social-icons">
          <a href="mailto:info@TourMe.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaTimes />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="footer-copy">&copy; 2025 TourMe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
