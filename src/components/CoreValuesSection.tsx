
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Network, Server, Shield, Cloud, Wrench, Database, Headphones, Eye, Lock, Zap, Mic } from 'lucide-react';

// Mock components for shadcn/ui Card, CardContent, CardHeader, CardTitle
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-3xl shadow-xl transition-all duration-500 ease-in-out ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`p-6 pb-2 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <h3 className="mx-0 my-[15px] text-xl font-bold">
    {children}
  </h3>
);

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

// Main component with enhanced styles
const CoreValuesSection = () => {
  const values = [
    {
      title: "INDSYS",
      description: "We help businesses ranging from SMEs to Corporates in achieving their business goals through innovative use of cutting-edge information technology solutions to improve their process. Whether building a custom system to meet clients' unique business needs or integrating an existing system, We focus on delivering scalable, extensible solutions at an affordable price.",
      bgColor: "from-fuchsia-400 to-purple-500",
      borderColor: "border-fuchsia-500",
      textColor: "text-purple-900"
    },
    {
      title: "Growing Together",
      description: "Being a customer-focused organisation, we always believe in a win-win relationship between vendors, customers, employees, and communities, which is the most effective way to profitable and sustainable growth for everyone.",
      bgColor: "from-emerald-400 to-teal-500",
      borderColor: "border-emerald-500",
      textColor: "text-teal-900"
    },
    {
      title: "Customer Delight",
      description: "We help businesses ranging from SMEs to Corporates in achieving their business goals through innovative use of cutting-edge information technology solutions to improve their process. Whether building a custom system to meet clients' unique business needs or integrating an existing system, We focus on delivering scalable, extensible solutions at an affordable price.",
      bgColor: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-500",
      textColor: "text-orange-900"
    },
    {
      title: "The Experience",
      description: "We have started our journey a decade ago, we perfected ourselves at many stops, understood the realities and so did our customers and their requirements. We constantly updating our processes and skills to support clients' challenging business landscape.",
      bgColor: "from-sky-400 to-indigo-500",
      borderColor: "border-sky-500",
      textColor: "text-indigo-900"
    }
  ];

  return (
    <section className="py-12 bg-gray-100 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 xl:px-0">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-extrabold text-[#1A56B3] mb-4 tracking-tight md:text-4xl text-4xl my-0 py-[30px]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2571CA] to-[#0e256e]">Core Values</span>
          </h2>
        </motion.div>

        {/* Grid for Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateZ: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className={`group flex relative`}
            >
              <Card
                className={`w-full bg-gradient-to-br ${value.bgColor} border-4 ${value.borderColor}
                           hover:-translate-y-6 hover:shadow-2xl hover:shadow-gray-400/50
                           group-hover:scale-105 transform origin-center
                           relative z-10 overflow-hidden cursor-pointer`}
              >
                {/* Hexagon Logo Background - More visible behind text */}
                <div
                  className="absolute inset-0 z-0 rounded-3xl pointer-events-none flex items-center justify-center"
                  style={{
                    backgroundImage: `url('/lovable-uploads/1af8bc84-f276-4b66-97ea-1a1838d0f011.png')`,
                    backgroundSize: '300px 300px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.3, // Increased opacity to make it more visible
                  }}
                />

                {/* Subtle geometric pattern in the background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg className="w-full h-full text-current" fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <circle cx="50" cy="50" r="40" opacity="0.05" />
                    <rect x="10" y="10" width="80" height="80" opacity="0.03" transform="rotate(45 50 50)" />
                  </svg>
                </div>

                <CardContent className="p-8 relative z-10 flex flex-col h-full items-start">
                  <CardTitle
                    className={`text-3xl font-extrabold ${value.textColor} mb-4
                                          group-hover:text-white transition-colors duration-300`}
                  >
                    {value.title}
                  </CardTitle>
                  <p className="text-gray-50 text-base leading-relaxed flex-grow">
                    {value.description}
                  </p>
                  {/* Animated line on hover */}
                  <div
                    className={`mt-6 w-full h-1 bg-white rounded-full
                                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

{/* Digitalize & Accelerate Section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="mt-20 bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative"
>
  {/* Left Content */}
  <div className="lg:w-1/3 bg-gradient-to-br from-[#0e256e] to-[#2571CA] rounded-2xl p-8 text-white text-center flex flex-col items-center">
    <div className="mb-6">
      <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">Digitalize & Accelerate</h3>
      <p className="text-base md:text-lg mt-4 opacity-90">Speak to us about solutions and technologies to accelerate your business</p>
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

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-purple-600 hover:bg-purple-700 transition text-white p-5 rounded-xl shadow-md text-center">
        <h4 className="text-lg font-semibold mb-2">SUPPLY</h4>
        <p className="text-sm opacity-90">Proven Products & Solutions</p>
      </div>
      <div className="bg-red-500 hover:bg-red-600 transition text-white p-5 rounded-xl shadow-md text-center">
        <h4 className="text-lg font-semibold mb-2">PROVIDE</h4>
        <p className="text-sm opacity-90">Specialized Deployment & Consulting Services</p>
      </div>
      <div className="bg-teal-500 hover:bg-teal-600 transition text-white p-5 rounded-xl shadow-md text-center">
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

export default CoreValuesSection;
