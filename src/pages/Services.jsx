import React from "react";
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
  FaChalkboardTeacher 
} from "react-icons/fa";

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
    ],
    techstack: ["React", "Next.js", "Node.js", "Express", "NestJs" ,"MongoDB", "PostgreSQL", "SQL",  "AWS", "SEO"],
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
      "Exposure to real projects and client requirements",
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
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
  });

  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 mt-7">
      {/* Heading */}
      <motion.div {...fadeUp()} className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1A2A80]">
          Our Services
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Comprehensive digital solutions for enterprise clients. From web and mobile apps to AR/VR, AI/ML, IoT, 3D visualization, cloud deployment, and full lifecycle project maintenance and services.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((s, idx) => (
          <motion.div
            key={idx}
            {...fadeUp(0.1 + idx * 0.1)}
            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all cursor-pointer flex flex-col gap-4"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-[#1A2A80]/10 rounded-full">
              {s.icon}
            </div>
            <h4 className="text-xl font-semibold text-[#3B38A0]">{s.title}</h4>
            
            {/* Service Points */}
            <ul className="text-gray-600 text-sm md:text-base list-disc list-inside space-y-1">
              {s.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            {s.techstack && (
              <div className="mt-3">
                <h5 className="text-sm font-semibold text-[#1A2A80] mb-4">Tech Stack:</h5>
                <div className="flex flex-wrap gap-2">
                  {s.techstack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#1A2A80]/10 text-[#1A2A80] text-xs font-medium rounded-full"
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

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}
