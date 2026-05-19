"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Typography } from "../atoms/Typography";

const cities = [
  {
    name: "Bangalore",
    caption: "hostels",
    image: "/images/bangalore.png",
    slug: "bangalore",
  },
  {
    name: "Kochi",
    caption: "hostels",
    image: "/images/kochi.png",
    slug: "kochi",
  },
  {
    name: "Kottayam",
    caption: "hostels",
    image: "/images/kottayam.png",
    slug: "kottayam",
  },
  {
    name: "Coimbatore",
    caption: "hostels",
    image: "/images/coimbatore.png",
    slug: "coimbatore",
  },
  {
    name: "Delhi NCR",
    caption: "hostels",
    image: "/images/delhi_university.png",
    slug: "delhi",
  },
  {
    name: "Vellore",
    caption: "hostels",
    image: "/images/vit_vellore.png",
    slug: "vellore",
  },
  {
    name: "Jaipur",
    caption: "hostels",
    image: "/images/christ_university.png",
    slug: "jaipur",
  },
  {
    name: "Indore",
    caption: "hostels",
    image: "/images/jain_university.png",
    slug: "indore",
  },
  {
    name: "Bhubaneswar",
    caption: "hostels",
    image: "/images/mission_1.png",
    slug: "bhubaneswar",
  },
  {
    name: "Sikar",
    caption: "hostels",
    image: "/images/mission_2.png",
    slug: "sikar",
  },
  {
    name: "Pune",
    caption: "hostels",
    image: "/images/lifestyle_1.png",
    slug: "pune",
  },
  {
    name: "Mumbai",
    caption: "hostels",
    image: "/images/lifestyle_2.png",
    slug: "mumbai",
  },
  {
    name: "Hyderabad",
    caption: "hostels",
    image: "/images/lifestyle_3.png",
    slug: "hyderabad",
  },
  {
    name: "Chennai",
    caption: "hostels",
    image: "/images/lifestyle_4.png",
    slug: "chennai",
  },
  {
    name: "Ahmedabad",
    caption: "hostels",
    image: "/images/girls_room.png",
    slug: "ahmedabad",
  },
];

const CityGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate cities for seamless infinite scrolling
  const displayCities = [...cities, ...cities];

  useEffect(() => {
    if (isHovered) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += 1.5; // Optimized smooth autoscroll speed

      // When scrolled exactly half the total scrollWidth, reset to 0 seamlessly
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -324, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 324, behavior: "smooth" });
    }
  };

  return (
    <section id="cities" className="relative overflow-hidden bg-slate-50 py-16 lg:py-24 dark:bg-slate-950">
      {/* Subtle background decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Typography variant="h2" className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-extrabold tracking-tight text-slate-900 dark:text-white">
            <span className="text-primary">Cities</span> we serve
          </Typography>
          <Typography variant="p" className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Explore the range of hostels in different cities
          </Typography>
        </div>
      </div>

      {/* Autoscroll Carousel Section */}
      <div className="relative mt-12 mx-auto max-w-[90rem]">
        {/* Floating Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur border border-slate-200 transition-all hover:bg-primary hover:text-white hover:scale-105 dark:bg-slate-900/90 dark:border-white/10 dark:text-primary"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg backdrop-blur border border-slate-200 transition-all hover:bg-primary hover:text-white hover:scale-105 dark:bg-slate-900/90 dark:border-white/10 dark:text-primary"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Scroll Container */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex gap-6 px-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayCities.map((city, index) => (
            <motion.div
              key={`${city.slug}-${index}`}
              whileHover={{ y: -4 }}
              className="group flex flex-col w-[280px] sm:w-[300px] shrink-0 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link href={`/hostels?city=${city.slug}`} className="flex flex-col outline-none">
                {/* Top Row: Header & Arrow Button */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Typography variant="h4" className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {city.name}
                    </Typography>
                    <Typography variant="small" className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5 block">
                      {city.caption}
                    </Typography>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/40 bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md dark:border-primary/30 dark:bg-primary/10">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Bottom Row: Landmark Image */}
                <div className="relative h-[200px] sm:h-[220px] w-full overflow-hidden rounded-xl shadow-inner bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    sizes="(max-width: 768px) 280px, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CityGrid };


