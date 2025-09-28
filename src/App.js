import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeNavigator from "./PublicPages/dest";
import Home from "./PublicPages/home";
import Blog from "./PublicPages/blog";
import Contact from "./PublicPages/contact";
import Experiences from "./PublicPages/experiences";
import Adventures from "./PublicPages/adventures";
import Login from "./auth/login";
import Gallery from "./PublicPages/gallery";
import FQAs from "./PublicPages/faqs";
import ArticleDetail from "./PublicPages/articleDetail";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TourMe" element={<Home />} />
          <Route path="/destinations" element={<ThemeNavigator />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/adventures/:slug" element={<Adventures />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleTitle" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faqs" element={<FQAs />} />
          <Route path="/article/:themeParam" element={<ArticleDetail />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
