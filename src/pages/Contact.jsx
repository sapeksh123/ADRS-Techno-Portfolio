import React from 'react';
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaExternalLinkAlt } from "react-icons/fa";
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  const colors = ["#1A2A80", "#3B38A0", "#7A85C1", "#B2B0E8"];
  const primary = colors[0];
  const secondary = colors[1];

  const offices = [
    {
      name: "Jabalpur",
      address: "71, Dadda Nagar, Jabalpur, Madhya Pradesh, 482002",
      email: "support@adrstechno.com",
      phone: "+91-9201347033, +91-9516467095",
      mapLink: "https://www.google.com/maps/place/Dada+Nagar,+Jabalpur,+Madhya+Pradesh+482002",
    },
    {
      name: "Bhopal",
      address: "123, Zone 1, Bhopal, Madhya Pradesh, 462001",
      email: "support@adrstechno.com",
      phone: "+91-9201347033",
      mapLink: "https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh",
    },
    {
      name: "Raipur",
      address: "456, MG Road, Raipur, Chhattisgarh, 492001",
      email: "support@adrstechno.com",
      phone: "+91-9201347033",
      mapLink: "https://www.google.com/maps/place/Raipur,+Chhattisgarh",
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...fadeUp(0.1)}
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: primary }}
        >
          Contact
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="text-gray-600 mb-12 max-w-2xl text-sm md:text-base"
        >
          Ready to discuss your project? Send a message and we'll respond promptly.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section: Offices Info */}
          <motion.div {...fadeUp(0.3)} className="space-y-10">
            {offices.map((office) => (
              <div key={office.name} className="space-y-4 p-4 rounded-xl shadow-sm bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-xl md:text-2xl" style={{ color: secondary }}>
                  {office.name} Office
                </h4>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1" style={{ color: primary }} />
                  <a
                    href={office.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    {office.address} <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary" style={{ color: primary }} />
                  <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-blue-700">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-primary" style={{ color: primary }} />
                  <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-blue-700">
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Section: Contact Form */}
          <motion.div >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
