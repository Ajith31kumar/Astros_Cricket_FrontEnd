import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#020817] via-[#07142A] to-[#0B1F3A] text-white">

      {/* Premium Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-yellow-400/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        <div className="grid lg:grid-cols-3 gap-14">

          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-[0_0_25px_rgba(250,204,21,.4)]">
                <span className="text-2xl font-black text-slate-900">
                  A
                </span>
              </div>
              <div>
                <h2 className="text-3xl font-black drop-shadow-md">
                  ASTROS
                </h2>
                <p className="tracking-[0.3em] uppercase text-blue-200 text-xs mt-1">
                  Cricket Centre
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-blue-100/70 leading-8 max-w-md">
              Developing future cricketers through professional coaching,
              modern training methods, match awareness and expert guidance.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(59,130,246,0.4)] transition-all duration-300"
              >
                <FaFacebookF className="text-lg" />
              </a>

              <a
                href="https://instagram.com/astros_cricket"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(225,48,108,0.4)] transition-all duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(220,38,38,0.4)] transition-all duration-300"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* ================= CENTER COLUMN (Quick Links) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span>
              Quick Links
            </h3>

            <div className="flex flex-col gap-5">
              {[
                "Home",
                "About",
                "Programs",
                "Why Choose Us",
                "Registration",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center gap-3 text-blue-100/70 hover:text-yellow-400 transition-all duration-300"
                >
                  <span className="w-0 h-[2px] bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-8"></span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {item}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN (Contact Info) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span>
              Contact
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+918680938947"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-400/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-200/70">
                    Phone
                  </p>
                  <p className="text-white font-bold tracking-wide mt-0.5">
                    +91 86809 38947
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/astros_cricket"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-400/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <FaInstagram className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-200/70">
                    Instagram
                  </p>
                  <p className="text-white font-bold tracking-wide mt-0.5">
                    @astros_cricket
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

        </div>

        {/* ================= BOTTOM FOOTER ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-blue-200/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white tracking-wider">
                ASTROS CRICKET CENTRE
              </span>
              . All Rights Reserved.
            </p>

            {/* Made With */}
            <p className="flex items-center gap-2 text-sm text-blue-200/60">
              Made with
              <span className="text-red-500 animate-pulse text-base">
                ❤️
              </span>
              for Future Champions
            </p>
          </div>
        </motion.div>

      </div>

      {/* ================= BACK TO TOP BUTTON ================= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 text-slate-900 font-black text-xl flex items-center justify-center shadow-[0_10px_30px_rgba(250,204,21,.45)] hover:scale-110 hover:-translate-y-2 active:scale-95 transition-all duration-300 border border-yellow-200"
        aria-label="Scroll to top"
      >
        ↑
      </button>

    </footer>
  );
}

export default Footer;