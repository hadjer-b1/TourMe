import "../styles/home.css";
import { Link } from "react-router-dom";
import dist1 from "../img/safari-386292.jpg";
import dist2 from "../img/lake-1681485.jpg";
import dist3 from "../img/coastal-5527726.jpg";
import dist4 from "../img/istanbul-915076.jpg";
import dist5 from "../img/dockland-4431309.jpg";
import dist6 from "../img/polynesia-3021072.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="hero-bg">
      <section className="hero">
        <h1>Discover the World — Differently</h1>
        <p>
          Explore breathtaking destinations, unforgettable experiences, and
          halal-friendly adventures designed for modern Muslim travelers and
          conscious explorers.
        </p>
        <Link to="/destinations" className="btn">
          Start Exploring
        </Link>
      </section>
</div>
      <section className="highlights">
        <h2>Top Destinations</h2>
        <div className="destination-cards">
          <div className="card">
            <img src={dist1} alt="Desert Safari" />
            <h3>Desert Safari</h3>
            <p>Experience the magic of the dunes with our guided tours.</p>
          </div>
          <div className="card">
            <img src={dist2} alt="Mountain Retreat" />
            <h3>Mountain Retreat</h3>
            <p>Reconnect with nature in serene mountain landscapes.</p>
          </div>
          <div className="card">
            <img src={dist3} alt="Coastal Escape" />
            <h3>Coastal Escape</h3>
            <p>Relax on pristine beaches with friendly amenities.</p>
          </div>
          <div className="card">
            <img src={dist4} alt="Cultural Journey" />
            <h3>Cultural Journey</h3>
            <p>Immerse yourself in rich cultures and traditions.</p>
          </div>
          <div className="card">
            <img src={dist5} alt="Modern Tour" />
            <h3>Modern Tour</h3>
            <p>
              Experience the best of urban life with halal-friendly options.
            </p>
          </div>
          <div className="card">
            <img src={dist6} alt="Halal Jungle Tour" />
            <h3>Island Getaway</h3>
            <p>Unwind on secluded beaches with halal amenities.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Plan Your Next Journey?</h2>
        <p>
          Whether you're dreaming of the desert, the mountains, or a coastal
          retreat, we’ll help you discover and plan every step.
        </p>
        <Link to="/experiences" className="btn">
          View Experiences
        </Link>
      </section>

      <section className="feedback-blog">
        <section className="testimonials">
          <h2>What Our Travelers Say</h2>
          <blockquote>
            "Finally, a travel service that understands our values. I felt safe,
            seen, and spiritually fulfilled. Highly recommended!" — Fatima A.
          </blockquote>
          <blockquote>
            "The halal-friendly jungle tour was the highlight of my year. Clean
            food, prayer breaks, and pure nature!" — Ahmed Z.
          </blockquote>
        </section>
        <section className="blog-preview">
          <h2>From the Blog</h2>
          <ul>
            <li>
              <Link to="/blog/halal-travel-tips">
                Top 10 Halal Travel Tips for First-Timers
              </Link>
            </li>
            <li>
              <Link to="/blog/hidden-gems">
                5 Hidden Gems You Didn’t Know Were Halal-Friendly
              </Link>
            </li>
            <li>
              <Link to="/blog/packing-guide">
                The Ultimate Halal Packing Guide
              </Link>
            </li>
          </ul>
          <Link to="/blog" className="btn">
            Read More
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Home;
