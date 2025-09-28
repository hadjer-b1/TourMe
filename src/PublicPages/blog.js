import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PagesStyle.css";
import blogData from "../JsonFiles/blogContent.json";

export default function Blog() {
  const { articleTitle } = useParams();

  if (articleTitle) {
    return <BlogArticle articleTitle={articleTitle} />;
  }

  return (
    <div className="blog-page">
      <div className="blog-container">
        <h1 className="blog-title"> Travel Blog</h1>
        <p className="blog-description">
          Explore stories, guides, and tips from seasoned travelers and locals
          to inspire your next adventure.
        </p>
        <div>
          {blogData[0].blogCards.map((card, index) => (
            <BlogCard
              key={index}
              title={card.title}
              summary={card.summary}
              body={card.body}
              ImgBlogCard={card.ImgBlogCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ title, summary, body, ImgBlogCard }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Convert body to bullet points by splitting on sentences
  const bodyPoints = body
    .split(". ")
    .map((point) => point.trim())
    .filter((point) => point.length > 10)
    .map((point) => (point.endsWith(".") ? point : point + "."));

  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{summary}</p>
      {isExpanded && (
        <div className="blog-card-body">
          <ul className="blog-body-points">
            {bodyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <img src={ImgBlogCard} alt={title} className="blog-card-image" />
        </div>
      )}
      <button className="blog-toggle-btn" onClick={toggleExpanded}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

function BlogArticle({ articleTitle }) {
  const allArticles = [...blogData[0].articles, ...blogData[0].blogCards];
  const article = allArticles.find((article) => {
    // Use slug field directly for matching
    return article.slug === articleTitle;
  });

  if (!article) {
    return (
      <div className="blog-page">
        <div className="blog-container">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-container">
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
        <article className="blog-article">
          <h1 className="article-title">{article.title}</h1>
          <p className="article-summary">{article.summary}</p>

          <div className="article-body">
            <p>{article.body}</p>
          </div>
          <div className="article-meta">
            {article.author && (
              <span className="article-author">By {article.author}</span>
            )}
            {article.theme && (
              <span className="article-theme">Theme: {article.theme}</span>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
