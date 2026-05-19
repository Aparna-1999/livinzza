"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Badge } from "../atoms/Badge";
import { ArrowRight, Search, Sparkles } from "lucide-react";

const UniversitySlider = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/hostels?search=${encodeURIComponent(searchQuery.trim())}`;
    } else {
      scrollToSection("enquiry");
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
                <Button onClick={() => scrollToSection("enquiry")} variant="primary" className="inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold shadow-lg shadow-primary/20 shrink-0">
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

          {/* Right Column: The Two Beautiful Image Containers */}
          <div className="relative flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 py-6 w-full max-w-full overflow-hidden sm:overflow-visible">
            {/* Container 1: Left Image (Tall Pill - Institutions) */}
            <div className="relative h-[280px] w-[135px] sm:h-[460px] sm:w-[240px] shrink-0 overflow-hidden rounded-3xl sm:rounded-[2.5rem] shadow-xl border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-slate-800 animate-fadeIn">
              <div className="absolute inset-0">
                <Image src="/images/slider_3_network.png" alt="Institutional Solutions" fill className="object-cover" priority />
              </div>

              {/* Institutional CTA Button Overlay */}
              <div className="absolute bottom-3 sm:bottom-6 left-1/2 z-20 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] min-w-0">
                <Button
                  onClick={() => scrollToSection("enquiry")}
                  variant="secondary"
                  className="w-full h-auto py-3 sm:py-4 px-3 sm:px-5 rounded-[2rem] bg-white/95 hover:bg-white text-slate-900 shadow-lg backdrop-blur border border-white/20 group transition-all [&>span]:w-full"
                >
                  <div className="relative flex items-center justify-center w-full min-w-0 py-0.5">
                    <div className="flex flex-col items-center justify-center w-full min-w-0 px-6 sm:px-8">
                      <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-500 mb-1">
                        For Institutions
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-center leading-tight tracking-tight text-primary w-full break-words whitespace-normal">
                        I Need To Expand My Campus Housing
                      </span>
                    </div>
                    <ArrowRight className="absolute right-1 sm:right-2 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Button>
              </div>
            </div>

            {/* Container 2: Right Image (Quarter Circle Arch Top-Left - Students) */}
            <div className="relative h-[240px] w-[180px] sm:h-[420px] sm:w-[320px] lg:w-[340px] shrink-0">
              {/* Decorative Background Arch */}
              <div className="absolute -left-3 sm:-left-6 -top-3 sm:-top-6 h-full w-full rounded-br-2xl sm:rounded-br-3xl rounded-bl-2xl sm:rounded-bl-3xl rounded-tr-2xl sm:rounded-tr-3xl rounded-tl-[6rem] sm:rounded-tl-[12rem] bg-gradient-to-br from-indigo-100 via-purple-100 to-transparent dark:from-indigo-950/40 dark:via-purple-950/20 -z-10 border border-purple-200/60 dark:border-purple-800/30" />

              {/* Main Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-br-2xl sm:rounded-br-3xl rounded-bl-2xl sm:rounded-bl-3xl rounded-tr-2xl sm:rounded-tr-3xl rounded-tl-[6rem] sm:rounded-tl-[12rem] shadow-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0">
                  <Image src="/images/lifestyle_1.png" alt="Student Accommodation" fill className="object-cover" priority />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* Student CTA Button Overlay */}
                <div className="absolute bottom-3 sm:bottom-6 left-1/2 z-20 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] min-w-0">
                  <Button
                    href="/hostels"
                    variant="primary"
                    className="w-full h-auto py-3 sm:py-4 px-3 sm:px-5 rounded-[2rem] bg-primary/95 hover:bg-primary text-white shadow-xl backdrop-blur border border-white/20 group transition-all [&>span]:w-full"
                  >
                    <div className="relative flex items-center justify-center w-full min-w-0 py-0.5">
                      <div className="flex flex-col items-center justify-center w-full min-w-0 px-6 sm:px-8">
                        <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/70 mb-1">
                          For Students
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold text-center leading-tight tracking-tight text-white w-full break-words whitespace-normal">
                          I Am Looking For A Bed
                        </span>
                      </div>
                      <ArrowRight className="absolute right-1 sm:right-2 h-4 w-4 shrink-0 text-white transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { UniversitySlider };
