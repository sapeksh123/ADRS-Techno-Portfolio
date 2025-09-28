import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { projectsList } from "../utils/projectsList";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

const getIcon = (iconName) => {
  const IconComponent = FaIcons[iconName];
  return IconComponent ? (
    <IconComponent size={36} color="#1A2A80" />
  ) : (
    <FaIcons.FaRegQuestionCircle size={36} color="#1A2A80" />
  );
};

export default function Projects() {
  const colors = ["#1A2A80", "#3B38A0", "#7A85C1", "#B2B0E8"];
  const primary = colors[0];

  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 mt-10">
      <motion.div {...fadeUp()} className="max-w-4xl mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1A2A80]"
          style={{ color: primary }}
        >
          Our Projects 
        </h2>
     <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
  Explore our completed projects across industries, including web, mobile, ERP, AI/ML, AR/VR, and cloud deployments. Detailed insights, innovative solutions, and enterprise-grade implementations.
</p>

      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsList.map((project, idx) => (
          <motion.div
            key={project.id}
            {...fadeUp(0.1 + idx * 0.1)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="mb-4">{getIcon(project.icon)}</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h4>
            <p className="text-gray-600 text-sm mb-4">{project.shortDesc}</p>
            <Link
              to={`/projects/${project.id}`}
              className="inline-block text-white bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] px-5 py-2 rounded-lg font-medium hover:scale-105 transition-transform text-center"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
