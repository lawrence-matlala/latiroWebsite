import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
const latImage1 = `${import.meta.env.BASE_URL}images/lat1.jpeg`;
const latImage2 = `${import.meta.env.BASE_URL}images/lat2.jpeg`;
const latImage3 = `${import.meta.env.BASE_URL}images/lat3.jpeg`;
const latImage4 = `${import.meta.env.BASE_URL}images/lat4.jpeg`;
const latImage5 = `${import.meta.env.BASE_URL}images/lat5.jpeg`;

const carouselImages = [latImage1, latImage2, latImage3, latImage4, latImage5];

function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img
        src={carouselImages[imageIndex]}
        alt="carousel"
        className="carousel-test-image"
      />
      <button>
        <ArrowBigLeft />
      </button>
      <button>
        <ArrowBigRight />
      </button>
    </div>
  );
}

export default Carousel;
