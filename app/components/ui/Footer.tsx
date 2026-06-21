"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";



interface FooterProps {
  onScrollToTop?: () => void;
}

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/edg",
    target: "_blank",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/edg",
    target: "_blank",
  },
];

const PRIMARY_NAV = [
  { label: "الرئيسية", path: "/" },
  { label: "من نحن", path: "/about" },
  { label: "تواصل معنا", path: "/contact" },
];

const Footer = forwardRef<HTMLElement, FooterProps>(() => {
  return (
    <footer className="relative flex  min-h-screen w-full flex-col items-center justify-between overflow-hidden  py-[4vh]">
      <div className="flex w-full flex-grow flex-col items-center justify-between">
        {/* 1. MASSIVE LOGO  */}

        <div className="flex w-[90vw] justify-between">
          <div className="flex items-center font-display text-[15vw] font-black leading-[0.75] tracking-tight">
            <span className="text-primary mr-5">I</span>

            <span className="text-white heading ">ارث و اثر </span>
          </div>

          {/* Mascot edgo */}

          <div className="relative  aspect-square h-[22vw] overflow-hidden rounded-sm md:flex">
            <Image
              src="/logopreloader.png"
              alt="DZ young leaders"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        {/* 2. MIDDLE SECTION  */}
        <div className="z-10 mt-8 flex w-[90vw] flex-col items-start justify-between gap-12 md:mt-0 md:flex-row md:items-center">
          {/* Headline */}
          <div className="flex max-w-full flex-col gap-8 md:max-w-[50vw]">
            <h2 className="font-sans text-[clamp(1.5rem,4vw,2.5rem)] font-medium leading-[1.5] text-white/90">
              نُؤمن بأن العمل العام يبدأ من الوعي، ولهذا نُكرّس مساحات للتعلم،
              ومنصات للانطلاق، وتجارب تصنع الأثر.
            </h2>

            <a
              href="/contact"
              className="cta-link group relative w-fit font-sans text-xl font-medium text-white transition-colors hover:text-primary md:text-2xl"
            >
              تواصل معنا
              {/* Animated Underline */}
              <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-right scale-x-100 bg-white/30 transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-0"></span>
              <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            </a>
          </div>

          {/* Nav Links */}
          <div className="flex gap-12 md:gap-[5vw] lg:gap-[8vw]">
            <ul className="flex flex-col gap-4 font-sans text-base font-semibold uppercase text-white/70 md:text-lg">
              {PRIMARY_NAV.map((item) => (
                <li key={item.path}>
                  <button
                    className={`text-left transition-colors hover:text-primary cursor-pointer`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="flex w-[90vw] flex-col gap-6 pt-8 md:flex-row md:justify-between">
          <div className="flex flex-wrap gap-6 font-sans text-sm font-medium text-white/60">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.link}
                target={s.target}
                className="transition-colors hover:text-white"
              >
                {s.name}
              </a>
            ))}
          </div>
          <div className="font-sans text-sm font-medium text-white/30">
            <p>
              © 2026 Copyright Nasri noufel seif el islam.{" "}
              <span>
                Designed & Built by{" "}
                <a
                  href="https://my-portfolio-pi-nine-27.vercel.app/"
                  target="new"
                  className="uppercase text-white/50 transition-colors hover:text-primary"
                >
                  NSF
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
