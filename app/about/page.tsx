'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        start: 'top top',
        end: 'bottom top',
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
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-black px-6 pb-16 pt-32 md:px-20 md:pb-20 md:pt-40"
    >
      <div
        ref={manifestoInner}
        className="flex flex-col justify-between gap-16 will-change-[filter,opacity,transform]"
      >
        {/* Top: index + label */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">
            من نحن
          </span>
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-xs tracking-[0.3em] text-white/30">
            2026
          </span>
        </div>

        {/* Centre: manifesto text */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h1 className="heading text-[15vw] font-black uppercase leading-[1.1] tracking-tighter text-white md:text-[11vw]">
            نصنع 
            وعياً 
            <span className="text-primary heading mr-2">سياسياً</span> <br />
            مستداماً.
          </h1>

          <div className="flex max-w-sm flex-col gap-6 pb-2">
            <p className="font-sans text-base leading-relaxed text-white/60">
              مشروع البوصلة هو مساحة للشباب الجزائري الطموح لفهم آليات العمل
              المؤسساتي، صناعة القرار، وبناء مسار قيادي يخدم الوطن.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                الجزائر
              </span>
            </div>
          </div>
        </div>

        {/* Bottom: scroll cue */}
        <div className="flex items-center gap-4 self-end">
          <span className="font-mono text-xs uppercase tracking-widest text-white/20">
            مرر للأسفل
          </span>
          <div className="flex flex-col gap-1">
            <div className="h-4 w-px animate-bounce self-center bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
