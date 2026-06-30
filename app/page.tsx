"use client";
import dynamic from "next/dynamic";

import HeroSection from "./components/HeroSection";
import gsap from "gsap";
import { useRef } from "react";
const CtaSection = dynamic(() => import("./components/CtaSection"));
const OurValues = dynamic(() => import("./components/OurValues"));
const FaqSection = dynamic(() => import("./components/FaqSection"));
const OurVision = dynamic(() => import("./components/OurVision"));
const ProblemSection = dynamic(() => import("./components/ProblemSection"));
const TestimonialSection = dynamic(() => import("./components/SomeImagesSection"));
const EpisodsSection = dynamic(() => import("./components/EpisodsSection"));


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
      <OurValues />
      <EpisodsSection />
      <ProblemSection />
      <OurVision />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
