import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ValuesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden"
        >
          {/* Left Content */}
          <div className="lg:w-1/3 bg-gradient-to-br from-[#0e256e] to-[#2571CA] rounded-2xl p-8 text-white text-center flex flex-col items-center">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">Digitalize & Accelerate</h3>
              <p className="text-base md:text-lg mt-4 opacity-90">
                Speak to us about solutions and technologies to accelerate your business
              </p>
            </div>
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center shadow-inner animate-pulse">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-2/3 w-full text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0e256e] mb-4 leading-snug">
              How can we be a part of your growth?
            </h3>
            <p className="text-md md:text-lg text-gray-700 mb-6 max-w-xl">
              Accelerate your business potential with the innovative use of technology.
            </p>

            {/* Clickable Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div
                onClick={() => navigate('/solutions')}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 transition text-white p-5 rounded-xl shadow-md text-center"
              >
                <h4 className="text-lg font-semibold mb-2">SUPPLY</h4>
                <p className="text-sm opacity-90">Proven Products & Solutions</p>
              </div>
              <div
                onClick={() => navigate('/services')}
                className="cursor-pointer bg-red-500 hover:bg-red-600 transition text-white p-5 rounded-xl shadow-md text-center"
              >
                <h4 className="text-lg font-semibold mb-2">PROVIDE</h4>
                <p className="text-sm opacity-90">Specialized Deployment & Consulting Services</p>
              </div>
              <div
                onClick={() => navigate('/support')}
                className="cursor-pointer bg-teal-500 hover:bg-teal-600 transition text-white p-5 rounded-xl shadow-md text-center"
              >
                <h4 className="text-lg font-semibold mb-2">SUPPORT</h4>
                <p className="text-sm opacity-90">Optimise & Manage Solutions</p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8">
              <p className="text-sm text-gray-500 italic">
                Supporting your digitalization journey throughout the transformation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
