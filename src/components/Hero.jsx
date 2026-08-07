import React from "react";
import { FaPlay, FaPhone, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function AstrosHero() {
  return (
    <div className="min-h-screen font-sans text-white relative flex flex-col justify-center items-center overflow-hidden pt-20">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97?q=80&w=1600&auto=format&fit=crop')"
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#113175]/95 via-[#15377e]/90 to-[#b2791d]/85 -z-10" />

      {/* HERO MAIN CONTENT */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 py-8 z-10 max-w-4xl mx-auto w-full perspective-1000">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 bg-[#0e2759]/60 backdrop-blur-md border border-white/20 border-b-white/10 rounded-full px-4 py-1.5 mb-5 shadow-[0_8px_20px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 transition duration-300"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#facc15] to-[#f59e0b] flex items-center justify-center text-slate-900 shadow-inner">
            <FaPlay className="text-[8px] ml-0.5 text-white" />
          </div>
          <span className="text-white text-xs font-medium tracking-wide">
            Professional Cricket Coaching
          </span>
        </motion.div>

        {/* 3D Animated Title */}
        <h1 className="font-extrabold tracking-tight uppercase leading-none overflow-hidden pb-2">
          <motion.span 
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="block text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          >
            ASTROS
          </motion.span>
          <motion.span 
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
            className="block text-[#facc15] text-4xl sm:text-5xl md:text-6xl mt-1 drop-shadow-[0_5px_5px_rgba(250,204,21,0.2)]"
          >
            CRICKET CENTRE
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 text-white font-bold text-base sm:text-xl tracking-wide drop-shadow-lg"
        >
          Develop Your Skills. Elevate Your Game.
        </motion.p>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-3 text-blue-100/90 text-xs sm:text-sm max-w-xl leading-relaxed drop-shadow-md"
        >
          Professional Cricket Coaching for aspiring cricketers looking to improve their skills, mindset, fitness, and match performance.
        </motion.p>

        {/* 3D Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 w-full max-w-md mx-auto"
        >
          {/* 3D Premium Register Button */}
          <button className="w-full sm:w-auto bg-gradient-to-b from-[#facc15] to-[#eab308] border border-t-white/50 border-b-[4px] border-b-[#a16207] active:border-b-0 active:translate-y-[4px] text-slate-950 font-extrabold text-sm px-8 py-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(250,204,21,0.4)] transition-all duration-300">
            <span>Register Now</span>
            <FaArrowRight className="text-xs" />
          </button>
          
          {/* 3D Premium Contact Button */}
          <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-t-white/30 border-l-white/20 border-r-white/5 border-b-[4px] border-b-white/20 active:border-b-0 active:translate-y-[4px] hover:bg-white/20 text-white font-bold text-sm px-8 py-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] transition-all duration-300">
            <FaPhone className="text-xs text-yellow-400" />
            <span>Contact Coach</span>
          </button>
        </motion.div>

        {/* 3D Stat Cards Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl">
          {[
            { num: "17+", label: "Years Experience" },
            { num: "09", label: "TNPL Seasons" },
            { num: "100+", label: "Students Trained" },
            { num: "6", label: "Programs" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + (i * 0.1) }}
              className="bg-white/10 backdrop-blur-md border border-t-white/30 border-l-white/20 border-r-white/5 border-b-[3px] border-b-white/10 rounded-xl py-3 sm:py-4 px-2 text-center shadow-[0_8px_30px_rgba(0,0,0,0.2)] transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(250,204,21,0.2)] active:translate-y-[2px] active:border-b-0 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#facc15] drop-shadow-md group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition-all">
                {stat.num}
              </div>
              <div className="text-[10px] sm:text-[11px] text-blue-100/90 font-medium mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Mouse Icon */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8 flex justify-center"
        >
          <div className="w-5 h-8 rounded-full border-2 border-white/40 flex justify-center pt-1.5 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce shadow-inner" />
          </div>
        </motion.div>

      </main>
    </div>
  );
}

export default AstrosHero;