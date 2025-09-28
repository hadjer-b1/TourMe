import React from 'react';
import '../styles/FAQs.css';

const FAQs = () => {
  const faqData = [
    {
      question: "What types of destinations do you offer?",
      answer: "We offer themed destinations including jungle adventures, desert escapes, sea retreats, and more."
    },
    {
      question: "Can I book directly from your site?",
      answer: "Currently, we provide curated travel experiences and redirect you to trusted travel partners for bookings."
    },
    {
      question: "Is registration required to explore experiences?",
      answer: "No, browsing is open to everyone. However, creating an account unlocks personalization and save features."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can use the contact form on the Contact page or email us at support@themetravel.com."
    },
    {
      question: "Do you offer group travel discounts?",
      answer: "Yes, we offer discounts for groups of 5 or more. Please contact us for details and availability."
    }
  ];

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, idx) => (
          <div key={idx} className="faq-item">
            <h2 className="faq-question">{item.question}</h2>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
