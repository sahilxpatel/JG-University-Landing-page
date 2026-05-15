"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-40 bg-white dark:bg-[#020617] text-gray-900 dark:text-white text-center overflow-hidden relative transition-colors duration-300">
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"
        />
      </div>
      
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-8">
          <Sparkles size={16} />
          <span>Ready to start?</span>
        </div>

        <h2 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter mb-8 text-gray-900 dark:text-white">
          Shape Your Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            With JG University.
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
          Admissions are now open for future innovators and leaders. 
          Take the first step towards a global career today.
        </p>

        <div className="flex items-center justify-center">
          <motion.a
            href="/admissions"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-6 rounded-2xl text-xl font-black hover:bg-indigo-700 transition shadow-2xl shadow-indigo-600/40 flex items-center justify-center gap-3"
          >
            Admissions
            <ArrowRight size={24} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
