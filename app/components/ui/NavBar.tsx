"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "عن إرث", to: "/about" },
  // { label: "الموجهات", to: "#" },
  // { label: "المدونة", to: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="text-right">
              <div className={`heading text-2xl font-bold tracking-tight transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}>
                إرث و اثر
              </div>
             {/*  <div className={`text-xs font-medium transition-colors ${
                scrolled ? "text-slate-600" : "text-white/70"
              }`}>
                HERITAGE TRAVEL AGENCY
              </div> */}
            </div>
          </Link>

          {/* Desktop links */}
          <div className={`hidden items-center gap-12 text-sm font-medium md:flex text-white`}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`relative transition-colors ${
                  scrolled ? "hover:text-primary" : "hover:text-primary"
                } after:absolute after:-bottom-1 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 hover:shadow-2xl hover:scale-105"
            >
              احجز الآن
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`rounded-md p-2 md:hidden transition-colors ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
            aria-label="فتح القائمة"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* ── Mobile Sidebar ── */}

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={[
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Sidebar panel */}
      <aside
        className={[
          "fixed right-0 top-0 z-50 h-full w-72 border-l border-primary/15 bg-white shadow-2xl md:hidden",
          "flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between border-b border-primary/10 px-6 py-5">
          <div className="text-right">
            <div className="heading text-xl font-bold tracking-tight text-primary">
              إرث
            </div>
            <div className="text-xs font-medium text-slate-500">
              HERITAGE
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="إغلاق القائمة"
            className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-right text-base font-medium text-slate-700 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 pb-8">
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110"
          >
            احجز الآن
          </Link>
        </div>
      </aside>
    </>
  );
}
