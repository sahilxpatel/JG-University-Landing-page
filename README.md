# 🏛️ JG University Landing Page

A premium, high-performance landing page for JG University, built with modern web technologies to provide an immersive and factually accurate user experience.

![JG University Header](/assets/jg-logo.svg)

## 📋 Overview

The JG University Landing Page is a state-of-the-art web application designed to showcase the university's academic excellence, industry collaborations, and vibrant campus life. It features a sleek, theme-aware design (Light/Dark mode) and interactive components that engage prospective students and partners.

## ✨ Features

- **🌓 Dynamic Theming**: Fully integrated Light and Dark modes with seamless transitions and automatic system preference detection.
- **🚀 High Performance**: Built on Next.js 15 for lightning-fast page loads and optimized asset delivery.
- **🎥 Campus Tour**: Interactive, animated image gallery featuring high-resolution assets of university facilities.
- **🎓 Program Catalog**: Comprehensive listing of courses with category-based filtering and premium card designs.
- **🤝 Industry Partners**: A seamless, glassmorphism-styled marquee showcasing official placement partners like IBM, ISRO, and TCS.
- **💬 Alumni Testimonials**: Interactive carousel with real alumni success stories and industry credentials.
- **📱 Fully Responsive**: Optimized for all devices, from mobile phones to high-resolution desktop monitors.
- **🛠️ Admissions Guide**: Dedicated step-by-step admissions process page to guide prospective students.

## 💻 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts (Poppins)](https://fonts.google.com/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📸 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| ![Light Hero](/assets/7.jpg) | ![Dark Hero](/assets/8.jpg) |
| *Modern Hero Section* | *Immersive Dark Aesthetics* |

## 🛠️ Installation Steps

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:sahilxpatel/JG-University-Landing-page.git
   cd JG-University-Landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Live Demo

The project is currently hosted and available for viewing at:
**[Insert Deployment Link Here]**

## 📂 Folder Structure

```text
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── admissions/       # Admissions process page
│   ├── globals.css       # Tailwind v4 Global Styles
│   └── layout.tsx        # Root Layout & Metadata
├── components/           # Reusable UI Components
│   ├── Hero.tsx          # Landing Hero Section
│   ├── About.tsx         # University Overview
│   ├── Programs.tsx      # Course Catalog
│   ├── Partners.tsx      # Industry Marquee
│   ├── Testimonials.tsx  # Alumni Feedback
│   └── CampusTour.tsx    # Animated Gallery Modal
├── lib/                  # Utility functions
├── public/               # Static assets (Logos, Favicons)
└── tailwind.config.ts    # Tailwind Configuration
```

---

Built with ❤️ for **JG University**
