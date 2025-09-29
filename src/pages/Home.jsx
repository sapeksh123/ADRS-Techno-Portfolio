import React from "react";
import Hero from "../components/Hero";
// import ServiceCard from "../components/ServiceCard";
import PartnersCarousel from "../components/PartnersCarousel";
// import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
// import TeamCard from "../components/TeamCard";

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
import logo1 from "/swws.png";
import logo2 from "/twocups.png";
import logo3 from "/jip.png";
import logo4 from "/classcrew.png";
import logo5 from "/videocrew.png";
import logo6 from "/rays.png";
import logo7 from "/devcode.jpg";
import logo8 from "/Event.png";
import logo9 from "/Event.png";
import logo10 from "/Event.png";

export default function Home() {
  const partners = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];
  return (
    <div>
      <Hero />

      <section className="container mx-auto px-4 py-20">
        <motion.h3
          {...fadeUp()}
          className="text-4xl font-extrabold text-center text-gray-800"
        >
          Our Partners
        </motion.h3>

        <motion.div {...scaleIn(0.3)} className="mt-12">
          <PartnersCarousel partners={partners} />
        </motion.div>
      </section>
      <div className="w-full h-1 bg-gradient-to-r from-gray-600/30 via-gray-700/30 to-gray-600/30" />
    </div>
  );
}
