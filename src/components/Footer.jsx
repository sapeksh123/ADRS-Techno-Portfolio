import React from "react";
import logo from "/logo.png";
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone ,FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const quickLinks = ["Home", "About", "Services", "Projects", "Internship", "Contact"];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 relative overflow-hidden">
      
      {/* Top Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 text-center md:text-left">

        {/* Logo & Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="flex items-center justify-center md:justify-start gap-3">
            <motion.img
              src={logo}
              alt="logo"
              className="h-24 w-40 object-contain"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 250 }}
            />
            <div>
          
            </div>
          </Link>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            71, Dadda Nagar, Jabalpur, Madhya Pradesh, 482002
          </p>
          <p className="mt-2 text-sm flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-brand-400 transition">
            <FaEnvelope className="text-brand-400" /> support@adrstechno.com
          </p>
          <p className="mt-1 text-sm flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-brand-400 transition">
            <FaPhone className="text-brand-400" /> +91-9201347033,+91-9516467095

          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {quickLinks.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, scale: 1.05, color: "#FBBF24" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-brand-400 transition-all duration-300"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services / Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-brand-400 transition-all duration-300 cursor-pointer">Web Development</li>
            <li className="hover:text-brand-400 transition-all duration-300 cursor-pointer">Mobile Apps</li>
            <li className="hover:text-brand-400 transition-all duration-300 cursor-pointer">E-commerce Solutions</li>
            <li className="hover:text-brand-400 transition-all duration-300 cursor-pointer">CRM & LMS Platforms</li>
          </ul>
        </motion.div>

        {/* Social & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            {[
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A105007729&keywords=adrs%20techno%20private%20limited.&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=4587c013-15a7-46cf-845b-6c3085a392cc&sid=cNy&spellCorrectionEnabled=true" },
              { icon: <FaInstagram />, link: "adrstechno" },
              { icon: <FaEnvelope />, link: "mailto:support@adrstechno.com" },
              { icon: <FaGlobe />, link: "https://www.adrstechno.com/" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-gray-700 text-white shadow-md hover:shadow-lg hover:bg-gradient-to-tr hover:from-brand-500 hover:to-brand-700 transition-all"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ADRS Techno Pvt. Ltd. <br />
            All rights reserved.
          </p>
        </motion.div>

      </div>

      {/* Decorative Gradient / Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-brand-500 to-brand-700"></div>
    </footer>
  );
}
