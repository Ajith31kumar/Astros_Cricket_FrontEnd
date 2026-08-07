import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaInstagram,
  FaClock,
  FaUser,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaDirections
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#020817] via-[#0B1F3A] to-[#07142A]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-yellow-400/15 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-md mb-6 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
            <span className="text-yellow-400 tracking-[0.2em] uppercase text-xs font-bold">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Contact
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
              Us
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mt-6 shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>

          <p className="max-w-2xl mx-auto mt-6 text-blue-100/80 text-lg">
            Ready to start your cricket journey? Reach out to us today.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* ================= LEFT CONTACT CARD (Coach Info) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-white/5 backdrop-blur-xl border border-t-white/30 border-l-white/20 border-r-white/10 border-b-[4px] border-b-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500"
          >
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-yellow-400/10 blur-[120px]" />
            <div className="absolute -bottom-24 -left-20 w-60 h-60 rounded-full bg-blue-500/10 blur-[140px]" />

            <div className="relative p-10">
              <h3 className="text-3xl font-black text-white mb-10 drop-shadow-md">
                ASTROS CRICKET CENTRE
              </h3>

              <div className="space-y-7">
                {/* Coach */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaUser className="text-slate-900 text-xl" />
                  </div>
                  <div>
                    <p className="text-blue-100/60 text-sm uppercase tracking-wider">Head Coach</p>
                    <h4 className="text-white text-xl font-bold mt-1">Alexandar</h4>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-blue-100/60 text-sm uppercase tracking-wider">Phone</p>
                    <a href="tel:+918680938947" className="text-white text-xl font-bold hover:text-yellow-400 transition">
                      +91 86809 38947
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaInstagram className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-blue-100/60 text-sm uppercase tracking-wider">Instagram</p>
                    <a href="https://instagram.com/astros_cricket" target="_blank" rel="noreferrer" className="text-white font-semibold hover:text-yellow-400 transition">
                      @astros_cricket
                    </a>
                  </div>
                </div>

                {/* Training Hours */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <FaClock className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-blue-100/60 text-sm uppercase tracking-wider">Training Hours</p>
                    <h4 className="text-white font-semibold">Morning & Evening Batches</h4>
                    <p className="text-blue-100/60 text-sm mt-1">Contact us for schedule</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT CARD (Quick Actions) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-white/5 backdrop-blur-xl border border-t-white/30 border-l-white/20 border-r-white/10 border-b-[4px] border-b-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500"
          >
            {/* Decorative Glow */}
            <div className="absolute -top-24 -left-20 w-56 h-56 rounded-full bg-green-500/10 blur-[120px]" />
            <div className="absolute -bottom-24 -right-20 w-60 h-60 rounded-full bg-pink-500/10 blur-[120px]" />

            <div className="relative p-10">
              <h3 className="text-3xl font-black text-white mb-8 drop-shadow-md">
                Quick Actions
              </h3>

              <div className="space-y-5">
                {/* Call */}
                <a
                  href="tel:+918680938947"
                  className="group flex items-center gap-5 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 p-5 shadow-[0_10px_20px_rgba(34,197,94,0.2)] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(34,197,94,0.4)] transition-all duration-300 border border-t-white/30"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition">
                    <FaPhone className="text-2xl text-white drop-shadow-md" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Call Now</h4>
                    <p className="text-white/80 text-sm">Speak directly with our coach</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918680938947"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] p-5 shadow-[0_10px_20px_rgba(37,211,102,0.2)] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] transition-all duration-300 border border-t-white/30"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:-rotate-12 transition">
                    <FaWhatsapp className="text-3xl text-white drop-shadow-md" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">WhatsApp</h4>
                    <p className="text-white/80 text-sm">Chat with us instantly</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/astros_cricket"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-5 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] p-5 shadow-[0_10px_20px_rgba(225,48,108,0.2)] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(225,48,108,0.4)] transition-all duration-300 border border-t-white/30"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition">
                    <FaInstagram className="text-3xl text-white drop-shadow-md" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white">Instagram</h4>
                    <p className="text-white/80 text-sm">Follow our latest updates</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ================= GOOGLE MAPS EMBED ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 relative overflow-hidden rounded-[32px] bg-white/5 backdrop-blur-xl border border-t-white/30 border-l-white/20 border-r-white/10 border-b-[4px] border-b-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.4)] p-6 sm:p-8 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-shadow duration-500"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <FaMapMarkerAlt className="text-white text-2xl drop-shadow-md animate-bounce mt-1" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white drop-shadow-md">Our Location</h3>
                <p className="text-blue-100/70 text-sm">Visit our academy in Bengaluru</p>
              </div>
            </div>
            
            <a
              href="https://goo.gl/maps/YOUR_MAP_LINK_HERE"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-[#facc15] to-[#eab308] border border-t-white/50 border-b-[4px] border-b-[#a16207] active:border-b-0 active:translate-y-[4px] text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_30px_rgba(250,204,21,0.4)] transition-all duration-300"
            >
              <FaDirections className="text-lg" />
              Get Directions
            </a>
          </div>

          <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <iframe
              title="Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124415.82860888276!2d77.53073791008709!3d12.954517008640541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716301321000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-125 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;