import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Our Story", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? "bg-brand-bg/95 backdrop-blur-xl h-20 shadow-2xl" : "bg-transparent h-24 border-b border-white/5"
      }`}
    >
      <div className="h-full max-w-[1400px] mx-auto px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-brand-bg rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-[0.2em] text-white uppercase leading-none">
              Vapor Trail
            </span>
            <span className="text-[9px] tracking-[0.4em] font-mono text-white/60 uppercase mt-0.5">
              Professional Grade
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 ${
                location.pathname === link.path 
                ? "text-white border-b border-brand-secondary pb-1" 
                : "text-white/70 hover:text-white font-mono tracking-widest text-[10px]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Icons */}
        <div className="hidden lg:flex items-center space-x-8 text-white/80">
          <button className="hover:text-white transition-colors flex items-center gap-2">
            <Search size={16} strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-widest font-medium">Search</span>
          </button>
          <Link 
            to="/cart" 
            className={`transition-all duration-500 relative flex items-center gap-2 px-4 py-2 ${
              isScrolled ? "text-white" : "border border-white/20 text-white/80 hover:text-white"
            }`}
          >
            <ShoppingCart size={16} strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-widest font-medium">Cart (0)</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white/60 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-0 left-0 w-full h-screen bg-brand-bg/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-10 z-50 lg:hidden"
        >
          <button className="absolute top-8 right-12 text-white/70" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl uppercase tracking-[0.3em] font-light text-white/80 hover:text-brand-secondary transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
