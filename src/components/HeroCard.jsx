import React, { useState, useEffect } from 'react';
import styles from '../style'; 
import { heroData } from '../constants'; 

const HeroCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); 

  const nextSlide = () => {
    setIsAnimating(true); 
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
      setIsAnimating(false); 
    }, 500); 
  };


  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); 

    return () => clearInterval(slideInterval); 
  }, []);

  return (
    <main id='home' className={`w-full h-[600px] md:h-[800px] relative bg-cover bg-left-top flex justify-center items-center ${styles.someClassName}`} style={{ backgroundImage: `url(${heroData[currentSlide].image})` }} >
      <div className="absolute inset-0 bg-black bg-opacity-70 w-full" />


      <div className={`flex justify-start items-center p-12 md:p-0 text-white relative z-10 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <div className='max-w-6xl'>

          <h2 className="text-6xl md:text-7xl text-center font-bold mt-4 md:mt-6 leading-snug uppercase">
            {heroData[currentSlide].title === "PT. SEGARA ALAM SINERGI" ? (
              <>
                PT. SEGARA ALAM SINERGI
              </>
            ) : (
              heroData[currentSlide].title
            )}
          </h2>
        </div>
      </div>


    </main>
  );
};

export default HeroCard;
