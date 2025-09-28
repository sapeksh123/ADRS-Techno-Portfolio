import React from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

// Motion variant for fade-up effect
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

export default function Internship() {
  const colors = ["#1A2A80", "#3B38A0", "#7A85C1", "#B2B0E8"];
  const primary = colors[0];
  const secondary = colors[1];
  const tertiary = colors[2];
  const light = colors[3];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-12 lg:px-24 relative mt-8">
      {/* Page Header */}
      <motion.div {...fadeUp()} className="max-w-4xl mx-auto text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1A2A80]"
          style={{ color: primary }}
        >
          Internship & Training
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Industry internships, workshops, and PPO (Pre-Placement Offer) opportunities for students and freshers.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Program Details */}
        <motion.div
          {...fadeUp(0.1)}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
        >
          <h4 className="text-2xl font-semibold mb-4" style={{ color: secondary }}>
            Program Highlights
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Hands-on projects with mentoring from senior engineers</li>
            <li>Workshops on MERN, Mobile, AI/ML, AR/VR</li>
            <li>PPO opportunities for high performers</li>
          </ul>

          <h4 className="text-2xl font-semibold mt-8 mb-2" style={{ color: secondary }}>
            Team & Capacity
          </h4>
          <p className="text-gray-700">
            Our development teams consist of 20+ developers across full-stack, mobile, and data engineering.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          {...fadeUp(0.2)}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
        >
          <h4 className="text-2xl font-semibold text-center mb-6" style={{ color: secondary }}>
            Apply / Inquire
          </h4>
          <ContactForm />
        </motion.div>
      </div>

      {/* Subtle Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#3B38A0] to-[#7A85C1] rounded-full opacity-20 blur-3xl -z-10 animate-bounce-slow" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-[#1A2A80] to-[#3B38A0] rounded-full opacity-15 blur-3xl -z-10 animate-bounce-slower" />
    </div>
  );
}
