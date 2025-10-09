import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./carousel.css";
const latImage1 = `${import.meta.env.BASE_URL}images/lat1.jpeg`;
const latImage2 = `${import.meta.env.BASE_URL}images/lat2.jpeg`;
const latImage3 = `${import.meta.env.BASE_URL}images/lat3.jpeg`;
const latImage4 = `${import.meta.env.BASE_URL}images/lat4.jpeg`;
const latImage5 = `${import.meta.env.BASE_URL}images/lat5.jpeg`;

const carouselImages = [latImage1, latImage2, latImage3, latImage4, latImage5];

function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === carouselImages.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return carouselImages.length - 1;
      return index - 1;
    });
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        src={carouselImages[imageIndex]}
        alt="carousel"
        className="carousel-test-image"
      />
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}

export default Carousel;
