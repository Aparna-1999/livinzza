"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { MarketingLayout } from "../templates/MarketingLayout";
import { Bed, Calendar, GraduationCap, Mail, MapPin, Phone, User, CheckCircle2 } from "lucide-react";
import { Input } from "../atoms/Input";

export const Booking = ({ hostel }: { hostel: any }) => {
  const [selectedRoomIdx, setSelectedRoomIdx] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Normalize room types from either detailedRoomTypes or standard roomTypes array
  const roomTypes = hostel.detailedRoomTypes || [
    { name: hostel.roomTypes[0] || "Standard Room", price: hostel.price, frequency: "Per Month", slotsLeft: 5 }
  ];

  const selectedRoom = roomTypes[selectedRoomIdx];
  const mainImage = hostel.image || (hostel.gallery && hostel.gallery[0]) || "/images/lifestyle_1.png";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <MarketingLayout>
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] flex items-center justify-center p-4">
          <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="relative z-10 max-w-md w-full bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-white/5 text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <Typography variant="h2" className="text-3xl font-black text-slate-900 dark:text-white mb-4">
              Booking Requested!
            </Typography>
            <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">
              We have received your request for {hostel.name}. Our admissions team will contact you shortly to confirm your slot and proceed with the payment.
            </p>
            <Button href={`/hostel/${hostel.id}`} className="w-full py-4 rounded-2xl font-bold">
              Return to Hostel Details
            </Button>
          </div>
        </div>
      </MarketingLayout>
    );
  }

  return (
    <MarketingLayout>
      <div className="relative min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] pb-24 pt-12 overflow-hidden">
        {/* Premium Background Mesh / Dots */}
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        {/* Dynamic Background Orbs */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2 z-0"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 translate-x-1/2 z-0"></div>
        
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mt-8">
          
          <div className="mb-10 text-center lg:text-left">
            <Typography variant="h1" className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Complete Your Booking
            </Typography>
            <p className="text-slate-500 dark:text-slate-400 mt-3 text-lg font-medium">
              Secure your spot at {hostel.name} in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Order Summary */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 dark:border-white/5 relative overflow-hidden">
                <div className="relative w-full h-56 rounded-3xl overflow-hidden mb-6 group">
                  <Image src={mainImage} alt={hostel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold leading-tight">{hostel.name}</h3>
                    <div className="flex items-center gap-1.5 text-sm text-white/80 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{hostel.city}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 px-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Bed className="w-4 h-4 text-primary" />
                      Select Room Type
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {roomTypes.map((room: any, idx: number) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedRoomIdx(idx)}
                          className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-left ${
                            selectedRoomIdx === idx 
                              ? 'border-primary bg-primary/5 shadow-sm shadow-primary/10' 
                              : 'border-slate-100 dark:border-white/10 hover:border-slate-200 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          <div>
                            <div className={`font-bold ${selectedRoomIdx === idx ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                              {room.name}
                            </div>
                            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                              {room.slotsLeft} slots available
                            </div>
                          </div>
                          <div className={`font-black ${selectedRoomIdx === idx ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}>
                            {room.price}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-white/10">
                    <div className="flex items-end justify-between mb-2">
                      <span className="text-slate-500 dark:text-slate-400 font-semibold text-sm">Total Expected Price</span>
                      <div className="text-right">
                        <span className="text-3xl font-black text-slate-900 dark:text-white">{selectedRoom.price}</span>
                        <span className="text-sm font-bold text-slate-500 block">{selectedRoom.frequency}</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl mt-4 border border-slate-100 dark:border-white/5">
                      <strong className="text-slate-600 dark:text-slate-300 block mb-1">Notice:</strong>
                      This amount is indicative. Additional security deposit and onboarding fees may apply during final admission.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Booking Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-white/5">
                <Typography variant="h3" className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  Student Details
                </Typography>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <User className="w-4 h-4 text-slate-400" /> Full Name
                      </label>
                      <Input placeholder="John Doe" required className="rounded-2xl h-14 bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-slate-400" /> Phone Number
                      </label>
                      <Input type="tel" placeholder="+91 98765 43210" required className="rounded-2xl h-14 bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-400" /> Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" required className="rounded-2xl h-14 bg-slate-50 border-slate-200 focus:bg-white" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-slate-400" /> College / Institution
                      </label>
                      <Input placeholder="e.g. Jain University" defaultValue={hostel.college !== "N/A" ? hostel.college : ""} required className="rounded-2xl h-14 bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" /> Expected Move-in Date
                      </label>
                      <Input type="date" required className="rounded-2xl h-14 bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      isLoading={isSubmitting}
                      className="w-full py-6 rounded-[2rem] font-black text-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_15px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all"
                    >
                      Confirm Booking Request
                    </Button>
                    <p className="text-center text-xs text-slate-500 font-medium mt-4">
                      By submitting this request, you agree to Livinnza's Terms of Service and Privacy Policy. No payment is required right now.
                    </p>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </MarketingLayout>
  );
};
