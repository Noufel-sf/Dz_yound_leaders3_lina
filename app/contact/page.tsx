"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HistoryButton from "../components/ui/HistoryButton";
import { ScrollToPlugin } from "gsap/all";
import OurLocation from "../components/OurLocation";
import { Factory } from "lucide-react";
import FaqSection from "../components/FaqSection";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/erth.dz",
    target: "_blank",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/erth.dz",
    target: "_blank",
  },
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ContactPage = () => {
  // email related logic

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const containerRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      //  Entrance Animations
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });
      tl.from(".reveal-text", { y: 100, opacity: 0, stagger: 0.1 }).from(
        ".reveal-line",
        { scaleX: 0, transformOrigin: "left", stagger: 0.1 },
        "-=0.5",
      );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top -20",
        onEnter: () => {
          gsap.to(navContainerRef.current, {
            y: -100,
            autoAlpha: 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to(navContainerRef.current, {
            y: 0,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="bg-primary-950 text-white selection:bg-primary selection:text-primary-950"
    >
      {/*HEADER */}
      <section className="px-6 pt-32 md:px-20 md:pt-40">
        <div className="flex items-end justify-between gap-2 pb-8 md:gap-0">
          <h1 className="reveal-text heading font-display text-5xl uppercase md:text-8xl">
            تواصل معنا
          </h1>
          <span className="reveal-text font-sans text-sm font-medium uppercase tracking-widest text-primary md:text-base">
            الجزائر / GMT+1
          </span>
        </div>

        <div className="mt-12 flex flex-col gap-12 md:flex-row md:justify-between">
          {/* LEFT: INFO */}
          <div className="flex flex-col gap-8 md:w-1/3">
            <div className="reveal-text">
              <p className="font-sans text-xs uppercase tracking-widest text-white/40">
                الموقع
              </p>
              <p className="mt-2 font-display text-xl uppercase">
                ميلة   /  شلغوم العيد   
              </p>
            </div>
            <div className="reveal-text">
              <p className="font-sans text-xs uppercase tracking-widest text-white/40">
                راسلنا
              </p>
              <a className="group relative mt-2 block w-fit font-display text-xl uppercase italic underline-offset-8 hover:text-primary md:text-2xl">
                info@erth-dz.com
              </a>
            </div>
            <div className="reveal-text">
              <p className="font-sans text-xs uppercase tracking-widest text-white/40">
                رسالة مباشرة
              </p>
              <div className="mt-5">
                <HistoryButton
                  text="انضم الينا"
                  bgColor="#ffd230"
                  textColor="black"
                  shadowColor="bg-secondary"
                  paddingX="px-6"
                  paddingY="py-2"
                  fontSize="text-base"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: HEADLINE */}
          <div className="md:w-1/2">
            <h2 className="reveal-text font-sans text-3xl font-semibold uppercase leading-[1.5] md:text-5xl lg:text-7xl">
              لنساهم معاً في الحفاظ على{" "}
              <span className="text-primary">تراثنا وهويتنا </span>{" "}
            </h2>
          </div>
        </div>
      </section>

      {/*SOCIAL GRID  */}
      <section className="mt-32 grid grid-cols-2 border-t border-white/10">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target={social.target}
            rel="noopener noreferrer"
            className="flex aspect-square flex-col items-center justify-center border-r border-white/10 p-8 transition-all duration-500 ease-in-out hover:bg-primary hover:text-primary-950"
          >
            <span className="font-display text-lg uppercase tracking-tighter md:text-2xl">
              {social.name}
            </span>
          </a>
        ))}
      </section>
      <OurLocation />
      <FaqSection />
    </div>
  );
};

export default ContactPage;
