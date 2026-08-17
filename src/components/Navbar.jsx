import { useState, useEffect } from "react";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  // 🌟 Added missing comma and properly aligned links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Coach", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Registration", href: "#registration" },
    { name: "Contact", href: "#contact" },
  ];

  // 🌟 Force smooth scroll to top when "Home" is clicked
  const handleLinkClick = (e, name) => {
    if (name === "Home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07142A]/90 backdrop-blur-xl border-b border-white/10 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 lg:h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src={logo} 
              alt="Astros Logo" 
              className="w-10 h-10 rounded-full object-cover shadow-[0_0_15px_rgba(250,204,21,0.4)] group-hover:scale-110 transition-transform duration-300" 
            />
            <div className="leading-none drop-shadow-md">
              <h2 className="text-white font-extrabold tracking-wider uppercase text-sm sm:text-base">
                ASTROS
              </h2>
              <p className="text-blue-200 text-[8px] sm:text-[10px] tracking-[0.2em] uppercase mt-0.5">
                Cricket Centre
              </p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.name)}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className="relative text-blue-50 font-medium text-sm tracking-wide transition-colors duration-300 group hover:text-yellow-400"
              >
                {link.name}
                {/* Hover Underline Animation */}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

            <motion.a
              custom={navLinks.length}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              href="#admin"
              className="flex items-center gap-1.5 text-blue-50 hover:text-yellow-400 font-medium text-sm transition group"
            >
              <FiUser className="text-base group-hover:scale-110 transition-transform" />
              Admin
            </motion.a>
          </nav>

          {/* Right Side Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {/* Desktop 3D Call Button (🌟 Updated Number) */}
            <a
              href="tel:+919600253630"
              className="hidden md:flex items-center gap-2 bg-gradient-to-b from-[#facc15] to-[#eab308] border border-t-white/50 border-b-[4px] border-b-[#a16207] active:border-b-0 active:translate-y-[4px] px-5 py-2.5 rounded-xl font-bold text-slate-950 text-sm shadow-[0_10px_20px_rgba(0,0,0,0.2)] transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_30px_rgba(250,204,21,0.3)] transition-all duration-300"
            >
              <FaPhone className="text-xs" />
              <span>+91 96002 53630</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 active:scale-95 transition-all"
            >
              {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#07142A]/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-8 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleLinkClick(e, link.name);
                    setMenuOpen(false);
                  }}
                  className="text-blue-50 text-lg font-medium py-2 border-b border-white/5 hover:text-yellow-400 hover:pl-2 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              
              <a
                href="#admin"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-blue-50 text-lg font-medium py-2 border-b border-white/5 hover:text-yellow-400 hover:pl-2 transition-all duration-300"
              >
                <FiUser /> Admin Login
              </a>

              {/* Mobile 3D Call Button (🌟 Updated Number) */}
              <a
                href="tel:+919600253630"
                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-b from-[#facc15] to-[#eab308] border border-t-white/50 border-b-[4px] border-b-[#a16207] active:border-b-0 active:translate-y-[4px] rounded-xl py-3.5 text-slate-950 font-black text-base shadow-lg transition-all"
              >
                <FaPhone />
                Call +91 96002 53630
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;