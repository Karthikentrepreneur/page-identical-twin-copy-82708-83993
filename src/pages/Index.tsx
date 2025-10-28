import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { 
  Network, 
  Shield, 
  Cloud, 
  Server, 
  Wifi, 
  Lock,
  Database,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  Award
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  useScrollToTop();

  const solutions = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Campus Networking & IT Infrastructure",
      description: "Complete network infrastructure solutions for modern enterprises",
      features: ["LAN/WAN design & implementation", "Enterprise Wi-Fi solutions", "Fiber optic solutions", "Network monitoring & optimization"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Surveillance & Security Systems",
      description: "Enterprise-grade security and surveillance infrastructure",
      features: ["IP CCTV & video management", "Access control systems", "Fire alarm & intrusion detection", "24/7 monitoring"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Enterprise Systems & Servers",
      description: "Certified server solutions and infrastructure hardware",
      features: ["Green servers & storage", "Network equipment rentals", "Lifecycle planning", "Hardware consulting"]
    }
  ];

  const services = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Internet Services",
      description: "Secure leased line Internet and managed on-demand services with enterprise Wi-Fi hotspot solutions"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Co-Location & Hosting",
      description: "Flexible colocation with 24/7 monitoring, VPS hosting, and managed firewall support"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Connectivity Services",
      description: "Managed point-to-point, VPN, and secure enterprise connections with fiber network management"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Hosting Services",
      description: "High-availability hosting with guaranteed uptime SLA and redundant infrastructure"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Private, hybrid & public cloud deployment with migration and disaster recovery"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information Security",
      description: "Security audits, VPN, firewalls, and advanced threat protection with real-time monitoring"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Storage & Backup",
      description: "SAN, NAS & online backup solutions with business continuity planning"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Managed IT Services",
      description: "Network & server management, IT helpdesk, and proactive monitoring & maintenance"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Unified Communications",
      description: "VoIP, IP telephony, video conferencing, and enterprise Wi-Fi solutions"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Open-Source Solutions",
      description: "Linux-based servers, messaging platforms, and thin client deployments"
    }
  ];

  const whyChooseUs = [
    { icon: <Award className="w-5 h-5" />, text: "20+ Years of Excellence" },
    { icon: <Building2 className="w-5 h-5" />, text: "Enterprise-Grade Infrastructure" },
    { icon: <Users className="w-5 h-5" />, text: "Expert Technical Team" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "24/7 Support & Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Trusted for 20+ Years
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Enterprise Networking & IT Infrastructure{" "}
                <span className="text-primary">Solutions in India</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At NETARK Technologies, we deliver more than just technology — we deliver trust, 
                reliability, and future-ready infrastructure. With over 20 years of experience, we specialize in Internet services, 
                networking, data center solutions, server colocation services, hosting services, and data backup services that support mission-critical businesses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's campus networking, cloud solutions, or IT security, our team ensures your business stays connected, protected, and scalable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold 
                           hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl 
                           flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/solutions"
                  className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold 
                           hover:bg-secondary/80 transition-all duration-300 border border-border"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
                <div className="grid grid-cols-2 gap-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                      <div className="text-primary flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive IT & Networking Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end infrastructure solutions designed for modern enterprises
              </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                         transition-all duration-300 border border-border hover:border-primary/50"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center 
                              text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-primary font-semibold 
                       hover:gap-3 transition-all duration-300"
            >
              Explore All Solutions <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete IT services portfolio to support your business growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-md hover:shadow-xl 
                         transition-all duration-300 border border-border hover:border-primary/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center 
                              text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold 
                       hover:gap-3 transition-all duration-300"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 md:p-16 
                        text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Partner with NETARK – Your trusted Internet and Data Center Infrastructure experts in India
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary 
                         rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                Contact Us Today <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
