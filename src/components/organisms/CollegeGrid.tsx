import React from "react";
import { Typography } from "../atoms/Typography";
import { CollegeCard } from "../molecules/CollegeCard";

const colleges = [
  {
    name: "Dedicated College Allocation",
    location: "Reserved beds for one institution and its student community",
    hostels: "Priority 01",
  },
  {
    name: "College-Branded Residence",
    location: "Managed off-campus hostels in the institution's name",
    hostels: "Brand first",
  },
  {
    name: "Proximity Planning",
    location: "Strategically placed near universities and academic corridors",
    hostels: "Low commute",
  },
  {
    name: "Operational Oversight",
    location: "Safety, discipline, and reporting aligned with academic standards",
    hostels: "Managed care",
  },
];

const CollegeGrid = () => {
  return (
    <section id="colleges" className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Typography variant="small" className="uppercase tracking-[0.26em] text-primary dark:text-primary/80">
            For Universities & Colleges
          </Typography>
          <Typography variant="h2" className="mt-4 text-3xl md:text-4xl text-slate-900 dark:text-white">
            A trusted hostel extension for your institution
          </Typography>
          <Typography variant="p" className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Livinnza helps colleges scale student accommodation without compromising reputation, safety, or the quality of the student experience.
          </Typography>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {colleges.map((college) => (
            <CollegeCard key={college.name} {...college} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { CollegeGrid };
