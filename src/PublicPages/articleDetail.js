import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../components/ThemeContext";
import destContent from "../JsonFiles/destContent.json";
import "../styles/articleDetail.css";

const ArticleDetail = () => {
  const { theme } = useTheme();
  const { themeParam } = useParams();

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme", "dim-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const article = destContent.find((article) => article.theme === themeParam);

  if (!article) {
    return (
      <div className="article-detail-container">
        <div className="article-not-found">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-container">
      <header className="article-header">
        <div className="article-hero">
          <div className="article-hero-content">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-summary">{article.summary}</p>
            <div className="article-meta">
              <span className="article-author">By {article.author}</span>
            </div>
          </div>
          {article.DestImg && (
            <img
              src={article.DestImg.url}
              alt={article.DestImg.caption || article.title}
              className="article-hero-image"
            />
          )}
        </div>
      </header>

      <main className="article-content">
        <div className="article-body">
          {article.body.split("\n\n").map((paragraph, index) => {
            // Here lets Create an array of additional images (DesImg-1, DesImg-2, DesImg-3)
            const additionalImages = [];
            for (let i = 1; i <= 3; i++) {
              const imgKey = `DesImg-${i}`;
              if (article[imgKey]) {
                additionalImages.push(article[imgKey]);
              }
            }

            // Determining which image to show after this paragraph
            const imageToShow = additionalImages[index - 1];

            return (
              <div key={index} className="article-paragraph-container">
                <p className="article-paragraph">{paragraph}</p>
                {imageToShow && (
                  <img
                    src={imageToShow.url}
                    alt={imageToShow.caption}
                    className="article-content-image"
                  />
                )}
              </div>
            );
          })}
        </div>
      </main>

      <footer className="article-footer">
        <div className="article-navigation">
          <Link to="/" className="btn">
            Back to Home
          </Link>
          <Link to="/destinations" className="btn">
            Explore Destinations
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetail;
