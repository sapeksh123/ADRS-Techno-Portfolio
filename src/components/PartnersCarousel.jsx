


import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PartnersCarousel({ partners = [] }) {
  const logos = [...partners, ...partners];
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(15); // Default desktop speed

  // 🧠 Detect screen size and adjust speed for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDuration(8); // Faster for mobile
      } else {
        setDuration(15); // Normal for laptop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHover = (hovering) => {
    setIsPaused(hovering);
    if (hovering) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      });
    }
  };

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "linear",
      },
    });
  }, [controls, duration]);

  return (
    <div
      className="overflow-hidden w-full py-6"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <motion.div className="flex gap-8" animate={controls} initial={{ x: "0%" }}>
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-40 h-24 flex items-center justify-center
                       backdrop-blur-sm rounded-xl
                       hover:scale-105 transition-transform duration-300"
          >
            <img src={logo} alt={`partner-${idx}`} className="max-h-12 object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
