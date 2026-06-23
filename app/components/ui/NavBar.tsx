"use client";

import { forwardRef, useRef, useState } from "react";
import FullScreenMenu from "./FullScreenMenu";
import HistoryButton from "./HistoryButton";
import TransitionLink from "./TransitionLink";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const NavBar = forwardRef<HTMLDivElement>((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);



  useGSAP(() => {
    if (!navRef.current) return;

    let lastScroll = 0;

    ScrollTrigger.create({
      start: 0,
      end: "max",

      onUpdate: (self) => {
        const currentScroll = self.scroll();

        // scrolling down
        if (currentScroll > lastScroll && currentScroll > 80) {
          gsap.to(navRef.current, {
            y: -120,
            duration: 0.35,
            ease: "power2.out",
          });
        }

        // scrolling up
        else {
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        }

        lastScroll = currentScroll;
      },
    });
  }, []);

  return (
    <>
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <nav
        ref={navRef}
        className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between px-6 md:px-12 backdrop-blur-xl bg-black/20"
      >
        {/* LEFT SECTION */}
        <div className="pointer-events-auto order-1 flex flex-1 items-center justify-start md:order-0">
          {/* Desktop Menu Icon */}
          <div
            onClick={() => setIsMenuOpen(true)}
            className="group hidden w-8 cursor-pointer flex-col gap-1.5 md:flex"
          >
            <div className="h-1 w-full origin-left rounded-full bg-white transition-transform group-hover:scale-x-110 group-hover:bg-primary" />
            <div className="h-1 w-6 origin-left rounded-full bg-white transition-transform group-hover:scale-x-125 group-hover:bg-primary" />
          </div>

          {/* Mobile Logo */}
          <TransitionLink href="/" className="md:hidden">
            <h1 className="heading text-3xl font-bold text-primary">
              ارث و اثر
            </h1>
          </TransitionLink>
        </div>

        {/* CENTER LOGO */}
        <div className="pointer-events-auto absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <TransitionLink href="/">
            <h1 className="heading text-3xl font-bold text-primary">
              ارث و اثر
            </h1>
          </TransitionLink>
        </div>

        {/* RIGHT */}
        <div className="pointer-events-auto order-2 flex flex-1 items-center justify-end gap-4 md:order-0">
          <TransitionLink href="/contact">
            <HistoryButton
              text="تواصل معنا"
              bgColor="#ffd230"
              shadowColor="#ffd230"
              paddingX="px-6"
              paddingY="py-2"
              fontSize="text-base"
            />
          </TransitionLink>

          {/* Mobile Menu */}
          <div
            onClick={() => setIsMenuOpen(true)}
            className="group flex w-8 cursor-pointer flex-col items-end gap-1.5 md:hidden"
          >
            <div className="h-1 w-full rounded-full bg-white transition-all group-hover:bg-primary" />
            <div className="h-1 w-6 rounded-full bg-white transition-all group-hover:w-full group-hover:bg-primary" />
          </div>
        </div>
      </nav>
    </>
  );
});

NavBar.displayName = "NavBar";

export default NavBar;
