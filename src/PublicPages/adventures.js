import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PagesStyle.css";
import adventuresData from "../JsonFiles/adventuresContent.json";

export default function Adventures() {
  const { slug } = useParams();

  // If no slug, show all adventures
  if (!slug) {
    return <AdventuresList />;
  }

  // If slug exists, show specific adventure story
  return <AdventureStory slug={slug} />;
}

function AdventuresList() {
  // Flatten all adventures from all categories
  const allAdventures = Object.entries(adventuresData.Adventure).flatMap(
    ([category, adventures]) =>
      adventures.map((adventure) => ({ ...adventure, category }))
  );

  return (
    <div className="adventures-page">
      <div className="adventures-container">
        <h1 className="adventures-title">Adventure Stories</h1>
        <p className="adventures-description">
          Read real adventure stories from travelers around the world.
        </p>

        <div className="adventures-content">
          {allAdventures.map((adventure) => (
            <Link
              key={`${adventure.category}-${adventure.id}`}
              to={`/adventures/${adventure.slug}`}
              className="adventure-card-link"
            >
              <div className="adventure-card">
                <span className="adventure-category">{adventure.category}</span>
                <h3>{adventure.title}</h3>
                <p>{adventure.story.substring(0, 150)}...</p>
                <span className="read-more">Read Full Story →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdventureStory({ slug }) {
  // Find the adventure story by slug
  let foundStory = null;
  let category = null;

  Object.entries(adventuresData.Adventure).forEach(([cat, adventures]) => {
    const story = adventures.find((adventure) => adventure.slug === slug);
    if (story) {
      foundStory = story;
      category = cat;
    }
  });

  if (!foundStory) {
    return (
      <div className="adventures-page">
        <div className="adventures-container">
          <h1>Story Not Found</h1>
          <p>The adventure story you're looking for doesn't exist.</p>
          <Link to="/adventures" className="btn">
            Back to All Adventures
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="adventure-story-page">
      <div className="adventure-story-container">
        <Link to="/adventures" className="back-link">
          ← Back to Adventures
        </Link>

        <div className="story-header">
          <span className="story-category">{category}</span>
          <h1 className="story-title">{foundStory.title}</h1>
        </div>

        <div className="story-content">
          <p className="story-text">{foundStory.story}</p>

          {foundStory.images && foundStory.images.length > 0 && (
            <div className="story-gallery">
              <h3>Adventure Gallery</h3>
              <div className="gallery-grid">
                {foundStory.images.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image.url} alt={image.caption} />
                    <p className="image-caption">{image.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
