import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeNavigator from './PublicPages/dest';
import Home from './PublicPages/home';
import Blog from './PublicPages/blog';
import Contact from './PublicPages/contact';
import Experiences from './PublicPages/experiences';
import Login from './auth/login';
import Gallery from './PublicPages/gallery';
import FQAs from './PublicPages/faqs';
import Header from './components/header';

import Footer from './components/footer';
import './App.css'; 
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<ThemeNavigator />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faqs" element={<FQAs />} />
      </Routes>
      <Footer />
    </Router>
  );
}
