"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { CITY_LABEL_BY_SLUG } from "@/data/cities";

interface HostelsHeroProps {
  citySlug?: string;
  collegeQuery?: string;
  hostelQuery?: string;
}

const HostelsHero = ({ citySlug, collegeQuery, hostelQuery }: HostelsHeroProps) => {
  const activeCityLabel = citySlug ? CITY_LABEL_BY_SLUG[citySlug.toLowerCase()] ?? citySlug : null;
  const isSearching = activeCityLabel || collegeQuery || hostelQuery;

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100/50 text-slate-900 dark:from-slate-950 dark:to-slate-900/50 dark:text-slate-100 border-b border-slate-200/50 dark:border-white/5 pb-10">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Breadcrumb row */}
        <div className="text-xs text-slate-400 dark:text-slate-500">
          Home <span className="mx-2 text-slate-350 dark:text-slate-700">/</span> <span className="font-semibold text-slate-600 dark:text-slate-350">Hostels</span>
          {activeCityLabel ? (
            <>
              <span className="mx-2 text-slate-350 dark:text-slate-700">/</span>
              <span className="font-semibold text-slate-900 dark:text-white">{activeCityLabel}</span>
            </>
          ) : isSearching ? (
            <>
              <span className="mx-2 text-slate-350 dark:text-slate-700">/</span>
              <span className="font-semibold text-slate-900 dark:text-white">Search Results</span>
            </>
          ) : null}
        </div>

        <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Typography variant="h1" className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              {activeCityLabel ? `Student Hostels in ${activeCityLabel}` : isSearching ? "Verified Search Results" : "Explore Verified Student Hostels"}
            </Typography>
            <Typography variant="p" className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
              {activeCityLabel
                ? `Showing high-converting options matching the local standard in ${activeCityLabel}.`
                : isSearching
                  ? `Showing verified options matching your search parameters.`
                  : "Search by city, college, or locality to find verified, parent-approved accommodations."}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HostelsHero };
