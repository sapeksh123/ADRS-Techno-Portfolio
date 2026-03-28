import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "../utils/motion";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col text-slate-900">
      <Header />
      <main className="flex-1 pt-[4.7rem] md:pt-[5.2rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
