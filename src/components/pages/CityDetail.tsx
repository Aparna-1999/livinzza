"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  CheckCircle2,
  Bed,
  GraduationCap,
  User,
  Sparkles,
  Phone,
  ShieldCheck,
  Flame,
  Coffee,
  Check,
  Clock,
  Compass,
  Building,
  HeartHandshake
} from "lucide-react";
import { MainLayout } from "../templates/MainLayout";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { HostelListingCard } from "../molecules/HostelListingCard";
import { HostelResults } from "../organisms/HostelResults";
import { hostelResults } from "../../data/hostels";

interface CityDetailProps {
  citySlug: string;
}

const CITY_NAME_MAP: Record<string, string> = {
  bangalore: "Bangalore",
  kochi: "Kochi",
  kottayam: "Kottayam",
  trivandrum: "Trivandrum",
  calicut: "Calicut",
  pune: "Pune",
  vellore: "Vellore",
  "delhi-ncr": "Delhi NCR"
};

const CITY_MOTTO_MAP: Record<string, string> = {
  bangalore: "India's Tech Capital — Home of Premium Academic Resides",
  kochi: "Cozy, Convenient, Coastal Living at its absolute finest",
  kottayam: "Sleek, Secure Student Housing in Kerala's Academic Gateway",
  trivandrum: "State-of-the-Art Comfort in the heart of Trivandrum",
  calicut: "Premium Stays near Calicut's prestigious education corridor",
  pune: "Cozy, Convenient, Comfortable Student Living",
  vellore: "Top-tier student residences within Vellore's education hub",
  "delhi-ncr": "Aesthetic, high-end student living near India's top campuses"
};

const CityDetail = ({ citySlug }: CityDetailProps) => {
  const cleanSlug = citySlug.toLowerCase();
  const cityName = CITY_NAME_MAP[cleanSlug] || citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
  const cityMotto = CITY_MOTTO_MAP[cleanSlug] || "Premium Shared Accommodations & Student Stays";

  // Form State
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }
    if (phoneNumber.length < 10) {
      setErrorMsg("Phone number must be at least 10 digits.");
      return;
    }
    if (!agreed) {
      setErrorMsg("You must agree to the Terms & Conditions.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    // Simulate backend call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setPhoneNumber("");
    }, 1200);
  };

  // Other cities for dynamic directory links (filter out current)
  const otherCities = Object.entries(CITY_NAME_MAP).filter(
    ([slug]) => slug !== cleanSlug && ["bangalore", "kochi", "kottayam", "trivandrum", "calicut", "pune"].includes(slug)
  );

  return (
    <MainLayout>
      <section className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-20 pb-20 transition-all duration-300 flex flex-col">
        
        {/* Dynamic Full-Width Livinnza Brand Blue Banner */}
        <div className="w-full bg-[#006eeb] dark:bg-[#0059c4] text-white relative overflow-hidden mb-12 border-b border-blue-600/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-0 flex flex-col md:flex-row items-center justify-between relative min-h-[300px] md:min-h-[340px]">
            
            {/* Left side text contents */}
            <div className="max-w-2xl z-10 text-left py-8 md:py-10 md:pr-8">
              <Typography
                variant="h3"
                className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-100/90 mb-2"
              >
                The Perfect Stay In
              </Typography>
              <Typography
                variant="h1"
                className="text-4.5xl sm:text-6.5xl font-black tracking-tight text-white mb-4 uppercase drop-shadow-sm leading-none"
              >
                {cityName}
              </Typography>
              <Typography
                variant="p"
                className="text-sm sm:text-base text-white/95 font-medium max-w-lg leading-relaxed opacity-95"
              >
                Looking for the best hostels? We've got you covered! Discover comfortable, affordable, and well-equipped hostels tailored to your needs.
              </Typography>
            </div>

            {/* Right side cutout portrait */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] aspect-square shrink-0 z-10 self-end -mb-1 md:-mb-1.5">
              <Image
                src="/images/student_pointing_blue.png"
                alt={`${cityName} Student stay illustration`}
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                priority
                className="object-contain object-bottom select-none pointer-events-none"
              />
            </div>

            {/* Subtle backdrop radial glow */}
            <div className="absolute top-0 right-1/4 h-48 w-48 bg-white/10 blur-3xl rounded-full pointer-events-none" />
          </div>
        </div>

        {/* Centered Main Content Area */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          
          {/* 1. Breadcrumbs */}
          <div className="mb-8 text-left">
            <nav className="flex mb-5 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest items-center gap-2">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1 group">
                <Home className="h-3.5 w-3.5 group-hover:scale-105 transition-transform" /> Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-500 dark:text-slate-400">City</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-primary font-black tracking-widest">{cityName}</span>
            </nav>
          </div>

          {/* 2. Premium Search Results, Sidebar Filters, & Map View */}
          <div className="mb-20">
            <HostelResults citySlug={citySlug} />
          </div>

          {/* 4. Signature Amenities & Services */}
          <div className="mb-20 border-t border-slate-200/60 dark:border-white/5 pt-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Typography variant="small" className="uppercase tracking-[0.25em] text-primary dark:text-primary/95 font-extrabold mb-2.5 block">
                The Livinzza Standard
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Never worry about your day-to-day needs, enjoy your stay!
              </Typography>
              <Typography variant="p" className="mt-3 text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base">
                A premium experience curated specifically to ensure convenience, safety, and a comforting home-away-from-home vibe.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Doorstep Laundry",
                  desc: "One less chore on your checklist. We pick up, wash, steam iron, and deliver right back.",
                  icon: Sparkles,
                  color: "from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 border-blue-500/10"
                },
                {
                  title: "Worry-Free Security",
                  desc: "Fully covered with smart CCTV systems, trained security guards, and modern app-controlled locks.",
                  icon: ShieldCheck,
                  color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/10"
                },
                {
                  title: "Power in Your Hand",
                  desc: "A fully unified mobile app to raise maintenance tickets, settle rent payments, and check meal menus.",
                  icon: Flame,
                  color: "from-orange-500/10 to-amber-500/10 text-orange-600 dark:text-orange-400 border-orange-500/10"
                },
                {
                  title: "Rejuvenating Lounges",
                  desc: "Custom indoor and outdoor spaces built for team activities, movie nights, gaming, and relaxing.",
                  icon: Compass,
                  color: "from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 border-purple-500/10"
                },
                {
                  title: "Homely Hygienic Food",
                  desc: "Hot, nutritious, and delicious meals prepared under absolute hygiene parameters. Feels just like home.",
                  icon: Coffee,
                  color: "from-rose-500/10 to-red-500/10 text-rose-600 dark:text-rose-400 border-rose-500/10"
                },
                {
                  title: "Late Night Cafe",
                  desc: "Order freshly cooked delicacies from our late-night cafe counters for those intense exam night-outs.",
                  icon: Clock,
                  color: "from-cyan-500/10 to-sky-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/10"
                }
              ].map((item, idx) => (
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={idx}
                  className={`flex flex-col bg-white dark:bg-slate-900 border rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-md transition-all duration-300 border-slate-200/50 dark:border-white/5`}
                >
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} border shadow-inner mb-4`}>
                    <item.icon className="h-5.5 w-5.5" />
                  </div>
                  <Typography variant="h3" className="text-base font-extrabold text-slate-800 dark:text-white mb-2">
                    {item.title}
                  </Typography>
                  <Typography variant="p" className="text-xs sm:text-sm text-slate-500 dark:text-slate-450 leading-relaxed font-medium">
                    {item.desc}
                  </Typography>
                </motion.div>
              ))}
            </div>
            
            <p className="mt-8 text-center text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              * Amenities may differ by hostel stay options as well as packages selected.
            </p>
          </div>

          {/* 5. Callback Enquiry section */}
          <div className="mb-20">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/60 dark:border-white/5 bg-slate-900 text-white shadow-xl p-8 sm:p-12 md:flex md:items-center md:justify-between gap-12">
              {/* Backglow decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-primary/20 blur-3xl rounded-full" />
              
              <div className="relative max-w-xl md:flex-1">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 border border-primary/30 text-primary mb-4">
                  <HeartHandshake className="h-5.5 w-5.5" />
                </div>
                <Typography variant="h2" className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                  Let us help you find your stay, while you relax!
                </Typography>
                <Typography variant="p" className="text-slate-350 text-sm sm:text-base font-medium leading-relaxed">
                  Enter your number below and a verified Livinzza advisor will reach out to you within minutes. We'll find a customized space matching your budget and location parameters, completely free!
                </Typography>
              </div>

              {/* Callback Form */}
              <div className="relative mt-8 md:mt-0 w-full max-w-sm shrink-0 bg-white/5 border border-white/10 rounded-[2rem] p-6 sm:p-8 backdrop-blur-md">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleCallbackSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <label className="text-[10px] font-bold text-slate-350 uppercase tracking-wider block mb-2">Mobile Number</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">+91</span>
                          <input
                            type="tel"
                            maxLength={10}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                            placeholder="99999 99999"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                          />
                        </div>
                      </div>

                      <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="mt-0.5 rounded border-white/20 bg-white/5 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                        />
                        <span className="text-[10px] text-slate-400 font-semibold leading-snug">
                          I agree to the Terms of Service & Privacy Policy, and authorize Livinzza to contact me.
                        </span>
                      </label>

                      {errorMsg && (
                        <p className="text-red-400 text-[10px] font-bold tracking-wide animate-pulse">{errorMsg}</p>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl py-3 text-xs font-bold uppercase tracking-widest bg-primary hover:bg-primary-hover text-white flex items-center justify-center gap-2 border-0 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 border-2 border-white border-t-transparent animate-spin rounded-full" />
                            Requesting...
                          </>
                        ) : (
                          <>
                            <Phone className="h-3.5 w-3.5 fill-current" />
                            Get a Callback
                          </>
                        )}
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6"
                    >
                      <div className="h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <Check className="h-7 w-7" strokeWidth={3} />
                      </div>
                      <Typography variant="h3" className="text-lg font-extrabold text-white mb-2">
                        Callback Requested!
                      </Typography>
                      <Typography variant="p" className="text-xs text-slate-350 leading-relaxed font-semibold">
                        We've received your request. One of our senior student stay experts will call you shortly to assist.
                      </Typography>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-primary hover:text-white transition-colors text-[10px] font-bold uppercase tracking-wider mt-5 underline focus:outline-none"
                      >
                        Request another call
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* 6. Popular Cities Directory List */}
          <div className="border-t border-slate-200/60 dark:border-white/5 pt-16 text-center">
            <Typography variant="small" className="uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 font-extrabold mb-4 block">
              Explore Stays in Other Cities
            </Typography>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
              {otherCities.map(([slug, name]) => (
                <Link
                  key={slug}
                  href={`/city/${slug}`}
                  className="px-5 py-2.5 rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:text-primary hover:border-primary/40 hover:shadow-sm dark:border-white/5 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-primary transition-all duration-300"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export { CityDetail };
