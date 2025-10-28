import React, { useState } from 'react';
import { Monitor, Network, Shield, Lock, Zap, Eye, Headphones, Server, Database, Cloud, Mic, ArrowLeft, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
    


const useScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

// Helper function to parse bold text
const parseBoldText = (text) => {
  if (!text || typeof text !== 'string') return text;
  
  const parts = text.split(/(<strong>.*?<\/strong>)/g);
  return parts.map((part, index) => {
    if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
      const content = part.replace(/<\/?strong>/g, '');
      return <strong key={index}>{content}</strong>;
    }
    return part;
  });
};

// Solutions Popup Component
const SolutionsPopup = ({ isOpen, onClose, title, features, icon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#045ADF] to-[#2571CA] text-white p-3 rounded-full">
                {icon}
              </div>
              <h2 className="text-xl font-bold text-[#0e256e]">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold text-[#0e256e] mb-4 text-lg">All Solutions Offered</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700 leading-relaxed">
                  <div className="w-2 h-2 bg-[#2571CA] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm font-medium">{parseBoldText(feature)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionCard = ({
  icon,
  title,
  description,
  features,
  ctaText,
  logos,
  image,
  delay = 0,
  onContactClick
}) => {
  const [showSolutionsPopup, setShowSolutionsPopup] = useState(false);
  
  // Show only first 4 features initially
  const truncatedFeatures = features.slice(0, 4);
  const hasMoreFeatures = features.length > 4;

  return (
    <>
      <div className="group h-full">
        <div className="h-full overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 rounded-lg flex flex-col">
          {/* Image Section */}
          {image && (
            <div className="relative h-48 overflow-hidden flex-shrink-0">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}
       
          
          {/* Header Section - Fixed Height */}
          <div className="p-6 pb-4 flex-shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-[#045ADF] to-[#2571CA] text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-[#0e256e] group-hover:text-[#2571CA] transition-colors duration-300 line-clamp-2">
                {title}
              </h3>
            </div>
            <p className="text-gray-800 text-sm leading-relaxed line-clamp-4 font-medium">
              {parseBoldText(description)}
            </p>
          </div>
          
          {/* Content Section - Fixed Height */}
          <div className="px-6 flex-grow flex flex-col">
            {/* Features List - Fixed Height */}
            <div className="mb-6 flex-grow">
              <h4 className="font-semibold text-[#0e256e] mb-3">Solutions Offered</h4>
              <ul className="space-y-2 mb-3">
                {truncatedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700 leading-snug font-medium">
                    <div className="w-1.5 h-1.5 bg-[#2571CA] rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <span>{parseBoldText(feature)}</span>
                  </li>
                ))}
              </ul>
              
              {/* Read More Button */}
              {hasMoreFeatures && (
                <button
                  onClick={() => setShowSolutionsPopup(true)}
                  className="text-[#2571CA] text-sm font-semibold hover:text-[#045ADF] transition-colors duration-200 flex items-center gap-1"
                >
                  Read More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Logos Section - Fixed Height */}
          {logos.length > 0 && (
            <div className="p-6 pt-4 border-t border-gray-100 flex-shrink-0">
              <div className="flex flex-wrap gap-2 justify-center min-h-[48px] items-center">
                {logos.map((logo, index) => (
                  <div key={index} className="bg-white rounded border p-2 flex items-center justify-center hover:shadow-md transition-shadow duration-200">
                    <img 
                      src={`/${logo.toLowerCase()}.png`} 
                      alt={logo} 
                      className="h-6 w-auto max-w-[60px] object-contain" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextElement = target.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'block';
                        }
                      }}
                    />
                    <span className="text-xs text-gray-600 font-medium hidden">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Solutions Popup */}
      <SolutionsPopup
        isOpen={showSolutionsPopup}
        onClose={() => setShowSolutionsPopup(false)}
        title={title}
        features={features}
        icon={icon}
      />
    </>
  );
};

const Solutions = () => {
  useScrollToTop();
  const [selectedSolution, setSelectedSolution] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleContactClick = (solutionName) => {
    setSelectedSolution(solutionName);
    setIsFormOpen(true);
    console.log(`Contact clicked for: ${solutionName}`);
  };

  const solutionsData = [
  {
    id: 1,
    icon: <Monitor className="w-6 h-6" />,
    title: "Enterprise Computing Solutions",
    description: "<strong>Delivering tailored, enterprise-grade technology solutions in collaboration with leading global OEMs.</strong>",
    features: [
      "Desktops, Laptops, Mobile Devices",
      "Servers and Storage",
      "Workstations & GPU.",
      "Printers, Imaging, Document Workflow solutions",
      "Identification and Tracking solutions",
      "Industrial Computing Solutions",
      "Email and Messaging",
      "Software Licensing",
      "Virtualisation & Private Cloud",
      "Mobile Device Management",
    "Others"
    ],
    ctaText: "<strong>Transform your operations with strategic technology solutions.</strong>",
    logos: ["Acer", "Dell", "Lenovo", "HP", "Samsung", "Canon"],
    image: "/computing.png"
  },
  {
    id: 2,
    icon: <Network className="w-6 h-6" />,
    title: "Network Infrastructure Solutions",
    description: "<strong>We deliver expert solutions to build robust, scalable networks that empower your organisation.</strong>",
    features: [
      "Structured Cabling and Fiber Optic Solutions",
      "Network Switching and Routing",
      "Scalable Wi-Fi Solutions",
      "Unified Communications (Voice and Video)",
      "Video Conferencing Solutions",
      "Network Audits and Optimisation",
      "WAN Optimisation solutions",
      "Network Monitoring and Management",
      "Others"
    ],
    ctaText: "<strong>Enhance connectivity. Ensure performance. Empower your business.</strong>",
    logos: ["Aruba", "Cisco", "D-Link", "Commscope", "Molex", "Panduit", "Legrand", "3c3", "Netrack", "Mikrotik"],
    image: "/server.png"
  },
  {
    id: 3,
    icon: <Shield className="w-6 h-6" />,
    title: "Information Security",
    description: "<strong>We deliver advanced security services to protect your organisation from evolving threats.</strong>",
    features: [
      "Firewall and VPN Protection",
      "Endpoint Protection Solutions",
      "Threat Defence Systems",
      "Security Audits and Implementation",
      "Data Loss Prevention",
      "Authentication and Access Control",
      "Security Strategy and Setup",
 "Others"
    ],
    ctaText: "<strong>Protect your data. Secure your business. Strengthen your defences.</strong>",
    logos: ["Checkpoint", "Sophos", "Fortinet", "Sonicwall", "Cisco", "Paloalto", "Trendmicro"],
    image: "/20.png"
  },
  {
    id: 4,
    icon: <Lock className="w-6 h-6" />,
    title: "Access Control Systems",
    description: "<strong>Enhance protection and operational efficiency with enterprise-grade systems:</strong>",
    features: [
      "Time & Attendance Automation systems",
      "Automated Gate Entry Systems",
      "Biometric, Smart Card, RFID, and NFC Access Systems",
      "Perimeter Protection & Intrusion Detection solutions",
      "Centralised Identity and Access Management solutions",
"Others"
    ],
    ctaText: "<strong>Partner with Us for Comprehensive, Future-Ready Security</strong>",
    logos: ["eSSL", "Hikvision", "ZKteco", "HID", "Rosselare"],
    image: "/27.png"
  },
  {
    id: 5,
    icon: <Zap className="w-6 h-6" />,
    title: "Industrial Networking Solutions",
    description: "<strong>Delivering secure, reliable networking solutions designed for demanding environments:</strong>",
    features: [
      "Wired Ethernet and Fieldbus Communication",
      "Industrial-Grade Wi-Fi and LoRaWAN Connectivity",
      "Rugged Switches, Routers, and Industrial Firewalls",
      "Protocol Conversion Gateways",
      "Hazardous-Area Certified Wireless Access Points",
      "Remote Data Loggers (4G/5G/LPWAN)",
      "Industrial Ethernet Cabling and Fiber Optic Backbones",
      "Standard and Customised Rack Cabinets",
"Others"
    ],
    ctaText: "<strong>Let's Build Your Industrial Network for the Future</strong>",
    logos: ["Cisco", "Aruba", "D-link", "Commscope"],
    image: "/19.png"
  },
  {
    id: 6,
    icon: <Eye className="w-6 h-6" />,
    title: "Industrial Surveillance & Safety Management",
    description: "<strong>Intelligent, Enterprise-Grade Protection for Industrial Operations</strong>",
    features: [
      "<strong>Advanced IP & CCTV Systems:</strong> High-resolution cameras with low-light capability for continuous site monitoring",
      "<strong>Thermal Imaging:</strong> Detection of fires, intrusions, and equipment malfunctions in smoke, fog, or darkness",
      "<strong>AI-Powered Video Analytics:</strong> Automated alerts for trespassing, PPE compliance, and crowd density monitoring",
      "<strong>Secure Video Storage:</strong> Scalable NVR and cloud solutions with advanced encryption for data security",
      "<strong>Industrial-Grade Cameras:</strong> Explosion-proof and corrosion-resistant designs, certified for hazardous environments (ATEX/IECEx)",
      "<strong>Machine Vision Systems:</strong> Automated safety interlocks and real-time quality control for manufacturing lines",
      "<strong>Unified Safety Platforms:</strong> Centralised control of cameras, sensors, and alarms with integrated, real-time dashboards",
"<strong>Others</strong>"
    ],
    ctaText: "<strong>Delivering reliable, future-ready safety and surveillance systems for critical industries.</strong>",
    logos: ["Axis", "Pelco", "Hikvision", "Tyco", "Vivotek", "QNAP"],
    image: "/camerasurveilance1.jpeg"
  },
  {
    id: 8,
    icon: <Server className="w-6 h-6" />,
    title: "Enterprise Servers & Storage Solutions",
    description: "<strong>Optimised Server and Storage Solutions for Today's Enterprise</strong>",
    features: [
      "<strong>Custom Servers:</strong> Hyper-converged, rack-mounted, and blade configurations for cloud, hybrid, and on-premises environments.",
      "<strong>Enterprise Storage:</strong> Centralised SAN and NAS systems for secure, high-availability data management.",
      "<strong>Data Protection:</strong> Backup, archival, disaster recovery, and secure cloud storage with policy-driven controls.",
"<strong>Others</strong>"
    ],
    ctaText: "<strong>Build a secure, high-performance foundation for your business.</strong>",
    logos: ["Dell", "HPE", "Cisco", "Lenovo", "Supermicro", "Tyrone", "Synology"],
    image: "/23.png"
  },
  {
    id: 9,
    icon: <Database className="w-6 h-6" />,
    title: "Data Center Solutions",
    description: "<strong>We deliver comprehensive, enterprise-grade data center solutions designed to ensure maximum reliability, operational efficiency, and security for your organisation.</strong>",
    features: [
      "<strong>Design & Build:</strong> Custom planning, modular systems, energy-efficient layouts",
      "<strong>Power & Cooling systems:</strong> Precision cooling, UPS and backup, energy monitoring",
      "<strong>Racks & Security:</strong> High-density racks, Surveillance, biometric/RFID access control",
      "<strong>Safety Systems:</strong> Fire detection and suppression, environmental monitoring, disaster-ready planning",
      "<strong>Management:</strong> Real-time DCIM monitoring, remote control, capacity planning",
"<strong>Others</strong>"
    ],
    ctaText: "<strong>Let's plan, build, and manage your data center for lasting success.</strong>",
    logos: ["Legrand", "Schneider", "Rittal"],
    image: "/datacenter.png"
  },
  {
    id: 10,
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Solutions",
    description: "<strong>Accelerate innovation, reduce costs, and protect your data with comprehensive, enterprise-grade cloud services.</strong>",
    features: [
      "<strong>Cloud Consulting & Migration Planning</strong>",
      "<strong>Private Cloud Implementation</strong>", 
      "<strong>Public Cloud Solutions</strong>", 
      "<strong>Managed Cloud Support</strong>", 
      "<strong>Cloud Backup & Disaster Recovery</strong>", 
      "<strong>Cloud Optimisation & Security</strong>",
"<strong>Others</strong>"
    ],
    ctaText: "<strong>Transform your operations with secure, efficient cloud services.</strong>",
    logos: ["AWS", "Azure", "Google", "Vembu"],
    image: "/21.png"
  },
  {
    id: 11,
    icon: <Mic className="w-6 h-6" />,
    title: "AV & Broadcast Solutions",
    description: "<strong>Delivering seamless audio-visual experiences—from boardrooms to stadiums—through expertly designed, enterprise-ready systems</strong>",
    features: [
      "<strong>Conference Room Systems</strong>",
     "<strong>Public Address & Voice Alarm</strong>",
     "<strong>Digital Signage Solutions</strong>",
    "<strong>Videowall Solutions</strong>",
    "<strong>LED Wall Solutions</strong>",
    "<strong>Custom Integration</strong>",
"<strong>Others</strong>"
    ],
    ctaText: "<strong>Enhance communication and engagement with trusted AV solutions.</strong>",
    logos: ["Benq", "Samsung", "Hikvision", "Bosch"],
    image: "/videowall.png"
  }
];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <Navbar />
      
      <div className="flex-grow p-8">
        {/* Hero Section */}
        <section className="relative py-12 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e256e] to-[#2571CA] rounded-2xl" />
          <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute left-0 bottom-0 h-[200px] w-[200px] bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto text-white px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Integrated IT Solutions
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#87CEEB] to-white mx-auto mb-8" />
            <p className="text-xl text-white/90 leading-relaxed">
              We provide enterprise class IT Solutions. We fulfil your technology requirements in terms of requirements study, designing a solution, testing it, implement and improve it.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {solutionsData.map((solution, index) => (
            <SolutionCard
              key={solution.id}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              ctaText={solution.ctaText}
              logos={solution.logos}
              image={solution.image}
              delay={index * 100}
              onContactClick={handleContactClick}
            />
          ))}
        </section>
      </div>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Solutions;
      
