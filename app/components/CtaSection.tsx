"use client";

import React, { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function CtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const leftShapeRef = useRef<HTMLDivElement | null>(null);
  const rightShapeRef = useRef<HTMLDivElement | null>(null);

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      tl.fromTo(
        leftShapeRef.current,
        {
          x: -350,
          opacity: 0,
          rotate: -15,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "power3.out",
        },
        0,
      );

      tl.fromTo(
        rightShapeRef.current,
        {
          x: 550,
          opacity: 0,
          rotate: 15,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "power3.out",
        },
        0,
      );

      tl.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
        },
        0.1,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="relative mt-10 overflow-hidden py-32 md:mt-30"
    >
      {/* LEFT SHAPE */}
      <div
        ref={leftShapeRef}
        className="pointer-events-none absolute left-[60px] top-1/2 hidden -translate-y-1/2 md:block"
      >
        <Image
          src="/m1.png"
          alt=""
          width={280}
          height={280}
          className="w-52 lg:w-72 rotate-6"
        />
      </div>

      {/* RIGHT SHAPE */}
      <div
        ref={rightShapeRef}
        className="pointer-events-none absolute right-[60px] top-1/2 hidden -translate-y-1/2 md:block"
      >
        <Image
          src="/m2.png"
          alt=""
          width={280}
          height={280}
          className="w-52 lg:w-72 -rotate-6"
        />
      </div>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-5xl px-4 text-center"
      >
        <h2 className="heading text-5xl font-light leading-tight tracking-tight text-white sm:text-9xl">
          إن لم نؤمّن مستقبلنا،
          <br />
          فلن نجد سببًا لنصنعه.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">
          مشروع البوصلة يمنحك الأدوات والمسار لتصنع أثرًا حقيقيًا في مجتمعك
          وتكون جزءًا من الجيل القادر على القيادة.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border-2 border-black bg-primary px-6 py-3 font-bold text-primary-foreground shadow-[4px_4px_0_0_#111111] transition hover:bg-third hover:text-white hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none md:text-lg"
          >
            تعرف أكثر
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <a
            href=""
            target="_blank"
            className="inline-flex items-center gap-2 border-2 border-black bg-secondary px-8 py-3 font-bold text-white shadow-[4px_4px_0_0_#111111] transition hover:bg-secondary/80 hover:text-black hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none md:text-lg"
          >
            انضم الآن
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;