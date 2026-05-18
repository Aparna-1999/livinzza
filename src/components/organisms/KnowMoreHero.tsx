"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleAlert, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";

const dashboardBlocks = [
  { label: "Institutional Focus", value: "100%", pill: "College first", tone: "emerald" },
  { label: "Student Trust", value: "Verified", pill: "Bangalore search", tone: "amber" },
  { label: "Parent Confidence", value: "High", pill: "Safety-led", tone: "slate" },
];

const KnowMoreHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.6),_transparent_36%)] dark:block" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            <CircleAlert className="h-4 w-4" />
            The institutional partner for colleges, students, and parents
          </div>

          <Typography variant="h1" className="max-w-2xl text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.96] tracking-tight text-slate-900 dark:text-white">
            About
            <span className="block text-primary">Livinnza</span>
          </Typography>

          <Typography variant="p" className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Livinnza is built to help universities and colleges manage dedicated off-campus hostel capacity, while also giving students and parents a refined way to discover verified hostel options in Bangalore.
          </Typography>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/partner-with-us" className="rounded-full px-7">
              Partner with Us <Sparkles className="h-4 w-4" />
            </Button>
            <Button href="/hostels" variant="outline" className="rounded-full border-slate-300 bg-white px-7 text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:bg-transparent dark:text-slate-100 dark:hover:bg-white/10">
              Explore Hostels <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            <ShieldCheck className="h-4 w-4" />
            Dedicated hostel solutions for higher education institutions
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative z-10"
        >
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_30px_100px_rgba(2,6,23,0.45)] dark:backdrop-blur">
            <div className="border-b border-slate-100 bg-slate-50 px-8 py-6 text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100">
              <div className="text-xl font-bold">Livinnza Vision</div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">Campus-linked housing, refined for modern institutions</div>
            </div>
            <div className="grid grid-cols-3 gap-px bg-slate-100 dark:bg-white/10">
              {dashboardBlocks.map((block, index) => (
                <div key={block.label} className="bg-white p-6 dark:bg-slate-950">
                  <div className="text-sm uppercase tracking-wide text-slate-500">{block.label}</div>
                  <div className="mt-2 text-3xl font-black text-slate-900 dark:text-slate-50">{block.value}</div>
                  <div className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/5 dark:text-slate-300">
                    {block.pill}
                  </div>
                  {index === 0 ? <div className="mt-4 h-1 rounded-full bg-primary" /> : null}
                  {index === 1 ? <div className="mt-4 h-1 rounded-full bg-slate-700" /> : null}
                  {index === 2 ? <div className="mt-4 h-1 rounded-full bg-slate-700" /> : null}
                </div>
              ))}
            </div>

            <div className="p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Three audiences, one standard of trust</div>
              <div className="mt-4 grid grid-cols-10 gap-2">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-12 rounded-md ${index % 5 === 0 ? "bg-slate-300 dark:bg-slate-700" : index % 3 === 0 ? "bg-slate-200 dark:bg-slate-900" : "bg-primary/10 dark:bg-primary/20"}`}
                  />
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  ["Colleges", "Dedicated"],
                  ["Students", "Verified"],
                  ["Parents", "Assured"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
                    <div className="mt-1 text-2xl font-black text-slate-900 dark:text-slate-50">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-slate-900">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Alert</div>
            <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">Leave request approved</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Warden dashboard · Real-time sync</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { KnowMoreHero };
