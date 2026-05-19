"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Smartphone, QrCode, Search, CreditCard, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    id: "boarding",
    icon: Smartphone,
    title: "Instant Digital Boarding",
    description: "Submit documents, review roommate profiles, and sign housing agreements digitally before stepping foot on campus.",
    badge: "Paperless",
    mockupFocus: "left", // highlights the left screen (Rohan's dashboard)
  },
  {
    id: "search",
    icon: Search,
    title: "Smart Search & Proximity Match",
    description: "Browse host hostel options tailored to your specific college, gender preferences, budget, and desired room layouts.",
    badge: "5-Min Search",
    mockupFocus: "center", // highlights the middle screen (Find Your Home)
  },
  {
    id: "gatepass",
    icon: QrCode,
    title: "Secure QR Gate Passes",
    description: "Keep parents and wardens aligned. Generate encrypted QR codes for seamless check-ins and curfew tracking.",
    badge: "100% Safe",
    mockupFocus: "right", // highlights the right screen (Digital Gate Pass)
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Transparent Digital Billing",
    description: "Pay rent, clear deposits, and check cafeteria menus directly via the app with instant payment receipt generation.",
    badge: "Auto-Pay",
    mockupFocus: "left",
  },
];

const AppFeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="app-features" className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-950/80">
      {/* Decorative background gradients */}
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10" />
      <div className="absolute left-1/4 bottom-10 -z-10 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl dark:bg-indigo-500/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4 border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary dark:border-white/10 dark:bg-white/5 dark:text-primary/80">
            <Sparkles className="mr-1.5 h-3.5 w-3.5 inline text-primary" />
            Designed for Student Life
          </Badge>
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Manage Everything from the Livinnza App
          </Typography>
          <Typography variant="p" className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A premium, high-converting digital platform built to take the hassle out of hostel living. Sign up, book amenities, check out securely, and pay bills in a few taps.
          </Typography>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Column: Interactive Feature List */}
          <div className="flex flex-col gap-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isActive = activeFeature === idx;

              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-white shadow-md dark:bg-slate-900 dark:border-primary/50"
                      : "border-slate-200/60 bg-transparent hover:bg-white/50 dark:border-white/5 dark:hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <Typography
                        variant="h4"
                        className={`text-lg font-bold transition-colors ${
                          isActive ? "text-primary dark:text-white" : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {feature.title}
                      </Typography>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          isActive
                            ? "bg-primary/10 border-primary/20 text-primary dark:text-white"
                            : "bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-800 dark:border-white/10 dark:text-slate-400"
                        }`}
                      >
                        {feature.badge}
                      </span>
                    </div>

                    <Typography
                      variant="p"
                      className={`mt-2 text-sm leading-relaxed transition-colors ${
                        isActive ? "text-slate-600 dark:text-slate-300" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {feature.description}
                    </Typography>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Premium High-Fidelity App UI Mockup Visualizer */}
          <div className="relative flex justify-center items-center">
            {/* Visual background glows */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary/10 to-indigo-500/10 blur-xl opacity-75" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-slate-900 w-full max-w-[450px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-slate-950">
                <Image
                  src="/images/app_screens_mockup.png"
                  alt="Livinnza App Mockup Showcase"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Floating glowing blue highlight frame corresponding to the active feature */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 pointer-events-none z-10"
                  >
                    {features[activeFeature].mockupFocus === "left" && (
                      <div className="absolute left-[4.8%] top-[5.2%] bottom-[5.2%] w-[29.8%] rounded-[2.1rem] border-2 border-primary shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse" />
                    )}
                    {features[activeFeature].mockupFocus === "center" && (
                      <div className="absolute left-[35%] top-[5.2%] bottom-[5.2%] w-[30.2%] rounded-[2.1rem] border-2 border-primary shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse" />
                    )}
                    {features[activeFeature].mockupFocus === "right" && (
                      <div className="absolute left-[67.2%] top-[5.2%] bottom-[5.2%] w-[28.5%] rounded-[2.1rem] border-2 border-primary shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse" />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Small indicator label */}
                <div className="absolute top-4 left-4 z-10 rounded-full bg-slate-900/85 px-3.5 py-1.5 backdrop-blur border border-white/10 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span className="text-[10px] font-bold tracking-wider text-white uppercase">Active Verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AppFeaturesSection };
