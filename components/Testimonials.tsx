"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      name: "Parth Raval",
      role: "Creative Producer, Colors Gujarati, Viacom 18",
      image: "https://jguni.in/images/parth-raval.jpg",
      review:
        "JG University helped me build confidence, creativity and strong industry exposure. The mentors here are world-class.",
    },
    {
      name: "Yatendra Sinh Joddha",
      role: "BCA - Technical Lead, Tata Consultancy Services",
      image: "https://jguni.in/images/yatendra.jpg",
      review:
        "The practical learning approach helped me apply my technical knowledge in real projects. It truly prepared me for the field.",
    },
    {
      name: "Disha Thaker",
      role: "BCA - Project Associate, Cognizant",
      image: "https://jguni.in/images/disha-thaker.jpg",
      review:
        "Amazing environment with modern education and future-ready curriculum. I highly recommend it for any aspiring leader.",
    },
  ];

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [testimonials.length]);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
    startTimer();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startTimer();
  };

  const goToSlide = (i: number) => {
    setIndex(i);
    startTimer();
  };

  return (
    <section id="testimonials" className="py-32 bg-white dark:bg-[#020617] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Student Success
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white"
          >
            What Our <br />
            <span className="text-gray-400 dark:text-gray-500">Alumni Say.</span>
          </motion.h2>
        </div>

        <div className="relative h-[500px] md:h-[350px]">
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white shadow-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white shadow-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col md:flex-row items-center gap-12 bg-gray-50 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-[3rem] p-12 md:p-16 shadow-2xl transition-colors"
            >
              <div className="relative shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-50"></div>
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/10"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl">
                  <Quote size={20} fill="currentColor" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic text-gray-700 dark:text-gray-200 tracking-tight">
                  "{testimonials[index].review}"
                </p>

                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === i ? "w-12 bg-indigo-600" : "w-2 bg-gray-200 dark:bg-white/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
