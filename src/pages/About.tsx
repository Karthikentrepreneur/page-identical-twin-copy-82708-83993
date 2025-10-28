import { useScrollToTop } from "@/hooks/useScrollToTop";
import { 
  Network, 
  Shield, 
  Cloud, 
  Users, 
  Award, 
  Target,
  CheckCircle2,
  Building2
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const About = () => {
  useScrollToTop();

  const expertise = [
    { icon: <Network className="w-5 h-5" />, text: "Internet Services" },
    { icon: <Shield className="w-5 h-5" />, text: "Cybersecurity" },
    { icon: <Cloud className="w-5 h-5" />, text: "Cloud Solutions" },
    { icon: <Building2 className="w-5 h-5" />, text: "Data Center" }
  ];

  const partners = [
    "Cisco", "HP", "Lenovo", "Sophos", "FortiGate", "Juniper", 
    "Honeywell", "Dell", "Microsoft", "VMware"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-primary">NETARK</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Experts in Networking & Secure IT Infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                20+ Years of Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by seasoned networking professionals with two decades of hands-on experience, 
                NETARK Technologies India Pvt. Ltd. has grown into a trusted partner for businesses 
                seeking robust and secure IT infrastructure solutions and Internet services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is simple: to empower businesses with IT systems that are secure, 
                scalable, and built for performance.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="grid grid-cols-2 gap-6">
                {expertise.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center gap-3 p-6 
                                            bg-secondary/50 rounded-xl hover:bg-secondary 
                                            transition-colors duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center 
                                  justify-center text-primary">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Specializations
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Internet Services tailored for enterprises",
              "Connectivity solutions including managed point-to-point, VPN, and long-distance fiber networks",
              "Enterprise network design & implementation",
              "Server co-location and hosting services",
              "VPS & Cloud Solutions",
              "Cybersecurity & information security services",
              "Unified communications & mobility platforms",
              "Open-source IT solutions"
            ].map((spec, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl 
                                        shadow-md hover:shadow-lg transition-shadow duration-300 
                                        border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted Technology Partners
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            We work with global leaders to ensure our clients get world-class technology 
            backed by local expertise
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="px-6 py-3 bg-card rounded-lg shadow-md 
                                        border border-border hover:border-primary/50 
                                        transition-all duration-300">
                <span className="text-foreground font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center 
                            justify-center text-primary mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Mission-Driven</h3>
              <p className="text-muted-foreground">
                Empowering businesses with secure, scalable IT infrastructure
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center 
                            justify-center text-primary mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                Delivering world-class solutions with local expertise
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center 
                            justify-center text-primary mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Partnership</h3>
              <p className="text-muted-foreground">
                Building long-term relationships based on trust
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;
