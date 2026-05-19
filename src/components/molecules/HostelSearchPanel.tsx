"use client";

import React, { useState } from "react";
import { Search, Building2, MapPin } from "lucide-react";
import { Button } from "../atoms/Button";

interface HostelSearchPanelProps {
  initialCity?: string;
  initialCollege?: string;
  initialHostel?: string;
}

const fieldStyles =
  "flex min-h-20 flex-1 items-center gap-3 bg-white px-6 py-4 text-left transition-colors hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10";

const HostelSearchPanel = ({
  initialCity = "",
  initialCollege = "",
  initialHostel = "",
}: HostelSearchPanelProps) => {
  const [city, setCity] = useState(initialCity);
  const [college, setCollege] = useState(initialCollege);
  const [hostel, setHostel] = useState(initialHostel);
  const collegeRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("focusCollege") === "true") {
      collegeRef.current?.focus();
      const url = new URL(window.location.href);
      url.searchParams.delete("focusCollege");
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (city.trim()) params.set("city", city.trim());
    if (college.trim()) params.set("college", college.trim());
    if (hostel.trim()) params.set("hostel", hostel.trim());

    window.location.href = `/hostels?${params.toString()}`;
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white shadow-md dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_18px_60px_rgba(2,6,23,0.28)] overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[1fr_1fr_1fr_auto]">
        {/* City Input */}
        <div className={fieldStyles}>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-primary dark:bg-white/10 dark:text-primary">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="text-left w-full min-w-0">
            <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search City (e.g. Kochi)"
              className="bg-transparent text-sm font-semibold text-slate-900 focus:outline-none dark:text-white w-full placeholder-slate-400/80 mt-0.5 truncate"
            />
          </div>
        </div>

        {/* College Input */}
        <div className={fieldStyles}>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-primary dark:bg-white/10 dark:text-primary">
            <Building2 className="h-4 w-4" />
          </div>
          <div className="text-left w-full min-w-0">
            <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">College</label>
            <input
              ref={collegeRef}
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="Search College"
              className="bg-transparent text-sm font-semibold text-slate-900 focus:outline-none dark:text-white w-full placeholder-slate-400/80 mt-0.5 truncate"
            />
          </div>
        </div>

        {/* Hostel Input */}
        <div className="flex min-h-20 flex-1 items-center gap-3 bg-white px-6 py-4 text-left transition-colors hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900 border-b lg:border-b-0 border-slate-200 dark:border-white/10">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-primary dark:bg-white/10 dark:text-primary">
            <Search className="h-4 w-4" />
          </div>
          <div className="text-left w-full min-w-0">
            <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Hostel</label>
            <input
              type="text"
              value={hostel}
              onChange={(e) => setHostel(e.target.value)}
              placeholder="Search Hostel Name"
              className="bg-transparent text-sm font-semibold text-slate-900 focus:outline-none dark:text-white w-full placeholder-slate-400/80 mt-0.5 truncate"
            />
          </div>
        </div>

        {/* Search Action Button */}
        <div className="flex items-center justify-center bg-white px-6 py-4 lg:px-5 dark:bg-slate-950">
          <Button onClick={handleSearch} className="h-12 w-full lg:w-auto rounded-2xl px-8" size="md">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export { HostelSearchPanel };
