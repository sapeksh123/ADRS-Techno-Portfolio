

import React from "react";
import Hero from "../components/Hero";
// import ServiceCard from "../components/ServiceCard";
// import PartnersCarousel from "../components/PartnersCarousel";
// import ProjectCard from "../components/ProjectCard";
// import { motion } from "framer-motion";
// import TeamCard from "../components/TeamCard";

// Motion Variants for reusability
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { delay, duration: 0.5 },
});

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      

      {/* Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-brand-700/10 via-gray-200 to-brand-700/10" />


      {/* Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-brand-700/10 via-gray-200 to-brand-700/10" />

      {/* Partners Section */}
      {/* <section className="container mx-auto px-4 py-20">
        <motion.h3
          {...fadeUp()}
          className="text-4xl font-extrabold text-center text-brand-900"
        >
          Our Partners
        </motion.h3>
        <motion.div {...scaleIn(0.3)} className="mt-12">
          <PartnersCarousel partners={partners} />
        </motion.div>
      </section> */}

      {/* Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-brand-700/10 via-gray-200 to-brand-700/10" />

    </div>
  );
}


