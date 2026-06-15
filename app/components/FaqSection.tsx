'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AccordionItem, { type FAQItem } from './AcordionItem';

gsap.registerPlugin(ScrollTrigger);

const faqs: FAQItem[] = [
  {
    id: 'eligibility',
    question: 'لمن صُمم مشروع البوصلة؟',
    answer:
      'صُمم المشروع للشباب الجزائري الطموح الراغب في تطوير وعيه السياسي وفهم آليات العمل المؤسساتي وصناعة القرار.',
  },
  {
    id: 'content',
    question: 'ما المحاور التي يغطيها البرنامج؟',
    answer:
      'يغطي البرنامج مسارات مهارية، قانونية، إدارية وسياسية، مع تدريبات تطبيقية تساعدك على القيادة وتحمل المسؤولية.',
  },
  {
    id: 'duration',
    question: 'كم تستغرق التكوينات؟',
    answer:
      'مدة التكوين تختلف حسب المسار، ويتم الإعلان عن الرزنامة الزمنية لكل دفعة قبل الانطلاق لضمان جاهزية المشاركين.',
  },
  {
    id: 'certificate',
    question: 'هل يحصل المشاركون على شهادة؟',
    answer:
      'نعم، يحصل المشاركون الذين يُتمّون المسار التدريبي بنجاح على شهادة مشاركة توثق اكتسابهم للمهارات الأساسية.',
  },
  {
    id: 'selection',
    question: 'هل التسجيل مفتوح للجميع؟',
    answer:
      'يتم فتح التسجيل وفق دفعات، وقد يُعتمد انتقاء المشاركين حسب المقاعد المتاحة ومدى توافق الدافع الشخصي مع أهداف المشروع.',
  },
  {
    id: 'partners',
    question: 'ما الجهات الداعمة للمشروع؟',
    answer:
      'تم اختيار مشروع البوصلة ضمن برنامج DZ Young Leaders التابع لوزارة الشباب وبالتنسيق مع المجلس الأعلى للشباب.',
  },
  {
    id: 'apply',
    question: 'كيف يمكنني الانضمام؟',
    answer:
      'يمكنك متابعة قنوات المشروع الرسمية وملء استمارة التسجيل عند فتح الدفعة الجديدة، وسيتم التواصل معك لتأكيد القبول والخطوات التالية.',
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