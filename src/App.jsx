import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar.jsx"; // points to your components folder
import SideNavBar from "./components/sideNavBar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Prices from "./pages/prices.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <Router>
      <TopBar />
      <SideNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
