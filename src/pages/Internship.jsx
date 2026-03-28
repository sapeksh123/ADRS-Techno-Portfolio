import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function Internship() {
  return (
    <div className="page-shell relative">
      <motion.div {...fadeUp()} className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="section-title text-4xl md:text-5xl mb-4">
          Internship & Training
        </h2>
        <p className="section-subtitle text-base md:text-lg max-w-2xl mx-auto">
          Industry internships, workshops, and PPO (Pre-Placement Offer) opportunities for students and freshers.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          {...fadeUp(0.1)}
          className="surface-card rounded-2xl p-8 md:p-10"
        >
          <h4 className="font-[Sora] text-2xl font-semibold mb-4 text-[#3554b7]">
            Program Highlights
          </h4>
          <ul className="list-disc list-inside text-slate-700 space-y-3">
            <li>Hands-on Projects with mentoring from senior engineers</li>
            <li>Workshops on MERN, Mobile, AI/ML, AR/VR</li>
            <li>PPO opportunities for high performers</li>
          </ul>

          <h4 className="font-[Sora] text-2xl font-semibold mt-8 mb-2 text-[#3554b7]">
            Team & Capacity
          </h4>
          <p className="text-slate-700">
            Our development teams consist of 20+ developers across full-stack, mobile, and data engineering.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.2)}
          className="surface-card rounded-2xl p-8 md:p-10"
        >
          <h4 className="font-[Sora] text-2xl font-semibold text-center mb-6 text-[#3554b7]">
            Apply / Enquire
          </h4>
          <ContactForm />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-32 w-32 rounded-full bg-[#3554b7]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-48 w-48 rounded-full bg-[#132f8b]/15 blur-3xl" />
    </div>
  );
}
