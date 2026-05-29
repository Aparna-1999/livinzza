"use client";

import React from "react";
import { MarketingLayout } from "../templates/MarketingLayout";
import { HostelDetailHero } from "../organisms/HostelDetailHero";
import { HostelDetailInfo } from "../organisms/HostelDetailInfo";
import { HostelRoomTypes } from "../organisms/HostelRoomTypes";

// We import the type directly if needed, or define inline
interface HostelData {
  id: string;
  name: string;
  gender: string;
  city: string;
  college: string;
  roomTypes: string[];
  image: string;
  price: string;
  rating: number;
  reviewsCount?: number;
  amenities: string[];
  mapCoords: { x: number; y: number };
  description?: string;
  detailedRoomTypes?: Array<{ name: string; price: string; frequency: string }>;
}

export const HostelDetail = ({ hostel }: { hostel: HostelData }) => {
  return (
    <MarketingLayout>
      <div className="bg-slate-50 dark:bg-slate-950 pb-20">
        <HostelDetailHero hostel={hostel} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: About & Facilities */}
          <div className="lg:col-span-2 space-y-12">
            <HostelDetailInfo hostel={hostel} />
          </div>
          
          {/* Right Column: Pricing & Booking */}
          <div className="lg:col-span-1">
            <HostelRoomTypes hostel={hostel} />
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
};
