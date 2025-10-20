import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    name: "Rahul Sharma",
    project: "GEM Control",
    review: "ADRS Techno delivered an exceptional jewellery management system. Highly reliable and scalable!",
    clientType: "India",
  },
  {
    name: "Sarah Lee",
    project: "CRM Solutions",
    review: "The team was professional and innovative. Our client handling and workflow improved drastically.",
    clientType: "Canada",
  },
  {
    name: "Kenta Mori",
    project: "IDHPs",
    review: "Great international collaboration. ADRS Techno understands complex industrial requirements very well.",
    clientType: "Japan",
  },
  {
    name: "Priya Verma",
    project: "Tiffin Management",
    review: "Excellent mobile app development. Users love the intuitive design and smooth performance.",
    clientType: "India",
  },
  {
    name: "Rajesh Tiwari",
    project: "Sea World Water Solutions",
    review: "The water management system developed by ADRS Techno exceeded our expectations. Highly recommended!",
    clientType: "India",
  },
  {
    name: "Vednibne Jeweller",
    project: "Jewellery ERP",
    review: "Their custom ERP solution streamlined our operations efficiently.",
    clientType: "India",
  },
  {
    name: "Dhan Laxmi",
    project: "Retail Management System",
    review: "Seamless integration with our existing platforms. Professional delivery and support.",
    clientType: "India",
  },
  {
    name: "Jaipur Tours Travel",
    project: "Travel Booking App",
    review: "Innovative mobile application with great UX. Customers love it!",
    clientType: "India",
  },
  {
    name: "Maria Gonzalez",
    project: "International E-commerce Platform",
    review: "ADRS Techno delivered a robust platform for our clients in Spain and Europe.",
    clientType: "Spain",
  },
  // Korea International Projects
  {
    name: "Kim Joon",
    project: "Classcrew",
    review: "Excellent collaboration for our education platform. ADRS Techno understood our requirements perfectly.",
    clientType: "Korea",
  },
  {
    name: "Lee Min Ho",
    project: "Video Crew2",
    review: "Professional team delivering top-notch video production solutions.",
    clientType: "Korea",
  },
  {
    name: "Posco International",
    project: "Industrial ERP",
    review: "High-quality ERP solutions for complex industrial workflows. Very satisfied with delivery.",
    clientType: "Korea",
  },
  {
    name: "KIA Motors",
    project: "Automotive Solutions",
    review: "Seamless digital solutions for our automotive projects. Excellent communication and support.",
    clientType: "Korea",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Rotate testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  return (
    <section className="bg-white py-16 px-4 md:px-12 mt-7 ">
      {/* Heading */}
      <motion.div {...fadeUp()} className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1A2A80]">
          Our Customers & Global Clients
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          ADRS Techno delivers innovative solutions globally. From web and mobile apps to AI/ML, AR/VR, IoT, cloud deployment, and full project maintenance.
        </p>
      </motion.div>

      <div className="relative h-72 md:h-80 max-w-3xl mx-auto">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col justify-center items-center bg-[#1A2A80] rounded-2xl p-8 shadow-lg"
          >
            <p className="text-white text-lg md:text-xl italic mb-4 text-center">
              “{testimonialsData[current].review}”
            </p>
            <h4 className="text-white font-bold text-lg">{testimonialsData[current].name}</h4>
            <p className="text-white/80 text-sm">
              {testimonialsData[current].project} • {testimonialsData[current].clientType}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonialsData.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              current === idx ? "bg-[#1A2A80] scale-125" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
}
