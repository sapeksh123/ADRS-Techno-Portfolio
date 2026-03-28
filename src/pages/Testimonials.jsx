import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../utils/motion";

const testimonialsData = [
  {
    name: "Rahul Sharma",
    project: "GEM Control",
    review: "ADRS Techno delivered an exceptional jewellery management system. Highly reliable and scalable!",
    clientType: "India",
  },
  {
    name: "Sarah Lee",
    project: "CRM Solutions",
    review: "The team was professional and innovative. Our client handling and workflow improved drastically.",
    clientType: "Canada",
  },
  {
    name: "Kenta Mori",
    project: "IDHPs",
    review: "Great international collaboration. ADRS Techno understands complex industrial requirements very well.",
    clientType: "Japan",
  },
  {
    name: "Priya Verma",
    project: "Tiffin Management",
    review: "Excellent mobile app development. Users love the intuitive design and smooth performance.",
    clientType: "India",
  },
  {
    name: "Rajesh Tiwari",
    project: "Sea World Water Solutions",
    review: "The water management system developed by ADRS Techno exceeded our expectations. Highly recommended!",
    clientType: "India",
  },
  {
    name: "Vednibne Jeweller",
    project: "Jewellery ERP",
    review: "Their custom ERP solution streamlined our operations efficiently.",
    clientType: "India",
  },
  {
    name: "Dhan Laxmi",
    project: "Retail Management System",
    review: "Seamless integration with our existing platforms. Professional delivery and support.",
    clientType: "India",
  },
  {
    name: "Jaipur Tours Travel",
    project: "Travel Booking App",
    review: "Innovative mobile application with great UX. Customers love it!",
    clientType: "India",
  },
  {
    name: "Maria Gonzalez",
    project: "International E-commerce Platform",
    review: "ADRS Techno delivered a robust platform for our clients in Spain and Europe.",
    clientType: "Spain",
  },
  {
    name: "Kim Joon",
    project: "Classcrew",
    review: "Excellent collaboration for our education platform. ADRS Techno understood our requirements perfectly.",
    clientType: "Korea",
  },
  {
    name: "Lee Min Ho",
    project: "Video Crew",
    review: "Professional team delivering top-notch video production solutions.",
    clientType: "Korea",
  },
  {
    name: "Posco International",
    project: "Industrial ERP",
    review: "High-quality ERP solutions for complex industrial workflows. Very satisfied with delivery.",
    clientType: "Korea",
  },
  {
    name: "KIA Motors",
    project: "KIA GCOF 2025",
    review: "Seamless digital solutions for our automotive Projects. Excellent communication and support.",
    clientType: "Korea",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="page-shell">
      <motion.div {...fadeUp()} className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="section-title text-4xl md:text-5xl mb-4">
          Our Customers & Global Clients
        </h2>
        <p className="section-subtitle text-base md:text-lg">
          ADRS Techno delivers innovative solutions globally, from web and mobile apps to AI/ML, AR/VR, IoT, cloud deployment, and full project maintenance.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-3xl" role="region" aria-label="Testimonials carousel">
        <div className="surface-card relative min-h-[300px] rounded-2xl p-8 md:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#132f8b] to-[#3554b7] p-8 text-center"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="mb-5 text-lg italic text-white md:text-xl">
                “{testimonialsData[current].review}”
              </p>
              <h4 className="font-[Sora] text-lg font-semibold text-white">{testimonialsData[current].name}</h4>
              <p className="mt-1 text-sm text-white/85">
                {testimonialsData[current].project} • {testimonialsData[current].clientType}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-3" aria-label="Select testimonial">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              className={`focus-ring h-3 w-3 rounded-full transition-all ${
                current === idx ? "scale-125 bg-[#132f8b]" : "bg-slate-300 hover:bg-slate-400"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              aria-current={current === idx ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
