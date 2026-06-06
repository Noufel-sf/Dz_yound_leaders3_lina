"use client";

import CtaSection from "./components/CtaSection";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import gsap from "gsap";
import OurValues from "./components/OurValues";
import { useRef } from "react";
import TestimonialSection from "./components/SomeImagesSection";
import OurVision from "./components/OurVision";

export default function Home() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const flowTl = gsap.timeline({ paused: true });

  flowTl.set(testimonialsRef.current, { yPercent: 100 });

  // Bring in Navbar and Buddy in Product Section
  flowTl.to(testimonialsRef.current, { y: 0, autoAlpha: 1, duration: 0.5 }).to(
    testimonialsRef.current,
    {
      y: "45vh",
      x: "-47vw",
      rotation: 30,
      duration: 2,
      ease: "back.out(1.2)",
      delay: 0.2,
    },
    "-=0.3",
  );

  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <OurVision />
      <OurValues />
      <TestimonialSection />
      <FaqSection />
      {/* <CtaSection /> */}
    </main>
  );
}
