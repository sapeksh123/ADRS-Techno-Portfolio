
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "/logob.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Products", path: "/products" },
    { label: "Contact", path: "/contact" },
  ];

  const isPathActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dfe6ff] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.7rem] w-full max-w-[1240px] items-center justify-between px-4 md:h-[5.2rem] md:px-8">
        <Link to="/" className="focus-ring rounded-lg">
          <img src={logo} alt="ADRS Techno" className="h-10 w-28 object-contain md:h-14 md:w-36" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = isPathActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`focus-ring group relative rounded-md py-1 text-[0.97rem] font-semibold transition-colors duration-300 ${
                  active ? "text-[#132f8b]" : "text-slate-700 hover:text-[#132f8b]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#132f8b] to-[#5d76cc] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="focus-ring btn-primary px-5 py-2.5 text-sm"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="focus-ring rounded-lg border border-[#dfe6ff] p-2 text-slate-700 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-[#dfe6ff] bg-white px-4 pb-5 pt-3 lg:hidden"
          >
            <div className="mx-auto max-w-[1240px] space-y-1">
              {navItems.map((item) => {
                const active = isPathActive(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`focus-ring block rounded-lg px-3 py-2.5 text-[0.97rem] font-semibold transition ${
                      active
                        ? "bg-[#132f8b]/10 text-[#132f8b]"
                        : "text-slate-700 hover:bg-slate-100 hover:text-[#132f8b]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="focus-ring btn-primary mt-3 w-full px-4 py-2.5 text-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
