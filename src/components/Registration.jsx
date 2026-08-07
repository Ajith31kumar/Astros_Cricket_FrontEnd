import { useState } from "react";
import { motion } from "framer-motion";

const initialForm = {
  fullName: "",
  age: "",
  dob: "",
  mobile: "",
  parentName: "",
  parentContact: "",
  email: "",
  address: "",
  playingRole: "",
  program: "",
  experience: "",
};

export default function Registration() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 10-digit validation check for Mobile Number
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // 10-digit validation check for Parent Contact
    if (!mobileRegex.test(formData.parentContact)) {
      alert("Please enter a valid 10-digit parent contact number.");
      return;
    }

    const message = `
🏏 *NEW PLAYER REGISTRATION*

👤 Full Name: ${formData.fullName}
🎂 Age: ${formData.age}
📅 Date of Birth: ${formData.dob}
📱 Mobile Number: ${formData.mobile}

👨 Parent Name: ${formData.parentName}
📱 Parent Contact: ${formData.parentContact}

📧 Email: ${formData.email || "N/A"}

🏠 Address:
${formData.address}

🏏 Playing Role: ${formData.playingRole}
🎯 Selected Program: ${formData.program}

🏆 Cricket Experience:
${formData.experience || "N/A"}
`;

    const whatsappNumber = "918680938947";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    // Reset form fields automatically after submission
    setFormData(initialForm);
  };

  return (
    <section
      id="registration"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#020817] via-[#0B1F3A] to-[#07142A]"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-yellow-400/15 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-6 shadow-lg hover:-translate-y-1 transition duration-300">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
            <span className="text-yellow-400 tracking-[0.2em] text-xs sm:text-sm font-bold uppercase">
              Join The Academy
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Player
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600">
              Registration
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mx-auto mt-6 shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
        </motion.div>

        {/* ================= FORM CONTAINER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          {/* Top Gradient Border */}
          <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 to-amber-600"></div>

          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-100/40 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Age <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  min="4"
                  max="50"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-100/40 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Date of Birth <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all [color-scheme:dark]"
                />
              </div>

              {/* Mobile (10-digit restricted) */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Mobile Number (10 Digits) <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  maxLength="10"
                  value={formData.mobile}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setFormData((prev) => ({ ...prev, mobile: val }));
                  }}
                  placeholder="10-digit mobile number"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-100/40 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                />
              </div>

              {/* Parent Name */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Parent Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Parent / Guardian Name"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-100/40 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                />
              </div>

              {/* Parent Contact (10-digit restricted) */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Parent Contact (10 Digits) <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="parentContact"
                  required
                  maxLength="10"
                  value={formData.parentContact}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setFormData((prev) => ({ ...prev, parentContact: val }));
                  }}
                  placeholder="Parent mobile number"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-100/40 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-100/40 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-white mb-2">
                  Address <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={3}
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete address"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-100/40 resize-none focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                ></textarea>
              </div>

              {/* Playing Role */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Playing Role <span className="text-red-400">*</span>
                </label>
                <select
                  name="playingRole"
                  required
                  value={formData.playingRole}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0B1F3A] text-slate-400">Select Playing Role</option>
                  <option value="Batsman" className="bg-[#0B1F3A]">Batsman</option>
                  <option value="Bowler" className="bg-[#0B1F3A]">Bowler</option>
                  <option value="All Rounder" className="bg-[#0B1F3A]">All Rounder</option>
                  <option value="Wicket Keeper" className="bg-[#0B1F3A]">Wicket Keeper</option>
                </select>
              </div>

              {/* Program */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Select Program <span className="text-red-400">*</span>
                </label>
                <select
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0B1F3A] text-slate-400">Select Program</option>
                  <option value="Kids Coaching" className="bg-[#0B1F3A]">Kids Coaching</option>
                  <option value="Beginners Coaching" className="bg-[#0B1F3A]">Beginners Coaching</option>
                  <option value="Advanced Coaching" className="bg-[#0B1F3A]">Advanced Coaching</option>
                  <option value="Weekend Coaching" className="bg-[#0B1F3A]">Weekend Coaching</option>
                  <option value="Summer Camp" className="bg-[#0B1F3A]">Summer Camp</option>
                  <option value="High Performance Camp" className="bg-[#0B1F3A]">High Performance Camp</option>
                </select>
              </div>

              {/* Cricket Experience */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-white mb-2">
                  Cricket Experience
                </label>
                <textarea
                  rows={4}
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Tell us about your cricket experience..."
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-100/40 resize-none focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all"
                ></textarea>
              </div>

              {/* 3D Register Button */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-slate-900 font-black text-lg py-5 border border-yellow-200 border-b-[5px] border-b-yellow-700 active:border-b-0 active:translate-y-[5px] hover:scale-[1.01] hover:shadow-[0_20px_45px_rgba(250,204,21,0.45)] transition-all duration-300 cursor-pointer"
                >
                  {/* Shine Effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                  
                  <span className="relative flex items-center justify-center gap-3">
                    Register via WhatsApp
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </span>
                </button>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}