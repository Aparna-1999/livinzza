"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, X, Sparkles } from "lucide-react";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Textarea } from "../atoms/Textarea";

const EnquiryFlexSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="enquiry" className="relative overflow-hidden bg-slate-100 py-16 sm:py-20 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Badge variant="secondary" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-primary dark:border-white/10 dark:bg-white/5 dark:text-primary/80">
            Get In Touch
          </Badge>
          <Typography variant="h2" className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Experience Livinnza & Send an Enquiry
          </Typography>
          <Typography variant="p" className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Watch our quick overview video or drop us a message to schedule a personalized campus walkthrough.
          </Typography>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Video Column */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 shadow-lg dark:border-white/10 aspect-video group">
            {!isPlaying ? (
              <>
                <Image
                  src="/images/vit_vellore.png"
                  alt="Livinnza overview video thumbnail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(true)}
                    className="group/btn relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all hover:bg-white hover:text-primary shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    aria-label="Play video"
                  >
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity group-hover/btn:opacity-100" />
                    <Play className="relative z-10 h-6 w-6 sm:h-8 sm:w-8 ml-1" fill="currentColor" />
                  </motion.button>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white drop-shadow-md">
                  <div className="font-semibold tracking-wide text-sm sm:text-base">The Livinnza Experience</div>
                  <div className="text-xs sm:text-sm font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">02:15</div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 bg-slate-950 flex items-center justify-center flex-col p-6 text-center animate-in fade-in duration-500">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </button>
                <Play className="h-12 w-12 text-primary mb-4 opacity-50" />
                <Typography variant="h3" className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Livinnza Walkthrough Video
                </Typography>
                <Typography variant="p" className="text-sm sm:text-base text-slate-400 max-w-md">
                  Promotional video showcasing our dedicated college-linked hostels, premium amenities, and disciplined supervision.
                </Typography>
              </div>
            )}
          </div>

          {/* Enquiry Form Column */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-white/10 dark:bg-slate-900"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <Typography variant="h3" className="text-xl font-bold text-slate-900 dark:text-white">
                Quick Enquiry
              </Typography>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300" htmlFor="quick-name">
                  Name
                </label>
                <Input id="quick-name" name="name" placeholder="Your full name" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300" htmlFor="quick-email">
                    Email
                  </label>
                  <Input id="quick-email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300" htmlFor="quick-phone">
                    Phone
                  </label>
                  <Input id="quick-phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300" htmlFor="quick-message">
                  Message
                </label>
                <Textarea id="quick-message" name="message" rows={3} placeholder="Tell us how we can help..." required />
              </div>

              <Button type="submit" className="w-full rounded-full py-3">
                Send Enquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { EnquiryFlexSection };
