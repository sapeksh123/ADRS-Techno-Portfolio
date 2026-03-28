import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { ProjectsList } from "../utils/projectsList";
import { fadeUp } from "../utils/motion";

const getIcon = (iconName) => {
  const IconComponent = FaIcons[iconName];
  return IconComponent ? (
    <IconComponent size={36} color="#1A2A80" />
  ) : (
    <FaIcons.FaRegQuestionCircle size={36} color="#1A2A80" />
  );
};

export default function Projects() {
  return (
    <section className="page-shell">
      <motion.div {...fadeUp()} className="mx-auto mb-14 max-w-4xl text-center">
        <h2 className="section-title text-4xl md:text-5xl">
          Our Products
        </h2>
        <p className="section-subtitle mx-auto mt-4 max-w-2xl text-base md:text-lg">
          Explore our flagship software products designed for event management,
          assessments, education, CRM, billing, and inventory operations.
        </p>

      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ProjectsList.map((project, idx) => (
          <motion.div
            key={project.id}
            {...fadeUp(0.1 + idx * 0.1)}
            className="surface-card flex cursor-pointer flex-col justify-between rounded-2xl p-6 transition hover:-translate-y-1"
          >
            <div className="mb-4 rounded-xl bg-[#132f8b]/6 p-3 w-fit">{getIcon(project.icon)}</div>
            <h4 className="mb-2 font-[Sora] text-xl font-semibold text-slate-800">{project.title}</h4>
            <p className="mb-5 text-sm text-slate-600">{project.shortDesc}</p>
            <Link
              to={`/products/${project.id}`}
              className="focus-ring btn-primary rounded-lg px-5 py-2 text-center text-sm"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
