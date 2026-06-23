"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import TransitionLink from "./ui/TransitionLink";

const cards = [
  { img: "/p1.jpg", rotate: "-2" },
  { img: "/p2.jpg", rotate: "3" },
  { img: "/p3.jpg", rotate: "-1" },
  { img: "/p4.jpg", rotate: "4" },
  { img: "/p5.jpg", rotate: "-3" },
  { img: "/p6.jpg", rotate: "2" },
];

const TestimonialCard = ({ img, rotate }: { img: string; rotate: string }) => (
  <div
    className="testimonial-card m-4 flex aspect-square shrink-0 cursor-pointer items-center justify-center overflow-hidden border-4 shadow-[10px_10px_0_0_rgba(246,187,4,1)] border-white  transition-all md:m-8"
    style={{
      width: "clamp(20rem, 35vmin, 30rem)",
      transform: `rotate(${rotate}deg)`,
    }}
  >
    <Image
      src={img}
      alt="Bimo story"
      width={500}
      height={500}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
);

export default function TestimonialSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // 1. Setup the Marquee (Runs on ALL screens)
      const marquee = gsap.to(".card-row", {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      // 2. Setup the Responsive Logic
      mm.add("(min-width: 768px)", () => {
        // DESKTOP ONLY: Add the wiggle
        gsap.to(".testimonial-card", {
          rotation: "+=6",
          yoyo: true,
          repeat: -1,
          duration: 1.5,
          ease: "sine.inOut",
          stagger: { each: 0.3, from: "random" },
        });

        // Desktop Hover Logic
        const handleEnter = () => {
          marquee.pause();
          gsap.getTweensOf(".testimonial-card").forEach((t) => t.pause());
        };
        const handleLeave = () => {
          marquee.play();
          gsap.getTweensOf(".testimonial-card").forEach((t) => t.play());
        };

        const row = document.querySelector(".card-row");
        row?.addEventListener("mouseenter", handleEnter);
        row?.addEventListener("mouseleave", handleLeave);

        return () => {
          row?.removeEventListener("mouseenter", handleEnter);
          row?.removeEventListener("mouseleave", handleLeave);
        };
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(".testimonial-card", { clearProps: "rotation" });
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center "
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("/img/bg-pattern.jpg")`,
          backgroundSize: "cover",
        }}
      />

      <div className="z-10 mb-6 px-6 text-center md:mb-6">
        <h2 className="text-[5rem] leading-tight heading font-black tracking-tighter text-white uppercase md:text-[12rem]">
          <br className="md:hidden" /> {"بعض "}
          <span className="text-primary heading">المناطق</span>
        </h2>
      </div>

      <div className="relative z-10 mb-10 w-full overflow-hidden md:mb-[2vh]">
        <div className="card-row flex w-fit">
          {[...cards, ...cards].map((card, idx) => (
            <TestimonialCard key={idx} img={card.img} rotate={card.rotate} />
          ))}
        </div>
      </div>

      <div className="testimonial-footer z-10 flex flex-col items-center gap-6 md:mb-[2vh] md:gap-[3vh]">
       <TransitionLink
              href="/about"
              className="inline-flex bg-secondary items-center justify-center   px-6 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-primary hover:text-black hover:scale-105"
            >
              اكتشف المزيد
            </TransitionLink>
      </div>
    </section>
  );
}
 