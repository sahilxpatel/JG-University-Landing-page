"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Brain,
  Cpu,
  Search,
  ChevronDown,
  ChevronUp,
  Clock,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types
interface Program {
  name: string;
  duration?: string;
  semesters?: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  programs: Program[];
  color: string;
}

const CATEGORIES: Category[] = [
  {
    id: "undergraduate",
    title: "Undergraduate",
    icon: <GraduationCap size={24} />,
    color: "from-blue-500 to-indigo-600",
    description: "Launch your career with our industry-aligned bachelor's degrees.",
    programs: [
      { name: "BBA", duration: "3 years", semesters: "6 semesters" },
      { name: "BBA (Hons)", duration: "4 years", semesters: "8 semesters" },
      { name: "iMBA", duration: "5 years", semesters: "10 semesters" },
      { name: "iMBA - Aviation, Hospitality & Travel Management", duration: "5 years", semesters: "10 semesters" },
      { name: "iMBA - International Trade & Finance", duration: "5 years", semesters: "10 semesters" },
      { name: "BBA (Hons) - International Trade & Finance", duration: "4 years", semesters: "8 semesters" },
      { name: "B.Com", duration: "3 years", semesters: "6 semesters" },
      { name: "B.Com (Hons)", duration: "4 years", semesters: "8 semesters" },
      { name: "B.Com (Hons) with ACCA", duration: "4 years", semesters: "8 semesters" },
      { name: "BCA", duration: "3 years", semesters: "6 semesters" },
      { name: "BCA (Hons)", duration: "4 years", semesters: "8 semesters" },
      { name: "iMCA", duration: "5 years", semesters: "10 semesters" },
      { name: "iMSc (IT)", duration: "5 years", semesters: "10 semesters" },
      { name: "iMSc (IT-Specialization)", duration: "5 years", semesters: "10 semesters" },
      { name: "B.Sc.(Hons)/iMSc - Forensic Science & Technology", duration: "3-5 years" },
      { name: "B.Sc.(Hons)/iMSc - Cyber & Digital Forensic", duration: "3-5 years" },
      { name: "B.Sc.(Hons)/iMSc - Quantum Computing", duration: "3-5 years" },
      { name: "B.Sc.(Hons)/iMSc - Mathematics & Computing", duration: "3-5 years" },
      { name: "B.Sc.(Hons)/iMSc - Clinical Embryology & Reproductive Biology", duration: "3-5 years" },
      { name: "B.Sc.(Hons)/iMSc - Food, Nutrition & Lifestyle Science", duration: "3-5 years" },
      { name: "B.Tech - Computer Science & Engineering", duration: "4 years", semesters: "8 semesters" },
      { name: "B.Tech - Information Technology", duration: "4 years", semesters: "8 semesters" },
      { name: "B.Tech - Artificial Intelligence & Data Science", duration: "4 years", semesters: "8 semesters" },
      { name: "B.Tech - Artificial Intelligence & Machine Learning", duration: "4 years", semesters: "8 semesters" },
      { name: "B.Tech - Computer Engineering", duration: "4 years", semesters: "8 semesters" },
      { name: "B.Tech - CSE (AI)", duration: "4 years", semesters: "8 semesters" },
      { name: "B.Tech - CSE (AI & ML)", duration: "4 years", semesters: "8 semesters" },
      { name: "B.Tech - CSE (Big Data Analytics)", duration: "4 years", semesters: "8 semesters" },
      { name: "LL.B.", duration: "3 years", semesters: "6 semesters" },
    ],
  },
  {
    id: "postgraduate",
    title: "Postgraduate",
    icon: <BookOpen size={24} />,
    color: "from-indigo-500 to-purple-600",
    description: "Advance your expertise with our specialized master's programs.",
    programs: [
      { name: "MBA", duration: "2 years", semesters: "4 semesters" },
      { name: "Masters in International Trade & Finance", duration: "2 years", semesters: "4 semesters" },
      { name: "Masters in Aviation, Hospitality & Travel Management", duration: "2 years", semesters: "4 semesters" },
      { name: "M.Com (Hons)", duration: "2 years", semesters: "4 semesters" },
      { name: "MCA", duration: "2 years", semesters: "4 semesters" },
      { name: "MCA - AI & Full Stack Development", duration: "2 years", semesters: "4 semesters" },
      { name: "MSc (IT-Specialization)", duration: "2 years", semesters: "4 semesters" },
      { name: "M.Sc. - Cyber Security & Digital Forensics", duration: "2 years", semesters: "4 semesters" },
      { name: "M.Sc. - Forensic Science & Technology", duration: "2 years", semesters: "4 semesters" },
      { name: "M.Sc. - Clinical Embryology & ART", duration: "2 years", semesters: "4 semesters" },
      { name: "LL.M.", duration: "2 years", semesters: "4 semesters" },
    ],
  },
  {
    id: "doctoral",
    title: "Doctoral",
    icon: <Brain size={24} />,
    color: "from-purple-500 to-pink-600",
    description: "Contribute to global knowledge through cutting-edge research.",
    programs: [
      { name: "Commerce" },
      { name: "Management" },
      { name: "Computing" },
      { name: "Interdisciplinary" },
      { name: "Law" },
    ],
  },
  {
    id: "certificate",
    title: "Certificate Courses",
    icon: <Cpu size={24} />,
    color: "from-pink-500 to-rose-600",
    description: "Upskill quickly with our short-term professional certifications.",
    programs: [
      { name: "Metaverse" },
      { name: "Data Science, AI-ML" },
      { name: "Mobile Applications" },
      { name: "Blockchain" },
      { name: "Digital Marketing" },
      { name: "Cyber Security" },
      { name: "Robotic Process Automation" },
      { name: "Industrial IoT" },
      { name: "Full Stack Architect" },
      { name: "Azure DevOps" },
    ],
  },
];

const ProgramAccordion = ({ 
  program, 
  index,
  activeColor 
}: { 
  program: Program; 
  index: number;
  activeColor: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className={cn(
        "mb-3 rounded-2xl border transition-all duration-300",
        isOpen 
          ? "bg-white dark:bg-white/5 border-indigo-500/30 shadow-lg shadow-indigo-500/5" 
          : "bg-gray-50 dark:bg-white/[0.02] border-gray-100 dark:border-white/5 hover:border-indigo-500/20"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors",
            isOpen ? "bg-indigo-600 text-white" : "bg-gray-200 dark:bg-white/10 text-gray-500"
          )}>
            <span className="text-xs font-bold">{index + 1}</span>
          </div>
          <span className={cn(
            "font-bold transition-colors",
            isOpen ? "text-indigo-600 dark:text-indigo-400" : "text-gray-700 dark:text-gray-300"
          )}>
            {program.name}
          </span>
        </div>
        {isOpen ? <ChevronUp size={20} className="text-indigo-600" /> : <ChevronDown size={20} className="text-gray-400" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-6 text-sm">
              {program.duration && (
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Clock size={16} className="text-indigo-500" />
                  <span>Duration: <span className="font-semibold text-gray-900 dark:text-white">{program.duration}</span></span>
                </div>
              )}
              {program.semesters && (
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Calendar size={16} className="text-indigo-500" />
                  <span>Semesters: <span className="font-semibold text-gray-900 dark:text-white">{program.semesters}</span></span>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>Admission: <span className="font-semibold text-gray-900 dark:text-white uppercase tracking-wider text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full">Open</span></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategory = useMemo(() => 
    CATEGORIES.find(c => c.id === activeTab) || CATEGORIES[0]
  , [activeTab]);

  const filteredPrograms = useMemo(() => {
    if (!searchQuery.trim()) return activeCategory.programs;
    return activeCategory.programs.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  return (
    <section id="programs" className="py-32 bg-white dark:bg-[#020617] transition-colors relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400 text-sm font-bold mb-6"
          >
            <Sparkles size={16} />
            <span>Academic Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter dark:text-white mb-8"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Courses.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed"
          >
            Industry-focused future-ready programs designed for innovation and career growth.
          </motion.p>
        </div>

        {/* Tab Selection & Search */}
        <div className="mb-12 flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 dark:bg-white/5 rounded-3xl border border-gray-200 dark:border-white/10 w-fit">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setSearchQuery("");
                }}
                className={cn(
                  "px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-3",
                  activeTab === cat.id
                    ? "bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-xl shadow-indigo-600/10"
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {cat.icon}
                {cat.title}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
            <input
              type="text"
              placeholder={`Search ${activeCategory.title} programs...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/50 transition-all dark:text-white"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Category Info Card */}
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32">
              <div className={cn(
                "p-10 rounded-[3rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-2xl relative overflow-hidden group"
              )}>
                <div className={cn(
                  "absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br opacity-10 blur-3xl transition-transform duration-700 group-hover:scale-125",
                  activeCategory.color
                )} />

                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg",
                  `bg-gradient-to-br ${activeCategory.color}`
                )}>
                  {activeCategory.icon}
                </div>

                <h3 className="text-4xl font-black mb-6 dark:text-white tracking-tight">
                  {activeCategory.title}
                </h3>
                
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                  {activeCategory.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                    <span className="font-bold">Global Recognition</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-purple-600" />
                    <span className="font-bold">Industry Mentors</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-pink-600" />
                    <span className="font-bold">Practical Exposure</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Program List */}
          <motion.div
            key={`${activeCategory.id}-list`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h4 className="text-xl font-bold dark:text-white">
                Found {filteredPrograms.length} Programs
              </h4>
              <div className="text-sm text-gray-500">
                Sorted alphabetically
              </div>
            </div>

            <div className="space-y-2">
              <AnimatePresence mode="popLayout">
                {filteredPrograms.length > 0 ? (
                  filteredPrograms.map((program, i) => (
                    <ProgramAccordion 
                      key={program.name} 
                      program={program} 
                      index={i}
                      activeColor={activeCategory.color}
                    />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-20 text-center bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-dashed border-gray-300 dark:border-white/10"
                  >
                    <div className="w-20 h-20 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search size={32} className="text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold dark:text-white mb-2">No programs found</h3>
                    <p className="text-gray-500">Try adjusting your search or switching categories.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
