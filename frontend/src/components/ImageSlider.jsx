import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageSlider = ({ image }) => {
  return (
    <div>
      <Carousel autoPlay showThumbs={false} infiniteLoop>
        {image.map((image, index) => (
          <div key={`${image}-${index}`}>
            <img
              src={`${import.meta.env.VITE_SERVER_URL}/uploads/${image}`}
              alt={image}
              className="w-full max-h-[150px]"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
