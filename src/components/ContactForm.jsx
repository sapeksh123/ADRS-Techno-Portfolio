import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  // Colours
  const colors = ["#1A2A80", "#3B38A0", "#7A85C1", "#B2B0E8"];
  const primary = colors[0];
  const secondary = colors[1];
  const tertiary = colors[2];
  const light = colors[3];

  return (
    <motion.form
      {...fadeUp(0.2)}
      className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 max-w-3xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7A85C1] focus:outline-none transition-all shadow-sm"
        />
        <input
          type="text"
          placeholder="Company / Organization"
          className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7A85C1] focus:outline-none transition-all shadow-sm"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7A85C1] focus:outline-none transition-all shadow-sm"
        />
        <input
          type="tel"
          placeholder="Phone "
          className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#B2B0E8] focus:outline-none transition-all shadow-sm"
        />
      </div>

      <textarea
        placeholder="Message / Project details"
        className="mt-6 p-4 border border-gray-300 rounded-xl w-full focus:ring-2 focus:ring-[#7A85C1] focus:outline-none transition-all shadow-sm resize-none"
        rows="5"
      />

      <div className="mt-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(26,42,128,0.4)" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-8 py-3 text-white font-semibold rounded-xl shadow-lg transition-all"
          style={{
            background: `${primary}`,
          }}
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  );
}
