"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PROBLEM_AND_OBJECTIVES_DATA = [
  {
    id: "01",
    title: "الإشكالية",
    desc: "فجوة واضحة بين التعليم التقليدي ومتطلبات السوق، وضعف في امتلاك أدوات الذكاء الاصطناعي والمسارات التقنية لدى الشباب.",
    color: "bg-amber-200",
    textColor: "text-rose-900",
  },
  {
    id: "02",
    title: "الأهداف",
    desc: "تمكين الشباب بالمعرفة القيادية والمهارات التقنية الأساسية، وفتح مسارات تخصصية تطبيقية لبناء الكفاءة والجاهزية المهنية.",
    color: "bg-white",
    textColor: "text-black",
  },
  {
    id: "03",
    title: "الحلول",
    desc: "برنامج تكويني متدرج يجمع بين التعلم التطبيقي، المشاريع الواقعية، والتوجيه المستمر لصناعة أثر حقيقي.",
    color: "bg-green-700",
    textColor: "text-white",
  },
];

const ProblemAndObjectives = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".problem-card");

      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          rotate: 2,
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-primary-950 mt-20 lg:mt-30 py-16 lg:h-screen lg:py-0 px-6 lg:px-12"
    >
      {/* Title */}
      <div className="relative flex w-full items-center justify-center px-6 lg:mt-30 lg:px-8">
        <h2 className="featured text-white heading select-none text-center font-display text-[15vw] uppercase leading-none tracking-tighter sm:text-[11vw]">
          الاشكالية و
          <span className="text-primary heading"> الحلول</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="relative mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {PROBLEM_AND_OBJECTIVES_DATA.map((item) => (
          <div
            key={item.id}
            className={` cursor-pointer flex min-h-[58vh] flex-col items-center justify-center border-4 border-black ${item.color} ${item.textColor} px-6 py-12 shadow-[5px_5px_0_0_#111111]`}
          >
            <div className="service-content flex max-w-4xl flex-col items-center text-center">
              <span className="mb-4 font-mono text-sm uppercase tracking-widest opacity-40">
                {item.id}
              </span>

              <h2 className="mb-6 font-display heading text-5xl uppercase leading-[0.9] md:text-7xl">
                {item.title}
              </h2>

              <p className="max-w-xl font-sans text-lg opacity-70">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemAndObjectives;