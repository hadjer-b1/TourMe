import React from 'react';
import { useState } from 'react';
import ExperiencesByTheme  from '../JsonFiles/experinceByTheme.json';

export default function Experiences() {
  const [theme, setTheme] = useState(Object.keys(ExperiencesByTheme)[0]);
  const exps = ExperiencesByTheme[theme] || [];

  return (
    <div className="experiences-page">
      
<div className="exp-header"> 
  <h1>{theme} Experiences</h1>
  <div className="theme-selector">
    <select
      value={theme}
      onChange={e => setTheme(e.target.value)}
    >
      {Object.keys(ExperiencesByTheme).map(t => (
        <option key={t} value={t}>{t}</option>
      ))}
    </select>
  </div>
</div> 
      <div className="experience-grid">
        {exps.map((exp, idx) => (
          <div key={idx} className="experience-card">
            {exp.image && (
              <img src={exp.image} alt={exp.title} />
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
