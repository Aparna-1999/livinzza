"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { ArrowRight } from "lucide-react";

interface CityCardProps {
  name: string;
  count: string;
  image: string;
  description: string;
  className?: string;
}

const CityCard = ({ name, count, image, description, className }: CityCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_18px_50px_rgba(2,6,23,0.28)] ${className}`}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        <div className="absolute right-4 top-4">
          <div className="rounded-full border border-white/20 bg-slate-900/60 px-3 py-1 text-sm font-medium text-white backdrop-blur-md dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-100">
            {count}
          </div>
        </div>
      </div>
      <div className="p-6">
        <Typography variant="h4" className="mb-2 text-xl">
          {name}
        </Typography>
        <Typography variant="small" className="mb-4 block text-slate-600 dark:text-slate-300">
          {description}
        </Typography>
        <div className="inline-flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3">
          Explore Hostels <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>
  );
};

export { CityCard };
