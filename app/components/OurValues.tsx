'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    id: '01',
    sub: 'الهوية',
    title: 'نُمكّن الهوية',
    desc: 'ندعم الشباب للتعبير عن هويتهم السياسية والثقافية بطريقة تعكس قيم المواطنة، الاحترام، والانفتاح.',
  },
  {
    id: '02',
    sub: 'الثقافة',
    title: 'نصون ثقافتنا',
    desc: 'نُؤمن أن الوعي السياسي يبدأ من فهم الثقافة الوطنية وحمايتها من التهميش، بروح مسؤولة ومستنيرة.',
  },
  {
    id: '03',
    sub: 'الأصالة',
    title: 'الأصالة والاستدامة',
    desc: 'نستلهم من قيمنا الأصيلة لنصنع أثرًا مستدامًا يربط بين الحاضر والمستقبل في العمل العام.',
  },
  {
    id: '04',
    sub: 'الحقيقة',
    title: 'نستكشف الحقيقة',
    desc: 'نبحث عن عمق المعنى وندرب الشباب على التفكير النقدي لفهم الواقع وصناعة قرارات أكثر وعيًا.',
  },
];

export default function OurValues() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  const value = VALUES[activeIndex];

  // Navigate between values with GSAP transition
  const navigate = (direction: 1 | -1) => {
    const next = (activeIndex + direction + VALUES.length) % VALUES.length;

    const tl = gsap.timeline({
      onComplete: () => setActiveIndex(next),
    });

    // Slide out current
    tl.to([subRef.current, titleRef.current], {
      yPercent: direction > 0 ? -40 : 40,
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
      stagger: 0.04,
    });
    tl.to(descRef.current, { opacity: 0, duration: 0.25, ease: 'power2.in' }, '<');
  };

  // Slide in new value after state updates — triggered by activeIndex change
  useGSAP(
    () => {
      gsap.fromTo(
        [subRef.current, titleRef.current],
        { yPercent: 30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.06 }
      );
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', delay: 0.1 }
      );
    },
    { dependencies: [activeIndex] }
  );

  // ScrollTrigger animations
  useGSAP(
    () => {
      // Section parallax slide-up
      gsap.fromTo(
        sectionRef.current,
        { yPercent: 10 },
        {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
          },
        }
      );

      // Label entrance
      gsap.fromTo(
        '.values-label',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Decorative line expand
      gsap.fromTo(
        '.values-line',
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const goTo = (i: number) => {
    if (i === activeIndex) return;
    const dir = i > activeIndex ? 1 : -1;
    const tl = gsap.timeline({ onComplete: () => setActiveIndex(i) });
    tl.to([subRef.current, titleRef.current], {
      yPercent: dir > 0 ? -40 : 40,
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
      stagger: 0.04,
    });
    tl.to(descRef.current, { opacity: 0, duration: 0.25, ease: 'power2.in' }, '<');
  };

  return (
    <section
      ref={sectionRef}
      id="values"
      className="relative overflow-hidden px-6 pb-24 pt-20 md:px-20"
      dir="rtl"
    >
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        // style={{
        //   backgroundImage:
        //     'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        // }}
      />

      {/* ── TOP LABEL ── */}
      <div className="values-label mb-16 flex items-center gap-6 md:mb-24">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">
          قيمنا
        </span>
        <div className="h-px w-12 bg-white/10" />
        <span className="font-mono text-xs text-white/20">
          {value.id} / {String(VALUES.length).padStart(2, '0')}
        </span>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex flex-col justify-between gap-16 md:flex-row md:items-end">

        {/* Giant title side */}
        <div className="flex-1">
          <div ref={subRef} className="mb-20 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {value.sub}
          </div>
          <h2
            ref={titleRef}
            className="heading text-[3.5rem] font-black leading-none tracking-tight text-white md:text-[7rem] lg:text-[9rem]"
          >
            {value.title}
            <span className="text-primary">.</span>
          </h2>
        </div>

        {/* Description + nav side */}
        <div ref={descRef} className="flex max-w-sm flex-col gap-10 pb-2">
          <p className="text-right text-base leading-relaxed text-white/60 md:text-lg">
            {value.desc}
          </p>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate(-1)}
              aria-label="السابق"
              className="group flex h-12 w-12 items-center cursor-pointer justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-primary hover:bg-primary/10"
            >
              <span className="text-white/60  transition-colors group-hover:text-primary">→</span>
            </button>
            <button
              onClick={() => navigate(1)}
              aria-label="التالي"
              className="group cursor-pointer flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-primary hover:bg-primary/10"
            >
              <span className="text-white/60 transition-colors group-hover:text-primary">←</span>
            </button>

            {/* Progress dots */}
            <div className="mr-2 flex items-center gap-2">
              {VALUES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`القيمة ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── DECORATIVE LINE ── */}
      <div className="values-line mt-20 h-px w-full bg-white/10" />
    </section>
  );
}
