import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {location.pathname !== "/contact" && <Footer />}
    </div>
  );
}
