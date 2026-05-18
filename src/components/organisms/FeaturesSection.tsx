import React from "react";
import { Typography } from "../atoms/Typography";
import { ShieldCheck, Building2, MapPinned, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "College-First Allocation",
      description: "Hostels are aligned to the needs of a specific university or college, not mixed arbitrarily.",
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
    },
    {
      title: "Managed Off-Campus Capacity",
      description: "Expand student accommodation without adding pressure to your core campus infrastructure.",
      icon: <Building2 className="h-8 w-8 text-white" />,
    },
    {
      title: "Verified Bangalore Discovery",
      description: "Students and parents can filter trusted hostel options by locality, commute, and facilities.",
      icon: <MapPinned className="h-8 w-8 text-white" />,
    },
    {
      title: "Parent Confidence",
      description: "The housing experience is designed to feel disciplined, transparent, and institutionally responsible.",
      icon: <Users className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <section id="why-us" className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Typography variant="small" className="uppercase tracking-[0.26em] text-primary dark:text-primary/80">
            Why Livinnza
          </Typography>
          <Typography variant="h2" className="mt-4 text-3xl md:text-4xl text-slate-900 dark:text-white">
            Designed for institutions. Trusted by families.
          </Typography>
          <Typography variant="p" className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Livinnza brings together college leadership, hostel operations, students, and parents under one high-trust accommodation model.
          </Typography>
        </div>
        
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                {feature.icon}
              </div>
              <Typography variant="h4" className="mb-2 text-xl text-slate-900 dark:text-white">{feature.title}</Typography>
              <Typography variant="p" className="mt-0 text-sm text-slate-600 dark:text-slate-300">{feature.description}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
