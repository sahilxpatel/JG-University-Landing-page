import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <ScrollProgress />
      <ScrollToTop />
      
      <Navbar />
      <Hero />
      
      <SectionDivider />
      <About />
      
      <SectionDivider />
      <Programs />
      
      <SectionDivider />
      <Partners />
      
      <SectionDivider />
      <Testimonials />
      
      <SectionDivider />
      <CTA />
      
      <Footer />
    </main>
  );
}
