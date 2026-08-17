import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaUsers,
  FaCheckCircle,
  FaBullseye,
  FaArrowRight
} from "react-icons/fa";

// 🌟 Import local images from assets folder
import image from "../assets/image.png";
import image1 from "../assets/image1.png";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#020817] via-[#0B1F3A] to-[#07142A]"
    >
      {/* Premium Multi-Layer Lighting Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-yellow-400/15 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-400/5 blur-[180px]" />
        {/* Subtle Radial Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-6 shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
            <span className="text-yellow-400 tracking-[0.2em] text-xs sm:text-sm font-bold uppercase">
              Meet Your Coach
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 ml-3 drop-shadow-[0_5px_5px_rgba(250,204,21,0.2)]">
              Alexandar
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mx-auto mt-6 shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>

          <p className="text-blue-100/80 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed drop-shadow-md">
            Passionate cricket coach dedicated to developing technically
            strong, mentally confident and disciplined cricketers.
          </p>
        </motion.div>

        {/* ================= TWO COLUMN LAYOUT ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* ================= LEFT SIDE (IMAGE) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="relative perspective-1000"
          >
            {/* Glow Behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 to-yellow-400/30 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-70 transition duration-500"></div>

            {/* Premium 3D Image Card */}
            <div className="relative rounded-[32px] overflow-hidden border border-t-white/30 border-l-white/20 border-r-white/10 border-b-white/10 bg-white/5 backdrop-blur-sm shadow-[0_25px_50px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(250,204,21,0.15)] transition-all duration-500 group p-2">
              
              <div className="relative rounded-[24px] overflow-hidden">
                {/* 🌟 Main Coach Image */}
                <img
                  src={image}
                  alt="Coach Alexandar"
                  className="w-full h-[600px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/40 to-transparent opacity-90" />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl font-black text-white drop-shadow-md">
                    Alexandar
                  </h3>
                  <div className="inline-block mt-3 px-4 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-md">
                    <p className="text-yellow-400 font-bold text-sm tracking-wide">
                      Head Coach & Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE (CONTENT) ================= */}
          <div className="space-y-16">
            
            {/* --- EXPERIENCE --- */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                <h3 className="text-3xl font-black text-white drop-shadow-md">
                  Experience
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <FaTrophy />, title: "17 Years Coaching Experience" },
                  { icon: <FaBullseye />, title: "09 TNPL Seasons" },
                  { icon: <FaUsers />, title: "Chepauk Super Gillies • Trichy • Madurai • Salem" },
                  { icon: <FaCheckCircle />, title: "6 Years First Division Cricket" },
                  { icon: <FaMedal />, title: "Tamil Nadu State Representation" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex items-center gap-5 p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-400/50 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(250,204,21,0.1)] transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 text-lg shadow-inner group-hover:scale-110 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-blue-50 font-bold text-sm sm:text-base tracking-wide">
                      {item.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* --- QUICK STATS (3D Cards) --- */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {[
                { value: "17+", label: "Years Experience" },
                { value: "09", label: "TNPL Seasons" },
                { value: "100+", label: "Students" },
                { value: "500+", label: "Sessions" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-t-white/30 border-l-white/20 border-r-white/5 border-b-[3px] border-b-white/10 rounded-2xl p-5 sm:p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.2)] transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(250,204,21,0.15)] active:translate-y-[2px] active:border-b-0 transition-all duration-300 group cursor-pointer"
                >
                  <h2 className="text-3xl sm:text-4xl font-black text-yellow-400 drop-shadow-md group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all">
                    {item.value}
                  </h2>
                  <p className="text-blue-200 mt-2 text-xs sm:text-sm font-medium tracking-wide uppercase">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* ================= WHAT I OFFER ================= */}
        <div className="mt-24">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 shadow-[0_0_10px_rgba(250,204,21,0.5)] mb-4"></div>
            <h3 className="text-3xl md:text-4xl font-black text-white drop-shadow-md">
              What I Offer
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              { title: "Technical Coaching", desc: "Batting, Bowling & Fielding Improvement" },
              { title: "Video Analysis", desc: "Personalized Performance Review" },
              { title: "Fitness Training", desc: "Strength, Agility & Endurance" },
              { title: "Match Awareness", desc: "Game Strategy & Decision Making" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 border-b-[3px] border-b-white/10 rounded-2xl p-6 shadow-lg hover:border-yellow-400/50 hover:bg-white/10 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(250,204,21,0.15)] active:translate-y-[2px] active:border-b-0 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#facc15] to-[#a16207] flex items-center justify-center text-slate-900 font-black text-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= QUOTE CARD (Premium 3D) ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden rounded-[32px] border border-t-white/20 border-l-white/20 border-r-white/5 border-b-[4px] border-b-yellow-500/30 bg-gradient-to-br from-[#0B1F3A] to-[#07142A] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] transform hover:-translate-y-2 transition duration-500 group"
        >
          {/* Inner Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="absolute top-4 left-6 text-9xl text-yellow-400/10 font-serif font-black select-none group-hover:scale-110 transition-transform duration-700">
            "
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <p className="text-2xl md:text-3xl font-bold italic text-white leading-relaxed drop-shadow-md">
                Success in cricket is not built overnight.
                It is earned through discipline,
                consistency and relentless hard work.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-400/50 shadow-lg">
                  {/* 🌟 Avatar Image */}
                  <img src={image1} alt="Avatar" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h4 className="text-yellow-400 font-bold text-lg drop-shadow-sm">
                    Coach Alexandar
                  </h4>
                  <p className="text-blue-200/80 text-xs tracking-wider uppercase mt-0.5">
                    Head Coach & Founder
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex text-7xl text-yellow-400/20 font-black group-hover:rotate-12 transition-transform duration-500">
              🏏
            </div>
          </div>
        </motion.div>

        {/* ================= CTA BUTTON (3D Press) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          {/* 🌟 Changed from <button> to <a> tag and linked to #registration */}
          <a
            href="#registration"
            className="inline-flex items-center gap-3 bg-gradient-to-b from-[#facc15] to-[#eab308] border border-t-white/50 border-b-[5px] border-b-[#a16207] active:border-b-0 active:translate-y-[5px] text-slate-950 font-extrabold text-sm md:text-base px-10 py-4 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(250,204,21,0.4)] transition-all duration-300 cursor-pointer"
          >
            <span>Book a Free Trial Session</span>
            <FaArrowRight className="text-sm" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default About;