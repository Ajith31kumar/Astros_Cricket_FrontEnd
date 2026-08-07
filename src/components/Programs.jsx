import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaDumbbell,
  FaBullseye,
  FaBaseballBall,
  FaCalendarAlt,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

function Programs() {
  const programsList = [
    {
      icon: <FaUserGraduate />,
      color: "from-blue-500 to-blue-700",
      bg: "bg-blue-500/10",
      title: "One-to-One Coaching",
      desc: "Personalized coaching sessions with complete focus on individual skill development.",
    },
    {
      icon: <FaDumbbell />,
      color: "from-green-500 to-emerald-600",
      bg: "bg-green-500/10",
      title: "Strength & Conditioning",
      desc: "Professional fitness training to improve speed, agility and endurance.",
    },
    {
      icon: <FaBullseye />,
      color: "from-yellow-400 to-orange-500",
      bg: "bg-yellow-500/10",
      title: "Spin Development",
      desc: "Master advanced spin bowling techniques with match strategies.",
    },
    {
      icon: <FaBaseballBall />,
      color: "from-cyan-500 to-blue-600",
      bg: "bg-cyan-500/10",
      title: "Batting Development",
      desc: "Improve batting technique, power hitting, shot selection and match awareness.",
    },
    {
      icon: <FaCalendarAlt />,
      color: "from-purple-500 to-pink-600",
      bg: "bg-purple-500/10",
      title: "One Week Camp",
      desc: "7-day intensive cricket development program with complete performance tracking.",
    },
    {
      icon: <FaBolt />,
      color: "from-orange-500 to-red-500",
      bg: "bg-orange-500/10",
      title: "3-Day Special Camp",
      desc: "Short-term performance camp for immediate improvement and confidence building.",
    },
  ];

  return (
    <section
      id="programs"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#020817] via-[#0B1F3A] to-[#07142A]"
    >
      {/* Premium Multi-Layer Lighting Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-yellow-400/15 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-400/5 blur-[180px]" />
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
              Our Training Programs
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg">
            Professional
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 ml-3 drop-shadow-[0_5px_5px_rgba(250,204,21,0.2)]">
              Programs
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mx-auto mt-6 shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>

          <p className="max-w-2xl mx-auto mt-6 text-blue-100/80 text-base sm:text-lg leading-relaxed drop-shadow-md">
            Choose from our specialized cricket training programs designed
            to improve every aspect of your game and help you perform like
            a professional.
          </p>
        </motion.div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsList.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-t-white/30 border-l-white/20 border-r-white/5 border-b-[3px] border-b-white/10 bg-white/5 backdrop-blur-md hover:border-yellow-400/50 hover:bg-white/10 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(250,204,21,0.15)] transition-all duration-500"
            >
              {/* Top Gradient Bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${program.color} shadow-lg`}></div>

              <div className="p-8">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl ${program.bg} border border-white/10 flex items-center justify-center text-3xl text-white mb-7 group-hover:rotate-6 group-hover:scale-110 shadow-inner transition-transform duration-500`}
                >
                  {program.icon}
                </div>

                <h3 className="text-2xl font-black text-white mb-4 drop-shadow-md group-hover:text-yellow-400 transition-colors">
                  {program.title}
                </h3>

                <p className="text-blue-100/70 leading-relaxed mb-8 text-sm sm:text-base">
                  {program.desc}
                </p>

                {/* 🌟 3D Enroll Button linked to #registration */}
                <a 
                  href="#registration"
                  className="inline-flex items-center gap-2 text-yellow-400 font-bold group-hover:gap-4 transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Enroll Now
                  <FaArrowRight />
                </a>
              </div>

              {/* Hover Inner Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-500/5 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden mt-24 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition duration-500 group"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1800&auto=format&fit=crop')",
            }}
          />

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/95 via-[#0B1F3A]/90 to-[#b2791d]/80" />

          <div className="relative z-10 py-20 px-8 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-lg">
              Ready To Transform
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 sm:ml-3 drop-shadow-[0_5px_5px_rgba(250,204,21,0.2)]">
                Your Cricket Journey?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-blue-100/90 text-base sm:text-lg leading-relaxed drop-shadow-md">
              Join ASTROS Cricket Centre today and start learning from experienced
              coaches with structured training programs.
            </p>

            {/* 🌟 3D Premium Register Button linked to #registration */}
            <a 
              href="#registration"
              className="mt-10 inline-flex items-center gap-3 bg-gradient-to-b from-[#facc15] to-[#eab308] border border-t-white/50 border-b-[5px] border-b-[#a16207] active:border-b-0 active:translate-y-[5px] text-slate-950 font-extrabold text-sm md:text-base px-10 py-4 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] transform hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(250,204,21,0.4)] transition-all duration-300 cursor-pointer"
            >
              <span>Register Now</span>
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Programs;