import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5000ms = 5s

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden shadow-xl">
      <div
        className="flex transition-transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item min-w-full relative">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-black to-transparent opacity-100"></div>{" "}
            {/* Gradient overlay */}
            <div className="absolute bottom-0 right-0 m-4 p-2 bg-white bg-opacity-0 rounded">
              <p className="font-bold carousel-text text-end">{t("home.c1")}</p>
              <p className="font-bold carousel-text text-end">{t("home.c2")}</p>
              <p className="font-bold carousel-text text-end">{t("home.c3")}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-5"
      >
        <div className="text-5xl text-white">‹</div>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-5"
      >
        <div className="text-5xl text-white">›</div>
      </button>
    </div>
  );
};

export default Carousel;
