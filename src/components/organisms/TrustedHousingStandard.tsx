"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "../atoms/Badge";
import { Typography } from "../atoms/Typography";
import { ArrowRight, Building2, ChevronLeft, ChevronRight, School, Users } from "lucide-react";

const sliderCards = [
  {
    title: "For Colleges",
    caption: "Extend hostel capacity without expanding your campus footprint.",
    image: "/images/bangalore.png",
    icon: Building2,
    accent: "from-primary/70 via-blue-500/40 to-transparent",
  },
  {
    title: "For Students",
    caption: "Filter by college, locality, and amenities across top academic cities with confidence.",
    image: "/images/boys_room.png",
    icon: School,
    accent: "from-cyan-500/70 via-blue-500/40 to-transparent",
  },
  {
    title: "For Parents",
    caption: "Verified accommodation, disciplined supervision, and a trusted student environment.",
    image: "/images/girls_room.png",
    icon: Users,
    accent: "from-slate-900/80 via-slate-900/30 to-transparent",
  },
];

const TrustedHousingStandard = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % sliderCards.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const currentSlide = sliderCards[activeSlide];
  const Icon = currentSlide.icon;

  return (
    <section id="standards" className="bg-slate-50 py-16 sm:py-20 dark:bg-slate-950/50 w-full overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="text-center mb-12 w-full min-w-0">
          <Badge variant="secondary" className="mb-4 border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary dark:border-white/10 dark:bg-white/5 dark:text-primary/80">
            Why Choose Livinnza
          </Badge>
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white w-full break-words">
            One Trusted Housing Standard
          </Typography>
          <Typography variant="p" className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 w-full break-words">
            Dedicated institutional solutions tailored for universities, students, and parents seeking a verified, premium residential experience.
          </Typography>
        </div>

        <motion.div initial={false} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative mx-auto max-w-4xl w-full min-w-0">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-md backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_16px_50px_rgba(2,6,23,0.45)] w-full min-w-0">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-50 p-4 sm:p-5 dark:bg-slate-900 w-full min-w-0">
              <div className="flex items-center justify-between gap-2 sm:gap-4 mb-4 w-full min-w-0">
                <Typography variant="h3" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white truncate">
                  {currentSlide.title}
                </Typography>
                <Badge variant="secondary" className="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-white shrink-0">
                  {activeSlide + 1}/3
                </Badge>
              </div>

              <div className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950 w-full min-w-0">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={currentSlide.title}
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -28 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full min-w-0"
                  >
                    <div className="grid gap-0 sm:grid-cols-[0.96fr_1.04fr] w-full min-w-0">
                      <div className="relative min-h-[240px] sm:min-h-[320px] w-full min-w-0">
                        <Image src={currentSlide.image} alt={currentSlide.title} fill className="object-cover" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${currentSlide.accent}`} />
                        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/90 text-white backdrop-blur">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-950/80 px-4 py-3 backdrop-blur w-[calc(100%-2rem)] min-w-0">
                          <div className="text-xs uppercase tracking-[0.28em] text-primary/70 truncate">Focus</div>
                          <div className="mt-1 text-base sm:text-lg font-semibold text-white truncate">{currentSlide.title}</div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between p-5 sm:p-6 w-full min-w-0">
                        <div className="w-full min-w-0">
                          <Typography variant="small" className="uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400 truncate block">
                            {currentSlide.title}
                          </Typography>
                          <Typography variant="h4" className="mt-2 text-lg sm:text-xl text-slate-900 dark:text-white w-full break-words">
                            {currentSlide.caption}
                          </Typography>
                          <div className="mt-5 rounded-[1.25rem] border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5 w-full min-w-0">
                            <div className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 truncate">Why this matters</div>
                            <div className="mt-2 text-xs sm:text-sm leading-6 text-slate-600 dark:text-slate-300 w-full break-words">
                              {activeSlide === 0
                                ? "Give your institution reserved housing capacity without compromising brand standards."
                                : activeSlide === 1
                                  ? "Let students discover verified options near campus with fewer steps and more confidence."
                                  : "Give parents a clear, disciplined, and trusted residential experience from the start."}
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between gap-3 w-full min-w-0">
                          <div className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-primary truncate">
                            <span>Explore the approach</span> <ArrowRight className="h-4 w-4 shrink-0" />
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => setActiveSlide((value) => (value - 1 + sliderCards.length) % sliderCards.length)}
                              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover shadow-sm"
                              aria-label="Previous slide"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setActiveSlide((value) => (value + 1) % sliderCards.length)}
                              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover shadow-sm"
                              aria-label="Next slide"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>

                <div className="flex items-center justify-center gap-2 border-t border-slate-200 bg-slate-50 px-5 py-4 dark:border-white/10 dark:bg-slate-900 w-full min-w-0">
                  {sliderCards.map((card, index) => (
                    <button
                      key={card.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${activeSlide === index ? "w-8 bg-primary" : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500"
                        }`}
                      aria-label={`Show ${card.title} slide`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-4 right-4 sm:right-auto rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-slate-900 z-10 max-w-[calc(100%-2rem)] sm:max-w-md min-w-0">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 truncate">Quick booking</div>
            <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate sm:overflow-visible sm:whitespace-normal">Schedule a college or hostel walkthrough</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { TrustedHousingStandard };
