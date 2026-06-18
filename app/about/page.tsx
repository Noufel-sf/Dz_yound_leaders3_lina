"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Owner from "../components/Owner";
import Image from "next/image";
import WhatYourGoingToSee from "../components/WhatYourGoingToSee";
import ProblemSection from "../components/ProblemSection";
import Plan from "../components/Plan";
import SolutionSection from "../components/SolutionSection";
import FaqSection from "../components/FaqSection";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  // manifesto refs
  const manifestoRef = useRef<HTMLElement>(null);
  const manifestoInner = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Manifesto
    if (manifestoRef.current && manifestoInner.current) {
      ScrollTrigger.create({
        trigger: manifestoRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: false,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(manifestoInner.current, {
            filter: `blur(${p * 14}px)`,
            opacity: 1 - p * 1.4,
            scale: 1 - p * 0.06,
          });
        },
      });
    }
  });

  return (
    <section
      ref={manifestoRef}
      dir="rtl"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#0C0C0C]"
    >
      <div
        ref={manifestoInner}
        className="relative flex flex-col h-screen justify-between gap-16 p-10  md:p-40 overflow-hidden"
      >
        {/* Mobile Background */}
        <Image
          src="/heromobile.png"
          alt=""
          fill
          priority
          sizes="100vw "
          className="object-cover md:hidden block  z-0"
        />

        {/* Desktop Background */}
        <Image
          src="/hero2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover -z-10"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-1" />

        {/* Content */}
        <div className="relative z-10 flex items-center pt-12 md:pt-15 gap-4">
          <span className="font-mono text-lg uppercase tracking-[0.3em] text-primary">
            من نحن
          </span>
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-lg tracking-[0.3em] text-primary">
            2026
          </span>
        </div>

        <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h1 className="heading text-[13vw] md:text-[11vw] font-black leading-[1.1] tracking-tighter text-white">
            نصنع وعياً
            <span className="text-primary heading mr-3">تراثياً</span>
            <br />
            مستداماً.
          </h1>

          <div className="flex max-w-sm flex-col gap-6 pb-2">
            <p className="text-sm leading-relaxed text-white/60">
              مشروع إرث وأثر هو مبادرة شبابية مختارة من مشروع
              <span className="text-primary m-2">DZ Young Leaders</span>
              تهدف إلى إحياء الذاكرة الوطنية وصناعة محتوى إعلامي متخصص في التراث
              والتاريخ الجزائري.
            </p>

            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="font-mono text-xs tracking-widest text-primary">
                الجزائر
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-4 self-end">
          <span className="font-mono text-xs tracking-widest text-white/20">
            مرر للأسفل
          </span>

          <div className="flex flex-col gap-1">
            <div className="h-4 w-px animate-bounce self-center bg-white/20" />
          </div>
        </div>
      </div>
      <WhatYourGoingToSee />
      <ProblemSection />
      <Plan />
      <Owner />
      <FaqSection />
    </section>
  );
}
