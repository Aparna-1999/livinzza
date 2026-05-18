import React from "react";
import { Badge } from "../atoms/Badge";
import { Typography } from "../atoms/Typography";
import { Building2, FileText, Users, ClipboardList, MapPinned, GraduationCap } from "lucide-react";

const features = [
  {
    title: "Institutional Partnership",
    description:
      "We design hostel solutions around the identity, standards, and intake needs of each institution.",
    icon: Building2,
  },
  {
    title: "Verified Bangalore Discovery",
    description:
      "Students and parents can filter hostels by locality, commute, and facilities without compromising trust.",
    icon: MapPinned,
  },
  {
    title: "Safety and Discipline",
    description:
      "Hostels are expected to meet a standard that supports academic focus, supervision, and peace of mind.",
    icon: ClipboardList,
  },
  {
    title: "Credibility Protection",
    description:
      "The housing experience reflects well on the institution because it is curated with care and consistency.",
    icon: FileText,
  },
  {
    title: "College-Linked Allocation",
    description:
      "Dedicated hostel beds can be aligned with a university or college so the allocation remains exclusive.",
    icon: Users,
  },
  {
    title: "Academic Living Experience",
    description:
      "Quiet spaces, orderly routines, and study-friendly environments are central to the Livinnza model.",
    icon: GraduationCap,
  },
];

const steps = [
  ["01", "Partner Setup", "We align with the institution's hostel capacity, safety expectations, and location strategy."],
  ["02", "Dedicated Allocation", "Student housing is reserved for the college community and managed with a disciplined approach."],
  ["03", "Direct Search", "Students and parents can still discover suitable hostels through a trusted Bangalore-first search experience."],
  ["04", "Unified Trust Layer", "One brand standard supports college leadership, hostel operators, students, and parents."],
];

const KnowMoreSections = () => {
  return (
    <>
      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Badge variant="secondary" className="rounded-full bg-slate-200 text-slate-700 dark:bg-white/5 dark:text-slate-200">
                Core Values
              </Badge>
              <Typography variant="h2" className="mt-4 text-3xl md:text-4xl text-slate-900 dark:text-slate-50">
                What makes Livinnza different
              </Typography>
            </div>
            <Typography variant="p" className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              We combine institutional housing strategy with a direct student discovery experience, so every audience gets the right level of clarity.
            </Typography>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_18px_50px_rgba(2,6,23,0.28)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Typography variant="h4" className="mt-5 text-xl text-slate-900 dark:text-slate-50">
                    {feature.title}
                  </Typography>
                  <Typography variant="p" className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </Typography>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="rounded-full bg-slate-200 text-slate-700 dark:bg-white/5 dark:text-slate-200">
              For Institutions and Families
            </Badge>
            <Typography variant="h2" className="mt-4 text-3xl md:text-4xl text-slate-900 dark:text-slate-50">
              A model that balances scale, safety, and reputation
            </Typography>
            <Typography variant="p" className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Livinnza is built for higher education leaders who want responsible growth, and for families who expect verified accommodation with academic discipline.
            </Typography>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              {steps.map(([number, title, description]) => (
                <article key={number} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_18px_50px_rgba(2,6,23,0.28)]">
                  <div className="text-sm font-black uppercase tracking-[0.26em] text-primary dark:text-primary">{number}</div>
                  <Typography variant="h4" className="mt-3 text-xl text-slate-900 dark:text-slate-50">
                    {title}
                  </Typography>
                  <Typography variant="p" className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {description}
                  </Typography>
                </article>
              ))}
            </div>

            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_18px_50px_rgba(2,6,23,0.28)]">
              <div className="rounded-[1.5rem] bg-slate-100 p-6 text-slate-900 dark:bg-slate-900 dark:text-white">
                <div className="text-sm uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">Livinnza Mobile 9:41 AM</div>
                <div className="mt-4 text-2xl font-black">The Livinnza Standard</div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {["College-led", "Verified", "Discipline", "Trust"].map((pillar) => (
                    <div key={pillar} className="rounded-xl bg-slate-200 p-3 text-center font-semibold text-slate-800 dark:bg-white/10 dark:text-slate-200">
                      {pillar}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-5 dark:bg-white/5">
                <div className="text-sm uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">What We Protect</div>
                <div className="mt-4 space-y-4">
                  {[
                    "Institutional reputation",
                    "Student safety and comfort",
                    "Parent confidence and clarity",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-950 dark:text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { KnowMoreSections };
