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
import { fadeUp } from "../utils/motion";

export default function About() {
  const offices = [
    {
      name: "Jabalpur",
      address: "71, Dadda Nagar, Karmeta Jabalpur, Madhya Pradesh ",
      founded: "2024",
    },
    { name: "Bhopal", address: "Plot No. R25, Opposite Railway Track, Zone 02, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011", founded: "2024" },
    {
      name: "Raipur",
      address: "Shangar Nagar VIP road Raipur Chhattisgarh, 492001",
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

  const ProjectsList = [
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
      desc: "Various custom Projects for international and Indian clients.",
      icon: <FaGlobe size={28} color="#1A2A80" />,
    },
  ];

  return (
    <div>
      <section className="page-shell">
        <div>
          <motion.div
            {...fadeUp()}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="section-title text-4xl md:text-5xl mb-4">
              About ADRS Techno Pvt Ltd
            </h2>
            <p className="section-subtitle text-base md:text-lg mb-6">
              Founded in 2024, ADRS Techno Pvt Ltd delivers innovative
              technology solutions across India, US, Canada, and Korea. We
              specialise in web, mobile, ERP, AI, AR/VR, and IoT Projects for
              global clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp(0.2)}
              className="surface-card flex flex-col items-start gap-4 rounded-2xl p-8 transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#132f8b] to-[#3554b7] text-lg text-white">
                  <FaBullseye size={20} />
                </span>
                <h4 className="font-[Sora] text-xl font-semibold text-[#3554b7]">
                  Our Mission
                </h4>
              </div>
              <p className="text-sm text-slate-700 md:text-base">
                Empower businesses globally through reliable, innovative, and
                scalable technology solutions.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.3)}
              className="surface-card flex flex-col items-start gap-4 rounded-2xl p-8 transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#132f8b] to-[#3554b7] text-lg text-white">
                  <FaGlobeAmericas size={20} />
                </span>
                <h4 className="font-[Sora] text-xl font-semibold text-[#3554b7]">
                  Our Vision
                </h4>
              </div>
              <p className="text-sm text-slate-700 md:text-base">
                Become a globally trusted partner for cutting-edge software
                solutions and innovative technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="page-shell pt-2">
        <div>
          <h3 className="section-title text-3xl mb-10">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesList.map((s, idx) => (
              <motion.div
                {...fadeUp(0.1 + idx * 0.1)}
                key={idx}
                className="surface-card flex cursor-pointer flex-col gap-5 rounded-2xl p-8 transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#132f8b]/10">
                  {s.icon}
                </div>
                <h4 className="font-[Sora] text-xl font-semibold text-[#132f8b]">
                  {s.title}
                </h4>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="focus-ring btn-primary px-8 py-3 text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell pt-2">
        <div>
          <h3 className="section-title text-3xl mb-10">
            Our Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ProjectsList.map((p, idx) => (
              <motion.div
                {...fadeUp(0.1 + idx * 0.1)}
                key={idx}
                className="surface-card flex cursor-pointer flex-col gap-4 rounded-2xl p-8 transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#132f8b]/10">
                  {p.icon}
                </div>
                <h4 className="font-[Sora] text-xl font-semibold text-[#132f8b]">
                  {p.title}
                </h4>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/Projects"
              className="focus-ring btn-primary px-8 py-3 text-lg"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell pt-2">
        <h3 className="section-title text-2xl mb-6">
          Our Global Offices
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {offices.map((office) => (
            <motion.div
              {...fadeUp()}
              key={office.name}
              className="surface-card flex flex-col items-start gap-3 rounded-xl p-6"
            >
              <FaBuilding className="text-3xl text-[#3554b7]" />
              <h4 className="font-[Sora] text-xl font-semibold">{office.name} Office</h4>
              <p className="text-sm text-slate-700">{office.address}</p>
              <p className="text-xs text-slate-600">Founded: {office.founded}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="page-shell pt-2">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <h3 className="section-title text-3xl mb-2">
            Meet the Team
          </h3>
          <p className="section-subtitle">Leadership and Development</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            {...fadeUp(0.1)}
            className="surface-card flex cursor-pointer flex-col items-center gap-4 rounded-2xl p-6 text-center"
          >
            <img
              src="/profile.webp"
              alt="Abhishek Dubey"
              className="h-24 w-24 rounded-full border-4 border-[#dfe6ff] object-cover"
            />
            <h4 className="font-[Sora] text-xl font-semibold text-[#132f8b]">
              Abhishek Dubey
            </h4>
            <p className="text-sm font-medium text-slate-700">Founder & CEO</p>
            <p className="text-sm text-slate-500">Strategy and Product</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="surface-card flex cursor-pointer flex-col items-center gap-4 rounded-2xl p-6 text-center"
          >
            <img
              src="/profile.webp"
              alt="Siddhant Dubey"
              className="h-24 w-24 rounded-full border-4 border-[#dfe6ff] object-cover"
            />
            <h4 className="font-[Sora] text-xl font-semibold text-[#132f8b]">
              Siddhant Dubey
            </h4>
            <p className="text-sm font-medium text-slate-700">CTO</p>
            <p className="text-sm text-slate-500">Software Engineer and DevOps Specialist</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            className="surface-card flex cursor-pointer flex-col items-center gap-4 rounded-2xl p-6 text-center"
          >
            <img
              src="/profile.webp"
              alt="Piyush Khare"
              className="h-24 w-24 rounded-full border-4 border-[#dfe6ff] object-cover"
            />
            <h4 className="font-[Sora] text-xl font-semibold text-[#132f8b]">
              Piyush Khare
            </h4>
            <p className="text-sm font-medium text-slate-700">CFO and COO</p>
            <p className="text-sm text-slate-500">Financial Strategist and Operations Leader</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="surface-card flex cursor-pointer flex-col items-center gap-4 rounded-2xl p-6 text-center"
          >
            <img
              src="/profile.webp"
              alt="Dev Team"
              className="h-24 w-24 rounded-full border-4 border-[#dfe6ff] object-cover"
            />
            <h4 className="font-[Sora] text-xl font-semibold text-[#132f8b]">
              Dev Team
            </h4>
            <p className="text-sm font-medium text-slate-700">20+ Developers</p>
            <p className="text-sm text-slate-500">Full-stack, mobile, DevOps, cloud, AI/ML, and design</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
