import "../styles/footer.css";
import { FaFacebookF, FaTimes, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<footer>
  <div className="footer-content">
    <div className="footer-links">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
      </ul>
    </div>

    <div className="footer-info">
      <h3>About This Site</h3>
      <p>
        We help curious travelers discover culturally rich and halal-friendly
        destinations around the world — with insights on where, when, and how to explore.
      </p>
      <p>Email: info@yourdomain.com</p>
    </div>

    <div className="social-icons">
          <a href="mailto:contact@yourdomain.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaTimes /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
  </div>

  <p className="footer-copy">&copy; 2025 TourMe. All rights reserved.</p>
</footer>

  );
};

export default Footer;
