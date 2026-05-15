"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative w-full h-px overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800" />
      <motion.div
        initial={{ left: "-100%" }}
        whileInView={{ left: "100%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"
      />
    </div>
  );
}
