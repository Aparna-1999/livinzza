"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Badge } from "../atoms/Badge";
import { ArrowRight, ChevronRight, Search, Sparkles } from "lucide-react";

const sliderData = [
  {
    id: 1,
    highlight: "Affordable Hostels",
    headline: " & Shared Living Redefined.",
    subheadline: "Affordable hostels and shared accommodations with aesthetically designed rooms, shared amenities, a vibrant community and convenient services. At a price that suits every wallet.",
    cta: "Find Your Hostel",
    href: "/hostels",
    searchPlaceholder: "Find your comfortable stay by your college, location, city....",
    imageLeft: "/images/lifestyle_1.png",
    imageRight: "/images/slider_3_network.png",
    tags: ["Bangalore", "Christ University", "Jain University", "Affordable"],
  },
  {
    id: 2,
    highlight: "Scaling Institution Reach",
    headline: " Without Expanding Footprint.",
    subheadline: "Seamlessly extend your campus housing capacity through Livinnza’s dedicated off-site hostel management. At a standard that matches your reputation.",
    cta: "Partner with Us",
    href: "/partner-with-us",
    searchPlaceholder: "Search institutional solutions by university, city, capacity....",
    imageLeft: "/images/lifestyle_2.png",
    imageRight: "/images/slider_1_capacity.png",
    tags: ["Off-Campus Management", "Dedicated Hostels", "Brand Protection"],
  },
  {
    id: 3,
    highlight: "Your Brand, Our Infrastructure.",
    headline: " A Unified Experience.",
    subheadline: "Protect your institution's reputation with premium, college-branded residential facilities that mirror your in-house standards. Designed for student success.",
    cta: "Explore Solutions",
    href: "/know-more",
    searchPlaceholder: "Explore branded hostels near Christ, Jain, VIT, DU....",
    imageLeft: "/images/lifestyle_3.png",
    imageRight: "/images/slider_2_brand.png",
    tags: ["Verified Safety", "Premium Amenities", "Warden Supervision"],
  },
];

const UniversitySlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % sliderData.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const nextSlide = () => setActiveSlide((current) => (current + 1) % sliderData.length);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/hostels?q=${encodeURIComponent(searchQuery.trim())}`;
    } else {
      window.location.href = sliderData[activeSlide].href;
    }
  };

  return (
    <section id="executive-vision" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-12 lg:py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 xl:gap-12 min-h-[600px]">
          {/* Left Column: Text, Search Bar, CTA */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-primary/90">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Premium Student Housing & Institutional Solutions</span>
                </div>

                <Typography variant="h1" className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white">
                  <span className="text-primary">{sliderData[activeSlide].highlight}</span>
                  {sliderData[activeSlide].headline}
                </Typography>

                <Typography variant="p" className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  {sliderData[activeSlide].subheadline}
                </Typography>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="mt-10 flex w-full max-w-xl items-center justify-between rounded-full border border-slate-300 bg-white p-1.5 shadow-sm transition-shadow hover:shadow-md dark:border-white/15 dark:bg-slate-900">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={sliderData[activeSlide].searchPlaceholder}
                    className="w-full bg-transparent px-5 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none dark:text-white"
                  />
                  <button
                    type="submit"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all hover:bg-primary-hover"
                    aria-label="Search hostels"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </form>

                {/* Quick Action CTA & Tags */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href={sliderData[activeSlide].href} variant="primary" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg shadow-primary/20">
                    {sliderData[activeSlide].cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <div className="flex flex-wrap items-center gap-2 border-l border-slate-200 pl-4 dark:border-white/10">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Highlights:</span>
                    {sliderData[activeSlide].tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: The Two Beautiful Image Containers */}
          <div className="relative flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 py-6">
            {/* Container 1: Left Image (Tall Pill) */}
            <div className="relative h-[400px] w-[200px] sm:h-[460px] sm:w-[240px] shrink-0 overflow-hidden rounded-[2.5rem] shadow-xl border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-slate-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image src={sliderData[activeSlide].imageLeft} alt="Student Lifestyle" fill className="object-cover" priority />
                </motion.div>
              </AnimatePresence>

              {/* Bottom gradient overlay for slider controls */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent z-10" />

              {/* Slider Control Pill at the bottom */}
              <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-primary px-5 py-2.5 text-white shadow-lg backdrop-blur">
                <span className="text-sm font-bold tracking-wider">0{activeSlide + 1}</span>
                <div className="flex items-center gap-1.5 px-1">
                  {sliderData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all ${activeSlide === idx ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/40"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Container 2: Right Image (Quarter Circle Arch Top-Left) */}
            <div className="relative h-[360px] w-[260px] sm:h-[420px] sm:w-[320px] lg:w-[340px] shrink-0">
              {/* Decorative Background Arch */}
              <div className="absolute -left-6 -top-6 h-full w-full rounded-br-3xl rounded-bl-3xl rounded-tr-3xl rounded-tl-[10rem] sm:rounded-tl-[12rem] bg-gradient-to-br from-indigo-100 via-purple-100 to-transparent dark:from-indigo-950/40 dark:via-purple-950/20 -z-10 border border-purple-200/60 dark:border-purple-800/30" />

              {/* Main Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-br-3xl rounded-bl-3xl rounded-tr-3xl rounded-tl-[10rem] sm:rounded-tl-[12rem] shadow-2xl border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-slate-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute inset-0"
                  >
                    <Image src={sliderData[activeSlide].imageRight} alt="Student Accommodation" fill className="object-cover" priority />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { UniversitySlider };

