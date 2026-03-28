import logo from "/whitelogo.png";
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const socials = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/adrs-techno-private-limited",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/adrstechno",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:support@adrstechno.com",
      label: "Email",
    },
    {
      icon: <FaGlobe />,
      link: "https://www.adrstechno.com/",
      label: "Website",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0c1538] text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5d76cc] to-transparent" />

      <div className="mx-auto grid w-full max-w-[1240px] gap-7 px-4 py-12 md:grid-cols-3 md:gap-8 md:px-8 md:py-14">
        <motion.div {...fadeUp(0)} className="space-y-3">
          <Link to="/" className="inline-flex rounded-xl focus-ring">
            <motion.img
              src={logo}
              alt="ADRS Techno"
              className="h-20 w-32 object-contain"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
          <p className="text-sm leading-relaxed text-slate-300/90">
            Jabalpur | Bhopal | Raipur
          </p>
          <a href="mailto:support@adrstechno.com" className="focus-ring flex w-fit items-center gap-2 rounded-md text-sm text-slate-200 transition hover:text-[#9ba8e6]">
            <FaEnvelope className="text-[#9ba8e6]" /> support@adrstechno.com
          </a>
          <a href="tel:+919201347033" className="focus-ring flex w-fit items-center gap-2 rounded-md text-sm text-slate-200 transition hover:text-[#9ba8e6]">
            <FaPhone className="text-[#9ba8e6]" /> +91-9201347033
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.08)} className="space-y-3">
          <h4 className="font-[Sora] text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="focus-ring inline-flex rounded-md text-slate-300 transition hover:translate-x-1 hover:text-[#9ba8e6]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp(0.24)} className="space-y-3">
          <h4 className="font-[Sora] text-lg font-semibold text-white">Connect With Us</h4>
          <div className="flex gap-3">
            {socials.map((item) => (
              <motion.a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-100"
                whileHover={{ y: -2, scale: 1.04, backgroundColor: "#132f8b" }}
                whileTap={{ scale: 0.96 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-slate-300/90">
            ADRS Techno Pvt. Ltd.
            <br />
            Enterprise-grade digital engineering and consulting.
          </p>
        </motion.div>
      </div>

      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-1.5 px-4 py-3 text-xs text-slate-400 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} ADRS Techno Pvt. Ltd. All rights reserved.</p>
          <p>Built with reliability, performance, and security in mind.</p>
        </div>
      </div>
    </footer>
  );
}
