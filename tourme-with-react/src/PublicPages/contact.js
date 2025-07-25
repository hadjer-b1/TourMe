import React from 'react';
import '../styles/PagesStyle.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1> <br />
      <p>If you have any questions or feedback, feel free to reach out!</p>
      <form className="contact-form">
        <label>
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        <label>
          <textarea name="message" placeholder="Your Message" required />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
