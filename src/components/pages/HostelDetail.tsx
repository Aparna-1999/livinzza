"use client";

import React from "react";
import { MarketingLayout } from "../templates/MarketingLayout";
import { HostelDetailHeader } from "../organisms/HostelDetailHeader";
import { HostelDetailFacilities } from "../organisms/HostelDetailFacilities";
import { HostelRoomTypes } from "../organisms/HostelRoomTypes";

export const HostelDetail = ({ hostel }: { hostel: any }) => {
  return (
    <MarketingLayout>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 pt-8 overflow-hidden">
        {/* Dynamic Background Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">
          
          {/* Section 1: Header & Gallery */}
          <HostelDetailHeader hostel={hostel} />

          {/* Section 2: Facilities */}
          <HostelDetailFacilities hostel={hostel} />

          {/* Section 3: Room Types & Action Buttons */}
          <HostelRoomTypes hostel={hostel} />
          
        </div>
      </div>
    </MarketingLayout>
  );
};
