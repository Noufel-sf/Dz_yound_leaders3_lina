'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AccordionItem, { type FAQItem } from './AcordionItem';

gsap.registerPlugin(ScrollTrigger);

export const faqs: FAQItem[] = [
  {
    id: 'name',
    question: "لماذا «إرث» و«أثر»؟",
    answer:
      "الأثر هو ما تركه الأجداد من معالم وحكايا وبصمات مادية في عمق التاريخ، أما الإرث فهو المسؤولية التي نحملها اليوم لتوثيق هذا التاريخ ونقله إلى العالم الرقمي. يعكس اسم المشروع انتقالنا من مرحلة التأمل في التاريخ إلى مرحلة صناعته وحمايته للأجيال القادمة.",
  },
  {
    id: 'content',
    question: "لماذا اخترتم المحتوى التاريخي؟",
    answer:
      "لأن تاريخ الجزائر يزخر بحقب مغيبة وقصص ملهمة تستحق أن تُروى بلسان شبابي معاصر. نؤمن أن فهم الهوية الوطنية واستيعاب دروس الماضي هو أساس بناء جيل واعٍ وقادر على قيادة المستقبل.",
  },
  {
    id: 'founders',
    question: "من يقف خلف هذا المشروع؟",
    answer:
      "يقف خلف المشروع فريق من الطاقات الشبابية الطموحة ضمن برنامج Dz Young Leaders. يجمعنا شغف مشترك يتمثل في تمكين الشباب وتطوير المبادرات المبتكرة واستغلال الوسائط الرقمية الحديثة لخدمة التراث والهوية الوطنية.",
  },
  {
    id : "guests",
    question: "هل ستستضيفون ضيوفًا في البودكاست؟",
    answer:
      "نعم، سنستضيف باحثين شبابًا ومتخصصين في علم الآثار والتراث، بالإضافة إلى مبدعين ومهتمين بالتاريخ والثقافة، لإثراء النقاش وتقديم رؤى متنوعة حول حماية الإرث الجزائري وتطويره في العصر الرقمي.",
  },
  {
    id : 'podcast',
    question: "ما هي أهم المواقع الأثرية في ولايتك؟",
    answer:
      "نسعى من خلال حلقاتنا إلى تسليط الضوء على أبرز المواقع الأثرية والمعالم التاريخية في مختلف ولايات الجزائر، والتعريف بقيمتها الحضارية ودورها في تشكيل الذاكرة الوطنية.",
  },
  {
    id: 'apply',
    question: "ما أكثر موقع أثري ترغبون في التعرف عليه من خلال عدستنا؟",
    answer:
      "نؤمن بأن لكل موقع أثري قصة تستحق أن تُروى. لذلك نرحب دائمًا باقتراحات متابعينا حول المواقع والمعالم التي يرغبون في استكشافها والتعرف على تاريخها من خلال محتوانا.",
  },
];
export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Label fade-in on scroll
      gsap.fromTo(
        '.faq-label',
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

      // Heading slides up
      gsap.fromTo(
        '.faq-heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Each row staggers in
      gsap.fromTo(
        '.faq-row',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 80%',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="faq"
      dir="rtl"
      className="relative overflow-hidden  px-6 pb-28 pt-20 md:px-20"
    >
      {/* ── TOP LABEL ── */}
      <div className="faq-label mb-16 flex items-center gap-6">
        <span className="font-mono text-lg uppercase tracking-[0.3em] text-primary">
          الأسئلة الشائعة
        </span>
        <div className="h-px w-12 bg-white/10" />
        <span className="font-mono text-lg text-primary">
          {String(faqs.length).padStart(2, '0')} سؤال
        </span>
      </div>

      {/* ── HEADING ── */}
      <div className="faq-heading mb-20 max-w-3xl">
        <h2 className="heading text-[2.8rem] font-black leading-tight tracking-tight text-white md:text-[7rem]">
          كل ما تحتاج معرفته
          <br />
          <span className="text-primary heading">قبل الانطلاق معنا</span>
          <span className="text-primary">.</span>
        </h2>
      </div>

      {/* ── ACCORDION LIST ── */}
      <div className="faq-list mx-auto max-w-8xl">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-row">
            <AccordionItem item={faq} />
          </div>
        ))}
      </div>

      {/* ── FOOTER NOTE ── */}
      <p className="mt-16 text-center font-mono text-sm text-white/30">
        لديك سؤال آخر؟{' '}
        <a
          href="/contact"
          className="text-primary underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          تواصل معنا مباشرة
        </a>
      </p>

      {/* Decorative line */}
      <div className="mt-20 h-px w-full bg-white/10" />
    </section>
  );
}