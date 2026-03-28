import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/product" element={<Projects />} />
        <Route path="/products" element={<Projects />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/testimonals" element={<Testimonials />} />
        <Route path="/Projects/:projectId" element={<ProjectDetail />} />
        <Route path="/product/:projectId" element={<ProjectDetail />} />
        <Route path="/products/:projectId" element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
}
