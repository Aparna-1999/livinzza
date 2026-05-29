"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Info } from "lucide-react";

export const HostelRoomTypes = ({ hostel }: { hostel: any }) => {
  const roomTypes = hostel.detailedRoomTypes || [
    { name: hostel.roomTypes[0] || "Standard Room", price: hostel.price, frequency: "Per Month" }
  ];

  return (
    <div className="sticky top-24 space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-white/5">
        <Typography variant="h3" className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
          Room Types & Pricing
        </Typography>
        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5 mt-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
          <Info className="h-4 w-4 shrink-0 text-primary mt-0.5" />
          <span>The following fees are separate from the Refundable Caution Deposit collected by the hostel.</span>
        </p>
      </div>

      {/* Pricing Cards List */}
      <div className="space-y-4">
        {roomTypes.map((room: any, idx: number) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 dark:border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden">
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-primary/10 transition-colors" />
            
            <div className="flex flex-col relative z-10">
              <div className="flex items-start justify-between mb-3">
                <Typography variant="h4" className="text-base font-bold text-slate-900 dark:text-white">
                  {room.name}
                </Typography>
                {room.name.toLowerCase().includes("premium") && (
                  <Badge variant="warning" className="bg-amber-100 text-amber-700 border-0 dark:bg-amber-500/20 dark:text-amber-400 text-[10px] px-2 py-0.5">
                    Premium
                  </Badge>
                )}
              </div>
              
              <div className="mb-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                  Starting From
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-primary dark:text-primary-light tracking-tight">
                    {room.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {room.frequency}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking CTA */}
      <div className="bg-primary rounded-3xl p-6 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
        <Typography variant="h4" className="text-xl font-extrabold text-white mb-2 relative z-10">
          Ready to reserve?
        </Typography>
        <p className="text-primary-light text-sm mb-6 relative z-10">
          Secure your spot today or schedule a visit to experience {hostel.name} in person.
        </p>
        <Button href="/contact" variant="secondary" className="w-full rounded-xl bg-white text-primary hover:bg-slate-50 shadow-md py-3 font-bold relative z-10">
          Book appointment
        </Button>
      </div>
    </div>
  );
};
