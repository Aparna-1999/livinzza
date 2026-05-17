import React from "react";
import { Typography } from "../atoms/Typography";
import { HostelSearchPanel } from "../molecules/HostelSearchPanel";
import { Button } from "../atoms/Button";
import { ArrowLeftRight } from "lucide-react";
import { CITY_LABEL_BY_SLUG } from "@/data/cities";

interface HostelsHeroProps {
  citySlug?: string;
}

const HostelsHero = ({ citySlug }: HostelsHeroProps) => {
  const activeCityLabel = citySlug ? CITY_LABEL_BY_SLUG[citySlug] ?? citySlug : null;
  const hostelCountLabel = activeCityLabel ? `Hostels in ${activeCityLabel}` : "13 hostels";

  return (
    <section className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Home <span className="mx-2 text-slate-400 dark:text-slate-600">/</span> <span className="font-semibold text-slate-900 dark:text-slate-100">Hostels</span>
            {activeCityLabel ? (
              <>
                <span className="mx-2 text-slate-400 dark:text-slate-600">/</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{activeCityLabel}</span>
              </>
            ) : null}
          </div>
          <Typography variant="h1" className="mt-6 text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.96] tracking-tight">
            {activeCityLabel ? `Hostels in ${activeCityLabel}` : "Search for hostels"}
          </Typography>
          <Typography variant="p" className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            {activeCityLabel
              ? `Showing hostel options relevant to ${activeCityLabel}.`
              : "Search by city, college, or locality to find verified student accommodation."}
          </Typography>
        </div>

        <div className="mt-8 max-w-5xl">
          <HostelSearchPanel />
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="text-lg text-slate-600 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-slate-100">{hostelCountLabel}</span>
          </div>
          <Button href="/hostels" variant="secondary" className="rounded-2xl px-5 py-3">
            <ArrowLeftRight className="h-4 w-4" />
            Compare (up to 3)
          </Button>
        </div>
      </div>
    </section>
  );
};

export { HostelsHero };
