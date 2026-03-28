import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { ProjectsList } from "../utils/projectsList";
import { fadeUp } from "../utils/motion";

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
  const project = ProjectsList.find((p) => p.id === projectId);

  if (!project)
    return (
      <div className="page-shell">
        <div className="surface-card mx-auto mt-8 max-w-xl rounded-2xl p-8 text-center text-slate-600">
          <p className="font-[Sora] text-xl text-slate-800">Product not found.</p>
          <p className="mt-2 text-sm">The requested product may have been moved or renamed.</p>
          <div className="mt-6">
            <Link
              to="/products"
              className="focus-ring btn-primary px-6 py-3 text-sm"
            >
              Back to All Products
            </Link>
          </div>
        </div>
      </div>
    );

  const details = project.fullDesc
    ?.split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <section className="page-shell">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="surface-card mx-auto max-w-4xl rounded-2xl p-8"
      >
        <div className="mb-6 flex justify-center">
          <div className="rounded-2xl bg-[#132f8b]/6 p-4">{getIcon(project.icon)}</div>
        </div>

        <h2 className="section-title mb-6 text-center text-3xl">{project.title}</h2>

        <ul className="mb-10 space-y-2.5 text-sm leading-relaxed text-slate-700 md:text-base">
          {details?.map((point, idx) => (
            <motion.li key={idx} {...fadeUp(0.04 * idx, 10)} className="rounded-lg border border-[#e3eaff] bg-white px-4 py-3">
              {point}
            </motion.li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            to="/products"
            className="focus-ring btn-primary px-6 py-3 text-sm"
          >
            Back to All Products
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
