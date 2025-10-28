import React from 'react';
import { motion } from 'framer-motion';

// Mock components for shadcn/ui
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-3xl shadow-xl transition-all duration-500 ease-in-out ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <h3 className={`mx-0 text-xl font-bold ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const CoreValues = () => {
  const values = [
    {
      title: "INDSYS",
      description:
        "We are dedicated to making technology work seamlessly for <strong>People & Business</strong>. Our mission is to <strong>empower organisations through intelligent, human-centric IT solutions</strong> that streamline operations, enhance productivity, and drive meaningful progress. By aligning innovation with real-world impact, we help our clients thrive in a digital-first world.",
      bgColor: "from-fuchsia-400 to-purple-500",
      borderColor: "border-fuchsia-500",
      textColor: "text-purple-900",
    },
    {
      title: "Growing Together",
      description:
        "As a customer-focused organisation, we are committed to creatingshared success for all stakeholders — <strong>customers, employees, vendors, and communities</strong> alike. By fostering collaboration and trust, we drive sustainable growthand lasting prosperity. <strong>Together, we grow</strong>.",
      bgColor: "from-emerald-400 to-teal-500",
      borderColor: "border-emerald-500",
      textColor: "text-teal-900",
    },
    {
      title: "Customer Delight",
      description:
        "We partner with SMEs to Enterprise to achieve their business goals by <strong>deploying cutting-edge technology that streamlines operations and unlocks new potential</strong>. Whether engineering custom systems for unique needs or seamlessly integrating existing platforms, we deliver <strong>scalable, future-ready solutions at competitive value.</strong> ",
      bgColor: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-500",
      textColor: "text-orange-900",
    },
    {
      title: "The Experience",
      description:
        "For over a decade, we’ve transformed shifting landscapes alongside our clients. At every stage, we’ve honed our expertise, deepened our understanding of real-world challenges, and evolved in step with their needs. Today, we <strong>continually enhance our processes and capabilities</strong> to meet your most demanding business requirements — <strong>Together.</strong>",
      bgColor: "from-sky-400 to-indigo-500",
      borderColor: "border-sky-500",
      textColor: "text-indigo-900",
    },
  ];

  return (
    <section className="py-0 bg-gray-100 flex flex-col items-center justify-start relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 xl:px-0">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-extrabold text-[#1A56B3] tracking-tight md:text-4xl text-4xl my-0 py-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2571CA] to-[#0e256e]">
              Core Values
            </span>
          </h2>
        </motion.div>

        {/* Grid for Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateZ: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex relative"
            >
              <Card
                className={`w-full bg-gradient-to-br ${value.bgColor} border-4 ${value.borderColor}
                           hover:-translate-y-6 hover:shadow-2xl hover:shadow-gray-400/50
                           group-hover:scale-105 transform origin-center
                           relative z-10 overflow-hidden cursor-pointer`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 rounded-3xl pointer-events-none flex items-center justify-center"
                  style={{
                    backgroundImage: `url('/lovable-uploads/1af8bc84-f276-4b66-97ea-1a1838d0f011.png')`,
                    backgroundSize: '300px 300px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.3,
                  }}
                />
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg className="w-full h-full text-current" fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <circle cx="50" cy="50" r="40" opacity="0.05" />
                    <rect x="10" y="10" width="80" height="80" opacity="0.03" transform="rotate(45 50 50)" />
                  </svg>
                </div>

                <CardContent className="p-8 relative z-10 flex flex-col h-full items-start">
                  <CardTitle
                    className={`text-3xl font-extrabold ${value.textColor} mb-4 group-hover:text-white transition-colors duration-300`}
                  >
                    {value.title}
                  </CardTitle>
                  <p
                    className="text-gray-50 text-base leading-relaxed flex-grow"
                    dangerouslySetInnerHTML={{ __html: value.description }}
                  />
                  <div className="mt-6 w-full h-1 bg-white rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add spacing AFTER cards only */}
        <div className="mt-12" />
      </div>
    </section>
  );
};

export default CoreValues;
