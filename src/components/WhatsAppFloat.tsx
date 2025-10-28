
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = "919994545454";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 active:scale-95 group flex items-center justify-center w-16 h-16"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:animate-pulse" />
        
        {/* Enhanced ripple effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping animation-delay-300"></div>
      </a>
      
      {/* Enhanced tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
