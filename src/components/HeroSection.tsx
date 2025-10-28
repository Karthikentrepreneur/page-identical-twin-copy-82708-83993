import HexagonTechSVG from "./HexagonTechSVG";
import ImageCarousel from "./ImageCarousel";
import { motion } from 'framer-motion';
import GetStartedForm from "./GetStartedForm";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const HeroSection = () => {
  // State declarations
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const partnerLogos = [{
    name: "3C3",
    logo: "/3c3.png"
  }, {
    name: "Acer",
    logo: "/acer.png"
  }, {
    name: "Acronis",
    logo: "/acronis.png"
  }, {
    name: "Ahua",
    logo: "/ahua.png"
  }, {
    name: "Ahuja",
    logo: "/ahuja.png"
  }, {
    name: "APC",
    logo: "/apc.png"
  }, {
    name: "APW",
    logo: "/apw.png"
  }, {
    name: "Aruba",
    logo: "/aruba.png"
  }, {
    name: "Avaya",
    logo: "/avaya.png"
  }, {
    name: "AWS",
    logo: "/aws.png"
  }, {
    name: "Axis",
    logo: "/axis.png"
  }, {
    name: "BenQ",
    logo: "/benq.png"
  }, {
    name: "Bosch",
    logo: "/bosch.png"
  }, {
    name: "Cambium",
    logo: "/cambium.png"
  }, {
    name: "Checkpoint",
    logo: "/checkpoint.png"
  }, {
    name: "Cisco",
    logo: "/cisco.png"
  }, {
    name: "Commoscope",
    logo: "/commoscope.png"
  }, {
    name: "Cybernety",
    logo: "/cybernety.png"
  }, {
    name: "Dell",
    logo: "/dell.png"
  }, {
    name: "D-Link",
    logo: "/dlink.png"
  }, {
    name: "DP Tex",
    logo: "/dptex.png"
  }, {
    name: "Emerson",
    logo: "/emerson.png"
  }, {
    name: "Epson",
    logo: "/epson.png"
  }, {
    name: "eSSL",
    logo: "/essl.png"
  }, {
    name: "Extreme",
    logo: "/extreme.png"
  }, {
    name: "Fire Safety",
    logo: "/firesafety.png"
  }, {
    name: "Fortinet",
    logo: "/fortinet.png"
  }, {
    name: "Grandstream",
    logo: "/grandstream.png"
  }, {
    name: "Hero7",
    logo: "/hero7.png"
  }, {
    name: "Hikvision",
    logo: "/hikvision.png"
  }, {
    name: "Hitachi",
    logo: "/hitachi.png"
  }, {
    name: "Honeywell",
    logo: "/honeywell.png"
  }, {
    name: "IT Consulting",
    logo: "/itconsulting.png"
  }, {
    name: "Jabra",
    logo: "/jabra.png"
  }, {
    name: "Johnson",
    logo: "/johnson.png"
  }, {
    name: "Juniper",
    logo: "/juniper.png"
  }, {
    name: "Laptop",
    logo: "/laptop.png"
  }, {
    name: "Lasth",
    logo: "/lasth.png"
  }, {
    name: "Lenovo",
    logo: "/lenovo.png"
  }, {
    name: "LG",
    logo: "/lg.png"
  }, {
    name: "Logitech",
    logo: "/logitech.png"
  }, {
    name: "Matrix",
    logo: "/matrix.png"
  }, {
    name: "Microsoft",
    logo: "/microsoft.png"
  }, {
    name: "Milesight",
    logo: "/milesight.png"
  }, {
    name: "Molex",
    logo: "/molex.png"
  }, {
    name: "Morly",
    logo: "/morly.png"
  }, {
    name: "Netgear",
    logo: "/netgear.png"
  }, {
    name: "Netrack",
    logo: "/netrack.png"
  }, {
    name: "Networking",
    logo: "/networking.png"
  }, {
    name: "Numeric",
    logo: "/numeric.png"
  }, {
    name: "Palo Alto",
    logo: "/paloalto.png"
  }, {
    name: "Panasonic",
    logo: "/panasonic.png"
  }, {
    name: "Poly",
    logo: "/poly.png"
  }, {
    name: "Power Solutions",
    logo: "/powersolutions.png"
  }, {
    name: "QNAP",
    logo: "/qnap.png"
  }, {
    name: "Ravel",
    logo: "/ravel.png"
  }, {
    name: "Rittal",
    logo: "/rittal.png"
  }, {
    name: "Rosslare",
    logo: "/rosslare.png"
  }, {
    name: "Ruckus",
    logo: "/ruckus.png"
  }, {
    name: "Samsung",
    logo: "/samsung.png"
  }, {
    name: "Schneider",
    logo: "/schneider.png"
  }, {
    name: "Servers & Storage",
    logo: "/serversstorage.png"
  }, {
    name: "SonicWall",
    logo: "/sonicwall.png"
  }, {
    name: "Sony",
    logo: "/sony.png"
  }, {
    name: "Sophos",
    logo: "/sophos.png"
  }, {
    name: "Surveilance",
    logo: "/surveilance.png"
  }, {
    name: "Synology",
    logo: "/synology.png"
  }, {
    name: "Texecom",
    logo: "/texecom.png"
  }, {
    name: "Ubiquiti",
    logo: "/ubiquiti.png"
  }, {
    name: "UNV",
    logo: "/unv.png"
  }, {
    name: "UPS",
    logo: "/ups.png"
  }, {
    name: "Vembu",
    logo: "/vembu.png"
  }, {
    name: "ViewSonic",
    logo: "/viewsonic.png"
  }, {
    name: "Vivotek",
    logo: "/vivotek.png"
  }, {
    name: "Yealink",
    logo: "/yealink.png"
  }, {
    name: "ZKTeco",
    logo: "/zkteco.png"
  }];

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setIsFormOpen(true);
    setIsOpen(false); // Close mobile menu if open
  };

  const backgroundImages = [
    "/lovable-uploads/d2e27d6a-96a8-45f2-8f0b-d1e0e6bcb2f8.png", 
    "/2hh.png", 
    "/4hh.png", 
    "/3hh.png", 
    "/5hh.png"
  ];
  
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
        {/* Auto-scrolling Background Images */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBgIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Technology Background ${index + 1}`} 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-col lg:flex-row items-center justify-between flex-grow pt-20 sm:pt-24 md:pt-28 lg:pt-24 pb-8 sm:pb-10 md:pb-12 lg:pb-8">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 mb-8 sm:mb-10 md:mb-12 lg:mb-0"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white leading-tight drop-shadow-lg"
            >
              Making Technology <br />
              <span className="text-[#87CEEB] bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] bg-clip-text text-transparent">
                Work for People & Business
                <sup className="text-white text-[0.6em] align-super ml-0.5">®</sup>
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-base max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md mx-auto lg:mx-0 leading-relaxed drop-shadow-md"
            >
              Empowering businesses through cutting-edge technology, streamlining processes and driving success with innovative IT infrastructure solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }} 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-4 lg:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0"
            >
              <Link to="/solutions" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-4 sm:px-5 md:px-6 lg:px-6 py-3 sm:py-3 md:py-3 lg:py-3 border-2 border-white/80 rounded-lg text-white bg-white/10 backdrop-blur-sm font-bold shadow-lg hover:bg-white/20 transition-all transform hover:scale-105 text-sm sm:text-sm md:text-base lg:text-base">
                  EXPLORE SOLUTIONS
                </button>
              </Link>

              <button
                onClick={handleGetStartedClick}
                className="w-full sm:w-auto px-4 sm:px-5 md:px-6 lg:px-6 py-3 sm:py-3 md:py-3 lg:py-3 rounded-lg bg-gradient-to-r from-[#045ADF] to-[#2571CA] text-white font-bold shadow-lg hover:opacity-95 transition-all transform hover:scale-105 text-sm sm:text-sm md:text-base lg:text-base"
                style={{ boxShadow: "0 4px 16px 0 #0052b433" }}
              >
                GET STARTED
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.8 }} 
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-6 pt-4 sm:pt-5 md:pt-6 lg:pt-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-white drop-shadow-lg">20+</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-white drop-shadow-lg">500+</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-white drop-shadow-lg">100+</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-sm text-gray-300">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-[90%] xl:w-[95%] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[550px]">
              <ImageCarousel />
            </div>
          </motion.div>
        </div>

        {/* Partner Logos Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 1 }} 
          className="relative z-30 py-6 sm:py-7 md:py-8 lg:py-8 bg-inherit"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center mb-4 sm:mb-5 md:mb-6 lg:mb-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-sm mb-2 sm:mb-2 md:mb-2 lg:mb-2 text-slate-50">
                Trusted by Industry Leaders
              </p>
              <div className="w-16 sm:w-20 md:w-24 lg:w-16 h-0.5 bg-gradient-to-r from-[#045ADF] to-[#2571CA] mx-auto"></div>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-6 sm:space-x-7 md:space-x-8 lg:space-x-8">
                {partnerLogos.map((partner, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-18 sm:w-20 md:w-22 lg:w-24 h-10 sm:h-11 md:h-12 lg:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-6 sm:max-h-7 md:max-h-8 lg:max-h-8 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity" 
                    />
                  </div>
                ))}
                {partnerLogos.map((partner, index) => (
                  <div 
                    key={`duplicate-${index}`} 
                    className="flex-shrink-0 w-18 sm:w-20 md:w-22 lg:w-24 h-10 sm:h-11 md:h-12 lg:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-6 sm:max-h-7 md:max-h-8 lg:max-h-8 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
      
      <GetStartedForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default HeroSection;
