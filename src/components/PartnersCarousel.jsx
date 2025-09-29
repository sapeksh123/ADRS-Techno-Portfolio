import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PartnersCarousel({ partners = [] }) {
  const logos = [...partners, ...partners]; 
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const handleHover = (hovering) => {
    setIsPaused(hovering);
    if (hovering) {
      controls.stop();
    } else {
      controls.start({ x: ["0%", "-50%"] });
    }
  };

  return (
    <div
      className="overflow-hidden w-full py-6"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <motion.div
        className="flex gap-8"
        animate={controls}
        initial={{ x: "0%" }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
      >
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-40 h-24 flex items-center justify-center
                       backdrop-blur-sm rounded-xl
                       hover:scale-105 transition-transform duration-300"
          >
            <img
              src={logo}
              alt={`partner-${idx}`}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
