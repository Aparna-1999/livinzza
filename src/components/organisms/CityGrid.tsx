"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Church, Landmark, School, Castle } from "lucide-react";
import { Typography } from "../atoms/Typography";

const cities = [
  {
    name: "Bangalore",
    caption: "Academic corridors",
    icon: Building2,
    tone: "from-blue-500 via-cyan-500 to-primary",
    slug: "bangalore",
  },
  {
    name: "Kochi",
    caption: "Student-friendly zones",
    icon: Landmark,
    tone: "from-emerald-500 via-teal-500 to-cyan-500",
    slug: "kochi",
  },
  {
    name: "Kottayam",
    caption: "Calm study living",
    icon: School,
    tone: "from-amber-500 via-orange-500 to-rose-500",
    slug: "kottayam",
  },
  {
    name: "Trivandrum",
    caption: "Trusted residential stay",
    icon: Castle,
    tone: "from-indigo-500 via-blue-500 to-primary",
    slug: "trivandrum",
  },
  {
    name: "Calicut",
    caption: "Verified hostels",
    icon: Church,
    tone: "from-slate-600 via-slate-700 to-slate-900",
    slug: "calicut",
  },
];

const CityGrid = () => {
  return (
    <section id="cities" className="bg-slate-50 py-14 sm:py-18 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Typography variant="h2" className="text-[clamp(2.1rem,4vw,4.2rem)] font-black tracking-tight text-slate-900 dark:text-white">
            Popular Cities To Stay
          </Typography>
          <Typography variant="p" className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Find trusted hostels in these top locations.
          </Typography>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {cities.map((city) => {
            const Icon = city.icon;
            return (
              <motion.div
                key={city.name}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center text-center"
              >
                <Link href={`/hostels?city=${city.slug}`} className="flex flex-col items-center text-center outline-none">
                  <div className={`rounded-[2rem] bg-gradient-to-br ${city.tone} p-2 shadow-[0_16px_30px_rgba(37,99,235,0.10)] transition-transform duration-300 group-hover:scale-105`}>
                    <div className="flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-white text-slate-900 shadow-inner dark:bg-slate-950 dark:text-white">
                      <Icon className="h-9 w-9" strokeWidth={1.8} />
                    </div>
                  </div>
                  <Typography variant="h4" className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                    {city.name}
                  </Typography>
                  <Typography variant="small" className="mt-1 text-slate-600 dark:text-slate-400">
                    {city.caption}
                  </Typography>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { CityGrid };
