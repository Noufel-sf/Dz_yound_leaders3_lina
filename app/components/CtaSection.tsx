"use client";

import React, { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      gsap.to(sectionRef.current, {
        scale: 1,
        opacity: 0,
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative  flex flex-col mt-10 md:mt-30 items-center justify-center overflow-hidden  px-4 py-24 sm:px-8 lg:px-12"
      dir="rtl"
      style={{ transformOrigin: "center top" }}
    >

      <div className="relative mx-auto max-w-5xl text-center">
        <h2
          data-cta-item
          className="heading text-5xl font-light leading-tight text-white tracking-tight sm:text-9xl"
        >
          إن لم نؤمّن مستقبلنا،
          <br />
          فلن نجد سببًا لنصنعه.
        </h2>

        <p
          data-cta-item
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg"
        >
          مشروع البوصلة يمنحك الأدوات والمسار لتصنع أثرًا حقيقيًا في مجتمعك
          وتكون جزءًا من الجيل القادر على القيادة.
        </p>

        <div
          data-cta-item
          className="mt-10 flex items-center gap-5  justify-center "
        >
          <Link
            href="/about"
            className=" inline-flex items-center gap-2 border-2  border-black bg-primary px-6 py-3 md:text-lg hover:bg-third hover:text-white transition duration-400 font-bold text-primary-foreground shadow-[4px_4px_0_0_#111111] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          >
            تعرف أكثر
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <a
            target="_blank"
            href=""
            className=" inline-flex items-center gap-2 border-2 border-black text-white px-8 py-3 md:text-lg font-bold bg-secondary hover:bg-secondary/80 transition duration-400 hover:text-black shadow-[4px_4px_0_0_#111111] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          >
            انضم الآن
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
