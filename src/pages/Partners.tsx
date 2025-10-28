import { Award, HandHeart, Target, Users, MessageSquare, Headphones, Clock, Star, Monitor, Network, Shield, Zap, Wrench, Camera, Wifi, Speaker } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Partners = () => {
  useScrollToTop();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const ticking = useRef(false);

  const partnerCategories = [{
    title: "Structured Cabling Solutions",
    icon: <Network className="w-8 h-8" />,
    description: "Complete structured cabling and optical fiber solutions for network infrastructure.",
    color: "from-teal-500 to-green-600",
    bgColor: "from-teal-50 to-green-50",
    partners: [{
      name: "Commoscope",
      logo: "/commoscope.png"
    }, {
      name: "Molex", 
      logo: "/molex.png"
    }, {
      name: "3C3",
      logo: "/3c3.png"
    }, {
      name: "D-Link",
      logo: "/dlink.png"
    }, {
      name: "Panduit",
      logo: "/panduit.png"
    },{
      name: "Netrack",
      logo: "/netrack.png"
    }, {
      name: "APW",
      logo: "/apw.png"
    }, {
      name: "Rittal",
      logo: "/rittal.png"
    }]
  }, {
    title: "Networking Solutions",
    icon: <Network className="w-8 h-8" />,
    description: "Enterprise networking equipment and infrastructure solutions.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    partners: [{
      name: "Cisco",
      logo: "/cisco.png"
    }, {
      name: "Aruba",
      logo: "/aruba.png"
    }, {
      name: "Extreme",
      logo: "/extreme.png"
    }, {
      name: "Juniper",
      logo: "/juniper.png"
    }, {
      name: "tplink",
      logo: "/tplink.png"
    },{
      name: "D-Link",
      logo: "/dlink.png"
    }, {
      name: "Netgear",
      logo: "/netgear.png"
    }]
  }, {
    title: "Servers & Storage Solutions",
    icon: <Monitor className="w-8 h-8" />,
    description: "Enterprise server solutions and storage systems for data management.",
    color: "from-slate-500 to-gray-600",
    bgColor: "from-slate-50 to-gray-50",
    partners: [{
      name: "Dell",
      logo: "/dell.png"
    }, {
      name: "Lenovo",
      logo: "/lenovo.png"
    }, {
      name: "Acer",
      logo: "/acer.png"
    }, {
      name: "Cisco",
      logo: "/cisco.png"
    }, {
      name: "Vembu",
      logo: "/vembu.png"
    }, {
      name: "Acronis",
      logo: "/acronis.png"
    }, {
      name: "Synology",
      logo: "/synology.png"
    }]
  }, {
    title: "Surveillance Solutions",
    icon: <Camera className="w-8 h-8" />,
    description: "Advanced video surveillance and video management solutions.",
    color: "from-red-500 to-orange-600",
    bgColor: "from-red-50 to-orange-50",
    partners: [{
      name: "Axis",
      logo: "/axis.png"
    }, {
      name: "Hikvision",
      logo: "/hikvision.png"
    }, {
      name: "Ahua",
      logo: "/ahua.png"
    }, {
      name: "UNV",
      logo: "/unv.png"
    }, {
      name: "Vivotek",
      logo: "/vivotek.png"
    }, {
      name: "Bosch",
      logo: "/bosch.png"
    }, {
      name: "QNAP",
      logo: "/qnap.png"
    }]
  }, {
    title: "Network Security & Data Protection",
    icon: <Shield className="w-8 h-8" />,
    description: "Comprehensive cybersecurity and data protection solutions.",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
    partners: [{
      name: "Checkpoint",
      logo: "/checkpoint.png"
    }, {
      name: "Sophos",
      logo: "/sophos.png"
    }, {
      name: "Palo Alto",
      logo: "/paloalto.png"
    }, {
      name: "Fortinet",
      logo: "/fortinet.png"
    }, {
      name: "Cisco",
      logo: "/cisco.png"
    }, {
      name: "SonicWall",
      logo: "/sonicwall.png"
    }]
  }, {
    title: "WiFi Solutions",
    icon: <Wifi className="w-8 h-8" />,
    description: "Enterprise wireless networking and WiFi infrastructure solutions.",
    color: "from-green-500 to-teal-600",
    bgColor: "from-green-50 to-teal-50",
    partners: [{
      name: "Cisco",
      logo: "/cisco.png"
    }, {
      name: "Aruba",
      logo: "/aruba.png"
    }, {
      name: "Cambium",
      logo: "/cambium.png"
    }, {
      name: "Ruckus",
      logo: "/ruckus.png"
    }, {
      name: "Ubiquiti",
      logo: "/ubiquiti.png"
    }]
  }, {
    title: "Public Address Systems",
    icon: <Speaker className="w-8 h-8" />,
    description: "Professional audio and public address system solutions.",
    color: "from-yellow-500 to-orange-600",
    bgColor: "from-yellow-50 to-orange-50",
    partners: [{
      name: "Bosch",
      logo: "/bosch.png"
    }, {
      name: "Ahuja",
      logo: "/ahuja.png"
    }, {
      name: "Honeywell",
      logo: "/honeywell.png"
    }]
  }, {
    title: "Video Conference Solutions",
    icon: <MessageSquare className="w-8 h-8" />,
    description: "Modern video conferencing and collaboration solutions.",
    color: "from-indigo-500 to-blue-600",
    bgColor: "from-indigo-50 to-blue-50",
    partners: [{
      name: "Logitech",
      logo: "/logitech.png"
    }, {
      name: "Poly",
      logo: "/poly.png"
    }, {
      name: "Cisco",
      logo: "/cisco.png"
    }, {
      name: "Yealink",
      logo: "/yealink.png"
    }, {
      name: "Jabra",
      logo: "/jabra.png"
    }]
  }, {
    title: "Power Solutions",
    icon: <Zap className="w-8 h-8" />,
    description: "Industry-leading power management and UPS solutions for critical infrastructure protection.",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    partners: [{
      name: "APC",
      logo: "/apc.png"
    }, {
      name: "Hitachi",
      logo: "/hitachi.png"
    }, {
      name: "Numeric",
      logo: "/numeric.png"
    }, {
      name: "Emerson",
      logo: "/emerson.png"
    }]
  }, {
    title: "Projectors & Displays",
    icon: <Monitor className="w-8 h-8" />,
    description: "High-quality display solutions and projection systems for professional environments.",
    color: "from-purple-500 to-indigo-600",
    bgColor: "from-purple-50 to-indigo-50",
    partners: [{
      name: "BenQ",
      logo: "/benq.png"
    }, {
      name: "Sony",
      logo: "/sony.png"
    }, {
      name: "Samsung",
      logo: "/samsung.png"
    }, {
      name: "LG",
      logo: "/lg.png"
    }, {
      name: "Epson",
      logo: "/epson.png"
    }, {
      name: "ViewSonic",
      logo: "/viewsonic.png"
    }, {
      name: "Cybernety",
      logo: "/cybernety.png"
    }]
  }, {
    title: "Fire Protection",
    icon: <Shield className="w-8 h-8" />,
    description: "Comprehensive fire safety and protection systems for commercial and industrial applications.",
    color: "from-red-500 to-pink-600",
    bgColor: "from-red-50 to-pink-50",
    partners: [{
      name: "Morly",
      logo: "/morly.png"
    }, {
      name: "Honeywell",
      logo: "/honeywell.png"
    }, {
      name: "Ravel",
      logo: "/ravel.png"
    }]
  }, {
    title: "Communication",
    icon: <MessageSquare className="w-8 h-8" />,
    description: "Advanced communication systems and unified communication solutions.",
    color: "from-blue-500 to-teal-600",
    bgColor: "from-blue-50 to-teal-50",
    partners: [{
      name: "Grandstream",
      logo: "/grandstream.png"
    }, {
      name: "Avaya",
      logo: "/avaya.png"
    }, {
      name: "Matrix",
      logo: "/matrix.png"
    }, {
      name: "Panasonic",
      logo: "/panasonic.png"
    }, {
      name: "Yealink",
      logo: "/yealink.png"
    }]
  }, {
    title: "Data Center",
    icon: <Users className="w-8 h-8" />,
    description: "Enterprise data center infrastructure and rack solutions.",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    partners: [{
      name: "Rittal",
      logo: "/rittal.png"
    }, {
      name: "Schneider",
      logo: "/schneider.png"
    }, {
      name: "Emerson",
      logo: "/emerson.png"
    }]
  }, {
    title: "Building Automation/IoT",
    icon: <Wrench className="w-8 h-8" />,
    description: "Smart building automation and IoT solutions for modern infrastructure.",
    color: "from-indigo-500 to-purple-600",
    bgColor: "from-indigo-50 to-purple-50",
    partners: [{
      name: "Schneider",
      logo: "/schneider.png"
    }, {
      name: "Honeywell",
      logo: "/honeywell.png"
    }, {
      name: "Milesight",
      logo: "/milesight.png"
    }, {
      name: "Johnson",
      logo: "/johnson.png"
    }]
  }, {
    title: "Cloud Services",
    icon: <Shield className="w-8 h-8" />,
    description: "Comprehensive cloud platforms and private cloud solutions.",
    color: "from-cyan-500 to-blue-600",
    bgColor: "from-cyan-50 to-blue-50",
    partners: [{
      name: "Microsoft",
      logo: "/microsoft.png"
    }, {
      name: "AWS",
      logo: "/aws.png"
    }]
  }, {
    title: "Access Control & Physical Security",
    icon: <Target className="w-8 h-8" />,
    description: "Advanced access control systems and physical security solutions.",
    color: "from-gray-500 to-slate-600",
    bgColor: "from-gray-50 to-slate-50",
    partners: [{
      name: "Rosslare",
      logo: "/rosslare.png"
    }, {
      name: "eSSL",
      logo: "/essl.png"
    }, {
      name: "ZKTeco",
      logo: "/zkteco.png"
    }, {
      name: "Texecom",
      logo: "/texecom.png"
    }, {
      name: "DP Tex",
      logo: "/dptex.png"
    }]
  }];

  const cardStyle: React.CSSProperties = {
    height: "65vh",
    maxHeight: "600px",
    borderRadius: "20px",
    transition: "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
    willChange: "transform, opacity"
  };

  const nextCard = () => {
    setActiveCardIndex(prev => (prev + 1) % 16);
  };

  const prevCard = () => {
    setActiveCardIndex(prev => (prev - 1 + 16) % 16);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current!.getBoundingClientRect();
          const scrollableHeight = sectionRef.current!.scrollHeight - window.innerHeight;
          const progress = Math.min(1, Math.max(0, -rect.top / scrollableHeight));
          const cardIndex = Math.floor(progress * 16);
          setActiveCardIndex(Math.min(15, cardIndex));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderCard = (index: number) => {
    const isCurrent = activeCardIndex === index;
    const isPassed = activeCardIndex > index;
    const isFuture = activeCardIndex < index;
    const zIndex = 20 + index;
    let translateY = 0;
    let scale = 1;
    let opacity = 1;
    let pointerEvents: React.CSSProperties['pointerEvents'] = "auto";
    let rotateX = 0;
    const STACK_OFFSET = 30;

    if (isCurrent) {
      translateY = 0;
      scale = 1;
      opacity = 1;
      rotateX = 0;
    } else if (isPassed) {
      const offsetMultiplier = activeCardIndex - index;
      translateY = offsetMultiplier * STACK_OFFSET;
      scale = 1 - offsetMultiplier * 0.03;
      opacity = 1 - offsetMultiplier * 0.15;
      rotateX = offsetMultiplier * 3;
      pointerEvents = "none";
    } else if (isFuture) {
      translateY = -100;
      scale = 0.85;
      opacity = 0;
      rotateX = -8;
      pointerEvents = "none";
    }

    const category = partnerCategories[index];
    return <div key={index} className="absolute inset-0 overflow-hidden shadow-lg rounded-[20px] will-change-transform transform-gpu hover:shadow-xl hover:shadow-gray-300/50 cursor-pointer" style={{
      ...cardStyle,
      zIndex,
      transform: `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`,
      opacity: opacity,
      pointerEvents: pointerEvents,
      transformOrigin: 'center top'
    }}>
        <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} rounded-[20px]`} />
        
        <div className="relative z-10 p-4 md:p-6 lg:p-8 text-gray-800 flex flex-col h-full">
          <div className="flex items-center justify-center mb-4">
            <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white`}>
              {category.icon}
            </div>
          </div>
          
          <h2 className="font-extrabold mb-4 drop-shadow-sm leading-tight text-gray-800 text-lg md:text-xl lg:text-2xl text-center">
            {category.title}
          </h2>
          
          <p className="mb-6 text-gray-700 text-sm md:text-base leading-relaxed text-center">
            {category.description}
          </p>

          {/* Partner logos grid - Improved sizing and spacing */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-6 flex-1">
            {category.partners.map((partner, partnerIndex) => <div key={partnerIndex} className="bg-white/90 backdrop-blur-sm p-3 md:p-4 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-300 min-h-[70px] md:min-h-[80px] rounded-xl border border-gray-200/50 group">
                <img src={partner.logo} alt={partner.name} className="max-h-10 md:max-h-12 lg:max-h-14 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </div>)}
          </div>
        </div>
      </div>;
  };

  return <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-16 pb-12 bg-gradient-to-br from-[#0e256e] via-[#1a3399] to-[#2571CA] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi02LTYtNiA2LTYgNiA2LTYgNi02IDZ6bS0xMyA0IDYtNi02LTYgNi02IDYgNi02IDYtNiA2eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
        </div>
        
        <div className="absolute top-10 right-5 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-5 w-24 h-24 bg-[#87CEEB]/20 rounded-full blur-2xl animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center my-[30px]">
            <motion.h1 initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-[#87CEEB] to-white bg-clip-text text-slate-50 font-bold">Technology Partners</span>
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed">
              Building powerful partnerships across 16 technology categories to deliver exceptional solutions and drive innovation across industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div ref={sectionRef} className="relative bg-white" style={{
      height: "1600vh"
    }}>
        <section className="w-full h-screen sticky top-0 flex items-start justify-center py-8 px-4">
          <div className="container mx-auto px-4 lg:px-8 h-full flex flex-col justify-start items-center pt-8">
            <motion.div initial={{
            opacity: 0,
            y: -50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            ease: "easeOut"
          }} viewport={{
            once: true
          }} className="text-center mb-8 py-0 px-0 relative z-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-4 drop-shadow-md">Our Partners</h2>
              <p className="text-gray-600 text-base md:text-lg">Comprehensive solutions across all technology domains</p>
            </motion.div>

            <div className="flex items-center justify-center gap-6 mb-6 relative z-20">
              <button 
                onClick={prevCard} 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Smaller dots */}
              <div className="flex space-x-2">
                {Array.from({ length: 16 }, (_, i) => (
                  <button
                    key={i}
                    className={`transition-all duration-300 ${
                      activeCardIndex === i 
                        ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
                    }`}
                    onClick={() => setActiveCardIndex(i)}
                  />
                ))}
              </div>

              <button 
                onClick={nextCard} 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center pt-4 pb-12">
              <div className="relative w-full h-[65vh] max-h-[600px]">
                {Array.from({
                length: 16
              }, (_, index) => renderCard(index))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>;
};

export default Partners;
