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
      title: "Web, Shopify & WordPress",
      desc: "Business websites and web apps with modern UX.",
    },
    {
      icon: <FaMobileAlt size={28} color="#1A2A80" />,
      title: "Mobile Applications",
      desc: "Fast Android and iOS apps with clean experience.",
    },
    {
      icon: <FaRobot size={28} color="#1A2A80" />,
      title: "AI & ML Solutions",
      desc: "Automation and insights with practical AI solutions.",
    },
    {
      icon: <FaCube size={28} color="#1A2A80" />,
      title: "ERP, CRM & LMS",
      desc: "Core business systems for operations and growth.",
    },
    {
      icon: <FaCheckCircle size={28} color="#1A2A80" />,
      title: "Digital Marketing",
      desc: "SEO, SEM, and social campaigns to scale visibility.",
    },
    {
      icon: <FaGamepad size={28} color="#1A2A80" />,
      title: "Training & Internship",
      desc: "Hands-on training programs with industry mentorship.",
    },
  ];

  const productsList = [
    {
      title: "GoEventify",
      desc: "Smart event management and ticketing platform.",
      icon: <FaGlobe size={28} color="#1A2A80" />,
    },
    {
      title: "GemControl",
      desc: "Jewellery billing, inventory, and analytics system.",
      icon: <FaGem size={28} color="#1A2A80" />,
    },
    {
      title: "TestWithSpark (TWS Online Testing)",
      desc: "Secure online assessments with controlled test flow.",
      icon: <FaLaptopCode size={28} color="#1A2A80" />,
    },
    {
      title: "LMS",
      desc: "Learning management platform for training and education.",
      icon: <FaDatabase size={28} color="#1A2A80" />,
    },
    {
      title: "CRM",
      desc: "Relationship management for leads and customers.",
      icon: <FaUsers size={28} color="#1A2A80" />,
    },
    {
      title: "Inventory Management System",
      desc: "Manage stock and supply flow with real-time visibility.",
      icon: <FaUtensils size={28} color="#1A2A80" />,
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
              specialise in web, mobile, ERP, AI, marketing, and business
              products for
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
          <p className="section-subtitle mx-auto mb-8 max-w-3xl text-center text-sm md:text-base">
            Short overview of our core services across development, business platforms, marketing, and training.
          </p>
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
            Our Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsList.map((p, idx) => (
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
              to="/products"
              className="focus-ring btn-primary px-8 py-3 text-lg"
            >
              View All Products
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
          <p className="section-subtitle">Leadership Driving Product, Engineering, and Growth</p>
        </motion.div>

        <motion.div
          {...fadeUp(0.08)}
          className="surface-card mx-auto mb-8 max-w-4xl rounded-2xl border border-[#dfe6ff] bg-gradient-to-r from-[#f7f9ff] to-white p-7 shadow-[0_16px_34px_rgba(13,38,95,0.09)]"
        >
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:text-left">
            <img
              src="/profile.webp"
              alt="Abhishek Dubey"
              className="h-28 w-28 rounded-full border-4 border-[#dfe6ff] object-cover"
            />
            <div>
              <span className="mb-2 inline-block rounded-full bg-[#132f8b]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#132f8b]">
                Chief Executive Officer
              </span>
              <h4 className="font-[Sora] text-2xl font-semibold text-[#132f8b]">Abhishek Dubey</h4>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                Founder & CEO leading company vision, strategy, and product direction across global engagements.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            {...fadeUp(0.12)}
            className="surface-card flex flex-col items-center gap-4 rounded-2xl p-6 text-center transition hover:-translate-y-1"
          >
            <img
              src="/profile.webp"
              alt="Siddhant Dubey"
              className="h-24 w-24 rounded-full border-4 border-[#dfe6ff] object-cover"
            />
            <h4 className="font-[Sora] text-xl font-semibold text-[#132f8b]">
              Siddhant Dubey
            </h4>
            <p className="rounded-full bg-[#132f8b]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#132f8b]">Chief Technology Officer (CTO)</p>
            <p className="text-sm text-slate-500">Technology architecture, engineering excellence, and DevOps reliability.</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.18)}
            className="surface-card flex flex-col items-center gap-4 rounded-2xl p-6 text-center transition hover:-translate-y-1"
          >
            <img
              src="/profile.webp"
              alt="Prateek Gupta"
              className="h-24 w-24 rounded-full border-4 border-[#dfe6ff] object-cover"
            />
            <h4 className="font-[Sora] text-xl font-semibold text-[#132f8b]">
            Prateek Gupta
            </h4>
            <p className="rounded-full bg-[#132f8b]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#132f8b]">Co-Founder</p>
            <p className="text-sm text-slate-500">Business operations, partnerships, and strategic execution for sustainable growth.</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.24)}
            className="surface-card flex flex-col items-center gap-4 rounded-2xl p-6 text-center transition hover:-translate-y-1"
          >
            <img
              src="/profile.webp"
              alt="Dev Team"
              className="h-24 w-24 rounded-full border-4 border-[#dfe6ff] object-cover"
            />
            <h4 className="font-[Sora] text-xl font-semibold text-[#132f8b]">
              Dev Team
            </h4>
            <p className="rounded-full bg-[#132f8b]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#132f8b]">Engineering Team</p>
            <p className="text-sm text-slate-500">40+ experienced developers across all domains including full-stack, mobile, cloud, AI/ML, and design.</p>
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            className="surface-card md:col-span-3 flex flex-col items-center gap-3 rounded-2xl p-5 text-center"
          >
            <p className="font-[Sora] text-lg font-semibold text-[#132f8b]">Leadership Structure</p>
            <p className="max-w-3xl text-sm text-slate-600 md:text-base">
              Leadership order is organized as CEO at the top, followed by Chief Technology Officer (CTO) and Co-Founder to maintain clear communication and execution flow.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
