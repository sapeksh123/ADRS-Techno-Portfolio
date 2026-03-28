import { useState, useEffect } from "react";
import heroImg from "/hero.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserTie, FaProjectDiagram, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fadeUp, scaleIn } from "../utils/motion";

const rotatingQuotes = [
  "Innovating solutions for a smarter tomorrow.",
  "Empowering businesses globally with technology.",
  "Where ideas meet cutting-edge software.",
];

export default function Hero() {
  const stats = [
    { icon: <FaUserTie size={22} />, number: "40+", label: "Specialist Developers" },
    { icon: <FaProjectDiagram size={22} />, number: "100+", label: "Projects Delivered" },
    { icon: <FaGlobeAmericas size={22} />, number: "Global", label: "Clients Worldwide" },
  ];

  const [currentQuote, setCurrentQuote] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % rotatingQuotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-4 top-8 h-40 w-40 rounded-full bg-[#5d76cc]/20 blur-3xl" />
        <div className="absolute bottom-8 right-8 h-48 w-48 rounded-full bg-[#3554b7]/15 blur-3xl" />
      </div>

      <div className="page-shell relative z-10 grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="space-y-6 md:space-y-7">
          <motion.h1
            className="section-title text-[2.35rem] leading-[1.05] sm:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            Advanced Digital and Reliable Solutions
            <br />
            <span className="mt-2 block font-[Sora] text-[1.9rem] font-semibold tracking-tight text-slate-700 sm:text-2xl md:text-[1.8rem]">
              Enterprise-grade. Client-first.
            </span>
          </motion.h1>

          <motion.p className="section-subtitle max-w-xl text-[1.09rem] leading-relaxed md:text-lg" {...fadeUp(0.12, 16)}>
            We deliver secure, scalable applications and cloud solutions across
            the globe. Partner with us for enterprise web, mobile, ERP, AI, AR/VR,
            and IoT solutions.
          </motion.p>

          <div className="relative h-14 overflow-hidden rounded-lg border border-[#dfe6ff] bg-white/90 px-4 py-3 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
                className="absolute text-sm font-semibold text-[#132f8b] md:text-base"
              >
                {rotatingQuotes[currentQuote]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/services"
              className="focus-ring btn-primary w-full px-6 py-3 text-sm sm:w-auto"
            >
              View Services
            </Link>
            <Link
              to="/Projects"
              className="focus-ring btn-secondary w-full px-6 py-3 text-sm sm:w-auto"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="surface-card flex flex-col items-center gap-2 p-3.5 text-center sm:p-4"
                {...scaleIn(0.2 + i * 0.1)}
                whileHover={{ y: -3 }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#132f8b] to-[#3554b7] text-white">
                  {stat.icon}
                </div>
                <p className="font-[Sora] text-lg font-bold text-[#132f8b]">{stat.number}</p>
                <p className="text-xs text-slate-600 md:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="relative mt-2 md:mt-0"
        >
          <div className="group relative">
            <img
              src={heroImg}
              alt="Team collaborating on enterprise software delivery"
              className="h-[300px] w-full rounded-3xl border border-[#dfe6ff] object-cover shadow-2xl shadow-[#132f8b]/12 transition duration-500 group-hover:scale-[1.01] sm:h-[340px] md:h-[470px]"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#132f8b]/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>

          <div className="absolute -right-4 -top-5 h-20 w-20 rounded-full bg-[#3554b7]/30 blur-2xl" />
          <div className="absolute -bottom-4 -left-5 h-24 w-24 rounded-full bg-[#9ba8e6]/35 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
