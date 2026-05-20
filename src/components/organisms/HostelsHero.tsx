import React from "react";
import { Typography } from "../atoms/Typography";
import { CITY_LABEL_BY_SLUG } from "@/data/cities";

interface HostelsHeroProps {
  citySlug?: string;
  collegeQuery?: string;
  hostelQuery?: string;
}

const HostelsHero = ({ citySlug, collegeQuery, hostelQuery }: HostelsHeroProps) => {
  const activeCityLabel = citySlug ? CITY_LABEL_BY_SLUG[citySlug] ?? citySlug : null;
  const isSearching = activeCityLabel || collegeQuery || hostelQuery;

  return (
    <section className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 border-b border-slate-200/50 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="max-w-2xl">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Home <span className="mx-2 text-slate-400 dark:text-slate-600">/</span> <span className="font-semibold text-slate-900 dark:text-slate-100">Hostels</span>
            {activeCityLabel ? (
              <>
                <span className="mx-2 text-slate-400 dark:text-slate-600">/</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{activeCityLabel}</span>
              </>
            ) : isSearching ? (
              <>
                <span className="mx-2 text-slate-400 dark:text-slate-600">/</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">Search</span>
              </>
            ) : null}
          </div>
          <Typography variant="h1" className="mt-4 text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.1] tracking-tight">
            {activeCityLabel ? `Hostels in ${activeCityLabel}` : isSearching ? "Search results" : "Search for hostels"}
          </Typography>
          <Typography variant="p" className="mt-3 text-base text-slate-600 dark:text-slate-350">
            {activeCityLabel
              ? `Showing hostel options relevant to ${activeCityLabel}.`
              : isSearching
                ? `Showing verified options matching your search parameters.`
                : "Search by city, college, or locality to find verified student accommodation."}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export { HostelsHero };

