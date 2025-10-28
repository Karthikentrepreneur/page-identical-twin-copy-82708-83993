import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lightbulb, TrendingUp, Users, Award, Briefcase, MapPin, Send, MessageSquare, Clock, Star, Headphones, Code, Network, Shield, Cloud, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Link } from "react-router-dom";

// Animation variants for sections
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15
    }
  }
};

// Animation variants for individual items within sections
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
const Careers: React.FC = () => {
  useScrollToTop();
  const whyJoinUsCards = [{
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Innovation Hub",
    description: "Work on cutting-edge technologies and contribute to groundbreaking solutions that shape the future of IT.",
    color: "from-yellow-50 to-yellow-100",
    iconBg: "bg-yellow-100"
  }, {
    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    title: "Growth & Development",
    description: "Access continuous learning, mentorship programs, and clear career paths to advance your professional journey.",
    color: "from-green-50 to-green-100",
    iconBg: "bg-green-100"
  }, {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Collaborative Culture",
    description: "Join a diverse and inclusive team where ideas are valued, and collaboration fosters collective success.",
    color: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-100"
  }, {
    icon: <Award className="w-8 h-8 text-purple-500" />,
    title: "Impact & Recognition",
    description: "See the tangible impact of your work on clients' businesses and be recognized for your contributions.",
    color: "from-purple-50 to-purple-100",
    iconBg: "bg-purple-100"
  }];
  const jobOpenings = [{
    title: "Full Stack Developer (MERN)",
    location: "Coimbatore, India",
    type: "Full-time",
    salary: "₹6-12 LPA",
    experience: "2-5 years",
    icon: <Code className="w-6 h-6 text-blue-600" />,
    description: "Develop and maintain robust web applications using MongoDB, Express.js, React, and Node.js.",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    color: "from-blue-50 to-blue-100"
  }, {
    title: "Network Engineer",
    location: "Bengaluru, India",
    type: "Full-time",
    salary: "₹5-10 LPA",
    experience: "3-6 years",
    icon: <Network className="w-6 h-6 text-green-600" />,
    description: "Design, implement, and manage complex network infrastructures for enterprise clients.",
    skills: ["Cisco", "Network Security", "CCNA", "Routing"],
    color: "from-green-50 to-green-100"
  }, {
    title: "Cybersecurity Analyst",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹7-15 LPA",
    experience: "2-4 years",
    icon: <Shield className="w-6 h-6 text-red-600" />,
    description: "Monitor, detect, and respond to security threats, ensuring data integrity and system protection.",
    skills: ["Security", "Firewall", "Threat Analysis", "SIEM"],
    color: "from-red-50 to-red-100"
  }, {
    title: "IT Support Specialist",
    location: "Coimbatore, India",
    type: "Full-time",
    salary: "₹3-6 LPA",
    experience: "1-3 years",
    icon: <Headphones className="w-6 h-6 text-orange-600" />,
    description: "Provide technical assistance and support to clients for hardware, software, and network issues.",
    skills: ["Troubleshooting", "Windows", "Linux", "Help Desk"],
    color: "from-orange-50 to-orange-100"
  }, {
    title: "Cloud Solutions Architect",
    location: "Remote (India)",
    type: "Full-time",
    salary: "₹10-20 LPA",
    experience: "4-8 years",
    icon: <Cloud className="w-6 h-6 text-indigo-600" />,
    description: "Design and implement scalable cloud-based solutions on AWS, Azure, or Google Cloud platforms.",
    skills: ["AWS", "Azure", "Docker", "Kubernetes"],
    color: "from-indigo-50 to-indigo-100"
  }, {
    title: "DevOps Engineer",
    location: "Pune, India",
    type: "Full-time",
    salary: "₹8-16 LPA",
    experience: "3-7 years",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    description: "Implement CI/CD pipelines and manage infrastructure automation for seamless deployments.",
    skills: ["Jenkins", "Docker", "Kubernetes", "Git"],
    color: "from-yellow-50 to-yellow-100"
  }];
  const companyPerks = [{
    icon: "🏥",
    title: "Health Insurance",
    desc: "Comprehensive medical coverage"
  }, {
    icon: "🏖️",
    title: "Flexible PTO",
    desc: "Unlimited paid time off"
  }, {
    icon: "💻",
    title: "Work From Home",
    desc: "Remote work options"
  }, {
    icon: "📚",
    title: "Learning Budget",
    desc: "Annual skill development fund"
  }, {
    icon: "🎯",
    title: "Performance Bonus",
    desc: "Merit-based incentives"
  }, {
    icon: "🚀",
    title: "Career Growth",
    desc: "Clear advancement paths"
  }];
  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-gray-50 font-sans antialiased text-gray-900">
      <Navbar />

      <main className="flex-grow pt-14 md:pt-16 lg:pt-18">
        {/* Enhanced Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-[#0e256e] via-[#1a3399] to-[#2571CA]">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi02LTYtNiA2LTYgNiA2LTYgNi02IDZ6bS0xMyA0IDYtNi02LTYgNi02IDYgNi02IDYtNiA2eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 right-5 md:top-20 md:right-10 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-5 md:bottom-20 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-[#87CEEB]/20 rounded-full blur-2xl animate-bounce"></div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-white">
            
            
            <motion.h1 initial={{
            y: -30,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.1
          }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 drop-shadow-lg xl:text-4xl">
              Build Your <span className="text-[#87CEEB] bg-gradient-to-r from-[#87CEEB] to-white bg-clip-text text-transparent">Career</span> With Us
            </motion.h1>
            <motion.p initial={{
            y: 30,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-base md:text-lg font-light max-w-3xl mx-auto mb-6 md:mb-8 text-gray-200 lg:text-xl">
              Shape the Future of IT with INDSYS – where innovation meets impact and careers flourish.
            </motion.p>
            
          </div>
        </section>

        {/* Company Stats */}
        

        {/* Why Join Us Section */}
        <motion.section initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{
        once: true,
        amount: 0.2
      }} className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0e256e] mb-4">
              Why Work With Us?
            </motion.h2>
            <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-[#045ADF] to-[#2571CA] mx-auto mb-6 md:mb-12"></motion.div>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 md:mb-16 leading-relaxed">
              At INDSYS, we believe in fostering an environment where talent thrives, ideas flourish, and every contribution makes a difference.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {whyJoinUsCards.map((card, index) => <motion.div key={index} variants={itemVariants}>
                  <Card className={`h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${card.color}`}>
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <div className={`${card.iconBg} p-4 rounded-full mb-4 shadow-md`}>
                        {card.icon}
                      </div>
                      <CardTitle className="text-lg md:text-xl font-bold text-[#0e256e] mb-3">{card.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">{card.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </motion.section>

        {/* Company Perks */}
        

        {/* Current Openings Section */}
        <motion.section id="open-positions" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{
        once: true,
        amount: 0.1
      }} className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-gray-50">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0e256e] mb-4">
              Current Openings
            </motion.h2>
            <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-[#045ADF] to-[#2571CA] mx-auto mb-6 md:mb-12"></motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {jobOpenings.map((job, index) => <motion.div key={index} variants={itemVariants}>
                  <Card className={`h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${job.color}`}>
                    <CardHeader className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="bg-white p-3 rounded-lg shadow-md">
                          {job.icon}
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <CardTitle className="text-lg md:text-xl font-bold text-[#0e256e] mb-2 text-left">{job.title}</CardTitle>
                      <div className="flex flex-col gap-1.5 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-gray-500" /> {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-500" /> {job.experience}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-2 text-gray-500" /> {job.salary}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, skillIndex) => <span key={skillIndex} className="bg-white/80 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                            {skill}
                          </span>)}
                      </div>
                      <Button className="w-full bg-[#2571CA] hover:bg-[#1a5ba8] text-white font-medium transition-all duration-300">
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </motion.section>

        {/* Application Process Section */}
        <motion.section initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{
        once: true,
        amount: 0.2
      }} className="py-12 md:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-6xl">
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0e256e] mb-4">
              Our Hiring Process
            </motion.h2>
            <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-[#045ADF] to-[#2571CA] mx-auto mb-8 md:mb-16"></motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <motion.div variants={itemVariants} className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-full mb-6 w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
                  <Send className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0e256e] mb-4">1. Apply Online</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Submit your application through our career portal with your updated resume and cover letter.</p>
                {/* Connection line */}
                <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-[#045ADF] to-[#2571CA] transform -translate-y-1/2"></div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="relative">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-full mb-6 w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0e256e] mb-4">2. Interview</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Selected candidates will go through technical and HR interviews to assess fit and skills.</p>
                {/* Connection line */}
                <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-[#045ADF] to-[#2571CA] transform -translate-y-1/2"></div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-full mb-6 w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0e256e] mb-4">3. Welcome Aboard</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">Successful candidates receive an offer and join our dynamic team with comprehensive onboarding.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Final Call to Action */}
        
      </main>

      <Footer />
    </div>;
};
export default Careers;