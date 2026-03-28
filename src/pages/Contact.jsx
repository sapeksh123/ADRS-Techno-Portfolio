import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaExternalLinkAlt } from "react-icons/fa";
import ContactForm from '../components/ContactForm';
import { fadeUp } from "../utils/motion";

export default function Contact() {
  const offices = [
    {
      name: "Jabalpur",
      address: "71, Dadda Nagar, Karmeta Jabalpur, Madhya Pradesh, 482002",
      email: "support@adrstechno.com",
      phone: "+91-9201347033, +91-9516467095",
    },
    {
      name: "Bhopal",
      address: "Plot No. R25, Opposite Railway Track, Zone 02, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011",
      email: "support@adrstechno.com",
      phone: "+91-9201347033",
    },
    {
      name: "Raipur",
      address: "Shangar Nagar VIP road Raipur Chhattisgarh, 492001",
      email: "support@adrstechno.com",
      phone: "+91-9201347033",
    },
  ];

  return (
    <div className="page-shell">
      <div className="mx-auto max-w-[1240px]">
        <motion.h2
          {...fadeUp(0.1)}
          className="section-title text-3xl md:text-4xl mb-4"
        >
          Contact Us
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="section-subtitle mb-12 max-w-2xl text-sm md:text-base"
        >
          Ready to discuss your project? Send a message and our team will respond promptly with next steps.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp(0.3)} className="space-y-10">
            {offices.map((office) => {
              const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`;

              return (
                <div
                  key={office.name}
                  className="surface-card space-y-4 rounded-xl p-5"
                >
                  <h4 className="font-[Sora] text-xl font-semibold text-[#3554b7] md:text-2xl">
                    {office.name} Office
                  </h4>
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 text-[#132f8b]" />
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring flex items-center gap-1 rounded-md text-slate-600 transition hover:text-[#132f8b]"
                    >
                      {office.address} <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#132f8b]" />
                    <a href={`mailto:${office.email}`} className="focus-ring rounded-md text-slate-600 transition hover:text-[#132f8b]">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-[#132f8b]" />
                    <a href={`tel:${office.phone}`} className="focus-ring rounded-md text-slate-600 transition hover:text-[#132f8b]">
                      {office.phone}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div {...fadeUp(0.36)}>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
