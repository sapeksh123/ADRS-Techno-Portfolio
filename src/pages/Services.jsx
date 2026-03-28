import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaRobot, 
  FaCube, 
  FaCheckCircle, 
  FaGamepad, 
  FaTools, 
  FaLifeRing,
  FaPalette,
  FaCogs,
  FaCloud,
  FaChalkboardTeacher,
  FaStore,
  FaWordpress,
  FaBullhorn,
  FaChartLine,
  FaUserTie
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { fadeUp } from "../utils/motion";

const coreSolutions = [
  {
    icon: <FaLaptopCode size={24} color="#1A2A80" />,
    title: "Custom Software Development",
    subtitle: "Built for your exact workflows",
  },
  {
    icon: <FaCogs size={24} color="#1A2A80" />,
    title: "Business Solutions",
    subtitle: "ERP • CRM • LMS",
  },
  {
    icon: <FaMobileAlt size={24} color="#1A2A80" />,
    title: "Web, Mobile & Game Development",
    subtitle: "Cross-platform product engineering",
  },
  {
    icon: <FaBullhorn size={24} color="#1A2A80" />,
    title: "Digital Marketing & Growth Solutions",
    subtitle: "SEO • SEM • Social Media",
  },
  {
    icon: <FaUserTie size={24} color="#1A2A80" />,
    title: "IT Consulting & Technology Strategy",
    subtitle: "Roadmaps, modernization, and execution planning",
  },
  {
    icon: <FaChalkboardTeacher size={24} color="#1A2A80" />,
    title: "Training & Internship Programs",
    subtitle: "Hands-on learning aligned with industry needs",
  },
];

const servicesList = [
  {
    icon: <FaLaptopCode size={28} color="#1A2A80" />,
    title: "Web Applications",
    points: [
      "Custom enterprise web apps with modern UI/UX",
      "Scalable backend architecture for high traffic",
      "Secure authentication and role-based access",
      "Integration with third-party APIs & services",
      "Cloud deployment and continuous monitoring",
      "Professional Shopify and WordPress business websites",
    ],
    techstack: ["React", "Next.js", "Node.js", "Express", "NestJs" ,"MongoDB", "PostgreSQL", "SQL",  "AWS", "SEO", "Shopify", "WordPress"],
  },
  {
    icon: <FaStore size={28} color="#1A2A80" />,
    title: "E-Commerce & CMS Solutions",
    points: [
      "Shopify store setup, customization, and conversion optimization",
      "WordPress websites with business-focused themes and plugins",
      "Secure payment, shipping, and catalog integrations",
      "SEO-ready structure for better search visibility",
      "Maintenance, updates, and growth support",
    ],
    techstack: ["Shopify", "WordPress", "WooCommerce", "Elementor", "Razorpay", "Stripe", "GA4"],
  },
  {
    icon: <FaMobileAlt size={28} color="#1A2A80" />,
    title: "Mobile Applications",
    points: [
      "iOS and Android apps with smooth UX",
      "High-performance native and hybrid apps",
      "Push notifications & offline capabilities",
      "Integration with cloud & enterprise systems",
      "Ongoing updates, maintenance & support",
    ],
    techstack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    icon: <FaCogs size={28} color="#1A2A80" />,
    title: "ERP Solutions",
    points: [
      "Custom ERP systems tailored to business workflows",
      "Modules for finance, HR, CRM and operations",
      "Integration with web, mobile, and IoT systems",
      "Cloud deployment with role-based access control",
      "Ongoing maintenance, analytics, and reporting",
    ],
    techstack: ["Odoo", "SAP", "Django", "Spring Boot", "PostgreSQL", "Azure"],
  },
  {
    icon: <FaRobot size={28} color="#1A2A80" />,
    title: "AI & ML Solutions",
    points: [
      "Predictive analytics and business insights",
      "Automated workflows using AI",
      "Natural Language Processing (NLP) solutions",
      "Computer vision and image recognition",
      "ML model deployment and tuning",
    ],
    techstack: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
  },
  {
    icon: <FaCube size={28} color="#1A2A80" />,
    title: "AR/VR & 3D Visualization",
    points: [
      "Immersive AR/VR experiences for enterprise",
      "3D product visualization and bead design",
      "Interactive training simulations",
      "Integration with mobile & web platforms",
      "Ongoing optimization and performance monitoring",
    ],
    techstack: ["Unity 3D", "Unreal Engine", "Three.js", "WebXR", "Blender"],
  },
  {
    icon: <FaCheckCircle size={28} color="#1A2A80" />,
    title: "IoT Solutions",
    points: [
      "Connected devices for smart automation",
      "Real-time data collection & monitoring",
      "IoT dashboard & analytics solutions",
      "Custom device integrations and APIs",
      "Security, maintenance & scalability",
    ],
    techstack: ["Arduino", "Raspberry Pi", "MQTT", "AWS IoT", "Azure IoT Hub"],
  },
  {
    icon: <FaGamepad size={28} color="#1A2A80" />,
    title: "Game Development",
    points: [
      "2D and 3D interactive game design",
      "Cross-platform game deployment",
      "High-quality graphics & animations",
      "Multiplayer and social integrations",
      "Post-launch support and updates",
    ],
    techstack: ["Unity", "Unreal Engine", "C#", "C++", "Photon Engine"],
  },
  {
    icon: <FaPalette size={28} color="#1A2A80" />,
    title: "Design & UI/UX",
    points: [
      "Creative UI/UX for web and mobile",
      "Brand-consistent designs",
      "Prototyping and wireframing",
      "3D bead product and jewelry visualization",
      "User-focused experience design",
    ],
    techstack: ["Figma", "Adobe XD", "Sketch", "Illustrator", "Photoshop"],
  },
  {
    icon: <FaCloud size={28} color="#1A2A80" />,
    title: "Cloud & DevOps",
    points: [
      "Cloud deployment and management",
      "CI/CD pipelines and automation",
      "Scalable architecture for enterprise apps",
      "Monitoring, backups, and disaster recovery",
      "Security, optimization, and maintenance",
    ],
    techstack: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    icon: <FaChalkboardTeacher size={28} color="#1A2A80" />,
    title: "Internships & Workshops",
    points: [
      "Industry-level internships for hands-on experience",
      "Workshops on MERN, Mobile, AI/ML, AR/VR, IoT",
      "Opportunities for PPO (Pre-Placement Offer) for top performers",
      "Guidance and mentoring from senior engineers",
      "Exposure to real Projects and client requirements",
    ],
    techstack: ["MERN", " React Native" ,"Flutter", "AI/ML", "AR/VR", "IoT"],
  },
  {
    icon: <FaTools size={28} color="#1A2A80" />,
    title: "Project Maintenance",
    points: [
      "Regular updates and feature enhancements",
      "Bug fixes and performance optimization",
      "Security patches and monitoring",
      "User feedback integration",
      "24/7 support for enterprise clients",
    ],
    techstack: ["GitHub", "Jira", "Docker", "Kubernetes", "Monitoring Tools"],
  },
  {
    icon: <FaLifeRing size={28} color="#1A2A80" />,
    title: "Support & Consulting",
    points: [
      "Technical guidance for IT infrastructure",
      "Cloud deployment and migration support",
      "Business process consulting",
      "Training and knowledge transfer",
      "Dedicated support team for enterprise clients",
    ],
    techstack: ["AWS", "Azure", "Google Cloud", "Enterprise Tools like ERP, CRM"],
  },
];

export default function Services() {
  return (
    <section className="page-shell">
      <motion.div {...fadeUp()} className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="section-title text-4xl md:text-5xl">
          Our Services
        </h2>
        <p className="section-subtitle mt-4 text-base md:text-lg">
          Comprehensive digital solutions for enterprise clients, from web and mobile engineering to cloud, AI, and end-to-end lifecycle support.
        </p>
      </motion.div>

      <motion.div {...fadeUp(0.06)} className="mx-auto mb-12 max-w-6xl rounded-2xl border border-[#dfe6ff] bg-white p-6 shadow-[0_16px_40px_rgba(16,35,85,0.08)] md:p-8">
        <h3 className="text-center font-[Sora] text-2xl font-semibold text-[#132f8b] md:text-3xl">
          Core Solutions & Services
        </h3>
        <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-slate-600 md:text-base">
          Structured offerings designed to help organizations build, scale, and modernize with confidence.
        </p>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreSolutions.map((item, idx) => (
            <motion.div
              key={item.title}
              {...fadeUp(0.08 + idx * 0.05)}
              className="rounded-xl border border-[#e3eaff] bg-[#f8faff] p-4"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#132f8b]/10">
                {item.icon}
              </div>
              <h4 className="font-[Sora] text-base font-semibold text-slate-800">{item.title}</h4>
              <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((s, idx) => (
          <motion.div
            key={idx}
            {...fadeUp(0.1 + idx * 0.1)}
            className="surface-card flex cursor-pointer flex-col gap-4 rounded-2xl p-7 transition hover:-translate-y-1"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#132f8b]/10">
              {s.icon}
            </div>
            <h4 className="font-[Sora] text-xl font-semibold text-[#3554b7]">{s.title}</h4>
            
            <ul className="list-disc space-y-1 pl-4 text-sm text-slate-600 md:text-base">
              {s.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {s.techstack && (
              <div className="mt-3">
                <h5 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#132f8b]">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {s.techstack.map((tech, i) => (
                    <span
                      key={i}
                      className="brand-pill rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="focus-ring btn-primary px-8 py-3 text-lg"
          >
            Start a Project Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
