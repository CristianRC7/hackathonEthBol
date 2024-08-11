import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import imagen1 from '../images/loguito.png'; 
import imagen2 from '../images/rendimiento.png'; 
import imagen3 from '../images/rapidez.png';
import imagen4 from '../images/eficacia.png';
import imagen5 from '../images/frase.png';

const images = [imagen1, imagen2, imagen3, imagen4, imagen5]; 

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalRef.current); 
  }, []);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    startInterval(); 
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startInterval(); 
  };

  return (
    <section 
      id="carousel" 
      className="relative"
      data-aos="fade-up" 
      data-aos-duration="1000"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Carousel container */}
          <div className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-96 md:h-[32rem] overflow-hidden">
              {/* Carousel images */}
              <div className="absolute inset-0">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>

              {/* Carousel controls */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full focus:outline-none shadow-lg hover:bg-gray-700"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full focus:outline-none shadow-lg hover:bg-gray-700"
              >
                <FaChevronRight size={24} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Carousel;
