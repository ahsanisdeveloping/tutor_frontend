import React, { useState } from "react";
import img1 from "../assets/images/carousel/img1.svg"
import img2 from "../assets/images/carousel/img2.svg"
import img3 from "../assets/images/carousel/img3.svg"
import img4 from "../assets/images/carousel/img4.svg"
import img5 from "../assets/images/carousel/img5.svg"
import arrowleft from "../assets/images/carousel/arrowleft.svg"
import arrowright from "../assets/images/carousel/arrowright.svg"
const Carousel = () => {
  const images = [
    { id: 1, src: img1, alt: "CIPD" },
    { id: 2, src: img2, alt: "CAIA" },
    { id: 3, src: img3, alt: "AIPMM" },
    { id: 4, src: img4, alt: "DMI" },
    { id: 5, src: img5, alt: "RICI" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 5;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= images.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? images.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  return (
    <div className="relative w-full sm:px-10 ">
      {/* Image Container */}
      <div className="flex overflow-hidden justify-evenly px-10 gap-2 w-full">
        {images.slice(currentIndex, currentIndex + itemsPerPage).map((image) => (
          <div
            key={image.id}
            className="sm:flex-shrink-0 w-[50px] sm:w-1/6 flex justify-center items-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-20 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="btn btn-circle bg-transparent border-none absolute left-0 sm:left-10 top-1/2 transform -translate-y-1/2 hover:bg-gray-300"
      >
        <img src={arrowleft} alt="" className="w-3 sm:w-auto" />
      </button>
      <button
        onClick={handleNext}
        className="btn btn-circle bg-transparent border-none absolute right-0 sm:right-10 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300"
      >
        <img src={arrowright} alt=""  className="w-3 sm:w-auto"/>
      </button>
    </div>
  );
};

export default Carousel;
