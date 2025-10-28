import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Footer from "@/components/Footer";
import {
  ShieldCheck, Network, Users, Shield, Eye, FileText, HardDrive, Activity,
  Phone, Calendar, Monitor, Smartphone, Server, Camera, Wifi, MousePointer, Cable
} from "lucide-react";
import { Button } from "@/components/ui/button";

const supportPoints = [
  "We're here when you need us",
  "Skilled in multi-vendor environments",
  "Support Tailored to your business needs",
  "Minimized downtime, maximized productivity",
];

const SupportPage = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-28 pb-12 px-4 text-center bg-gradient-to-br from-[#0e256e] via-[#2571CA] to-[#4A90E2] text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Support & Maintenance
          </h1>
          <p className="text-xl md:text-2xl mb-4">Flexible & Personalised for Your Business</p>
          <p className="mt-4 text-lg max-w-3xl mx-auto opacity-90">
            Maximise Uptime • Ensure Security • Get Expert IT Support
          </p>
        </motion.div>
        <Navbar />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            INDSYS provides professional, responsive, and customised IT and tech support/maintenance
            to help businesses maintain uninterrupted operations. Whether you're using our solutions
            or your own existing infrastructure, we ensure your systems run smoothly and securely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl shadow-lg border bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-[#0e256e] to-[#2571CA] p-3 rounded-full w-fit mb-4">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <p className="text-[#0e256e] font-semibold text-lg">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Models */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Comprehensive Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-8 text-center">
                <h3 className="text-2xl font-bold text-white">Comprehensive Tech Support/Maintenance</h3>
              </div>
              <div className="p-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>Network Support & Troubleshooting</li>
                  <li>End-User Support & Help Desk Services</li>
                  <li>Cybersecurity & Data Protection</li>
                  <li>Surveillance System Support</li>
                  <li>IT Asset Auditing & Management</li>
                  <li>Spare Parts & Hardware Replacement</li>
                  <li>Network Audits & Performance Reporting</li>
                </ul>
              </div>
            </motion.div>

            {/* Flexible Models */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-8 text-center">
                <h3 className="text-2xl font-bold text-white">Flexible Service Models</h3>
              </div>
              <div className="p-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>On-Call Support – Pay as you go for urgent IT needs</li>
                  <li>Annual Maintenance Contracts (AMC) – Scheduled upkeep & priority support</li>
                  <li>Remote Monitoring & Support – Real-time issue detection and resolution</li>
                  <li>Hardware & Software Upgrades – Keep your systems up to date</li>
                  <li>IT Equipment Rental – Cost-effective access to latest hardware</li>
                </ul>
              </div>
            </motion.div>

            {/* Supported Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-8 text-center">
                <h3 className="text-2xl font-bold text-white">Supported Technologies</h3>
              </div>
              <div className="p-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>Routers, Switches & Network Devices</li>
                  <li>Desktops, Laptops & Workstations</li>
                  <li>Servers, NAS & Storage Solutions</li>
                  <li>Access Control & CCTV Surveillance Systems</li>
                  <li>Wi-Fi Infrastructure</li>
                  <li>IT Accessories & Peripherals</li>
                  <li>Network Infrastructure like connectivity, Copper and Fiber</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gray-100 text-[#0e256e]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to get a customized support plan or request a free consultation.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {/* Raise a Ticket */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://support.indsystech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#0e256e] text-white hover:bg-[#1a3b91] px-8 py-4 rounded-full shadow-lg text-lg font-semibold transition-all duration-300">
                  Raise a Ticket
                </Button>
              </a>
            </motion.div>

            {/* Contact Us */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact">
                <Button className="bg-white text-[#0e256e] border border-[#0e256e] hover:bg-gray-200 px-8 py-4 rounded-full shadow-lg text-lg font-semibold transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default SupportPage;
