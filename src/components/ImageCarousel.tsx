import React, { useState, useEffect } from 'react';
const ImageCarousel = () => {
  const images = [{
    src: "/laptop.png",
    alt: "COMPUTING",
    text: "COMPUTING"
  }, {
    src: "/2hh.png",
    alt: "POWER",
    text: "POWER"
  }, {
    src: "/4hh.png",
    alt: "Circuit Board Technology",
    text: "ACCESS CONTROL"
  }, {
    src: "/5hh.png",
    alt: "Surveillance",
    text: "SURVEILLANCE"
  }, {
    src: "/6hh.png",
    alt: "Surveillance",
    text: "SURVEILLANCE"
  }, {
    src: "/3hh.png",
    alt: "Surveillance",
    text: "SURVEILLANCE"
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return <div className="w-full flex flex-col items-center justify-center relative bg-transparent">
      {/* Image Container */}
      <div className="relative w-full max-w-[380px] md:max-w-[420px] lg:max-w-[480px] overflow-hidden">
        

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`rounded-full w-2.5 h-2.5 transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`} />)}
        </div>
      </div>

      {/* Text Box Below the Image */}
      <div className="mt-6 text-center">
        
      </div>
    </div>;
};
export default ImageCarousel;
