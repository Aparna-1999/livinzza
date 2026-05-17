import React from "react";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

interface CollegeCardProps {
  name: string;
  location: string;
  hostels: string;
  className?: string;
}

const CollegeCard = ({ name, location, hostels, className }: CollegeCardProps) => {
  return (
    <article className={`rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-slate-950 ${className ?? ""}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white">
          <GraduationCap className="h-6 w-6" />
        </div>
        <Badge variant="secondary" className="rounded-full bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300">
          {hostels}
        </Badge>
      </div>

      <Typography variant="h4" className="mt-5 text-xl text-slate-900 dark:text-white">
        {name}
      </Typography>
      <Typography variant="p" className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {location}
      </Typography>

      <Button href="/hostels" variant="link" className="mt-6 h-auto p-0 text-sm font-semibold text-sky-500 dark:text-sky-300">
        Find hostels <ArrowRight className="h-4 w-4" />
      </Button>
    </article>
  );
};

export { CollegeCard };
