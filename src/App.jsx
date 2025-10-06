import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar.jsx"; // points to your components folder
import SideNavBar from "./components/sideNavBar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Prices from "./pages/prices.jsx";
import Contact from "./pages/contact.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter basename="/latiroWebsite/">
        <TopBar />
        <SideNavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="prices" element={<Prices />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//export default App;
