import React from 'react';
import { motion } from 'framer-motion';
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const ServiceListItem: React.FC<{ text: string; icon?: React.ReactNode }> = ({ text, icon }) => (
  <li className="flex items-start text-gray-700">
    <span className="mr-2 text-[#2571CA] flex-shrink-0">
      {icon || (
        <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </span>
    <span className="flex-1" dangerouslySetInnerHTML={{ __html: text }} />
  </li>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const SolutionsAndServicesPage: React.FC = () => {
  useScrollToTop();

  const serviceCategories = [
    {
      title: "Managed IT Services",
      color: "purple",
      description: "<strong>Seamless, Secure, and Scalable IT Management</strong>. We offer end-to-end managed IT services to keep your infrastructure reliable, secure, and aligned with business needs—so you can focus on innovation.",
      items: [
        "<strong>End-User Computing</strong> – Support for PCs, laptops, and mobile devices",
        "<strong>Server Management</strong> – Monitoring, patching, and administration",
        "<strong>Help Desk Services</strong> – Reliable user support and incident resolution",
        "<strong>Network & Security Management</strong> – Active monitoring and threat mitigation",
        "<strong>Email & Data Management</strong> – Secure access, storage, and communication",
        "<strong>Backup & Disaster Recovery</strong> – Automated, encrypted backup and recovery",
        "<strong>Vendor & Asset Management</strong> – Streamlined vendor and asset tracking",
        "<strong>Custom Services</strong> – Flexible support for hybrid and niche environments"
      ]
    },
    {
      title: "Remote Management",
      color: "red",
      description: "<strong>Proactive Monitoring. Instant Support. Smarter Operations.</strong> We offer 24/7 Remote Monitoring & Management (RMM) for full visibility, security, and performance across your infrastructure.",
      items: [
        "<strong>Server Monitoring</strong> – Health, uptime, and security alerts",
        "<strong>Network Monitoring</strong> – Real-time performance insights",
        "<strong>Patch Management</strong> – Automated update deployments",
        "<strong>Threat Protection</strong> – Antivirus and endpoint security",
        "<strong>User Support</strong> – Remote assistance for end-users",
        "<strong>Backup & Restore</strong> – Continuous data protection",
        "<strong>Custom RMM</strong> – Tailored remote management solutions"
      ]
    },
    {
      title: "Data Backup/DR Solutions",
      color: "yellow",
      description: "<strong>Safeguard Your Data. Ensure Business Continuity.</strong> Ensure business continuity with our comprehensive backup and disaster recovery (DR) services. We design resilient, rapid-recovery solutions to protect your data—whether stored on-premises, in the cloud, or hybrid environments.",
      items: [
        "<strong>On-Premise Backup</strong> – Secure, local, fast-access backup",
        "<strong>Cloud Backup</strong> – Encrypted, scalable offsite backup",
        "<strong>Backup Consulting</strong> – Expert strategy development & support",
        "<strong>Custom Solutions</strong> – Hybrid backup, compliance-ready configurations"
      ]
    },
    {
      title: "Design & Implementation",
      color: "blue",
      description: "<strong>We offer full-cycle infrastructure design and deployment services</strong> that build secure, resilient, and scalable systems tailored to your business. From planning through optimisation, we deliver long-term performance and reliability.",
      items: [
        "<strong>Requirement & Planning</strong> – Understand business goals, assess existing environment",
        "<strong>Solution Design</strong> – Collaborate with OEMs to create scalable, secure designs",
        "<strong>Project Management</strong> – Structured delivery with milestones and transparency",
        "<strong>Service Delivery</strong> – Deployment from hardware to full system integration",
        "<strong>Operation & Optimisation</strong> – Post-deployment tuning and performance monitoring",
        "<strong>Custom Services</strong> – Support for niche, emerging, or industry-specific needs"
      ],
      subHeading: "Solutions We Deliver",
      subItems: [
        "<strong>Servers & Storage</strong> – High-performance systems for enterprise workloads",
        "<strong>Networking</strong> – End-to-end scalable, secure network infrastructure",
        "<strong>Information Security</strong> – Threat protection, access control, and compliance",
        "<strong>Virtualisation & Cloud</strong> – Agile, private and hybrid cloud deployments",
        "<strong>Enterprise Communication</strong> – Integrated, collaborative platforms",
        "<strong>Industrial OT Solutions</strong> – Convergence of IT and OT systems",
        "<strong>Custom Solutions</strong> – LoRaWAN, IIoT, RTLS, and industry-specific deployments"
      ]
    },
    {
      title: "Maintenance Services",
      color: "green",
      description: "<strong>Maximising Uptime. Empowering Productivity.</strong> Our proactive maintenance ensures system stability and longevity. We reduce downtime, extend equipment lifespan, and support evolving operational demands.",
      items: [
        "<strong>On-Call Support</strong> – Rapid remote or onsite issue resolution",
        "<strong>Maintenance Contracts</strong> – Annual/multi-year tailored support",
        "<strong>Remote Support</strong> – Secure real-time issue resolution",
        "<strong>IT Equipment Rentals</strong> – For projects, scaling, or temporary needs",
        "<strong>System & Network Upgrades</strong> – Hardware/software updates",
        "<strong>Spares Management</strong> – Critical parts availability",
        "<strong>Custom Maintenance</strong> – Industry-specific service plans"
      ],
      subHeading: "Technologies We Support",
      subItems: [
        "<strong>Networking</strong> – Routers, switches, firewalls, access points",
        "<strong>Cabling</strong> – Structured cabling design and installation",
        "<strong>Devices</strong> – Laptops, desktops, OEM hardware",
        "<strong>Storage</strong> – NAS, SAN, DAS, cloud storage",
        "<strong>Servers</strong> – Windows and Linux environments",
        "<strong>Communications</strong> – IP telephony, video conferencing",
        "<strong>Security & Surveillance</strong> – CCTV, NVR/DVR, access control",
        "<strong>Virtualization</strong> – VMware, Hyper-V, Xen, and KVM",
        "<strong>Email</strong> – Exchange, O365, Google Workspace, Open source",
        "<strong>Custom Environments</strong> – Hybrid, legacy, and proprietary stacks"
      ]
    },
    {
      title: "Hosted Cloud Services",
      color: "indigo",
      description: "<strong>Scalable. Secure. Accessible Anywhere.</strong> Our hosted cloud services give you access to enterprise-grade tools without the hassle of infrastructure ownership.",
      items: [
        "<strong>Attendance Software</strong> – Real-time biometric and shift tracking",
        "<strong>Cloud Antivirus</strong> – Centralised protection and threat response",
        "<strong>Cloud Storage</strong> – Scalable file and data storage",
        "<strong>Cloud Backup</strong> – Secure backup with recovery options",
        "<strong>Help-desk Ticketing</strong> – SLA-based service request systems",
        "<strong>Asset Management</strong> – Lifecycle tracking of IT and non-IT assets",
        "<strong>Tally Hosting</strong> – Secure access to Tally accounting",
        "<strong>Cloud ERP</strong> – End-to-end ERP in the cloud",
        "<strong>CCTV Cloud</strong> – Live feeds, alerts, and remote playback",
        "<strong>Camera Cloud Storage</strong> – Video retention with indexing",
        "<strong>Network Monitoring as a Service</strong> – Real-time health insights"
      ]
    },
    {
      title: "IT Consulting Services",
      color: "sky",
      description: "<strong>Strategic Advisory for Scalable IT Environments.</strong> We evaluate and enhance IT environments through a consultative model to build scalable, secure, and high-performance systems aligned with business objectives. Our expertise includes IT architecture, cloud transformation, and enterprise-grade security.",
      subHeading: "Core Service Areas",
      subItems: [
        "<strong>Infrastructure Strategy & Planning</strong> – IT alignment with business goals, digital transformation roadmaps, technology assessments (Cloud, AI, Cybersecurity)",
        "<strong>Implementation & Optimisation</strong> – System integration & modernisation, cloud migration & hybrid strategies, IT upgrades for agility and scale",
        "<strong>Operations & Management</strong> – Managed services, vendor lifecycle optimisation, asset & consumables management",
        "<strong>Cybersecurity</strong> – Risk assessments, incident response planning, security framework implementation"
      ]
    }
  ];

  const colorMap: { [key: string]: string } = {
    blue: "from-blue-500 to-blue-700",
    purple: "from-purple-500 to-purple-700",
    green: "from-green-500 to-green-700",
    red: "from-red-500 to-red-700",
    yellow: "from-yellow-500 to-yellow-700",
    indigo: "from-indigo-400 to-indigo-600",
    sky: "from-sky-500 to-sky-700"
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
      <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <Navbar />
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#0e256e] to-[#2571CA] overflow-hidden shadow-xl">
          <div className="max-w-7xl mx-auto px-8 xl:px-16 text-center text-white">
            <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-extrabold mb-4">
              Information Technology Solutions
            </motion.h1>
            <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-xl font-light max-w-3xl mx-auto">
              Accelerate your Business Potential with innovative use of Technology
            </motion.p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8 xl:px-16">
            <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (
                <motion.div key={category.title} variants={itemVariants} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className={`text-center py-2 px-4 rounded-t-lg mb-4 text-white font-semibold text-lg bg-gradient-to-r ${colorMap[category.color]}`}>
                    {category.title}
                  </div>
                  {category.description && (
                    <p className="prose text-gray-600 mb-4 text-sm max-w-none" dangerouslySetInnerHTML={{ __html: category.description }} />
                  )}
                  <ul className="space-y-2 text-sm flex-grow">
                    {category.items?.map((item, i) => (
                      <ServiceListItem key={i} text={item} />
                    ))}
                  </ul>
                  {category.subHeading && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-md font-semibold text-[#2571CA] mb-2">{category.subHeading}</h4>
                      <ul className="space-y-2 text-sm">
                        {category.subItems?.map((item, i) => (
                          <ServiceListItem key={i} text={item} />
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </main>
    </motion.div>
  );
};

export default SolutionsAndServicesPage;
