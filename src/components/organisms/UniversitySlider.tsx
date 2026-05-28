"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Badge } from "../atoms/Badge";
import { ArrowRight, Search, Sparkles } from "lucide-react";

const UniversitySlider = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/hostels?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/hostels");
    }
  };

  return (
    <section id="executive-vision" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-12 lg:py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 xl:gap-12 min-h-[600px] w-full max-w-full min-w-0">
          {/* Left Column: Text, Search Bar, CTA */}
          <div className="flex flex-col justify-center min-w-0 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full min-w-0"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-primary/90 max-w-full overflow-hidden text-ellipsis whitespace-normal sm:whitespace-nowrap">
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate sm:overflow-visible sm:whitespace-normal">Premium Student Housing & Institutional Solutions</span>
              </div>

              <Typography variant="h1" className="text-[clamp(2.2rem,8vw,4.2rem)] font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white w-full break-words">
                <span className="text-primary">Scaling Institution Reach</span> Without Expanding Footprint.
              </Typography>

              <Typography variant="p" className="mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600 dark:text-slate-300 w-full break-words">
                Seamlessly extend your campus housing capacity through Livinnza's dedicated off-site hostel management. At a standard that matches your reputation.
              </Typography>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="mt-8 sm:mt-10 flex w-full max-w-xl items-center justify-between rounded-full border border-slate-300 bg-white p-1.5 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-slate-900 min-w-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search institutional solutions by university, city, capacity..."
                  className="w-full bg-transparent px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none dark:text-white min-w-0 truncate"
                />
                <button
                  type="submit"
                  className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all hover:bg-primary-hover"
                  aria-label="Search hostels"
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </form>

              {/* Quick Action CTA & Tags */}
              <div className="mt-8 flex flex-wrap items-center gap-4 w-full min-w-0">
                <Button href="/partner-with-us" variant="primary" className="inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold shadow-lg shadow-primary/20 shrink-0">
                  Partner with Us
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <div className="flex flex-wrap items-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-200 pt-3 sm:pt-0 sm:pl-4 dark:border-white/10 w-full sm:w-auto">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Highlights:</span>
                  {["Off-Campus Management", "Dedicated Hostels", "Brand Protection"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stacking two landscape containers vertically matching the 2nd screenshot */}
          <div className="relative flex flex-col gap-6 sm:gap-8 w-full max-w-full py-4 justify-center">
            {/* Top Card: Institutions (Horizontal Landscape Building Card with white overlay card on the right) */}
            <div className="relative h-[200px] sm:h-[230px] lg:h-[250px] w-full overflow-hidden rounded-3xl shadow-xl border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-slate-800 animate-fadeIn">
              <div className="absolute inset-0">
                <Image
                  src="/images/slider_3_network.png"
                  alt="Institutional Solutions"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-slate-950/10 dark:bg-slate-950/30" />
              </div>

              {/* White Overlay Box on the Right */}
              <Link
                href="/partner-with-us"
                className="absolute left-4 right-4 sm:left-auto sm:right-6 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-900/95 hover:bg-white dark:hover:bg-slate-900 p-5 sm:p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 text-left sm:w-[300px] lg:w-[320px] transition-all hover:scale-[1.02] flex items-center justify-between gap-4 group"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 block mb-1">
                    For Institutions
                  </span>
                  <span className="text-sm sm:text-base font-extrabold leading-snug text-slate-900 dark:text-white block hover:text-primary transition-colors">
                    I Need To Expand My Campus Housing
                  </span>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </Link>
            </div>

            {/* Bottom Card: Students (Horizontal Landscape Room Card with blue overlay card on the left) */}
            <div className="relative h-[200px] sm:h-[230px] lg:h-[250px] w-full overflow-hidden rounded-3xl shadow-xl border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-slate-800 animate-fadeIn">
              <div className="absolute inset-0">
                <Image
                  src="/images/lifestyle_1.png"
                  alt="Student Accommodation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-slate-950/10 dark:bg-slate-950/30" />
              </div>

              {/* Blue Overlay Box on the Left */}
              <Link
                href="/hostels"
                className="absolute left-4 right-4 sm:right-auto sm:left-6 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-hover p-5 sm:p-6 rounded-2xl shadow-xl text-left sm:w-[300px] lg:w-[320px] transition-all hover:scale-[1.02] flex items-center justify-between gap-4 group"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 block mb-1">
                    For Students
                  </span>
                  <span className="text-sm sm:text-base font-extrabold leading-snug text-white block">
                    I Am Looking For A Bed
                  </span>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { UniversitySlider };
