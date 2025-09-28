import React, { useState, useEffect } from "react";
import heroImg from "/hero.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserTie, FaProjectDiagram, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
 const stats = [
  { icon: <FaUserTie size={28} />, number: "20+", label: "Specialist Developers" },
  { icon: <FaProjectDiagram size={28} />, number: "50+", label: "Projects Delivered" },
  { icon: <FaGlobeAmericas size={28} />, number: "Global", label: "Clients Worldwide" },
];


  const quotes = [
    "Innovating solutions for a smarter tomorrow.",
    "Empowering businesses globally with technology.",
    "Where ideas meet cutting-edge software.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden mt-10">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-12 w-28 h-28 bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] rounded-full opacity-20 blur-3xl animate-bounce-slow" />
        <div className="absolute bottom-16 right-20 w-36 h-36 bg-gradient-to-r from-[#7A85C1] to-[#B2B0E8] rounded-full opacity-15 blur-3xl animate-bounce-slower" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-[#1A2A80] to-[#7A85C1] rounded-full opacity-10 blur-2xl animate-bounce-slow" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Animated Main Heading */}
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ backgroundImage: "linear-gradient(to right, #1A2A80, #3B38A0, #7A85C1)" }}
          >
           Advanced Digital and Reliable Solutions
            <br />
            <span className="text-gray-800 text-2xl md:text-3xl font-semibold block mt-2">
              Enterprise Grade. Client-First.
            </span>
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="text-gray-700 text-base md:text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We deliver secure, scalable applications and cloud solutions across
            the globe. Partner with us for enterprise web, mobile, ERP, AI, AR/VR, and IoT solutions.
          </motion.p>

          {/* Rotating Quotes */}
          <div className="mt-4 h-12 md:h-14 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-[#1A2A80] font-medium text-lg md:text-xl absolute"
              >
                {quotes[currentQuote]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap mt-6">
            <Link
              to="/services"
              className="px-6 py-3 bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
            View Services
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 border border-[#1A2A80] font-semibold rounded-lg text-[#1A2A80] hover:bg-gradient-to-r hover:from-[#1A2A80] hover:to-[#3B38A0] hover:text-white transition-all"
            >
              View Projects
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center p-4 rounded-xl shadow-md bg-white hover:shadow-2xl transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white mb-2">
                  {stat.icon}
                </div>
                <p className="text-xl font-bold text-[#1A2A80]">{stat.number}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative"
        >
          <div className="relative group">
            <img
              src={heroImg}
              alt="hero"
              className="w-full rounded-3xl shadow-2xl object-cover md:h-[450px] transform group-hover:scale-105 transition duration-500"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#1A2A80]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
          {/* Decorative floating circles */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-[#3B38A0] to-[#7A85C1] rounded-full opacity-40 blur-2xl animate-bounce" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-[#7A85C1] to-[#B2B0E8] rounded-full opacity-30 blur-3xl animate-bounce-slow" />
        </motion.div>
      </div>
    </section>
  );
}
