"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import CampusTour from "./CampusTour";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-300 pt-32 pb-16"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6"
          >
            <Sparkles size={16} />
            <span>Future-Ready Education</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter mb-8">
            Empowering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Tomorrow's Leaders
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-xl mb-10">
            Industry-focused education, practical exposure, and expert faculty 
            designed to bridge the gap between academia and industry.
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.a
              href="/admissions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-700 transition shadow-2xl shadow-indigo-600/30 text-lg"
            >
              Admissions
              <ArrowRight size={22} />
            </motion.a>

            <motion.button
              onClick={() => setIsTourOpen(true)}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 rounded-2xl border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white font-bold flex items-center gap-3 transition text-lg backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={18} fill="currentColor" />
              </div>
              Campus Tour
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-gray-200 dark:border-white/10 pt-8">
            <div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white">4.9/5</h4>
              <p className="text-gray-500 text-sm">Student Rating</p>
            </div>
            <div className="w-px h-10 bg-gray-200 dark:bg-white/10" />
            <div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white">95%</h4>
              <p className="text-gray-500 text-sm">Placement Rate</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:block"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Modern Learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Floating Stats Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-2xl z-20 border border-gray-200/50 dark:border-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Students</p>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">10K+</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-2xl z-20 border border-gray-200/50 dark:border-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600">
                <ArrowRight size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Industry Collaborations</p>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">500+</h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <CampusTour isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />
    </section>
  );
}
