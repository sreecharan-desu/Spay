"use client";
import Footer  from "@repo/ui/common/Footer";
import CTA from "@repo/ui/landingpage/CTA";
import Features from "@repo/ui/landingpage/Features";
import Hero from "@repo/ui/landingpage/Hero";
import Testimonials from "@repo/ui/landingpage/Testimonials";

export default function SpayLandingPage() {

  return (
    <div className="min-h-screen bg-white text-black">
      <Hero />
      <Features/>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

