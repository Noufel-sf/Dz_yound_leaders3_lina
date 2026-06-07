"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const DEFAULT_END_DESKTOP = "+=200%";
const DEFAULT_END_MOBILE = "+=150%";

gsap.registerPlugin(ScrollTrigger);

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 8.5h2.5V5.8H14c-2 0-3.5 1.5-3.5 3.5V11H8v2.8h2.5V19H13v-5.2h2.2L15.6 11H13V9.3c0-.4.3-.8 1-.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 11.9a8 8 0 1 1-14.4-4.7L4.5 4l3.4 1.1A8 8 0 0 1 20 11.9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8.7c.2-.4.5-.5.9-.4l.9.4c.3.1.5.4.5.7l-.2 1c0 .2 0 .4.2.6.3.5.8 1.1 1.4 1.6.2.2.5.2.7.1l.8-.3c.3-.1.6 0 .8.2l.7.7c.2.2.2.6 0 .8-.4.6-1.1.9-1.9.8-1.4-.1-3-.9-4.4-2.3-1.3-1.4-2.1-2.9-2.3-4.3-.1-.8.2-1.5.8-1.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
  const logoCardRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

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
              id: "owner-section",
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
              logoCardRef.current,
              { y: 40, opacity: 0, scale: 0.94 },
              { y: 0, opacity: 1, scale: 1, duration: 1 },
              0.2,
            )
            .fromTo(
              descriptionRef.current,
              { y: 25, opacity: 0 },
              { y: 0, opacity: 1, duration: 1 },
              0.3,
            )
            .fromTo(
              socialsRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 1 },
              0.4,
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
      className={`relative py-24 min-h-screen flex items-center justify-center w-full overflow-hidden bg-primary-950 ${
        className ?? ""
      }`}
    >
      <div
        ref={headlineRef}
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-full"
      >
        <h2 className="header-title -rotate-2 flex flex-col items-center heading justify-center gap-x-6 font-display text-[12vw] uppercase leading-none tracking-tighter  md:flex-row md:text-[8rem]">
          <span className=" heading text-white "> صاحبة</span>
          <span className=" heading text-primary"> المشروع</span>
        </h2>
        <div
          ref={logoCardRef}
          className="mx-auto mb-8 w-full max-w-[18rem] mt-20 -rotate-2 border-4 border-black bg-white p-4 shadow-[10px_8px_0_0_#111111] sm:max-w-[24rem] lg:max-w-120"
        >
          <div className="relative aspect-16/5 w-full">
            <Image
              src="/fullLogo.png"
              alt="Full logo"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-2 flex w-full max-w-3xl flex-col items-center gap-5 px-4 text-center sm:px-0">
          <p
            ref={descriptionRef}
            className="max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-lg"
          >
            شعارنا يعكس هوية المبادرة وروحها الشبابية. نحن نبني مساحة تجمع
            الإلهام، التطوير، والعمل الجماعي لنصنع أثرًا حقيقيًا في المجتمع.
          </p>

          <div
            ref={socialsRef}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center border-2 border-black bg-white text-black shadow-[4px_4px_0_0_#111111] transition-transform duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center border-2 border-black bg-white text-black shadow-[4px_4px_0_0_#111111] transition-transform duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center border-2 border-black bg-white text-black shadow-[4px_4px_0_0_#111111] transition-transform duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
