
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// eslint-disable-next-line react/prop-types
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
      className="relative w-full overflow-hidden rounded-2xl border border-[#dfe6ff] bg-white px-2 py-6 shadow-lg shadow-[#132f8b]/5"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

      <motion.div className="flex gap-6 md:gap-8" animate={controls} initial={{ x: "0%" }}>
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex h-24 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-transparent bg-white transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#dfe6ff]"
          >
            <img src={logo} alt={`partner-${idx}`} className="max-h-12 object-contain grayscale-[10%]" />
          </div>
        ))}
      </motion.div>

      {isPaused && (
        <div className="pointer-events-none absolute bottom-2 right-3 rounded-md bg-slate-900/80 px-2 py-1 text-[10px] font-medium tracking-wide text-white">
          Paused
        </div>
      )}
    </div>
  );
}
