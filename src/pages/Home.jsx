import Hero from "../components/Hero";
import PartnersCarousel from "../components/PartnersCarousel";
import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "../utils/motion";
import logo1 from "/swws.png";
import logo2 from "/twocups.png";
import logo3 from "/jip.png";
import logo4 from "/classcrew.png";
import logo5 from "/videocrew.png";
import logo6 from "/rays.png";
import logo7 from "/devcode.jpg";
import logo8 from "/Event.png";

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
  ];

  return (
    <div className="overflow-hidden">
      <Hero />

      <section className="page-shell">
        <motion.h3
          {...fadeUp()}
          className="section-title text-center text-3xl md:text-4xl"
        >
          Our Partners
        </motion.h3>

        <motion.p
          {...fadeUp(0.1, 16)}
          className="section-subtitle mx-auto mt-3 max-w-2xl text-center text-sm md:text-base"
        >
          Trusted by organizations across sectors, we build long-term partnerships through quality delivery and transparent collaboration.
        </motion.p>

        <motion.div {...scaleIn(0.22)} className="mt-10">
          <PartnersCarousel partners={partners} />
        </motion.div>
      </section>

      <div className="mx-auto h-px w-full max-w-[1240px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </div>
  );
}
