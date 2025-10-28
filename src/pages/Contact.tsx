
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
      title: "Head Office",
      description: "Third Floor, Thachil Complex, No. 10 Raja Annamalai Road, Saibaba Colony, Coimbatore – 641 011",
      timing: "Mon - Fri: 9:00 AM - 6:00 PM",
      phone: "0422-4280009, +91 95006 44411",
      email: "info@netark.co.in"
    }
  ];

  return (
    <main>
      <Navbar />

      <section className="relative px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Let's Connect</h1>
          <p className="text-lg font-medium">At NETARK Technologies, the best solutions start with a conversation. Whether you're looking for enterprise networking, data center hosting, cloud services, or IT security solutions, our team is here to help.</p>
        </div>
      </section>

      <section className="py-14 bg-secondary/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">Fill out the form below, and one of our experts will get back to you within 24 hours.</p>
          </div>
          
          <Card className="shadow-xl border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name*</label>
                    <input type="text" required className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Company / Organization</label>
                    <input type="text" className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address*</label>
                    <input type="email" required className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number*</label>
                    <input type="tel" required className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Internet Services</option>
                    <option>Data Center Hosting</option>
                    <option>Cloud Solutions</option>
                    <option>Connectivity</option>
                    <option>Information Security</option>
                    <option>Managed IT</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Your Message / Requirements*</label>
                  <textarea required rows={5} className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Office Address</h3>
            <Card className="bg-card shadow-md">
              <CardContent className="p-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-xl font-bold text-primary">{office.title}</h4>
                    <p className="text-foreground leading-relaxed">{office.description}</p>
                    <div className="grid md:grid-cols-3 gap-4 pt-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{office.timing}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Contact;
