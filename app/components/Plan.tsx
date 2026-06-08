"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function WhatYourGoingToSee() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      title: "الممالك والإمارات الجزائرية",
      image: "/placeholder-kingdoms.png",
    },
    {
      title: "الحضارات الإسلامية",
      image: "/placeholder-islamic.png",
    },
    {
      title: "الجذور النوميدية",
      image: "/placeholder-numidia.png",
    },
  ];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              id: "what-you-see-section",
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          if (headlineRef.current) {
            tl.fromTo(
              headlineRef.current,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 1 },
              0
            );
          }

          if (subtitleRef.current) {
            tl.fromTo(
              subtitleRef.current,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 1 },
              0.2
            );
          }

          if (itemsContainerRef.current) {
            tl.fromTo(
              itemsContainerRef.current.children,
              { y: 50, opacity: 0, scale: 0.9 },
              { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2 },
              0.4
            );
          }
        }
      );

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 min-h-screen flex flex-col items-center justify-center w-full overflow-hidden bg-primary-950 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-full max-w-6xl mx-auto gap-12">
        {/* Heading */}
        <div
          ref={headlineRef}
          className="flex flex-row items-center justify-center gap-6"
          dir="rtl"
        >
     
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-display heading text-white">
            اكثر من  <span className="text-primary heading">مجرد بوتكاست</span> 
          </h2>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-3xl text-white/90 max-w-4xl leading-relaxed font-medium"
        >
          حلقات غامرة نحكيها بأسلوب قصصي مشوق وبصور 4K
        </p>

        {/* Items List */}
        <div
          ref={itemsContainerRef}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full mt-8"
        >
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-6">
                <div className="w-full h-full rounded-full bg-zinc-900/80 flex items-center justify-center overflow-hidden border border-white/10 relative">
                  {/* Placeholder div until images are provided */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-zinc-500 text-sm px-4 text-center">
                      مساحة الصورة
                      <br />
                      {item.title}
                    </span>
                  </div>
                  {/* Uncomment and use next/image when images are provided
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              <h3 className="text-xl md:text-2xl font-bold text-center text-white/90 max-w-[200px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
