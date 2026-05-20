"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Bed, CheckCircle2, User } from "lucide-react";
import { Badge } from "../atoms/Badge";

interface HostelListingCardProps {
  name: string;
  gender: "Male" | "Female";
  city: string;
  college: string;
  roomTypes: string[];
  image: string;
  price: string;
}

const HostelListingCard = ({ name, gender, city, college, roomTypes, image, price }: HostelListingCardProps) => {
  // Extract a clean short name for college to fit nicely in the metadata row
  const shortCollege = college.replace("University", "Univ.").split("-")[0].trim();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-premium dark:border-white/10 dark:bg-slate-900"
    >
      {/* Image & Overlays */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-w: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Gender Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge
            className={`rounded-lg px-2.5 py-1 text-[10px] font-bold shadow-md border-0 ${
              gender === "Male"
                ? "bg-blue-600 text-white dark:bg-blue-600/90"
                : "bg-rose-500 text-white dark:bg-rose-500/90"
            }`}
          >
            {gender === "Male" ? "Boys Only" : "Girls Only"}
          </Badge>
        </div>

        {/* Verified Badge */}
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="success" className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-[10px] font-bold shadow-md">
            <CheckCircle2 className="h-3 w-3" /> Verified
          </Badge>
        </div>

        {/* Price Overlay (Bottom Left) */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-4 text-white z-10">
          <span className="text-xl font-extrabold tracking-tight">{price}</span>
          <span className="text-[10px] text-slate-350 font-medium">/mo</span>
        </div>
      </div>

      {/* Content Details */}
      <div className="flex flex-col flex-1 p-5">
        <div>
          {/* Hostel Name */}
          <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          {/* Location */}
          <div className="mt-2 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="line-clamp-1">{city}</span>
          </div>
        </div>

        {/* Separator */}
        <div className="my-4 border-t border-slate-100 dark:border-white/5" />

        {/* Specs Row */}
        <div className="grid grid-cols-3 gap-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1 min-w-0" title={`${roomTypes.join(", ")} sharing`}>
            <Bed className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            <span className="truncate">{roomTypes[0].split(" ")[0]} Sharing</span>
          </div>
          
          <div className="flex items-center gap-1 min-w-0" title={college}>
            <GraduationCap className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            <span className="truncate">{shortCollege}</span>
          </div>

          <div className="flex items-center gap-1 justify-end min-w-0">
            <User className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            <span className="truncate">{gender}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-5">
          <Link
            href={`/hostels?hostel=${encodeURIComponent(name)}`}
            className="block text-center w-full rounded-xl bg-slate-100 py-2.5 text-xs font-bold text-slate-900 transition-all hover:bg-primary hover:text-white dark:bg-white/5 dark:text-slate-100 dark:hover:bg-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export { HostelListingCard };

