"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
  {
    id: 1,
    headline: "Scaling Your Institution’s Reach Without Expanding Your Footprint.",
    subheadline: "Seamlessly extend your campus housing capacity through Livinnza’s dedicated off-site hostel management.",
    cta: "Partner with Us",
    href: "/partner-with-us",
    image: "/images/slider_1_capacity.png",
  },
  {
    id: 2,
    headline: "Your Brand, Our Infrastructure. A Unified Student Experience.",
    subheadline: "Protect your institution's reputation with premium, college-branded residential facilities that mirror your in-house standards.",
    cta: "Explore Institutional Solutions",
    href: "/institutional-solutions",
    image: "/images/slider_2_brand.png",
  },
  {
    id: 3,
    headline: "Bangalore’s Premier Student Housing Network at Your Fingertips.",
    subheadline: "Curated, verified, and strategically located hostels for students and parents seeking academic-focused living.",
    cta: "Find Your Hostel",
    href: "#cities",
    image: "/images/slider_3_network.png",
  },
];

const UniversitySlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % sliderData.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const nextSlide = () => setActiveSlide((current) => (current + 1) % sliderData.length);
  const prevSlide = () => setActiveSlide((current) => (current - 1 + sliderData.length) % sliderData.length);

  return (
    <section id="executive-vision" className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-slate-950">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={sliderData[activeSlide].image}
            alt={sliderData[activeSlide].headline}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-900/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h1" className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-white drop-shadow-md">
                {sliderData[activeSlide].headline}
              </Typography>
              <Typography variant="p" className="mt-6 text-lg leading-8 text-slate-200 drop-shadow">
                {sliderData[activeSlide].subheadline}
              </Typography>
              <div className="mt-10 flex items-center gap-4">
                <Button href={sliderData[activeSlide].href} variant="primary" className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base shadow-lg shadow-primary/20">
                  {sliderData[activeSlide].cta}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex gap-3">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index ? "w-10 bg-primary" : "w-4 bg-white/40 hover:bg-white/60"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export { UniversitySlider };
