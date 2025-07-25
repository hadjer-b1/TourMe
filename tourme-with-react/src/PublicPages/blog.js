import React from 'react';
import '../styles/PagesStyle.css';
export default function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-container">
        <h1 className="blog-title"> Travel Blog</h1>
        <p className="blog-description">
          Explore stories, guides, and tips from seasoned travelers and locals to inspire your next adventure.
        </p>
        <div>
          <BlogCard
            title="🌴 Jungle Survival Tips"
            summary="Learn essential skills to thrive in dense forests — from identifying edible plants to avoiding dangerous wildlife."
          />
          <BlogCard
            title="🌊 Top 5 Sea Diving Spots"
            summary="Discover the most breathtaking underwater destinations across the globe for both beginners and pros."
          />
          <BlogCard
            title="🏜️ What to Pack for a Desert Trip"
            summary="A practical checklist for surviving and enjoying extreme desert climates without sacrificing comfort."
          />
          <BlogCard
            title="🏔️ 7 Breathtaking Mountain Hikes"
            summary="Step-by-step routes for scenic hikes in the Alps, Rockies, and more, plus what gear to bring."
          />
          <BlogCard
            title="🏙️ Urban Adventures: Best Cities for Solo Travelers"
            summary="Navigate the world’s top cities safely and make the most of your solo journey with local insights."
          />
          <BlogCard
            title="🎭 Festivals that Celebrate Culture"
            summary="Uncover unique cultural festivals that showcase tradition, food, dance, and community spirit."
          />
        </div>
      </div>
    </div>
  );
}

function BlogCard({ title, summary }) {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
}
