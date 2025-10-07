import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-text">Welcome to Latiro Swimming Academy</h1>

      <div className="carousel-test-wrapper">
        <div className="carousel-test-container">
          <img
            src={`${import.meta.env.BASE_URL}images/lat1.jpeg`}
            alt="Carousel preview"
            className="carousel-test-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
