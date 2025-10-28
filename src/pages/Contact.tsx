
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const officeLocations = [
    {
      title: "Coimbatore",
      description: "6/1, Vaishnavi Complex, Ranga Konar Street, Kattoor, Coimbatore-641009",
      timing: "Mon - Fri: 9:00 AM - 6:00 PM",
      phone: "8110023232, 8110024242",
      email: "sales@indsystech.com",
      mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.45692680638!2d76.96502802634487!3d11.009129993398195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858e5d2ac4879%3A0x6e3bf3906d100a6b!2sINDSYS%20Infotech!5e1!3m2!1sen!2sin!4v1752062514473!5m2!1sen!2sin" class="w-full h-[200px] rounded-md border" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
      title: "Chennai",
      description: "No:8, Annai Nagar, Sungarvarchatram, Sriperumbudur, Kancheepuram",
      timing: "Mon - Fri: 9:00 AM - 6:00 PM",
      phone: "98946 54544, 81100 26262",
      email: "sales@indsystech.com"
    },
    {
      title: "Bengaluru",
      description: "1st floor,No.1356, HAL BDA AECS Layout A Block, 60 feet Main Road, Singasandra, Bangalore– 560068.",
      timing: "Mon - Fri: 9:00 AM - 6:00 PM",
      phone: "7708 544544, 7760 554543",
      email: "sales@indsystech.com",
      mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4654.143512030654!2d77.6529425!3d12.8803258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151542c0e6ef%3A0x92da09564ef43410!2sIndsys%20infotech%20services%20India%20pvt%20ltd!5e1!3m2!1sen!2sin!4v1752062619251!5m2!1sen!2sin" class="w-full h-[200px] rounded-md border" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    }
  ];

  return (
    <main>
      <Navbar />

      <section className="relative px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg font-medium">Visit our office locations below.</p>
        </div>
      </section>

      <section className="py-14 bg-white px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {officeLocations.map((office, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <Card className="bg-blue-50 shadow-sm h-full">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-blue-700">{office.title}</h3>
                  <p className="text-sm text-gray-800">{office.description}</p>
                  <p className="text-sm text-gray-700 mt-1">
                    <Clock className="inline mr-2 h-4 w-4" />
                    {office.timing}
                  </p>
                  <p className="text-sm text-gray-700">
                    <Phone className="inline mr-2 h-4 w-4" />
                    {office.phone}
                  </p>
                  <p className="text-sm text-gray-700">
                    <Mail className="inline mr-2 h-4 w-4" />
                    {office.email}
                  </p>
                </CardContent>
              </Card>
              {office.mapEmbed && (
                <div
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: office.mapEmbed }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Contact;
