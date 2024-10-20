import React, { useState } from 'react';
import { ourProduct } from '../constants';
import { mission } from '../assets';

const OurMissions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? ourProduct.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === ourProduct.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <main className="flex justify-center px-4 py-12 relative bg-bg" id="our-product">
      <div className="w-full h-full bg-cover bg-center absolute top-0" style={{ backgroundImage: `url(${mission})` }}>
        <div className="w-full h-full absolute px-12 bg-black opacity-80"></div>
      </div>

      <div className="z-10 flex flex-col items-center max-w-5xl w-full mb-24">
        <div className="text-center mb-8">
          <p className="font-bold text-secondary text-[16px]">| PRODUCT</p>
          <h2 className="font-bold text-[40px] md:text-[50px] text-white">Our Signature <br /> Product & Creations</h2>
        </div>

        <div className="relative w-full max-w-screen-lg overflow-hidden ">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {ourProduct.map((product, index) => (
              <div key={index} className="min-w-full flex-shrink-0 relative flex justify-center items-center group h-[400px] w-[390px] md:h-[500px] cursor-pointer  ">
                <img src={product.img} className="w-full h-full object-cover"/>
                <div className="w-full h-full absolute bg-black group-hover:opacity-70  opacity-0 transition-all duration-500"></div>
                <h2 className="absolute text-xl text-center md:text-3xl font-bold text-white group-hover:block hidden transition-all duration-500">
                  {product.title}
                </h2>
              </div>
            ))}
          </div>
          <button className="absolute top-1/2 left-0 transform  -translate-y-1/2 bg-black bg-opacity-50 text-white p-2" onClick={goToPrevious}>
            &#10094;
          </button>
          <button className="absolute top-1/2 right-0 transform  -translate-y-1/2 bg-black bg-opacity-50 text-white p-2" onClick={goToNext}>
            &#10095;
          </button>
        </div>
      </div>
    </main>
  );
};

export default OurMissions;
