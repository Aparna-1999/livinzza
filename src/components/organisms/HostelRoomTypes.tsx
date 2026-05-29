"use client";

import React from "react";
import { Typography } from "../atoms/Typography";
import { Bed, AlertCircle, Users, MessageSquare, Calendar } from "lucide-react";
import { Button } from "../atoms/Button";

export const HostelRoomTypes = ({ hostel }: { hostel: any }) => {
  const roomTypes = hostel.detailedRoomTypes || [
    { name: hostel.roomTypes[0] || "Standard Room", price: hostel.price, frequency: "Per Month", slotsLeft: 5 }
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 dark:border-white/10 mt-8 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 w-[40rem] h-[20rem] bg-indigo-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="flex items-center gap-2 mb-6 relative z-10">
        <Bed className="h-6 w-6 text-primary" />
        <Typography variant="h3" className="text-xl font-extrabold text-slate-900 dark:text-white">
          Room Type
        </Typography>
      </div>

      {/* Caution Banner */}
      <div className="flex items-center gap-2 p-4 mb-8 rounded-2xl bg-red-50/80 backdrop-blur-sm text-red-600 border border-red-200/60 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20 shadow-sm relative z-10">
        <AlertCircle className="h-5 w-5 shrink-0" />
        <span className="text-sm font-semibold">The following fees are separate from the Refundable Caution Deposit collected by the hostel.</span>
      </div>

      {/* Room Cards Grid/Scroll */}
      <div className="flex overflow-x-auto pb-8 pt-4 -mx-2 px-2 snap-x gap-6 mb-4 hide-scrollbar relative z-10">
        {roomTypes.map((room: any, idx: number) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-[260px] snap-center flex flex-col items-center p-8 rounded-[2rem] bg-white dark:bg-slate-800 shadow-md border border-slate-100 dark:border-white/5 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:border-primary/30 transition-all duration-300 text-center relative group"
          >
            {/* Hover Glow Accent */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="h-14 w-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-5 shadow-sm border border-slate-100 dark:border-white/5 group-hover:scale-110 group-hover:text-primary transition-all duration-300 z-10">
              <Users className="h-6 w-6 text-slate-700 dark:text-slate-300" />
            </div>
            
            <Typography variant="h4" className="text-lg font-extrabold text-slate-900 dark:text-white mb-6 min-h-[56px] flex items-center justify-center">
              {room.name}
            </Typography>
            
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              Starting From
            </div>
            
            <div className="text-3xl font-extrabold text-primary dark:text-primary-light mb-1 relative z-10">
              {room.price}
            </div>
            
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
              {room.frequency}
            </div>
            
            <div className={`flex items-center gap-1.5 text-xs font-bold ${room.slotsLeft > 0 ? 'text-emerald-500' : 'text-amber-500'}`}>
              <div className={`h-2 w-2 rounded-full ${room.slotsLeft > 0 ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              {room.slotsLeft} Slots Left
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-10 border-t border-slate-200/60 dark:border-white/10 relative z-10">
        <Button 
          href="/contact" 
          className="w-full flex items-center justify-center gap-2 py-4 rounded-[1.5rem] font-extrabold bg-white dark:bg-slate-800 text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-primary/20"
        >
          <MessageSquare className="h-5 w-5" />
          Enquire Now
        </Button>
        <Button 
          href="/contact" 
          className="w-full flex items-center justify-center gap-2 py-4 rounded-[1.5rem] font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-0 transition-all duration-300 shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
        >
          <Calendar className="h-5 w-5" />
          Book Now
        </Button>
      </div>

      {/* Hide Scrollbar Style Injector */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};
