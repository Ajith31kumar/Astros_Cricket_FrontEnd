import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserTie,
  FaBullseye,
  FaVideo,
  FaRunning,
  FaBrain,
  FaChartLine,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

// 🌟 Import your local images from assets folder
import img0 from "../assets/image.png";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";

function WhyChooseUs() {
  // 🌟 State for background slider
  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [img0, img1, img2, img3, img4];

  // 🌟 Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3500); // Changes image every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <FaUserTie />,
      title: "Experienced Coach",
      desc: "17+ years of professional coaching with TNPL and state-level expertise.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <FaUsers />,
      title: "Individual Attention",
      desc: "Small batch training with personalized guidance for every player.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaVideo />,
      title: "Video Analysis",
      desc: "Technical corrections using slow-motion video analysis.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaBullseye />,
      title: "Match Awareness",
      desc: "Real match simulations with strategic decision-making practice.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: <FaRunning />,
      title: "Fitness Training",
      desc: "Professional strength, speed, agility and endurance programs.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FaBrain />,
      title: "Mental Conditioning",
      desc: "Improve confidence, focus and pressure handling techniques.",
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Tracking",
      desc: "Continuous evaluation with measurable performance reports.",
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#020817] via-[#0B1F3A] to-[#07142A]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-yellow-400/15 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>
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
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-6 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
            <span className="text-yellow-400 tracking-[0.2em] text-xs sm:text-sm font-bold uppercase">
              Our Commitment
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Why Choose
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600">
              Us
            </span>
          </h2>

          {/* Gold Line */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mx-auto mt-6 shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-6 text-blue-100/80 text-base sm:text-lg leading-relaxed">
            We provide comprehensive cricket coaching with modern training
            methods, experienced coaches and personalized guidance to help
            every player reach their highest potential.
          </p>
        </motion.div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-400/40 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(250,204,21,0.18)]"
            >
              {/* Top Border */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${item.color}`}></div>

              <div className="p-7">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl text-white shadow-xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-black text-white group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-blue-100/70 leading-7 text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-500/5 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* ================= STATS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-xl border border-blue-400/20 text-center py-10 hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.35)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <h2 className="relative text-5xl font-black text-white">17+</h2>
              <p className="relative mt-3 text-blue-100 uppercase tracking-wider text-sm">
                Years Experience
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-xl border border-yellow-400/20 text-center py-10 hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(250,204,21,0.35)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <h2 className="relative text-5xl font-black text-yellow-400">100+</h2>
              <p className="relative mt-3 text-yellow-100 uppercase tracking-wider text-sm">
                Students Trained
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl border border-green-400/20 text-center py-10 hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(34,197,94,0.35)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <h2 className="relative text-5xl font-black text-green-400">09</h2>
              <p className="relative mt-3 text-green-100 uppercase tracking-wider text-sm">
                TNPL Seasons
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= CALL TO ACTION (3D Auto-Sliding & Contained Image) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden mt-24 rounded-[40px] bg-[#020817]"
        >
          {/* 🌟 Auto-Sliding Background Images */}
          <div className="absolute inset-0">
            <AnimatePresence>
              {/* Blurred background layer to fill empty black spaces gracefully */}
              <motion.div
                key={currentBg + "blur"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-cover bg-center blur-lg"
                style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
              />

              {/* Main contained image to show full photo without cropping */}
              <motion.div
                key={currentBg}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
              />
            </AnimatePresence>
          </div>

          {/* Premium Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07142A]/95 via-[#0B2D5B]/85 to-[#b2791d]/60 z-0"></div>

          {/* Glow */}
          <div className="absolute z-0 -left-24 top-0 w-80 h-80 rounded-full bg-blue-500/20 blur-[140px]"></div>
          <div className="absolute z-0 -right-24 bottom-0 w-80 h-80 rounded-full bg-yellow-400/20 blur-[140px]"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-20 text-center">
            <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 font-bold uppercase tracking-[0.2em] text-xs shadow-lg">
              Join Astros Today
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
              Ready To Become
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">
                The Next Cricket Star?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-white/90 text-lg leading-8 drop-shadow-md font-medium">
              Learn from experienced coaches with structured training,
              modern facilities, performance tracking and professional
              match preparation.
            </p>

            {/* Link to Registration Form */}
            <a
              href="#registration"
              className="mt-10 inline-flex items-center gap-3 bg-gradient-to-b from-[#facc15] to-[#eab308] border border-t-white/50 border-b-[5px] border-b-[#a16207] active:border-b-0 active:translate-y-[5px] px-10 py-4 rounded-xl font-black text-slate-900 shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:scale-105 hover:shadow-[0_20px_45px_rgba(250,204,21,0.45)] transition-all duration-300 cursor-pointer"
            >
              Register Now
              <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;