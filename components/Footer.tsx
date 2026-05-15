"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#020617] text-gray-600 dark:text-gray-400 py-16 border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl p-1 shadow-xl">
                <img 
                  src="https://jguni.in/images/jg-logo.svg" 
                  alt="JG Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">
                JG University
              </h3>
            </div>
            <p className="text-lg leading-relaxed mb-8 max-w-md">
              Empowering students with modern, industry-focused education. 
              Join the next generation of global leaders and innovators. 
              Our commitment to excellence drives everything we do.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-gray-900 dark:text-white text-lg font-bold mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["About", "Programs", "Partners", "Testimonials"].map((item) => (
                  <li key={item}>
                    <a href={`/#${item.toLowerCase()}`} className="hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-white text-lg font-bold mb-8">Contact Info</h4>
              <ul className="space-y-6">
                {[
                  { icon: <MapPin size={18} />, text: "Ahmedabad, Gujarat, India" },
                  { icon: <Mail size={18} />, text: "connect@jguni.in" },
                  { icon: <Phone size={18} />, text: "+91 7567 7567 58" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm pt-2">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200 dark:border-white/5 text-center text-sm text-gray-500 dark:text-gray-600">
          <p>© 2026 JG University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
