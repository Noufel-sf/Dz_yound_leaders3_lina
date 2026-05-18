"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

interface AccordionItemProps {
  item: FAQItem;
}

export default function AccordionItem({ item }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={[
        "cursor-pointer border-b border-primary/15 px-4 transition-colors duration-300 sm:px-8",
        open ? "bg-primary/10" : "bg-transparent",
      ].join(" ")}
    >
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full cursor-pointer items-center justify-between gap-6 px-0 py-5 text-right"
        aria-expanded={open}
      >
        <span
          className={[
            "text-base font-medium leading-snug text-slate-800 transition-colors duration-300 sm:text-lg",
            open ? "text-primary" : "text-slate-800",
          ].join(" ")}
        >
          {item.question}
        </span>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 group-hover:scale-105">
          {open ? (
            <Minus size={14} strokeWidth={2.2} />
          ) : (
            <Plus size={14} strokeWidth={2.2} />
          )}
        </span>
      </button>

      {/* Answer */}
      <div
        className={[
          "overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-96 pb-6" : "max-h-0",
        ].join(" ")}
      >
        <p className="pr-0 text-right text-sm leading-8 text-slate-600 sm:pr-2 sm:text-base">
          {item.answer}
        </p>
      </div>
    </div>
  );
}