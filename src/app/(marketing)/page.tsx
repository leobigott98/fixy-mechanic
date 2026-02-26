// src/app/(marketing)/page.tsx
import Hero from "@/components/marketing/Hero";
import HowItWorks from "@/components/marketing/HowItWorks";
import Features from "@/components/marketing/Features";
import Testimonials from "@/components/marketing/Testimonials";
import PricingPreview from "@/components/marketing/PricingPreview";
import FAQ from "@/components/marketing/FAQ";

export default function LandingPage() {
  return (
    <div className="space-y-16">
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <PricingPreview />
      <FAQ />
    </div>
  );
}