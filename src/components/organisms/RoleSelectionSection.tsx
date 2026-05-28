"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  Search, 
  CreditCard, 
  CalendarDays,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  MapPin
} from "lucide-react";

const RoleSelectionSection = () => {

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge 
            variant="secondary" 
            className="mb-4 border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-primary dark:border-primary/30 dark:bg-primary/10"
          >
            Choose Your Path
          </Badge>
          <Typography 
            variant="h2" 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            How can we help you today?
          </Typography>
          <Typography 
            variant="p" 
            className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 font-medium"
          >
            Select your role to access personalized solutions and resources.
          </Typography>
        </div>

        {/* Dual Roles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Student */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-xl dark:bg-slate-900/60 dark:border-white/10 flex flex-col md:flex-row gap-8 justify-between items-stretch transition-all duration-300 hover:shadow-2xl hover:border-slate-300/80 dark:hover:border-white/20 hover:-translate-y-1"
          >
            {/* Left Content Area */}
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div>
                <span className="text-xs sm:text-sm font-bold text-primary dark:text-primary/90 tracking-wide uppercase">
                  I'm a
                </span>
                <Typography 
                  variant="h3" 
                  className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 mb-4"
                >
                  Student
                </Typography>
                <Typography 
                  variant="p" 
                  className="text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400 mb-6"
                >
                  Find verified hostels, pay securely, and manage your stay with complete peace of mind.
                </Typography>

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-8">
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                      <Search className="h-4.5 w-4.5" />
                    </div>
                    Explore verified hostels
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                      <CreditCard className="h-4.5 w-4.5" />
                    </div>
                    Secure online payments
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                      <CalendarDays className="h-4.5 w-4.5" />
                    </div>
                    Easy booking & support
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href="/hostels"
                className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-3.5 bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all duration-200 inline-flex items-center justify-center gap-2 group shrink-0"
              >
                Continue as Student
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Image Box (with floating overlapping circle badge) */}
            <div className="relative w-full md:w-[200px] xl:w-[220px] h-[260px] md:h-auto shrink-0 rounded-[2rem] overflow-visible mt-4 md:mt-0">
              {/* Overlapping circular badge */}
              <div className="absolute -left-3 -top-3 z-20 h-12 w-12 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-white/10 flex items-center justify-center text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>

              {/* Crop Box Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-slate-200/40 shadow-inner">
                <Image 
                  src="/images/student_holding_books.png" 
                  alt="Student role preview" 
                  fill 
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Institution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-xl dark:bg-slate-900/60 dark:border-white/10 flex flex-col md:flex-row gap-8 justify-between items-stretch transition-all duration-300 hover:shadow-2xl hover:border-slate-300/80 dark:hover:border-white/20 hover:-translate-y-1"
          >
            {/* Left Content Area */}
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div>
                <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                  I'm an
                </span>
                <Typography 
                  variant="h3" 
                  className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 mb-4"
                >
                  Institution
                </Typography>
                <Typography 
                  variant="p" 
                  className="text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400 mb-6"
                >
                  List your property, manage bookings, and grow your institution with Livinnza.
                </Typography>

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-8">
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    List & manage properties
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                    </div>
                    Track bookings & payments
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                      <TrendingUp className="h-4.5 w-4.5" />
                    </div>
                    Institution dashboard & analytics
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href="/partner-with-us"
                className="w-full sm:w-auto rounded-xl px-6 sm:px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-lg shadow-emerald-500/20 transition-all duration-200 inline-flex items-center justify-center gap-2 group shrink-0"
              >
                Continue as Institution
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Image Box (with floating overlapping circle badge) */}
            <div className="relative w-full md:w-[200px] xl:w-[220px] h-[260px] md:h-auto shrink-0 rounded-[2rem] overflow-visible mt-4 md:mt-0">
              {/* Overlapping circular badge */}
              <div className="absolute -left-3 -top-3 z-20 h-12 w-12 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-white/10 flex items-center justify-center text-emerald-600">
                <Building2 className="h-6 w-6" />
              </div>

              {/* Crop Box Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-slate-200/40 shadow-inner">
                <Image 
                  src="/images/college_campus_exterior.png" 
                  alt="Institution campus preview" 
                  fill 
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export { RoleSelectionSection };
