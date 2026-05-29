"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Star, MapPin, CheckCircle2, Navigation } from "lucide-react";
import { Button } from "../atoms/Button";

export const HostelDetailHero = ({ hostel }: { hostel: any }) => {
  return (
    <section className="relative w-full">
      {/* Hero Image Background */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <Image
          src={hostel.image}
          alt={hostel.name}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex-1 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="success" className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5 px-3 py-1">
                  <CheckCircle2 className="h-4 w-4" /> Verified
                </Badge>
                <Badge className="bg-primary/20 text-primary-light border border-primary/30 backdrop-blur-md px-3 py-1">
                  {hostel.gender === "Male" ? "Boys Only" : "Girls Only"}
                </Badge>
              </div>
              
              <Typography variant="h1" className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-white">
                {hostel.name}
              </Typography>
              
              <div className="flex flex-wrap items-center gap-4 text-slate-200 mt-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white text-lg">{hostel.rating}</span>
                  <span className="text-sm ml-1 text-slate-300">({hostel.reviewsCount || 100} reviews)</span>
                </div>
                <div className="h-4 w-px bg-slate-600 hidden sm:block" />
                <div className="flex items-center gap-1.5 text-sm">
                  <MapPin className="h-4 w-4 text-primary-light" />
                  <span>{hostel.city}</span>
                </div>
                <div className="h-4 w-px bg-slate-600 hidden sm:block" />
                <div className="flex items-center gap-1.5 text-sm">
                  <Navigation className="h-4 w-4 text-primary-light" />
                  <span>Near {hostel.college}</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 flex gap-4">
              <Button href="/contact" variant="primary" className="rounded-xl px-8 py-3.5 shadow-xl hover:shadow-primary/50 transition-all text-sm font-bold">
                Book appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
