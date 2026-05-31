"use client";

import React, { useState } from "react";
import { Badge } from "../atoms/Badge";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Grid,
  CreditCard,
  AlertOctagon,
  FileSpreadsheet,
  CalendarCheck,
  UserCheck,
  Building,
  Video,
  Globe,
  Sliders,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { FeatureMockups } from "./FeatureMockups";

const providerFeatures = [
  {
    title: "Room & Bed Management",
    description: "Get complete visibility of your entire property. View every building, floor, room, and bed from a single dashboard to track live occupancy.",
    icon: Building,
  },
  {
    title: "Automated Billing & UPI Payments",
    description: "Simplify rent collection with automated billing. Generate rent invoices instantly and collect digitally via UPI without manual calculations.",
    icon: CreditCard,
  },
  {
    title: "Complaints & Maintenance",
    description: "Make issue reporting organized. Residents can easily raise complaints through the app, helping wardens assign tasks and resolve them quickly.",
    icon: AlertOctagon,
  },
  {
    title: "Financial Reports",
    description: "Stay on top of finances. Generate monthly Profit & Loss statements and track all property expenses in one unified, clear portal.",
    icon: FileSpreadsheet,
  },
  {
    title: "Attendance Management",
    description: "Track resident check-ins and curfews. Log and monitor student attendance easily, providing better visibility and accountability.",
    icon: CalendarCheck,
  },
  {
    title: "Role-Based User Access",
    description: "Secure, tiered access. Admins manage properties, billing, and reports, while wardens oversee day-to-day operations and allocations.",
    icon: UserCheck,
  },
];

const admissionSteps = [
  {
    phase: "Phase 01",
    id: "visibility",
    title: "Before Booking – Visibility",
    tagline: "High parent confidence",
    description: "Free marketing for institutions and hostels. We upload tour videos detailing facilities, rules, and live video walkthroughs so parents and students can inspect the property at zero cost.",
    icon: Video,
  },
  {
    phase: "Phase 02",
    id: "booking",
    title: "Online Discovery & Booking",
    tagline: "Instant room allocation",
    description: "Students access the portal directly via your white-label site or Livinnza. They compare options, apply online, select their preferred room/sharing style, and pay securely.",
    icon: Globe,
  },
  {
    phase: "Phase 03",
    id: "oversight",
    title: "Warden & Management Oversight",
    tagline: "Control without micromanagement",
    description: "Wardens track student records and bed allocations in real-time. Management gets instant analytics on total occupancy, leave requests, attendance, and compliance trends.",
    icon: Sliders,
  },
  {
    phase: "Phase 04",
    id: "unified",
    title: "Unified Booking – One Backend",
    tagline: "One source of truth",
    description: "Whether bookings come from your institute website, the Livinnza app, or a walk-in at the hostel front desk, they all sync into a single database. Zero double bookings.",
    icon: Grid,
  },
];

const KnowMoreSections = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* SECTION 1: One Unified System */}
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary dark:border-white/10 dark:bg-white/5 dark:text-primary/80">
              Complete Feature Suite
            </Badge>
            <Typography variant="h2" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              One Unified System for All Hostel Providers
            </Typography>
            <Typography variant="p" className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              From discovery and booking to management and payments — Livinnza covers it all. White-labelled on your institute website.
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col p-6 rounded-3xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 dark:border-white/5 dark:bg-slate-950/40 dark:hover:bg-slate-950/80"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary/20 dark:text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Typography variant="h4" className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                    {feat.title}
                  </Typography>
                  <Typography variant="p" className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feat.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 1.5: Feature Detailed Screens */}
      <section className="bg-slate-50/50 py-10 dark:bg-slate-950/30">
        <FeatureMockups />
      </section>

      {/* SECTION 2: Interactive Admissions Flow */}
      <section className="bg-slate-50 py-20 dark:bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary dark:border-white/10 dark:bg-white/5 dark:text-primary/80">
              Admission Pipeline
            </Badge>
            <Typography variant="h2" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Seamless Hostel Admissions for Everyone
            </Typography>
            <Typography variant="p" className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Admissions scale online. Zero manual follow-ups. High parent confidence. Effortless hostel admissions for wardens, students, and parents.
            </Typography>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Steps Navigation list */}
            <div className="flex flex-col gap-3">
              {admissionSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`text-left flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-white shadow-md dark:bg-slate-900 dark:border-primary/50"
                        : "border-transparent bg-transparent hover:bg-slate-100 dark:hover:bg-white/5"
                    }`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-slate-200/80 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    }`}>
                      {step.phase}
                    </div>
                    <div>
                      <div className={`text-sm font-bold transition-colors ${
                        isActive ? "text-primary dark:text-white" : "text-slate-700 dark:text-slate-300"
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">{step.tagline}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Displaying Detail Panel with Animations */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-slate-900/60 min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                      {React.createElement(admissionSteps[activeStep].icon, { className: "h-7 w-7" })}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-primary font-bold">{admissionSteps[activeStep].phase}</div>
                      <Typography variant="h3" className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                        {admissionSteps[activeStep].title}
                      </Typography>
                    </div>
                  </div>

                  <Typography variant="p" className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {admissionSteps[activeStep].description}
                  </Typography>

                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 dark:bg-slate-950/40 dark:border-white/5 flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Fully integrated with the unified backend database layer.
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2.5: App Screens Mockup */}
      <section className="relative overflow-hidden bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start text-left"
            >
              <Badge variant="secondary" className="mb-6 border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary dark:border-white/10 dark:bg-white/5 dark:text-primary/80">
                Student & Parent App
              </Badge>
              <Typography variant="h2" className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                Everything they need, <br />
                <span className="text-primary bg-clip-text">in their pocket.</span>
              </Typography>
              <Typography variant="p" className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
                Give your students and their parents a premium, dedicated app to manage rent, submit complaints, and track attendance. A seamless experience that boosts your institution's reputation and ensures peace of mind.
              </Typography>
              <ul className="mt-8 space-y-4">
                {[
                  "Instant Rent Payments & UPI Integration",
                  "Live Attendance & Gate Pass Tracking",
                  "24/7 Digital Complaint Resolution",
                  "Instant Broadcasts & Announcements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100/80 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative w-full"
            >
              {/* Ambient shadow backdrops */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] dark:bg-primary/30" />
              <div className="absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-[100px] dark:bg-indigo-500/30" />
              
              <img 
                src="/images/app_screens_mockup.png" 
                alt="Livinnza App Screens" 
                className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 object-contain max-h-[600px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Experience your portal (CTA) */}
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-tr from-primary to-indigo-600 px-8 py-12 sm:px-12 sm:py-16 text-center text-white shadow-2xl">
            {/* Visual glow circles */}
            <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute left-0 bottom-0 -z-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <div className="max-w-2xl mx-auto space-y-6">
              <Typography variant="h2" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Experience Your Portal
              </Typography>
              <Typography variant="p" className="text-base sm:text-lg text-white/85 leading-relaxed">
                One platform for all student accommodation. Control without operational overload. Ask for a demo account today.
              </Typography>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="/partner-with-us"
                  className="w-full sm:w-auto rounded-full bg-white hover:bg-slate-50 text-primary font-bold px-8 py-4 shadow-lg text-sm transition-all"
                >
                  Ask for Demo Account <ArrowRight className="ml-1.5 h-4.5 w-4.5" />
                </Button>
                <Button
                  href="/partner-with-us"
                  className="w-full sm:w-auto rounded-full bg-transparent hover:bg-white/10 text-white font-bold border border-white/35 px-8 py-4 text-sm transition-all"
                >
                  Talk to Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { KnowMoreSections };
