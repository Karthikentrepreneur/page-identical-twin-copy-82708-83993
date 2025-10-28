import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Settings,
  Wifi,
  CloudRain,
  LayoutTemplate,
  Wrench,
  Cloud,
  BadgeHelp
} from "lucide-react";

const HumanoidSection = () => {
  const serviceCards = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Managed IT Services",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Remote Management",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: <CloudRain className="w-6 h-6" />,
      title: "Data Backup/DR Solutions",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: <LayoutTemplate className="w-6 h-6" />,
      title: "Design & Implementation",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Maintenance Services",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <BadgeHelp className="w-6 h-6" />,
      title: "IT Consulting",
      color: "from-sky-400 to-blue-600"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Hosted Cloud Services",
      color: "from-cyan-400 to-violet-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-br from-indigo-200 to-transparent rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-blue-200 to-transparent rounded-full blur-2xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 relative z-10">
        {/* Heading */}
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
            Techsupport Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto"
          >
            Discover our essential IT services built to enhance and safeguard your digital operations.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-6">
          {serviceCards.map((service, index) => (
            <Link to="/services" key={index} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col justify-between h-full bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all group cursor-pointer p-6 text-center"
              >
                <div>
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full shadow-md text-white bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-[#0e256e] group-hover:text-blue-600 transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanoidSection;
