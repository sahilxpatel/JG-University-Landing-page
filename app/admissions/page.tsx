"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  UserPlus, 
  MailCheck, 
  CreditCard, 
  FileText, 
  ArrowLeft,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

const steps = {
  ug: [
    {
      id: 1,
      title: "Application for Admission",
      desc: "Candidates must complete the essential details on the application form in order to apply for admission at JG University.",
      icon: <FileText className="text-indigo-500" />
    },
    {
      id: 2,
      title: "Personal Interaction and Assessment",
      desc: "For a more in-depth assessment of the candidates, a personal round of interaction will be held, including one-on-one conversations between the candidate and University representative.",
      icon: <UserPlus className="text-purple-500" />
    },
    {
      id: 3,
      title: "Offer of Admission",
      desc: "Upon successful completion of the personal interaction and assessment round, the candidate will receive notification of their selection via message or email.",
      icon: <MailCheck className="text-pink-500" />
    },
    {
      id: 4,
      title: "Admission Confirmation",
      desc: "Upon receiving the selection notification, the candidate can secure their seats on payment of the fees.",
      icon: <CreditCard className="text-indigo-500" />
    }
  ],
  pg: [
    {
      id: 1,
      title: "Application for Admission",
      desc: "Candidates must complete the details on the application form in order to apply for admission at JG University.",
      icon: <FileText className="text-indigo-500" />
    },
    {
      id: 2,
      title: "JG University's Entrance Test (JGET)",
      desc: "JGET is a comprehensive entrance test designed to evaluate candidates' aptitude and knowledge for admission to postgraduate programmes. Candidates with CMAT, CAT, XMAT, GMAT, XAT, NMAT, MAT, SNAP, GRE are exempted.",
      icon: <ClipboardCheck className="text-purple-500" />
    },
    {
      id: 3,
      title: "Result of JGET",
      desc: "The announcement of the results will be made on the website.",
      icon: <Sparkles className="text-pink-500" />
    },
    {
      id: 4,
      title: "Personal Interaction and Assessment",
      desc: "For a more in-depth assessment of the candidates, a personal round of interaction will be held, including one-on-one conversations between the candidate and University representative.",
      icon: <UserPlus className="text-indigo-500" />
    },
    {
      id: 5,
      title: "Offer of Admission",
      desc: "Upon successful completion of the personal interaction and assessment round, the candidate will receive notification of their selection via message or email.",
      icon: <MailCheck className="text-purple-500" />
    },
    {
      id: 6,
      title: "Admission Confirmation",
      desc: "Upon receiving the selection notification, the candidate can secure their seats on payment of the fees.",
      icon: <CreditCard className="text-pink-500" />
    }
  ],
  phd: [
    {
      id: 1,
      title: "Application for Admission",
      desc: "Candidates must complete the details on the application form in order to apply for admission at JG University.",
      icon: <FileText className="text-indigo-500" />
    },
    {
      id: 2,
      title: "JG University's Entrance Test (JGET)",
      desc: "JGET is a comprehensive entrance test designed to assess candidates' aptitude and knowledge for Ph.D admission. Candidates who have cleared NET/SLET or possess an MPhil degree are exempted.",
      icon: <ClipboardCheck className="text-purple-500" />
    },
    {
      id: 3,
      title: "Result of JGET",
      desc: "The announcement of the results will be made on the website.",
      icon: <Sparkles className="text-pink-500" />
    },
    {
      id: 4,
      title: "Personal Interaction and Assessment",
      desc: "For a more in-depth assessment of the candidates, a personal round of interaction will be held, including one-on-one conversations between the candidate and University representative.",
      icon: <UserPlus className="text-indigo-500" />
    },
    {
      id: 5,
      title: "Offer of Admission",
      desc: "Upon successful completion of the personal interaction and assessment round, the candidate will receive notification of their selection via message or email.",
      icon: <MailCheck className="text-purple-500" />
    },
    {
      id: 6,
      title: "Admission Confirmation",
      desc: "Upon receiving the selection notification, the candidate can secure their seats on payment of the fees.",
      icon: <CreditCard className="text-pink-500" />
    }
  ]
};

export default function AdmissionsPage() {
  return (
    <main className="bg-white dark:bg-[#020617] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.a 
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-indigo-400 font-bold mb-12 hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </motion.a>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6">
                <Sparkles size={16} />
                <span>Admissions 2026</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white">
                Admission <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Process.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Our Admission process enables us to meticulously give importance to every individual applying. 
                The admission of the applicant will majorly be based on our admission process scores.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-video rounded-[3rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
                <img 
                  src="https://jguni.in/images/admission33.jpg" 
                  alt="Admission Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 border-y border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] transition-colors">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-400 leading-relaxed italic">
            "Our flexible process makes it possible to receive new information about our applicants. 
            At each step, our team serves attention to the minute details, seeking to identify students 
            who are willing to acquire knowledge and also give back to the community."
          </p>
        </div>
      </section>

      {/* Steps Sections */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* UG Section */}
          <div className="mb-40">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 rounded-3xl bg-indigo-600 flex items-center justify-center text-white shadow-xl">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">UG Programmes</h2>
                <p className="text-gray-500">Bachelor's Degree Admissions</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.ug.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-indigo-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.id}. {step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PG Section */}
          <div className="mb-40">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 rounded-3xl bg-purple-600 flex items-center justify-center text-white shadow-xl">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">PG Programmes</h2>
                <p className="text-gray-500">MBA, MCA, MSc(IT), M.Com</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.pg.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.id}. {step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PhD Section */}
          <div>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 rounded-3xl bg-pink-600 flex items-center justify-center text-white shadow-xl">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">Ph.D Programmes</h2>
                <p className="text-gray-500">Doctoral Research Admissions</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.phd.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-pink-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.id}. {step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
