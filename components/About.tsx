"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-[#020617] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8kvCaFLs5bgaoHTGz_rnAq1J5xvbCCWwjg&s" 
               alt="University Campus"
               className="w-full h-full object-cover"
             />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -right-6 bg-indigo-600 p-8 rounded-[2rem] shadow-2xl hidden md:block"
          >
            <p className="text-sm font-bold text-indigo-100 uppercase tracking-widest mb-1">Founded In</p>
            <h3 className="text-4xl font-black text-white">2008</h3>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6">
            <CheckCircle2 size={16} />
            <span>Excellence in Education</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8 tracking-tighter text-gray-900 dark:text-white">
            Transforming Learning <br />
            <span className="text-gray-400 dark:text-gray-500">For The Future.</span>
          </h2>

          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            JG University is a tech-driven global university focused on innovation, 
            creativity, and industry collaboration. We bridge the gap between 
            academic knowledge and industry requirements through 
            practical, future-ready learning.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-2">
                <Counter value={17} suffix="+" />
              </h3>
              <p className="text-gray-500 font-medium">Specialized Colleges</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-2">
                <Counter value={100} suffix="+" />
              </h3>
              <p className="text-gray-500 font-medium">Modern Programs</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-gray-900 dark:text-white mb-2">
                <Counter value={95} suffix="%" />
              </h3>
              <p className="text-gray-500 font-medium">Job Placements</p>
            </div>
          </div>

          <button className="flex items-center gap-4 text-indigo-400 font-bold text-lg group">
            Learn more about our vision
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
