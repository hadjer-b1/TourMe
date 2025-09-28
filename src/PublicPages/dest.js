import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import themes from '../JsonFiles/AllDestNames.json';
import '../styles/PagesStyle.css';
import ArrowLeftIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowRightIcon from "@mui/icons-material/ArrowForwardIos";

const imagemapping = {
  "Jungle": require('../assets/jungle.jpg'),
  "Sea": require('../assets/sea.jpg'),
  "Desert": require('../assets/desert.jpg'),
  "Mountain": require('../assets/mountain.jpg'),
  "Cold": require('../assets/cold.jpg'),
  "Modern": require('../assets/modern.jpg'),
  "Nature": require('../assets/nature.jpg'),
  "Urban": require('../assets/urban.jpg'),
  "Cultural": require('../assets/cultural.jpg'),
  "Historical": require('../assets/historical.jpg')
};

export default function ThemeNavigator() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTheme = () => {
    setActiveIndex((prev) => (prev + 1) % themes.length);
  };

  const prevTheme = () => {
    setActiveIndex((prev) => (prev - 1 + themes.length) % themes.length);
  };

  return (
    <div className="theme-navigator">
      <div className="themes-slider">
        {themes.map((theme, index) => {
          const bgImage = imagemapping[theme.name];
          return (
            <div
              key={theme.name}
              className={`theme-item ${index === activeIndex ? 'active' : ''}`}
              style={{ backgroundColor: theme.color, zIndex: index === activeIndex ? 2 : 1 }}
            >
              <img src={bgImage} alt={theme.name} />
              <div className="content">
                <h2 className="theme-title">{theme.name}</h2>
                <p>{theme.description}</p>
                <div className="btn-explore">
                  <Link to={`/experiences`} className="btn">Explore</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="theme-thumbnails">
        <div className="arrow-left" onClick={prevTheme}>
          <ArrowLeftIcon />
        </div>
        <div className="thumbnails">
          {themes.map((theme, index) => {
            const bgImage = imagemapping[theme.name];
            return (
              <div
                key={theme.name}
                className={`theme-item ${index === activeIndex ? 'active-thumb' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={bgImage} alt={theme.name} className="thumbnail-image" />
                <div className="content">
                  <h3>{theme.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="arrow-right" onClick={nextTheme}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
}
