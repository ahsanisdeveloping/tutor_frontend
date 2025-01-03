import React, { useState } from "react";

const Carousel = () => {
  const images = [
    { id: 1, src: "https://via.placeholder.com/150", alt: "CIPD" },
    { id: 2, src: "https://via.placeholder.com/150", alt: "CAIA" },
    { id: 3, src: "https://via.placeholder.com/150", alt: "AIPMM" },
    { id: 4, src: "https://via.placeholder.com/150", alt: "DMI" },
    { id: 5, src: "https://via.placeholder.com/150", alt: "RICI" },
    { id: 6, src: "https://via.placeholder.com/150", alt: "Example 1" },
    { id: 7, src: "https://via.placeholder.com/150", alt: "Example 2" },
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
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Image Container */}
      <div className="flex overflow-hidden">
        {images.slice(currentIndex, currentIndex + itemsPerPage).map((image) => (
          <div
            key={image.id}
            className="flex-shrink-0 w-1/5 flex justify-center items-center"
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
        className="btn btn-circle absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="btn btn-circle absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
