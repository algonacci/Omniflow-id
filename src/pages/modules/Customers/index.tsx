import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Features />
      <Screenshots />
      <Benefits />
      <Testimonials />
      <CTASection />
    </div>
  );
}
