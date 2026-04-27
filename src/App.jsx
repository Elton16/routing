import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
