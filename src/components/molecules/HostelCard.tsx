"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Star, MapPin, CheckCircle2 } from "lucide-react";

interface HostelCardProps {
  id?: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  isVerified?: boolean;
  className?: string;
}

const HostelCard = ({ id, name, location, price, rating, image, isVerified = true, className }: HostelCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-premium dark:border-white/10 dark:bg-slate-900 ${className}`}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isVerified && (
          <div className="absolute top-4 left-4">
            <Badge variant="success" className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> Verified
            </Badge>
          </div>
        )}
        <div className="absolute bottom-4 right-4 rounded-lg bg-white/90 px-3 py-1 text-sm font-bold text-slate-900 backdrop-blur-sm dark:bg-slate-950/80 dark:text-white">
          {price}/mo
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Typography variant="h4" className="text-lg line-clamp-1 text-slate-900 dark:text-white">
            {name}
          </Typography>
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="h-4 w-4 fill-current" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="mb-4 flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{location}</span>
        </div>
        <Link
          href={id ? `/hostel/${id}` : `/hostels?hostel=${encodeURIComponent(name)}`}
          className="block text-center w-full rounded-xl bg-slate-100 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-primary hover:text-white dark:bg-white/5 dark:text-slate-100 dark:hover:bg-primary"
        >
          Know More
        </Link>
      </div>
    </motion.div>
  );
};

export { HostelCard };
