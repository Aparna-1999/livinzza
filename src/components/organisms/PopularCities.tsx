"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";

const citiesList = [
  {
    name: "Bangalore",
    slug: "bangalore",
    illustration: (
      <svg className="w-24 h-20" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Sky / background subtle glow */}
        <circle cx="60" cy="50" r="30" fill="#f0fdf4" className="dark:fill-emerald-950/20" />
        
        {/* Green foliage at the back */}
        <path d="M10 75c8-10 25-10 35 0M85 75c5-12 20-12 25 0" fill="#86efac" />
        
        {/* Main Base of Vidhana Soudha */}
        <rect x="20" y="55" width="80" height="20" rx="2" fill="#d1d5db" className="dark:fill-slate-600" />
        <rect x="25" y="70" width="70" height="6" fill="#9ca3af" className="dark:fill-slate-500" />
        
        {/* Central Entrance Grand Arch & Portico */}
        <rect x="42" y="40" width="36" height="20" fill="#e5e7eb" className="dark:fill-slate-500" />
        <rect x="40" y="38" width="40" height="4" fill="#9ca3af" className="dark:fill-slate-400" />
        
        {/* Grand Dome on top */}
        <path d="M46 38c0-10 8-16 14-16s14 6 14 16H46z" fill="#ca8a04" />
        {/* Golden Kalasam/Spire on dome */}
        <line x1="60" y1="22" x2="60" y2="14" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="14" r="2.5" fill="#eab308" />
        
        {/* Pillars (Vertical lines) */}
        <line x1="28" y1="55" x2="28" y2="70" stroke="#9ca3af" strokeWidth="1.5" />
        <line x1="34" y1="55" x2="34" y2="70" stroke="#9ca3af" strokeWidth="1.5" />
        <line x1="48" y1="42" x2="48" y2="60" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="56" y1="42" x2="56" y2="60" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="64" y1="42" x2="64" y2="60" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="72" y1="42" x2="72" y2="60" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="86" y1="55" x2="86" y2="70" stroke="#9ca3af" strokeWidth="1.5" />
        <line x1="92" y1="55" x2="92" y2="70" stroke="#9ca3af" strokeWidth="1.5" />
        
        {/* Central grand entrance stairs */}
        <path d="M46 65h28l-4 10H50l-4-10z" fill="#9ca3af" className="dark:fill-slate-500" />
        <line x1="48" y1="68" x2="72" y2="68" stroke="#f3f4f6" strokeWidth="1" />
        <line x1="50" y1="71" x2="70" y2="71" stroke="#f3f4f6" strokeWidth="1" />
        
        {/* Side Domes */}
        <path d="M24 55c0-4 3-7 6-7s6 3 6 7H24z" fill="#f59e0b" />
        <path d="M84 55c0-4 3-7 6-7s6 3 6 7H84z" fill="#f59e0b" />
        
        {/* Beautiful Palm Trees at Side */}
        <path d="M12 75c2-6 8-10 10-18" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 57c-2 2-6 6-4 10M12 55c2-3 8-4 11-1M22 57c4 2 6 8 3 11" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Kochi",
    slug: "kochi",
    illustration: (
      <svg className="w-24 h-20" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Sky glow */}
        <circle cx="60" cy="50" r="30" fill="#eff6ff" className="dark:fill-blue-950/20" />
        
        {/* Gentle blue sea waves */}
        <path d="M5 80c10-3 20 0 30 0s20-3 30 0 20 0 30 0 15-3 20 0v5H5v-5z" fill="#38bdf8" />
        <path d="M5 83c10-2 20 0 30 0s20-2 30 0 20 0 30 0 15-2 20 0v2H5v-2z" fill="#0284c7" />
        
        {/* Palm Tree */}
        <path d="M15 80c3-12 12-22 10-36" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
        {/* Palm Leaves */}
        <path d="M25 44c-6-4-15-2-18 4M25 44c-2-8 5-14 12-10M25 44c8-2 14 5 12 12M25 44c2 8-6 13-11 9" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Traditional Houseboat (Kettuvallam) */}
        {/* Main curved wooden hull */}
        <path d="M38 78c10 0 50 0 62-8 3-2 6-8 8-10-8 2-55 2-68 8-2 2-4 8-2 10z" fill="#451a03" />
        {/* Curved straw roof canopy */}
        <path d="M42 70c4-8 12-12 24-12s30 4 34 12c-4-4-24-10-36-10s-20 6-22 10z" fill="#d97706" />
        <path d="M46 72h42v-2H46v2z" fill="#b45309" />
        
        {/* Kochi Chinese Fishing Net structure at the right */}
        <line x1="90" y1="80" x2="108" y2="40" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="95" y1="80" x2="114" y2="52" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
        {/* Slanted net support beams */}
        <line x1="108" y1="40" x2="118" y2="60" stroke="#9a3412" strokeWidth="1.5" />
        <line x1="108" y1="40" x2="100" y2="62" stroke="#9a3412" strokeWidth="1.5" />
        {/* Net outline */}
        <path d="M100 62c4 6 12 4 18-2" stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: "Kottayam",
    slug: "kottayam",
    illustration: (
      <svg className="w-24 h-20" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft orange/sand sun glow background */}
        <circle cx="60" cy="50" r="30" fill="#fffbeb" className="dark:fill-amber-950/20" />
        
        {/* Kerala Traditional Gateway (Padippura) */}
        {/* Base pillars */}
        <rect x="36" y="55" width="8" height="22" rx="1" fill="#d1d5db" className="dark:fill-slate-600" />
        <rect x="76" y="55" width="8" height="22" rx="1" fill="#d1d5db" className="dark:fill-slate-600" />
        <rect x="34" y="75" width="12" height="3" fill="#9ca3af" className="dark:fill-slate-500" />
        <rect x="74" y="75" width="12" height="3" fill="#9ca3af" className="dark:fill-slate-500" />
        
        {/* Wooden doors */}
        <rect x="44" y="58" width="15" height="17" fill="#78350f" />
        <rect x="61" y="58" width="15" height="17" fill="#78350f" />
        {/* Traditional door bars/stripes */}
        <line x1="44" y1="62" x2="59" y2="62" stroke="#b45309" strokeWidth="1" />
        <line x1="44" y1="67" x2="59" y2="67" stroke="#b45309" strokeWidth="1" />
        <line x1="44" y1="72" x2="59" y2="72" stroke="#b45309" strokeWidth="1" />
        <line x1="61" y1="62" x2="76" y2="62" stroke="#b45309" strokeWidth="1" />
        <line x1="61" y1="67" x2="76" y2="67" stroke="#b45309" strokeWidth="1" />
        <line x1="61" y1="72" x2="76" y2="72" stroke="#b45309" strokeWidth="1" />
        
        {/* Wooden gable / crossbeam */}
        <rect x="32" y="50" width="56" height="6" rx="1" fill="#451a03" />
        
        {/* Double-layered traditional tiled roof (terracotta style) */}
        <path d="M26 50l12-16h44l12 16H26z" fill="#dc2626" />
        <path d="M38 34l8-10h28l8 10H38z" fill="#991b1b" />
        
        {/* Tiled roof lines details */}
        <line x1="38" y1="50" x2="44" y2="34" stroke="#7f1d1d" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="52" y2="34" stroke="#7f1d1d" strokeWidth="1.5" />
        <line x1="60" y1="50" x2="60" y2="34" stroke="#7f1d1d" strokeWidth="1.5" />
        <line x1="70" y1="50" x2="68" y2="34" stroke="#7f1d1d" strokeWidth="1.5" />
        <line x1="82" y1="50" x2="76" y2="34" stroke="#7f1d1d" strokeWidth="1.5" />
        
        {/* Green palm trees swaying behind */}
        <path d="M20 78c1-10 10-18 6-28" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M26 50c-4-4-10-2-12 2M26 50c0-6 6-10 10-6M26 50c6 0 10 6 8 10" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Trivandrum",
    slug: "trivandrum",
    illustration: (
      <svg className="w-24 h-20" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Sunrise soft orange/yellow circle background */}
        <circle cx="60" cy="50" r="30" fill="#fff7ed" className="dark:fill-orange-950/20" />
        
        {/* Sri Padmanabhaswamy Temple Gopuram (Tapered traditional tower) */}
        {/* Base Block */}
        <rect x="35" y="70" width="50" height="10" fill="#ea580c" />
        <rect x="32" y="78" width="56" height="3" fill="#9a3412" />
        <rect x="48" y="70" width="24" height="10" fill="#9a3412" />
        {/* Grand golden door in portico */}
        <rect x="56" y="72" width="8" height="8" rx="1" fill="#fbbf24" />
        
        {/* Tier 1 */}
        <path d="M38 70l2-8h36l2 8H38z" fill="#f97316" />
        <line x1="42" y1="62" x2="42" y2="70" stroke="#7c2d12" strokeWidth="1" />
        <line x1="50" y1="62" x2="50" y2="70" stroke="#7c2d12" strokeWidth="1" />
        <line x1="60" y1="62" x2="60" y2="70" stroke="#7c2d12" strokeWidth="1" />
        <line x1="70" y1="62" x2="70" y2="70" stroke="#7c2d12" strokeWidth="1" />
        <line x1="78" y1="62" x2="78" y2="70" stroke="#7c2d12" strokeWidth="1" />
        
        {/* Tier 2 */}
        <path d="M41 62l2-8h30l2 8H41z" fill="#ea580c" />
        <line x1="45" y1="54" x2="45" y2="62" stroke="#7c2d12" strokeWidth="1" />
        <line x1="52" y1="54" x2="52" y2="62" stroke="#7c2d12" strokeWidth="1" />
        <line x1="60" y1="54" x2="60" y2="62" stroke="#7c2d12" strokeWidth="1" />
        <line x1="68" y1="54" x2="68" y2="62" stroke="#7c2d12" strokeWidth="1" />
        <line x1="75" y1="54" x2="75" y2="62" stroke="#7c2d12" strokeWidth="1" />
        
        {/* Tier 3 */}
        <path d="M44 54l2-8h24l2 8H44z" fill="#f97316" />
        <line x1="48" y1="46" x2="48" y2="54" stroke="#7c2d12" strokeWidth="1" />
        <line x1="54" y1="46" x2="54" y2="54" stroke="#7c2d12" strokeWidth="1" />
        <line x1="60" y1="46" x2="60" y2="54" stroke="#7c2d12" strokeWidth="1" />
        <line x1="66" y1="46" x2="66" y2="54" stroke="#7c2d12" strokeWidth="1" />
        <line x1="72" y1="46" x2="72" y2="54" stroke="#7c2d12" strokeWidth="1" />
        
        {/* Tier 4 */}
        <path d="M47 46l2-8h18l2 8H47z" fill="#ea580c" />
        <line x1="51" y1="38" x2="51" y2="46" stroke="#7c2d12" strokeWidth="1" />
        <line x1="56" y1="38" x2="56" y2="46" stroke="#7c2d12" strokeWidth="1" />
        <line x1="60" y1="38" x2="60" y2="46" stroke="#7c2d12" strokeWidth="1" />
        <line x1="64" y1="38" x2="64" y2="46" stroke="#7c2d12" strokeWidth="1" />
        <line x1="69" y1="38" x2="69" y2="46" stroke="#7c2d12" strokeWidth="1" />
        
        {/* Top curved traditional crown (Kalasa spires) */}
        <path d="M50 38c0-3 3-5 10-5s10 2 10 5H50z" fill="#fbbf24" />
        <line x1="54" y1="33" x2="54" y2="29" stroke="#fbbf24" strokeWidth="1.5" />
        <line x1="60" y1="33" x2="60" y2="28" stroke="#fbbf24" strokeWidth="1.5" />
        <line x1="66" y1="33" x2="66" y2="29" stroke="#fbbf24" strokeWidth="1.5" />
        
        {/* Swaying coconut palm trees */}
        <path d="M18 78c2-10 10-18 10-26" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 52c-4-4-10-2-12 2M28 52c-1-6 5-10 9-6M28 52c5 0 9 6 7 10" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        
        <path d="M102 78c-2-8-8-15-7-23" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M95 55c-4-4-9 0-10 4M95 55c1-5 7-8 10-4M95 55c4 2 6 7 3 10" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Calicut",
    slug: "calicut",
    illustration: (
      <svg className="w-24 h-20" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Sky / background glow */}
        <circle cx="60" cy="50" r="30" fill="#f0fdfa" className="dark:fill-teal-950/20" />
        
        {/* Wave of Calicut beach pier */}
        <path d="M5 80c10-2 20 0 35 0s25-2 40 0 20 0 35 0v5H5v-5z" fill="#99f6e4" />
        <path d="M5 83c10-1 20 0 35 0s25-1 40 0 20 0 35 0v2H5v-2z" fill="#0d9488" />
        
        {/* Traditional wooden pillars and gate shelter */}
        <rect x="42" y="60" width="6" height="20" rx="0.5" fill="#78350f" />
        <rect x="72" y="60" width="6" height="20" rx="0.5" fill="#78350f" />
        
        {/* Traditional Red roof shelter */}
        <path d="M34 60l10-12h32l10 12H34z" fill="#dc2626" />
        <line x1="44" y1="60" x2="48" y2="48" stroke="#7f1d1d" strokeWidth="1.5" />
        <line x1="60" y1="60" x2="60" y2="48" stroke="#7f1d1d" strokeWidth="1.5" />
        <line x1="76" y1="60" x2="72" y2="48" stroke="#7f1d1d" strokeWidth="1.5" />
        
        {/* Calicut lighthouse tower structure at left */}
        <rect x="18" y="42" width="12" height="38" rx="1" fill="#f3f4f6" className="dark:fill-slate-600" />
        {/* Red stripes on lighthouse */}
        <rect x="18" y="50" width="12" height="6" fill="#dc2626" />
        <rect x="18" y="64" width="12" height="6" fill="#dc2626" />
        
        {/* Lighthouse glass cabin and roof */}
        <rect x="19" y="36" width="10" height="6" fill="#1e293b" />
        <path d="M17 36l7-8 7 8H17z" fill="#ea580c" />
        
        {/* Coconut palm tree at right */}
        <path d="M100 80c-2-12-10-20-8-32" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M92 48c-5-3-12 1-13 6M92 48c0-5 6-9 10-5M92 48c5 1 8 6 6 10" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Pune",
    slug: "pune",
    illustration: (
      <svg className="w-24 h-20" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Soft sunset glow background */}
        <circle cx="60" cy="50" r="30" fill="#fdf2f8" className="dark:fill-pink-950/20" />
        
        {/* Shaniwar Wada Grand stone fort base wall */}
        <path d="M15 78v-16h90v18H15z" fill="#9ca3af" className="dark:fill-slate-650" />
        
        {/* Left & Right Octagonal Bastions flanking the gate */}
        <path d="M26 78V52c0-4 4-6 8-6h8v32H26z" fill="#6b7280" className="dark:fill-slate-500" />
        <path d="M86 78V52c0-4-4-6-8-6h-8v32H86z" fill="#6b7280" className="dark:fill-slate-500" />
        
        {/* Grand wooden Delhi Darwaza (Gate) */}
        <path d="M50 78V60c0-6 4-10 10-10s10 4 10 10v18H50z" fill="#451a03" />
        
        {/* Arched Stone arch framing the gate */}
        <path d="M48 78V60c0-8 6-12 12-12s12 4 12 12v18h-4V60c0-5-3-8-8-8s-8 3-8 8v18h-4z" fill="#d1d5db" className="dark:fill-slate-400" />
        
        {/* Wooden balcony / upper structures (jharokhas) on top */}
        <rect x="42" y="44" width="36" height="4" fill="#78350f" />
        <line x1="46" y1="44" x2="46" y2="34" stroke="#78350f" strokeWidth="1.5" />
        <line x1="53" y1="44" x2="53" y2="34" stroke="#78350f" strokeWidth="1.5" />
        <line x1="60" y1="44" x2="60" y2="34" stroke="#78350f" strokeWidth="1.5" />
        <line x1="67" y1="44" x2="67" y2="34" stroke="#78350f" strokeWidth="1.5" />
        <line x1="74" y1="44" x2="74" y2="34" stroke="#78350f" strokeWidth="1.5" />
        
        {/* Wooden roof canopy */}
        <path d="M38 34c4-3 12-5 22-5s18 2 22 5H38z" fill="#dc2626" />
        
        {/* Spikes on the gate (Delhi Darwaza spikes detail) */}
        <circle cx="53" cy="65" r="0.75" fill="#f3f4f6" />
        <circle cx="53" cy="70" r="0.75" fill="#f3f4f6" />
        <circle cx="57" cy="65" r="0.75" fill="#f3f4f6" />
        <circle cx="57" cy="70" r="0.75" fill="#f3f4f6" />
        <circle cx="63" cy="65" r="0.75" fill="#f3f4f6" />
        <circle cx="63" cy="70" r="0.75" fill="#f3f4f6" />
        <circle cx="67" cy="65" r="0.75" fill="#f3f4f6" />
        <circle cx="67" cy="70" r="0.75" fill="#f3f4f6" />
        
        {/* Trees surrounding Shaniwar Wada */}
        <path d="M10 78c2-8 7-12 5-18" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 60c-2 2-4 6-2 9M7 58c1-3 5-4 7-1M13 60c3 1 4 5 2 7" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
        
        <path d="M110 78c-2-8-7-12-5-18" stroke="#78350f" strokeWidth="2" strokeLinecap="round" />
        <path d="M103 60c-2 2-3 5-1 7M105 58c1-3 4-4 6-1M111 60c2 1 3 5 1 7" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const PopularCities = () => {
  return (
    <section id="popular-cities" className="bg-white py-16 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Popular Cities To Stay
          </Typography>
          <Typography
            variant="p"
            className="mt-3 text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium"
          >
            Find Trusted Hostels In These Top Locations.
          </Typography>
        </div>

        {/* Responsive horizontal list of cities with cute illustrations */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12 w-full">
          {citiesList.map((city) => (
            <Link
              key={city.slug}
              href={`/city/${city.slug}`}
              className="flex flex-col items-center justify-center group outline-none focus:outline-none cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                className="flex flex-col items-center justify-center"
              >
                {/* Illustrated Icon Container with shadow and hover effects */}
                <div className="relative flex items-center justify-center p-3 rounded-2xl bg-slate-50/50 hover:bg-slate-50 dark:bg-slate-800/40 dark:hover:bg-slate-850 border border-slate-100/50 dark:border-slate-800/30 group-hover:shadow-md transition-all duration-300">
                  {city.illustration}
                </div>
                
                {/* City name */}
                <Typography
                  variant="h4"
                  className="mt-4 text-sm sm:text-base font-bold text-slate-850 dark:text-slate-200 group-hover:text-primary transition-colors tracking-wide"
                >
                  {city.name}
                </Typography>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PopularCities };
