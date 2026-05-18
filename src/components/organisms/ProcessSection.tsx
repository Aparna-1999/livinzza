import React from "react";
import { Typography } from "../atoms/Typography";

const steps = [
  {
    number: "1",
    title: "Institutional alignment",
    description: "We understand your capacity needs, brand expectations, student intake, and location priorities before any hostel is proposed.",
  },
  {
    number: "2",
    title: "Dedicated hostel allocation",
    description: "Livinnza curates off-campus hostels that are reserved for your students and managed in a disciplined, college-first manner.",
  },
  {
    number: "3",
    title: "Student onboarding and support",
    description: "Students and parents receive a verified discovery process, while your institution keeps its credibility intact.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Typography variant="small" className="uppercase tracking-[0.26em] text-primary dark:text-primary/80">
            How Livinnza Works
          </Typography>
          <Typography variant="h2" className="mt-4 text-3xl md:text-4xl text-slate-900 dark:text-white">
            A structured model built for higher education institutions
          </Typography>
          <Typography variant="p" className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            From campus partnership to verified student housing, every step is designed to reduce operational burden and strengthen trust.
          </Typography>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-sm font-black text-white">
                {step.number}
              </div>
              <Typography variant="h4" className="mt-5 text-xl text-slate-900 dark:text-white">
                {step.title}
              </Typography>
              <Typography variant="p" className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {step.description}
              </Typography>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProcessSection };
