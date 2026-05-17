"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Textarea } from "../atoms/Textarea";
import { Typography } from "../atoms/Typography";
import { Clock3, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const contactCards = [
  {
    title: "Our Address",
    icon: MapPin,
    lines: [
      "Pleasant Biz Technologies Private Limited,",
      "152, Unity Enclave,",
      "Geddalahalli, Bangalore,",
      "Karnataka 560077",
    ],
  },
  {
    title: "Phone",
    icon: Phone,
    lines: ["+91 63645 16897", "+91 80886 31765"],
  },
  {
    title: "Email",
    icon: Mail,
    lines: ["info@livinnza.com", "info@pleasantbiz.com"],
  },
  {
    title: "Business Hours (IST)",
    icon: Clock3,
    lines: ["Monday - Saturday: 9:00 AM to 6:00 PM", "Sunday: Closed"],
  },
];

const ContactSection = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24 dark:bg-slate-950">
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.5),_transparent_30%)] dark:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            Contact Us
          </Badge>
          <Typography variant="h1" className="mt-6 text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.96] tracking-tight text-slate-900 dark:text-slate-50">
            Drop Us a Line And Keep In Touch
          </Typography>
          <Typography variant="p" className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Reach out for a demo, partnership enquiry, or general support. Our team will get back to you as soon as possible.
          </Typography>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-6">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_18px_60px_rgba(2,6,23,0.28)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="h3" className="text-2xl text-slate-900 dark:text-slate-50">
                    Get In Touch
                  </Typography>
                  <Typography variant="p" className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Fill the form and we&apos;ll route your message to the right team.
                  </Typography>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article key={card.title} className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-500 shadow-sm dark:bg-slate-950 dark:text-sky-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <Typography variant="h4" className="text-base text-slate-900 dark:text-slate-50">
                          {card.title}
                        </Typography>
                      </div>
                      <div className="mt-4 space-y-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {card.lines.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </motion.div>

          </div>

          <div className="space-y-6">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_18px_60px_rgba(2,6,23,0.28)]"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="name">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your full name" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="email">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="phone">
                      Phone
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="message">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell us how we can help..." />
                </div>

                <Button type="submit" className="w-full rounded-full py-3.5">
                  Submit
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
