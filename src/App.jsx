// App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
