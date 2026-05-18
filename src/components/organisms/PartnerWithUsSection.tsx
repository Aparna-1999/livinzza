"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Textarea } from "../atoms/Textarea";
import { Typography } from "../atoms/Typography";
import { ChecklistItem } from "../atoms/ChecklistItem";
import { Building2, ChartNoAxesCombined, Handshake, ShieldCheck, Sparkles } from "lucide-react";

const partnerBenefits = [
  {
    title: "Increased Visibility",
    description: "Reach thousands of students looking for quality hostel accommodation. Get listed on India's trusted hostel platform.",
    icon: Sparkles,
  },
  {
    title: "Verified Listing",
    description: "Build trust with our verification badge. Show students that your hostel meets our quality standards.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Management",
    description: "Manage bookings, availability, and student inquiries through our streamlined platform.",
    icon: Building2,
  },
  {
    title: "Support & Growth",
    description: "Get dedicated partner support and marketing assistance to help grow your hostel business.",
    icon: ChartNoAxesCombined,
  },
];

const benefits = [
  "Free listing on our platform",
  "Reliable customer support",
  "Marketing and promotional support",
  "Analytics and reporting dashboard",
  "Easy booking management system",
];

const PartnerWithUsSection = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24 dark:bg-slate-950">
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.5),_transparent_30%)] dark:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            Partnership Enquiry
          </Badge>
          <Typography variant="h1" className="mt-6 text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.96] tracking-tight text-slate-900 dark:text-slate-50">
            Partner With Us
          </Typography>
          <Typography variant="p" className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Join our growing network of verified hostel partners and let Livinnza help you reach more students with less operational overhead.
          </Typography>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_18px_60px_rgba(2,6,23,0.28)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                <Handshake className="h-5 w-5" />
              </div>
              <div>
                <Typography variant="h3" className="text-2xl text-slate-900 dark:text-slate-50">
                  Partnership Enquiry
                </Typography>
                <Typography variant="p" className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Tell us a little about your property and our team will connect with you.
                </Typography>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="contactPersonName">
                    Contact Person Name *
                  </label>
                  <Input id="contactPersonName" name="contactPersonName" placeholder="Contact person name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="partnerEmail">
                    Email *
                  </label>
                  <Input id="partnerEmail" name="partnerEmail" type="email" placeholder="you@example.com" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="partnerPhone">
                    Phone *
                  </label>
                  <Input id="partnerPhone" name="partnerPhone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="hostelName">
                    Hostel/Organization Name *
                  </label>
                  <Input id="hostelName" name="hostelName" placeholder="Hostel or organization name" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="partnerCity">
                    City *
                  </label>
                  <Input id="partnerCity" name="partnerCity" placeholder="City" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="roomCount">
                    Number of Rooms (Optional)
                  </label>
                  <Input id="roomCount" name="roomCount" type="number" placeholder="Number of rooms" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="additionalInfo">
                  Additional Information *
                </label>
                <Textarea id="additionalInfo" name="additionalInfo" placeholder="Tell us about your hostel, current occupancy, and anything else we should know." />
              </div>

              <Button type="submit" className="w-full rounded-full py-3.5">
                Submit Partnership Enquiry
              </Button>
            </form>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_18px_60px_rgba(2,6,23,0.28)]"
            >
              <Typography variant="h3" className="text-2xl text-slate-900 dark:text-slate-50">
                Why Partner With Livinnza?
              </Typography>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {partnerBenefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <article key={benefit.title} className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Typography variant="h4" className="mt-4 text-lg text-slate-900 dark:text-slate-50">
                        {benefit.title}
                      </Typography>
                      <Typography variant="p" className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {benefit.description}
                      </Typography>
                    </article>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              className="rounded-[2rem] border border-primary/20 bg-primary/5 p-6 text-slate-900 shadow-sm dark:border-primary/20 dark:bg-primary/10 dark:text-slate-100 dark:shadow-[0_18px_60px_rgba(2,6,23,0.28)]"
            >
              <Typography variant="h4" className="text-xl text-slate-900 dark:text-slate-50">
                Partnership Benefits
              </Typography>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {benefits.map((item) => (
                  <ChecklistItem key={item}>{item}</ChecklistItem>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_18px_60px_rgba(2,6,23,0.28)]"
            >
              <Typography variant="h4" className="text-xl text-slate-900 dark:text-slate-50">
                Have Questions?
              </Typography>
              <Typography variant="p" className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Our partnership team is here to help. Contact us directly:
              </Typography>
              <div className="mt-5 space-y-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                <div>info@livinnza.com</div>
                <div>+91 63645 16897</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PartnerWithUsSection };
