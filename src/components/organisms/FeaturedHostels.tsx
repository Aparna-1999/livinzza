"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Typography } from "../atoms/Typography";
import { HostelCard } from "../molecules/HostelCard";
import { Button } from "../atoms/Button";

const hostels = [
  {
    name: "North Bangalore Student Residence",
    location: "College-linked hostel with disciplined supervision",
    price: "₹8,500",
    rating: 4.8,
    image: "/images/boys_room.png",
  },
  {
    name: "Premium Girls Hostel",
    location: "Verified facilities for safe and comfortable living",
    price: "₹7,200",
    rating: 4.9,
    image: "/images/girls_room.png",
  },
  {
    name: "Bangalore Academic Stay",
    location: "Ideal for students seeking short commute routes",
    price: "₹6,500",
    rating: 4.7,
    image: "/images/lifestyle_1.png",
  },
  {
    name: "Parent-Approved Girls Hostel",
    location: "Designed for trust, safety, and clarity",
    price: "₹6,800",
    rating: 4.6,
    image: "/images/lifestyle_2.png",
  },
  {
    name: "Christ College Executive Stay",
    location: "Premium single & double sharing with AC and WiFi",
    price: "₹9,200",
    rating: 4.9,
    image: "/images/christ_university.png",
  },
  {
    name: "Jain University Elite Residence",
    location: "Modern amenities, gym, and 24/7 security",
    price: "₹8,900",
    rating: 4.8,
    image: "/images/jain_university.png",
  },
  {
    name: "VIT Vellore Campus Linked Stay",
    location: "Spacious rooms with study desks and warden care",
    price: "₹7,500",
    rating: 4.7,
    image: "/images/vit_vellore.png",
  },
  {
    name: "Kochi Marine Drive Student Housing",
    location: "Scenic views, quiet study environment, healthy meals",
    price: "₹6,900",
    rating: 4.6,
    image: "/images/kochi.png",
  },
  {
    name: "Delhi University Scholars Home",
    location: "Academic focused living near North Campus",
    price: "₹8,100",
    rating: 4.8,
    image: "/images/delhi_university.png",
  },
  {
    name: "Kottayam Garden Residence",
    location: "Peaceful atmosphere with dedicated transport",
    price: "₹6,200",
    rating: 4.7,
    image: "/images/kottayam.png",
  },
];

const FeaturedHostels = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate hostels for seamless infinite scrolling
  const displayHostels = [...hostels, ...hostels];

  useEffect(() => {
    if (isHovered) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += 1.5; // Smooth autoscroll speed

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
      containerRef.current.scrollBy({ left: -344, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 344, behavior: "smooth" });
    }
  };

  return (
    <section id="hostels" className="bg-slate-50 py-20 dark:bg-slate-950 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Typography variant="small" className="uppercase tracking-[0.26em] text-primary dark:text-primary/80">
              Verified & Trusted
            </Typography>
            <Typography variant="h2" className="mt-4 text-3xl md:text-4xl text-slate-900 dark:text-white">
              Featured hostel options for Bangalore students
            </Typography>
            <Typography variant="p" className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Hand-picked stays with clear pricing, credible visuals, and a standard of care that gives students and parents confidence.
            </Typography>
          </div>
          <Button
            href="/hostels"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("hostels");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            variant="outline"
            className="hidden rounded-full border-slate-300 bg-white px-6 text-slate-700 hover:bg-slate-100 lg:flex dark:border-white/15 dark:bg-transparent dark:text-slate-100 dark:hover:bg-white/10"
          >
            View all hostels
          </Button>
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
          {displayHostels.map((hostel, index) => (
            <HostelCard
              key={`${hostel.name}-${index}`}
              {...hostel}
              className="w-[280px] sm:w-[320px] shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center lg:hidden px-4">
        <Button
          href="/hostels"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("hostels");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          variant="outline"
          className="w-full rounded-full border-slate-300 bg-white px-6 text-slate-700 hover:bg-slate-100 sm:w-auto dark:border-white/15 dark:bg-transparent dark:text-slate-100 dark:hover:bg-white/10"
        >
          View all hostels
        </Button>
      </div>
    </section>
  );
};

export { FeaturedHostels };
