import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1419] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Intro */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/netark-logo-new.png"
                alt="NETARK Technologies Logo"
                className="h-16 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
            <h3 className="text-xl font-bold mb-4 text-primary">
              NETARK Technologies India Pvt. Ltd.
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Delivering trust, reliability, and future-ready IT infrastructure for over 20 years. 
              Your partner in enterprise networking, data center solutions, and secure connectivity.
            </p>
            <div className="flex items-start gap-3 text-sm text-gray-300">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p>
                Third Floor, Thachil Complex,<br />
                No. 10 Raja Annamalai Road,<br />
                Saibaba Colony, Coimbatore – 641 011
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about-us" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/solutions" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300 inline-block"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-primary transition-colors duration-300 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">0422-4280009</p>
                  <p className="text-white font-medium">+91 95006 44411</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@netark.co.in" 
                  className="text-white font-medium hover:text-primary transition-colors"
                >
                  info@netark.co.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="https://www.netark.co.in" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-primary transition-colors"
                >
                  www.netark.co.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} NETARK Technologies India Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-gray-400 text-center md:text-right">
              Designed with excellence by{" "}
              <span className="text-primary font-semibold">NETARK</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
