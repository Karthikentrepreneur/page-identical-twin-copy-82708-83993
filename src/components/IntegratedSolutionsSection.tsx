
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Network, Server, Shield, Cloud, Wrench, Database, Headphones, Eye, Lock, Zap, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntegratedSolutionsSection = () => {
  const solutions = [{
    icon: <Monitor className="w-6 h-6" />,
    title: "Computing Solutions",
    image: "/computing.png",
    color: "from-blue-500 to-blue-600"
  }, {
    icon: <Network className="w-6 h-6" />,
    title: "Networking & Cabling",
    image: "/server.png",
    color: "from-indigo-500 to-indigo-600"
  }, {
    icon: <Shield className="w-6 h-6" />,
    title: "Data Security",
    image: "/20.png",
    color: "from-red-500 to-red-600"
  }, {
    icon: <Lock className="w-6 h-6" />,
    title: "Access Control",
    image: "/27.png",
    color: "from-purple-500 to-purple-600"
  }, {
    icon: <Zap className="w-6 h-6" />,
    title: "Industrial Networking",
    image: "/19.png",
    color: "from-yellow-500 to-yellow-600"
  }, {
    icon: <Eye className="w-6 h-6" />,
    title: "Surveillance & Safety",
    image: "/camerasurveilance1.jpeg",
    color: "from-cyan-500 to-cyan-600"
  }, {
    icon: <Server className="w-6 h-6" />,
    title: "Servers & Storage",
    image: "/23.png",
    color: "from-orange-500 to-orange-600"
  }, {
    icon: <Database className="w-6 h-6" />,
    title: "Data Center",
    image: "/datacenter.png",
    color: "from-teal-500 to-teal-600"
  }, {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Solutions",
    image: "/21.png",
    color: "from-blue-400 to-blue-500"
  },  {
    icon: <Mic className="w-6 h-6" />,
    title: "AV & Broadcast",
    image: "/videowall.png",
    color: "from-indigo-400 to-indigo-500"
  }];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-200 to-transparent rounded-full blur-2xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 relative z-10">
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
            Integrated IT Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto"
          >
            Enterprise-class IT solutions from design to deployment, tailored for your infrastructure, cloud migration, and digital transformation goals.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to="/solutions">
                <div className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all group cursor-pointer">
                  <div className="relative h-32 overflow-hidden rounded-t-xl p-4 flex items-center justify-center bg-gray-50">
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute bottom-2 left-2">
                      <div className={`p-2 rounded-full shadow-md text-white bg-gradient-to-r ${solution.color}`}>
                        {solution.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-center text-[#0e256e] group-hover:text-blue-600 transition-colors">
                      {solution.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegratedSolutionsSection;
