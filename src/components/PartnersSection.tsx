
const PartnersSection = () => {
  const partnerLogos = [
    { name: "iLevel", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { name: "Octane", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { name: "Life Fitness", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { name: "Smile", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { name: "TRUE", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { name: "CYBEX", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { name: "HockOy", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { name: "PRECOR", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 xl:px-16">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm mb-2">Frame 1015O</p>
          <h2 className="text-4xl font-bold text-[#2571CA] mb-4">Our Partners</h2>
          <h3 className="text-2xl font-bold text-black">Power Solutions</h3>
        </div>

        {/* First row of partners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {partnerLogos.slice(0, 4).map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Second row of partners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partnerLogos.slice(4, 8).map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Third row of partners (duplicate for design consistency) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partnerLogos.slice(0, 4).map((partner, index) => (
            <div key={`duplicate-${index}`} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Fourth row of partners (duplicate for design consistency) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partnerLogos.slice(4, 8).map((partner, index) => (
            <div key={`duplicate2-${index}`} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Bottom graphic */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-[#045ADF] to-[#2571CA] text-white px-8 py-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Accelerate your Business Potential with innovative use Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
