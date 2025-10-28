import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Wrench, Layers, Cpu } from 'lucide-react';

const SupportMaintenanceSection = () => {
  useScrollToTop();

  const supportServices = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Comprehensive Tech Support/Maintenance",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Flexible Service Models",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Supported Technologies",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-br from-indigo-200 to-transparent rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-blue-200 to-transparent rounded-full blur-2xl opacity-30" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 xl:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#0e256e] mb-3"
          >
            Support / Maintenance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto"
          >
            Reliable services designed to meet your IT needs with flexible, comprehensive solutions.
          </motion.p>
        </motion.div>

        {/* Even Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {supportServices.map((service, index) => (
            <Link to="/support" key={index} className="w-full max-w-sm">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all group cursor-pointer p-6 text-center h-full flex flex-col justify-center"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-3 rounded-full shadow-md text-white bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-[#0e256e] group-hover:text-blue-600 transition-colors leading-snug">
                  {service.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportMaintenanceSection;
