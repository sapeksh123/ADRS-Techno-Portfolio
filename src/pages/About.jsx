// import React from 'react';
// import Hero from '../components/Hero';
// import PartnersCarousel from '../components/PartnersCarousel';
// import TeamCard from '../components/TeamCard';
import {
  FaBuilding,
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaCube,
  FaCheckCircle,
  FaGamepad,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGem,
  FaUsers,
  FaDatabase,
  FaUtensils,
  FaGlobe,
} from "react-icons/fa";
import { FaBullseye, FaGlobeAmericas } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

export default function About() {
  const colors = ["#1A2A80", "#3B38A0", "#7A85C1", "#B2B0E8"];
  const primary = colors[0];
  const secondary = colors[1];

  const offices = [
    {
      name: "Jabalpur",
      address: "71, Dadda Nagar, Jabalpur, MP",
      founded: "2024",
    },
    { name: "Bhopal", address: "Zone 1, Bhopal, MP", founded: "2024" },
    {
      name: "Raipur",
      address: "MG Road, Raipur, Chhattisgarh",
      founded: "2024",
    },
  ];

  const servicesList = [
    {
      icon: <FaLaptopCode size={28} color="#1A2A80" />,
      title: "Web Applications",
      desc: "Enterprise web apps with modern UI & scalable backend.",
    },
    {
      icon: <FaMobileAlt size={28} color="#1A2A80" />,
      title: "Mobile Applications",
      desc: "iOS & Android apps with intuitive UX and high performance.",
    },
    {
      icon: <FaRobot size={28} color="#1A2A80" />,
      title: "AI & ML Solutions",
      desc: "Smart AI/ML solutions to automate and optimize business processes.",
    },
    {
      icon: <FaCube size={28} color="#1A2A80" />,
      title: "AR/VR Development",
      desc: "Immersive AR/VR experiences for enterprise & entertainment.",
    },
    {
      icon: <FaCheckCircle size={28} color="#1A2A80" />,
      title: "IoT Solutions",
      desc: "Connected devices and IoT automation for smarter workflows.",
    },
    {
      icon: <FaGamepad size={28} color="#1A2A80" />,
      title: "Game Development",
      desc: "Engaging 2D/3D games for web, mobile, and VR platforms.",
    },
  ];

  const projectsList = [
    {
      title: "GEM Control",
      desc: "Jewellery shop management system for tracking inventory and sales.",
      icon: <FaGem size={28} color="#1A2A80" />,
    },
    {
      title: "AI Based Learning Management System",
      desc: "Platform for managing online courses, tracking progress, and assessments.",
      icon: <FaLaptopCode size={28} color="#1A2A80" />,
    },
    {
      title: "CRM Solutions",
      desc: "Customer relationship management system for better client handling.",
      icon: <FaUsers size={28} color="#1A2A80" />,
    },
    {
      title: "IDHPs",
      desc: "Industrial Data Handling Platforms for enterprise-level data management.",
      icon: <FaDatabase size={28} color="#1A2A80" />,
    },
    {
      title: "Tiffin Management",
      desc: "Food delivery and tiffin management system for users and providers.",
      icon: <FaUtensils size={28} color="#1A2A80" />,
    },
    {
      title: "Other Web & Mobile Projects",
      desc: "Various custom projects for international and Indian clients.",
      icon: <FaGlobe size={28} color="#1A2A80" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen mt-10">
      {/* About / Mission / Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            {...fadeUp()}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-4"
              style={{ color: primary }}
            >
              About ADRS Techno Pvt Ltd
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Founded in 2024, ADRS Techno Pvt Ltd delivers innovative
              technology solutions across India, US, Canada, and Korea. We
              specialise in web, mobile, ERP, AI, AR/VR, and IoT projects for
              global clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp(0.2)}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-200 flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white text-lg">
                  <FaBullseye size={20} />
                </span>
                <h4
                  className="font-semibold text-xl"
                  style={{ color: secondary }}
                >
                  Our Mission
                </h4>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Empower businesses globally through reliable, innovative, and
                scalable technology solutions.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.3)}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-200 flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white text-lg">
                  <FaGlobeAmericas size={20} />
                </span>
                <h4
                  className="font-semibold text-xl"
                  style={{ color: secondary }}
                >
                  Our Vision
                </h4>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Become a globally trusted partner for cutting-edge software
                solutions and innovative technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h3 className="text-3xl font-bold mb-10" style={{ color: primary }}>
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesList.map((s, idx) => (
              <motion.div
                {...fadeUp(0.1 + idx * 0.1)}
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all flex flex-col gap-5 border border-gray-100 cursor-pointer"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100">
                  {s.icon}
                </div>
                <h4
                  className="text-xl font-semibold"
                  style={{ color: primary }}
                >
                  {s.title}
                </h4>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          {/* Single Button at the bottom */}
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white px-8 py-3 rounded-lg font-medium text-lg hover:scale-105 transition-transform"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h3 className="text-3xl font-bold mb-10" style={{ color: primary }}>
            Our Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsList.map((p, idx) => (
              <motion.div
                {...fadeUp(0.1 + idx * 0.1)}
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all flex flex-col gap-4 border border-gray-100 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100">
                  {p.icon}
                </div>

                {/* Title */}
                <h4
                  className="text-xl font-semibold"
                  style={{ color: primary }}
                >
                  {p.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Single Button at the bottom */}
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-block bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white px-8 py-3 rounded-lg font-medium text-lg hover:scale-105 transition-transform"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <h3 className="text-2xl font-semibold mb-6" style={{ color: primary }}>
          Our Global Offices
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {offices.map((office) => (
            <motion.div
              {...fadeUp()}
              key={office.name}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 flex flex-col items-start gap-3"
            >
              <FaBuilding className="text-3xl" style={{ color: secondary }} />
              <h4 className="text-xl font-semibold">{office.name} Office</h4>
              <p className="text-gray-700 text-sm">{office.address}</p>
              <p className="text-gray-600 text-xs">Founded: {office.founded}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners */}
      {/* <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: primary }}>Our Partners</h3>
          <PartnersCarousel partners={partners} />
        </div>
      </section> */}

      {/* Meet the Team */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-2" style={{ color: primary }}>
            Meet the Team
          </h3>
          <p className="text-gray-600">Leadership & Development</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Founder & CEO */}
          <motion.div
            {...fadeUp(0.1)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all flex flex-col items-center text-center gap-4 border border-gray-200 cursor-pointer"
          >
            <img
              src="/profile.webp"
              alt="Abhishek Dubey"
              className="w-24 h-24 rounded-full object-cover border-4 border-gradient-to-r from-[#1A2A80] to-[#3B38A0]"
            />
            <h4 className="font-semibold text-xl" style={{ color: primary }}>
              Abhishek Dubey
            </h4>
            <p className="text-gray-700 text-sm font-medium">Founder & CEO</p>
            <p className="text-gray-500 text-sm">Strategy & Product</p>
          </motion.div>

          {/* CTO */}
          <motion.div
            {...fadeUp(0.2)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all flex flex-col items-center text-center gap-4 border border-gray-200 cursor-pointer"
          >
            <img
              src="/profile.webp"
              alt="Siddhant Dubey"
              className="w-24 h-24 rounded-full object-cover border-4 border-gradient-to-r from-[#1A2A80] to-[#3B38A0]"
            />
            <h4 className="font-semibold text-xl" style={{ color: primary }}>
              Siddhant Dubey
            </h4>
            <p className="text-gray-700 text-sm font-medium">CTO</p>
            <p className="text-gray-500 text-sm">Software Engineer & DevOps Specialist</p>
          </motion.div>

          {/* COO */}
          <motion.div
            {...fadeUp(0.3)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all flex flex-col items-center text-center gap-4 border border-gray-200 cursor-pointer"
          >
            <img
              src="/profile.webp"
              alt="Piyush Khare"
              className="w-24 h-24 rounded-full object-cover border-4 border-gradient-to-r from-[#1A2A80] to-[#3B38A0]"
            />
            <h4 className="font-semibold text-xl" style={{ color: primary }}>
              Piyush Khare
            </h4>
            <p className="text-gray-700 text-sm font-medium">CFO and COO</p>
            <p className="text-gray-500 text-sm">Financial Strategist  and  Operations Leader</p>
          </motion.div>

          {/* Dev Team */}
          <motion.div
            {...fadeUp(0.4)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all flex flex-col items-center text-center gap-4 border border-gray-200 cursor-pointer"
          >
            <img
              src="/profile.webp"
              alt="Dev Team"
              className="w-24 h-24 rounded-full object-cover border-4 border-gradient-to-r from-[#1A2A80] to-[#3B38A0]"
            />
            <h4 className="font-semibold text-xl" style={{ color: primary }}>
              Dev Team
            </h4>
            <p className="text-gray-700 text-sm font-medium">20+ Developers</p>
            <p className="text-gray-500 text-sm">Full-stack, Mobile, Devops, Cloud AI/ML And Design </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
