"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Layout, Landmark, Users } from "lucide-react";
import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";

const mockStats = [
  { label: "Active Occupancy", value: "94.8%", icon: Users, change: "+3.2% vs last term", color: "text-emerald-500 bg-emerald-500/10" },
  { label: "Revenue Collected", value: "₹24.8L", icon: Landmark, change: "Auto-synced via UPI", color: "text-blue-500 bg-blue-500/10" },
  { label: "Resolved Complaints", value: "98.2%", icon: CheckCircle2, change: "Avg resolution: 4.5 hrs", color: "text-indigo-500 bg-indigo-500/10" },
];

const KnowMoreHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28 dark:bg-slate-950">
      {/* Dynamic blurred glow lights */}
      <div className="absolute left-[-10%] top-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/20" />
      <div className="absolute right-[-10%] bottom-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/15" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Side: Professional pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <Badge variant="secondary" className="mb-6 border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary dark:border-white/10 dark:bg-white/5 dark:text-primary/80">
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-primary" />
              White-Label Solutions
            </Badge>

            <Typography variant="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white">
              One Platform for <br />
              <span className="text-primary bg-clip-text">Effortless</span> Hostel Management
            </Typography>

            <Typography variant="p" className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
              White-labelled on your institute website, powered by Livinnza. Bring control without operational overload, safer students, confident parents, and a scalable accommodation model.
            </Typography>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                href="/partner-with-us"
                variant="primary"
                className="rounded-full px-8 py-3.5 text-sm font-semibold shadow-xl shadow-primary/20"
              >
                Ask for Demo <ArrowRight className="ml-1.5 h-4.5 w-4.5" />
              </Button>
              <Button
                href="/partner-with-us"
                variant="outline"
                className="rounded-full border-slate-300 bg-white hover:bg-slate-50 text-slate-700 dark:border-white/15 dark:bg-transparent dark:text-slate-200 dark:hover:bg-white/5 px-8 py-3.5 text-sm font-semibold"
              >
                Partner with Us
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span>Confident Parents</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span>100% Student Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span>Zero Commute Worries</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Mock Dashboard Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Ambient shadow backdrops */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary/10 to-indigo-500/10 blur-2xl opacity-75" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/80">
              {/* Fake Dashboard Header */}
              <div className="mb-6 flex items-center justify-between border-b border-slate-200/60 pb-4 dark:border-white/15">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <Layout className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Institute Administration Portal</div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500">Live oversight · Powered by Livinnza</div>
                  </div>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  SYSTEM OK
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid gap-4 sm:grid-cols-3">
                {mockStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-100 bg-white p-4 dark:border-white/5 dark:bg-slate-950"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wide text-slate-400 font-semibold">{stat.label}</span>
                        <div className={`rounded-lg p-1.5 ${stat.color}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                        {stat.change}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Occupancy and Room Overview Visualizer */}
              <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 dark:border-white/5 dark:bg-slate-950">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Real-time Building Status</span>
                  <span className="text-[10px] text-primary font-bold">Manage allocations</span>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Building A (Girls Residence)", rooms: 48, occupied: 46 },
                    { name: "Building B (Boys Residence)", rooms: 60, occupied: 57 },
                    { name: "Executive Suite (Premium Single)", rooms: 15, occupied: 14 },
                  ].map((building, index) => {
                    const pct = (building.occupied / building.rooms) * 100;
                    return (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">{building.name}</span>
                          <span className="text-slate-500">{building.occupied}/{building.rooms} beds occupied</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full rounded-full bg-primary"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { KnowMoreHero };
