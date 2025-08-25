import React from "react";
import { useState, useEffect } from "react";
import ExperiencesByTheme from "../JsonFiles/experinceByTheme.json";

const API_KEY = '17746834-ffe5d3e39a6b57bc24617f2b5';
export default function Experiences() {
  const [theme, setTheme] = useState(Object.keys(ExperiencesByTheme)[0]);
  const exps = ExperiencesByTheme[theme] || [];
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchphotos = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
            theme
          )}&image_type=photo`
        );
        const data = await response.json();
        if (data.hits) {
          console.log(data.hits);
          setImage(data.hits.slice(0, exps.length));
        }
      } catch (error) {
        console.error("fetching photos failed:", error);
      }
    };

    fetchphotos();
  }, [theme]);

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
      <div className="experience-grid">
        {exps.map((exp, idx) => (
          <div key={idx} className="experience-card">
            {image[idx] && (
              <img src={image[idx].webformatURL} alt={exp.title} />
            )}

            <div className="experience-info">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
