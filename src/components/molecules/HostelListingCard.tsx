"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Bed, CheckCircle2, User, Star } from "lucide-react";
import { Badge } from "../atoms/Badge";

interface HostelListingCardProps {
  name: string;
  gender: "Male" | "Female";
  city: string;
  college: string;
  roomTypes: string[];
  image: string;
  price: string;
  rating: number;
}

const HostelListingCard = ({
  name,
  gender,
  city,
  college,
  roomTypes,
  image,
  price,
  rating
}: HostelListingCardProps) => {
  // Extract a clean short name for college to fit nicely in the metadata row
  const shortCollege = college.replace("University", "Univ.").split("-")[0].trim();

  return (
    <Link href={`/hostels?hostel=${encodeURIComponent(name)}`} className="block group">
      <motion.div
        whileHover={{ y: -6, scale: 1.015 }}
        className="flex flex-col h-full overflow-hidden rounded-[1.75rem] border border-slate-150 bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all hover:shadow-[0_15px_45px_rgba(2,6,23,0.08)] dark:border-white/5 dark:bg-slate-900"
      >
        {/* Image & Overlays */}
        <div className="relative h-48 w-full overflow-hidden rounded-[1.25rem] bg-slate-100 dark:bg-slate-800">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-w: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gender Badge */}
          <div className="absolute top-3 left-3 z-10">
            <Badge
              className={`rounded-lg px-2.5 py-1 text-[9px] font-bold shadow-sm border-0 ${
                gender === "Male"
                  ? "bg-blue-600 text-white dark:bg-blue-600/90"
                  : "bg-rose-500 text-white dark:bg-rose-500/90"
              }`}
            >
              {gender === "Male" ? "Boys Only" : "Girls Only"}
            </Badge>
          </div>

          {/* Verified Badge */}
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="success" className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-[9px] font-bold shadow-sm bg-emerald-500 text-white border-0 dark:bg-emerald-500/90">
              <CheckCircle2 className="h-3 w-3" /> Verified
            </Badge>
          </div>

          {/* Premium Glassmorphic Price Badge (2nd Screenshot Style) */}
          <div className="absolute bottom-3 left-3 z-10 flex items-baseline gap-0.5 rounded-xl border border-white/20 bg-black/45 px-3 py-1.5 text-white shadow-md backdrop-blur-md">
            <span className="text-sm font-extrabold tracking-tight">{price}</span>
            <span className="text-[9px] text-slate-300 font-medium">/mo</span>
          </div>
        </div>

        {/* Content Details */}
        <div className="flex flex-col flex-1 px-3 py-4">
          <div>
            {/* Hostel Name & Rating */}
            <div className="flex items-center justify-between mb-1.5 gap-2">
              <h3 className="text-sm sm:text-base font-extrabold leading-snug text-slate-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
                {name}
              </h3>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-xs shrink-0 bg-amber-500/5 px-2 py-0.5 rounded-lg border border-amber-500/10 dark:bg-amber-500/10">
                <Star className="h-3 w-3 fill-current" />
                <span>{rating}</span>
              </div>
            </div>
            
            {/* Location */}
            <div className="mt-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="line-clamp-1 font-medium">{city}</span>
            </div>
          </div>

          {/* Elegant Separator */}
          <div className="my-4 border-t border-slate-100 dark:border-white/5" />

          {/* Specifications Row with clean icons */}
          <div className="grid grid-cols-3 gap-2 text-[10px] font-bold text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1 min-w-0" title={`${roomTypes.join(", ")} sharing`}>
              <Bed className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
              <span className="truncate">{roomTypes[0].split(" ")[0]} Sharing</span>
            </div>
            
            <div className="flex items-center gap-1 min-w-0" title={college}>
              <GraduationCap className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
              <span className="truncate">{shortCollege}</span>
            </div>

            <div className="flex items-center gap-1 justify-end min-w-0">
              <User className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
              <span className="truncate">{gender}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export { HostelListingCard };
