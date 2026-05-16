"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Programs", href: "/#programs" },
    { name: "Partners", href: "/#partners" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      if (pathname === "/") {
        const sections = navLinks.map((link) => link.href.split("#")[1]);
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element && element.getBoundingClientRect().top < 100) {
            setActiveSection(`/#${section}`);
            break;
          }
        }
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    const isHomePage = pathname === "/";
    const targetId = href.split("#")[1];
    
    if (isHomePage && targetId) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setOpen(false);
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[80] transition-all duration-500",
        scrolled
          ? "bg-white/80 dark:bg-black/40 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-10 h-10 bg-white rounded-xl p-1 shadow-lg group-hover:scale-110 transition-transform"
          >
            <img 
              src="/assets/jg-logo.svg" 
              alt="JG Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white transition-colors"
          >
            JG University
          </motion.h1>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all relative group",
                activeSection === link.href
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              {link.name}
              {activeSection === link.href && (
                <motion.div
                  layoutId="nav-active"
                  className={cn(
                    "absolute inset-0 rounded-full -z-10",
                    scrolled ? "bg-indigo-50 dark:bg-white/10" : "bg-white/20"
                  )}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
          
          <div className="ml-4 pl-4 border-l border-gray-200 dark:border-white/10 flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="/admissions"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 hover:scale-105 transition active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              Admissions
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-gray-900 dark:text-white transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    "text-2xl font-bold transition-colors",
                    activeSection === link.href
                      ? "text-indigo-600"
                      : "text-gray-600 dark:text-gray-400"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/admissions"
                className="w-full bg-indigo-600 text-white px-5 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/20 text-center"
              >
                Admissions
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
