"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center" 
      style={{
        backgroundImage: 'url(/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-45 animate-fadeIn">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-primary/10 px-6 py-3 backdrop-blur-sm animate-slideDown" style={{ animationDelay: '0.1s' }}>
            <span className="h-2 w-2 rounded-full heading bg-primary" />
            <span className="text-sm font-bold text-primary">منصة السفر والسياحة الأولى</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading text-7xl sm:text-8xl lg:text-[12rem]   leading-tight text-white mb-6 drop-shadow-lg animate-slideDown" style={{ animationDelay: '0.2s' }}>
            إرث يجمعنا
            <br />
            <span className="text-primary heading">وجمال ينتظرنا</span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 max-w-xl text-md sm:text-xl text-gray-100 leading-relaxed drop-shadow-md animate-slideDown" style={{ animationDelay: '0.3s' }}>
            استكشف كنوز بلادك من المحيط إلى الخليج، في رحلة في أعماق التاريخ والطبيعة الساحرة في قلب الوطن العربي
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 sm:gap-6 items-center justify-center animate-slideDown" style={{ animationDelay: '0.4s' }}>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:brightness-110 hover:shadow-2xl hover:scale-105"
            >
              احجز الآن
            </Link>
            <Link
              href="#explore"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/50 px-6 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10 hover:scale-105"
            >
              اكتشف المزيد
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-75"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
