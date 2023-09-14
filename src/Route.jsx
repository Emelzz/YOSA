import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./Pages/About";
import Activities from "./Pages/Activities";
import Contact from "./Pages/Contact";
import Membership from "./Pages/Membership";
import Navbar from "./Components/Navbar";
import Support from "./Pages/Support";
import Footer from "./Components/Footer";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/activities" element={<Activities />} />
        <Route exact path="/membership" element={<Membership />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/Support" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
