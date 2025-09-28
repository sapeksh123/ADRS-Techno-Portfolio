import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { projectsList } from "../utils/projectsList";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

const getIcon = (iconName) => {
  const IconComponent = FaIcons[iconName];
  return IconComponent ? (
    <IconComponent size={48} color="#1A2A80" />
  ) : (
    <FaIcons.FaRegQuestionCircle size={48} color="#1A2A80" />
  );
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsList.find((p) => p.id === projectId);

  if (!project)
    return (
      <div className="text-center mt-20 text-gray-600">
        Project not found.
        <div className="mt-4">
          <Link
            to="/projects"
            className="inline-block bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Back to All Projects
          </Link>
        </div>
      </div>
    );

  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 mt-10">
      <motion.div
        {...fadeUp()}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
      >
        {/* Project Icon */}
        <div className="flex justify-center mb-6">{getIcon(project.icon)}</div>

        {/* Project Title */}
        <h2 className="text-3xl font-bold text-[#1A2A80] mb-6 text-center">
          {project.title}
        </h2>

      {/* Project Full Description */}
<ul className="list-disc list-inside text-gray-700 text-md leading-relaxed mb-10">
  {project.fullDesc?.split("\n").map((point, idx) => (
    <li key={idx}>{point}</li>
  ))}
</ul>


        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-block bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Back to All Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
