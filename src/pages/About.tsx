import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Handshake, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Link } from "react-router-dom";
import CoreValues from "@/components/CoreValues";

const About = () => {
  useScrollToTop();

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Customer-Centric",
      description: "Customer satisfaction is at the heart of everything we do"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Goal-Oriented",
      description: "We empower businesses to achieve their goals through cutting-edge IT"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      title: "Quality Excellence",
      description: "Delivering scalable and high-quality solutions at competitive prices"
    },
    {
      icon: <Handshake className="w-8 h-8 text-purple-600" />,
      title: "Long-term Partnerships",
      description: "Fostering win-win relationships for sustainable growth"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 md:px-16 py-20 bg-gradient-to-br from-[#0e256e] to-[#2571CA] text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Growing <span className="text-yellow-300">Together</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Building lasting partnerships through innovative IT solutions.
          </p>
        </motion.div>
      </section>

      {/* About Section (Text Only) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-700 space-y-6 text-lg leading-relaxed"
          >
            <h2 className="text-3xl font-bold text-[#0e256e] text-center mb-6">
              Our Commitment to our Customers
            </h2>
            <p>
              At <strong className="text-[#0e256e]">INDSYS</strong>, we are a customer-centric organization committed to delivering affordable, reliable, and timely information infrastructure and support solutions. Customer satisfaction is at the heart of everything we do.
            </p>
            <p>
              We empower businesses—from SOHOs to large corporates—to achieve their goals by leveraging <strong className="text-[#0e256e]">cutting-edge information technology</strong>. Whether it's developing custom systems tailored to unique business requirements or seamlessly integrating existing solutions, we prioritize the timely delivery of scalable and high-quality solutions at competitive prices.
            </p>
            <p>
              Our strength lies in continuous investment in people, skills, infrastructure, and technology. A majority of our team comprises trained and certified professionals, equipped to handle both pre-sale and post-sale functions with efficiency and care.
            </p>
            <p>
              At <strong className="text-[#0e256e]">INDSYS</strong>, we believe in fostering long-term, win-win relationships—with our customers, vendors, employees, and the communities we serve. We see this as the foundation for sustainable and profitable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
        <CoreValues />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0e256e] to-[#2571CA] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how INDSYS can help transform your business with innovative IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-[#0e256e] hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all">
                Contact Us
              </Button>
            </Link>
            <Link to="/solutions">
              <Button
                variant="outline"
                className="bg-white text-[#0e256e] hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all"
              >
                Our Solutions
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;
