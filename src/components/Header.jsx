

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logob.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Colour palette
  const colors = ["#1A2A80", "#3B38A0", "#7A85C1", "#B2B0E8"];
  const primary = colors[0]; // #1A2A80

  // Function to pick a color based on index
  const getColor = (index) => colors[index % colors.length];

  const navItems = ["Home", "About", "Services", "Projects", "Internship", "Testimonals", "Contact"];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50 font-sans">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-13 w-35 ml-5" />
          <div>
          </div>
        </div>

        {/* Desktop Navlinks */}
        <nav className="hidden lg:flex gap-8">
          {navItems.map((item, index) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <Link
                key={item}
                to={path}
                className="relative group"
                style={{
                  color: "black",
                  fontSize: "1.05rem",
                  fontWeight: 500,
                }}
              >
                {item}
                <span
                  className="absolute left-0 -bottom-1 h-[3px] transition-all duration-300"
                  style={{
                    width: isActive ? "100%" : "0%",
                    backgroundColor: getColor(index),
                  }}
                ></span>
                <span
                  className="absolute left-0 -bottom-1 h-[3px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: getColor(index) }}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link to="/contact">
          <button
            className="px-6 py-2 rounded-lg shadow-md transition-transform duration-300"
            style={{
              backgroundColor: primary,
              color: "#fff",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors[1])}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary)}
          >
            Contact Us
          </button>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden w-full ${isOpen ? "block" : "hidden"} shadow-md`}
        style={{ backgroundColor: "#fff" }}
      >
        {navItems.map((item, index) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = location.pathname === path;
          return (
            <Link
              key={item}
              to={path}
              className="block px-6 py-3 transition-colors duration-200"
              style={{
                color: "black",
                fontWeight: 500,
                fontSize: "1.05rem",
                backgroundColor: isActive ? getColor(index) + "20" : "#fff",
              }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = getColor(index) + "20")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isActive ? getColor(index) + "20" : "#fff")}
            >
              {item}
            </Link>
          );
        })}
        <button
          className="w-[80%] mx-auto block px-6 py-2 rounded-lg my-3"
          style={{ backgroundColor: primary, color: "#fff" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors[1])}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary)}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}
