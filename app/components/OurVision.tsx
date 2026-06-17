"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const DEFAULT_END_DESKTOP = "+=200%";
const DEFAULT_END_MOBILE = "+=150%";

gsap.registerPlugin(ScrollTrigger);

interface AboutLayerOneProps {
  endDesktop?: string;
  endMobile?: string;
  className?: string;
}

export default function AboutLayerOne({
  endDesktop = DEFAULT_END_DESKTOP,
  endMobile = DEFAULT_END_MOBILE,
  className,
}: AboutLayerOneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !headlineRef.current) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };

          const tl = gsap.timeline({
            scrollTrigger: {
              id: "about-layer-one",
              trigger: sectionRef.current,
              start: "top 80%", // Start animating slightly before it hits top
              end: "bottom top", // End exactly when it leaves the screen
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          const headline = headlineRef.current as HTMLElement;

          tl.fromTo(
            headline.querySelectorAll(".header-title span"),
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 1 },
            0,
          )
            .fromTo(
              headline.querySelector(".sub-header"),
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 1 },
              0.3,
            )
            .to(
              headlineRef.current,
              {
                y: "-15vh", // Subtle parallax effect as you scroll past
                opacity: 0,
                duration: 1.5,
              },
              1, // Starts fading out naturally as it goes up
            );
        },
      );

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className={`relative md:h-screen h-[60vh]  w-full mt-20  overflow-hidden bg-primary-950 ${
        className ?? ""
      }`}
    >
      <div
        ref={headlineRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
      >
        <h2 className="header-title -rotate-2 flex flex-col items-center heading justify-center gap-x-6 font-display text-[15vw] uppercase leading-none tracking-tighter  md:flex-row md:text-[12rem]">
          <span className=" heading text-primary">رؤيتنا</span>
          <span className=" heading text-white"> للمجتمع الجزائري </span>
        </h2>
        <p className="sub-header mt-8 max-w-4xl leading-10 font-display text-white/80 text-lg uppercase tracking-tight md:mt-12 md:text-3xl">
          تتمحور رؤيتنا حول إحياء التراث الجزائري الغني من خلال محتوى عصري
          وجذاب، يربط الشباب بجذورهم ويعزز لديهم الشعور بالانتماء والاعتزاز
          بثقافتهم، وذلك عبر منصة تفاعلية تجمع بين المعرفة والترفيه وتفتح آفاقًا
          جديدة للإبداع والمشاركة المجتمعية.
        </p>
      </div>
    </section>
  );
}
