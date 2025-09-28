import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExperiencesByTheme from "../JsonFiles/experinceByTheme.json";

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

export default function Experiences() {
  const [theme, setTheme] = useState(Object.keys(ExperiencesByTheme)[0]);
  const exps = ExperiencesByTheme[theme] || [];
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchphotos = async () => {
      setLoading(true);

      // Check if API key is available
      if (!API_KEY) {
        console.error(
          "Pixabay API key not found. Please check your .env file."
        );
        setLoading(false);
        return;
      }

      try {
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
          theme
        )}&image_type=photo&per_page=${Math.max(exps.length, 3)}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.hits && data.hits.length > 0) {
          setImage(data.hits.slice(0, exps.length));
        } else {
          setImage([]);
        }
      } catch (error) {
        console.error("Fetching photos failed:", error);
        setImage([]);
      } finally {
        setLoading(false);
      }
    };

    if (exps.length > 0) {
      fetchphotos();
    } else {
      setLoading(false);
    }
  }, [theme, exps.length]);

  return (
    <div className="experiences-page">
      <div className="exp-header">
        <h1>{theme} Experiences</h1>
        <div className="theme-selector">
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            {Object.keys(ExperiencesByTheme).map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      {loading ? (
        <div className="loading-message">Loading experiences...</div>
      ) : (
        <div className="experience-grid">
          {exps.map((exp, idx) => (
            <Link
              key={idx}
              to={
                exp.adventureSlug
                  ? `/adventures/${exp.adventureSlug}`
                  : "/adventures"
              }
              className="experience-card-link"
            >
              <div className="experience-card">
                {image[idx] ? (
                  <img src={image[idx].webformatURL} alt={exp.title} />
                ) : (
                  <div className="fallback-image">
                     <p>Image loading...</p>
                  </div>
                )}

                <div className="experience-info">
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
