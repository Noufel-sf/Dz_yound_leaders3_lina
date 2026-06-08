"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sparkles, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  const problems = [
    {
      text: "فجوة الوعي السياسي لدى الشباب الجزائري",
      icon: <span className="text-3xl md:text-4xl text-primary font-bold">?</span>,
    },
    {
      text: "غياب برامج منظمة لتكوين القيادات الشابة",
      icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
    },
    {
      text: "صعوبة الوصول إلى المعلومات والمؤسسات",
      icon: <User className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
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
              id: "problem-section",
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // Text items fade in from the right
          if (itemsContainerRef.current) {
            tl.fromTo(
              itemsContainerRef.current.children,
              { x: 50, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, stagger: 0.2 },
              0
            );
          }

          // Image fades in from the left
          if (imageRef.current) {
            tl.fromTo(
              imageRef.current,
              { x: -50, opacity: 0, scale: 0.9 },
              { x: 0, opacity: 1, scale: 1, duration: 1 },
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
      className="relative py-24 min-h-screen flex items-center justify-center w-full mt-25 overflow-hidden bg-primary-950 text-white"
    >

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
           <h2 className="text-7xl md:text-8xl lg:text-9xl font-display heading text-center text-white">
            ماذا <span className="text-primary heading"> ينتظركم</span> ؟
          </h2>
        <div 
          className="flex flex-col md:flex-row items-center justify-between   md:rounded-3xl p-8 md:p-16 "
          dir="rtl"
        >
            <div 
            ref={imageRef} 
            className="w-full md:w-2/5 flex justify-center mt-12 md:mt-0 relative"
          >
            <div className="relative w-48 h-64 md:w-72 md:h-[400px] rounded-2xl border-2 border-dashed border-primary/40 flex flex-col items-center justify-center bg-black/40 overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              <span className="text-zinc-500 text-center px-4 relative z-10 font-medium">
                مساحة صورة الساعة
                <br />
                <span className="text-sm opacity-70 mt-2 block">(Hourglass Image Placeholder)</span>
              </span>
              {/* Uncomment and use next/image when image is ready
              <Image
                src="/hourglass.png"
                alt="Hourglass"
                fill
                className="object-contain"
              />
              */}
            </div>
          </div>

          <div 
            ref={itemsContainerRef}
            className="w-full md:w-3/5 flex flex-col gap-10 md:gap-14"
          >
            {problems.map((item, index) => (
              <div key={index} className="flex items-center gap-6 md:gap-8 group">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-primary/50 bg-black/60 shadow-[0_0_20px_rgba(255,185,0,0.15)] transition-transform group-hover:scale-110 group-hover:border-primary duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-display font-medium text-white/90 leading-relaxed transition-colors duration-300">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}
