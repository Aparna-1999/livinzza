"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { Check, ShieldCheck, Map, Clock, Coffee, Wifi, AirVent, WashingMachine, Bus, Lock } from "lucide-react";

export const HostelDetailInfo = ({ hostel }: { hostel: any }) => {
  // Try to map string amenities to beautiful icons dynamically
  const getIconForAmenity = (amenity: string) => {
    const a = amenity.toLowerCase();
    if (a.includes("wifi")) return <Wifi className="h-5 w-5 text-primary" />;
    if (a.includes("ac") || a.includes("air")) return <AirVent className="h-5 w-5 text-primary" />;
    if (a.includes("food") || a.includes("breakfast") || a.includes("meal")) return <Coffee className="h-5 w-5 text-primary" />;
    if (a.includes("laundry") || a.includes("wash")) return <WashingMachine className="h-5 w-5 text-primary" />;
    if (a.includes("bus") || a.includes("transport")) return <Bus className="h-5 w-5 text-primary" />;
    if (a.includes("security") || a.includes("safe")) return <ShieldCheck className="h-5 w-5 text-primary" />;
    if (a.includes("time") || a.includes("clock")) return <Clock className="h-5 w-5 text-primary" />;
    return <Check className="h-5 w-5 text-primary" />;
  };

  return (
    <div className="space-y-10">
      {/* About Section */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 dark:border-white/5">
        <Typography variant="h3" className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          About {hostel.name}
        </Typography>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {hostel.description ? (
            hostel.description.split('\n').map((paragraph: string, idx: number) => (
              <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Premium accommodation located in {hostel.city}, catering exclusively to {hostel.gender.toLowerCase()} students near {hostel.college}. Equipped with all essential amenities to ensure a comfortable and focused academic life.
            </p>
          )}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 dark:border-white/5">
        <Typography variant="h3" className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Facilities & Amenities
        </Typography>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {hostel.amenities.map((amenity: string, idx: number) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20">
              <div className="h-12 w-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm border border-slate-100 dark:border-white/5 text-primary">
                {getIconForAmenity(amenity)}
              </div>
              <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">
                {amenity}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Location Card */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Map className="h-6 w-6 text-primary" />
          </div>
          <div>
            <Typography variant="h4" className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Explore the Neighborhood
            </Typography>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Conveniently located in {hostel.city} near {hostel.college}.
            </p>
          </div>
        </div>
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hostel.name + " " + hostel.city)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm hover:bg-primary hover:text-white transition-colors"
        >
          Open in Maps
        </a>
      </section>
    </div>
  );
};
