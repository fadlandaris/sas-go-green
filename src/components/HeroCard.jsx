import React, { useState, useEffect, useRef } from 'react';
import styles from '../style';
import { heroData } from '../constants';
import { Sas, MdOutlineVolumeUp, MdOutlineVolumeOff } from '../assets'; 
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md';

const HeroCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMuted, setIsMuted] = useState(true); 
  const videoRef = useRef(null); 

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const preventPause = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    }
  };

  return (
    <main id="home" className={`relative w-full h-[600px] md:h-[800px] flex justify-center items-center ${styles.someClassName}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        autoPlay
        muted={isMuted} 
        onPause={preventPause} 
        onPlay={preventPause}  
      >
        <source src={Sas} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-70 z-10 w-full h-full" />

      <div className={`flex justify-start items-center p-12 md:p-0 text-white relative z-20 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-6xl">
          <h2 className="text-6xl md:text-7xl text-center font-bold mt-4 md:mt-6 leading-snug uppercase">
            {heroData[currentSlide].title === "PT. SEGARA ALAM SINERGI" ? (
              <>PT. SEGARA ALAM SINERGI</>
            ) : (
              heroData[currentSlide].title
            )}
          </h2>
        </div>
      </div>

      <button
        className="absolute bottom-20  p-3 bg-gray-800 bg-opacity-50 text-white rounded-full z-30"
        onClick={toggleMute}
      >
        {isMuted ? <MdVolumeOff/> : <MdVolumeUp/>}
      </button>
    </main>
  );
};

export default HeroCard;
