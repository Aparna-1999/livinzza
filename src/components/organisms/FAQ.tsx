"use client";

import React, { useState } from "react";
import { Typography } from "../atoms/Typography";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Livinnza work for colleges and universities?",
    answer: "We partner with institutions to create dedicated off-campus hostel arrangements that preserve student trust, improve capacity planning, and maintain the institution's reputation.",
  },
  {
    question: "Can students and parents still search hostels directly?",
    answer: "Yes. Students and parents can use Livinnza to filter verified hostel options in Bangalore by locality, facilities, and suitability for academic living.",
  },
  {
    question: "Does Livinnza support brand-specific hostel allocation?",
    answer: "Yes. Hostels can be aligned to a specific college or university so the accommodation experience remains dedicated to that institution's students.",
  },
  {
    question: "Why is this model valuable for college leadership?",
    answer: "It allows institutions to increase intake and support student housing without new construction, while retaining control over quality, safety, and credibility.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-slate-200 dark:border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-6 text-left outline-none transition-colors hover:text-primary/80 focus:outline-none focus-visible:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold leading-7 text-slate-900 dark:text-slate-50 md:text-lg">{question}</span>
        <span className="flex-shrink-0">
          {isOpen ? <Minus className="h-5 w-5 text-primary dark:text-primary" /> : <Plus className="h-5 w-5 text-slate-400" />}
        </span>
      </button>
      {isOpen ? (
        <div className="pb-6 pr-10">
          <Typography variant="p" className="mt-0 max-w-3xl text-slate-600 dark:text-slate-300">
            {answer}
          </Typography>
        </div>
      ) : null}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Typography variant="small" className="uppercase tracking-[0.26em] text-primary dark:text-primary/80">
            FAQ
          </Typography>
          <Typography variant="h2" className="mt-4 text-3xl text-slate-900 md:text-4xl dark:text-white">
            Questions from institutions, students, and parents
          </Typography>
          <Typography variant="p" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Clear answers for colleges, students, and parents evaluating trusted hostel accommodation.
          </Typography>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white px-6 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_60px_rgba(2,6,23,0.24)]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { FAQ };
