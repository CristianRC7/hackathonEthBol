import React, { useState, useEffect } from 'react';
import imagen1 from '../images/localflow.png'; 
import imagen2 from '../images/features-element.png'; 
import imagen3 from '../images/localflow.png'; 

const images = [imagen1, imagen2, imagen3]; 

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
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
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden">
            <div className="relative w-full h-64 md:h-96 overflow-hidden">
              {/* Carousel images */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Imagen ${index + 1}`}
                      className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Carousel controls */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-r-lg focus:outline-none"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none"
              >
                &gt;
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Carousel;
