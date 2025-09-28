import React from 'react';
import '../styles/PagesStyle.css';
import Images from '../JsonFiles/gallery.json';

//api_key i get from pixabay

export default function Gallery() {
  return (
    <div className="gallery-container">
      {Images.map((image, index) => (
        <div
          key={index}
          className={`box imgHover box-${index + 1}`}
          style={{ '--img': `url(${image.image})` }}
          data-text={image.title}
        ></div>
      ))}
    </div>
  );
}
