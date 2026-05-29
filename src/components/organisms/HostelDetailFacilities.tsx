"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { Check, ShieldCheck, Clock, Coffee, Wifi, AirVent, WashingMachine, Bus, Droplet, UserCheck, Video, Flame, Bath, Package, HeartPulse, GraduationCap, Laptop, BookOpen, BatteryCharging } from "lucide-react";

export const HostelDetailFacilities = ({ hostel }: { hostel: any }) => {
  // Try to map string amenities to beautiful icons dynamically
  const getIconForAmenity = (amenity: string) => {
    const a = amenity.toLowerCase();
    if (a.includes("wifi")) return <Wifi className="h-3.5 w-3.5" />;
    if (a.includes("ac") || a.includes("air")) return <AirVent className="h-3.5 w-3.5" />;
    if (a.includes("food") || a.includes("breakfast") || a.includes("meal") || a.includes("mess")) return <Coffee className="h-3.5 w-3.5" />;
    if (a.includes("laundry") || a.includes("wash")) return <WashingMachine className="h-3.5 w-3.5" />;
    if (a.includes("bus") || a.includes("transport")) return <Bus className="h-3.5 w-3.5" />;
    if (a.includes("security") || a.includes("safe") || a.includes("cctv") || a.includes("guard")) return <ShieldCheck className="h-3.5 w-3.5" />;
    if (a.includes("time") || a.includes("clock") || a.includes("24/7")) return <Clock className="h-3.5 w-3.5" />;
    if (a.includes("hot water") || a.includes("water")) return <Droplet className="h-3.5 w-3.5" />;
    if (a.includes("wardrobe")) return <Package className="h-3.5 w-3.5" />;
    if (a.includes("bathroom") || a.includes("bath")) return <Bath className="h-3.5 w-3.5" />;
    if (a.includes("medical") || a.includes("doctor")) return <HeartPulse className="h-3.5 w-3.5" />;
    if (a.includes("warden") || a.includes("supervision")) return <UserCheck className="h-3.5 w-3.5" />;
    if (a.includes("study") || a.includes("table")) return <BookOpen className="h-3.5 w-3.5" />;
    if (a.includes("power") || a.includes("backup")) return <BatteryCharging className="h-3.5 w-3.5" />;
    if (a.includes("portal") || a.includes("student")) return <Laptop className="h-3.5 w-3.5" />;
    
    return <Check className="h-3.5 w-3.5" />;
  };

  if (!hostel.amenities || hostel.amenities.length === 0) return null;

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 dark:border-white/10 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <Typography variant="h3" className="text-xl font-extrabold text-slate-900 dark:text-white">
          Facilities
        </Typography>
      </div>
      
      <div className="flex flex-wrap gap-3 relative z-10">
        {hostel.amenities.map((amenity: string, idx: number) => (
          <div 
            key={idx} 
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-[13px] border border-slate-200/60 dark:border-white/10 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all cursor-default group"
          >
            <div className="text-primary group-hover:scale-110 transition-transform">
              {getIconForAmenity(amenity)}
            </div>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
