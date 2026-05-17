"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";
import { Typography } from "../atoms/Typography";

const MissionVisionSection = () => {
  return (
    <section className="bg-white py-20 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10"
          >
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <Image 
                src="/images/mission_1.png" 
                alt="Students collaborating" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500 text-white shadow-lg backdrop-blur-md">
                  <Target className="h-6 w-6" />
                </div>
                <Typography variant="h3" className="text-2xl font-bold text-white">
                  Our Mission
                </Typography>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <Typography variant="p" className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                To redefine student accommodation by providing secure, community-driven, and premium living experiences that empower students to focus on their academic journey and personal growth, without compromise.
              </Typography>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10"
          >
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <Image 
                src="/images/mission_2.png" 
                alt="Premium student hostel exterior" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white shadow-lg backdrop-blur-md">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <Typography variant="h3" className="text-2xl font-bold text-white">
                  Our Vision
                </Typography>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <Typography variant="p" className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                To become the global standard for university-affiliated housing, bridging the gap between educational institutions and modern student living to create vibrant, sustainable academic ecosystems worldwide.
              </Typography>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export { MissionVisionSection };
