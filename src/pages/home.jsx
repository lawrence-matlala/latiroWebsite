import React, { useState } from "react";
import "./home.css";
import Carousel from "../components/carousel.jsx";

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-text">Welcome to Latiro Swimming Academy</h1>

      <div className="carousel-test-wrapper">
        <div className="carousel-test-container">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Home;
