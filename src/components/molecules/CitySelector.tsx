"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MapPin, ChevronDown, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "../atoms/Typography";

const cities = [
  {
    name: "Bangalore",
    slug: "bangalore",
    image: "/images/bangalore.png",
    state: "Karnataka",
  },
  {
    name: "Kochi",
    slug: "kochi",
    image: "/images/kochi.png",
    state: "Kerala",
  },
  {
    name: "Kottayam",
    slug: "kottayam",
    image: "/images/kottayam.png",
    state: "Kerala",
  },
  {
    name: "Trivandrum",
    slug: "trivandrum",
    image: "/images/trivandrum.png",
    state: "Kerala",
  },
  {
    name: "Calicut",
    slug: "calicut",
    image: "/images/calicut.png",
    state: "Kerala",
  },
];

const CitySelectorContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const [selectedCity, setSelectedCity] = useState("Select City");

  useEffect(() => {
    const citySlug = searchParams?.get("city");
    if (citySlug) {
      const match = cities.find((c) => c.slug === citySlug.toLowerCase() || citySlug.toLowerCase().includes(c.slug));
      if (match) {
        setSelectedCity(match.name);
        localStorage.setItem("selected_city", match.name);
        return;
      }
    }

    // fallback to localstorage
    const saved = localStorage.getItem("selected_city");
    if (saved) {
      setSelectedCity(saved);
    }
  }, [searchParams]);

  const selectCity = (citySlug: string, cityName: string) => {
    localStorage.setItem("selected_city", cityName);
    setSelectedCity(cityName);
    setIsOpen(false);
    window.location.href = `/hostels?city=${citySlug}`;
  };

  return (
    <>
      {/* City Selector Button in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/50 hover:bg-slate-100/80 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 transition-all dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-800/80 shrink-0"
      >
        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
        <span className="max-w-[70px] sm:max-w-none truncate">{selectedCity}</span>
        <ChevronDown className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" />
      </button>

      {/* BookMyShow Style Premium Dialog Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 px-6 sm:px-8 py-5 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <Typography variant="h3" className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Select Your City
                  </Typography>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-white/5 dark:hover:text-slate-200"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Grid of Cities with Images */}
              <div className="p-6 sm:p-8">
                <Typography variant="small" className="uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-semibold mb-6">
                  Popular Locations
                </Typography>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                  {cities.map((city) => (
                    <button
                      key={city.slug}
                      onClick={() => selectCity(city.slug, city.name)}
                      className="group flex flex-col items-center rounded-2xl p-2 transition-all hover:bg-slate-50 dark:hover:bg-white/5"
                    >
                      <div className="relative aspect-square w-full overflow-hidden rounded-full border border-slate-200/80 bg-slate-100 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md dark:border-white/10 dark:bg-slate-900">
                        <Image
                          src={city.image}
                          alt={city.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
                      </div>
                      <span className="mt-3.5 text-sm font-bold text-slate-800 transition-colors group-hover:text-primary dark:text-slate-200">
                        {city.name}
                      </span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500">
                        {city.state}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const CitySelector = () => {
  return (
    <Suspense
      fallback={
        <button className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/50 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-200 shrink-0">
          <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary animate-pulse" />
          <span>Select City</span>
          <ChevronDown className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" />
        </button>
      }
    >
      <CitySelectorContent />
    </Suspense>
  );
};

export { CitySelector };
