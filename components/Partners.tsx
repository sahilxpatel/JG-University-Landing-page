"use client";

import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    { name: "IBM", logo: "https://jguni.in/images/ibm.png" },
    { name: "ISRO", logo: "https://jguni.in/images/isro.png" },
    { name: "SAC", logo: "https://jguni.in/images/sac.png" },
    { name: "Yudiz", logo: "https://jguni.in/images/yudiz.png" },
    { name: "Dev", logo: "https://jguni.in/images/dev.png" },
    { name: "Aventure", logo: "https://jguni.in/images/aventure.png" },
    { name: "Samy", logo: "https://jguni.in/images/samy.png" },
    { name: "Asian African", logo: "https://jguni.in/images/asian-african.png" },
    { name: "Virtual Height", logo: "https://jguni.in/images/virtual-height.png" },
    { name: "Coding", logo: "https://jguni.in/images/coding.png" },
  ];

  // Duplicate for seamless marquee
  const doublePartners = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-24 bg-gray-50 dark:bg-[#020617] border-y border-gray-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs mb-2"
          >
            Trusted by Global Leaders
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black text-gray-900 dark:text-white tracking-tight"
          >
            Placement Partners
          </motion.h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -3000] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-8 items-center py-4"
        >
          {doublePartners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center justify-center min-w-[220px] h-32 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-2xl px-10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group/logo"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-full object-contain filter group-hover/logo:brightness-110 transition-all"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
