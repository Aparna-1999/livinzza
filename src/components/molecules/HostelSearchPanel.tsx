import React from "react";
import { Search, Building2, MapPin } from "lucide-react";
import { Button } from "../atoms/Button";

const fieldStyles =
  "flex min-h-20 flex-1 items-center gap-3 bg-white px-6 py-4 text-left transition-colors hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900";

const HostelSearchPanel = () => {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white shadow-md dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_18px_60px_rgba(2,6,23,0.28)]">
      <div className="grid gap-px overflow-hidden rounded-[2rem] bg-slate-200 lg:grid-cols-[1fr_1fr_1fr_auto] dark:bg-white/10">
        <button type="button" className={fieldStyles}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sky-500 dark:bg-white/10 dark:text-sky-300">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">City</div>
            <div className="text-sm italic text-slate-500 dark:text-slate-400">Search City</div>
          </div>
        </button>

        <button type="button" className={fieldStyles}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sky-500 dark:bg-white/10 dark:text-sky-300">
            <Building2 className="h-4 w-4" />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">College</div>
            <div className="text-sm italic text-slate-500 dark:text-slate-400">Search College</div>
          </div>
        </button>

        <div className={fieldStyles}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sky-500 dark:bg-white/10 dark:text-sky-300">
            <Search className="h-4 w-4" />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Hostel</div>
            <div className="text-sm italic text-slate-500 dark:text-slate-400">Search hostel</div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white px-6 py-4 lg:px-5 dark:bg-slate-950">
          <Button className="h-12 rounded-2xl px-8" size="md">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export { HostelSearchPanel };
