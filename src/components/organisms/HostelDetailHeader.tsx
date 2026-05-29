"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Star, MapPin, Phone, Mail, GraduationCap } from "lucide-react";

export const HostelDetailHeader = ({ hostel }: { hostel: any }) => {
  const baseImage = hostel.image || "/images/lifestyle_1.png";
  const images = hostel.gallery && hostel.gallery.length > 1 ? hostel.gallery : [
    baseImage,
    "/images/lifestyle_2.png",
    "/images/lifestyle_3.png",
    "/images/lifestyle_4.png"
  ];
  const mainImage = images[0];
  const thumbImages = images.slice(1, 4);
  const extraImagesCount = images.length > 4 ? images.length - 4 : 0;

  const contact = hostel.contact || {
    phones: ["+91 98765 43210"],
    email: "hello@livinnza.com",
    address: `${hostel.city} Campus Area`
  };

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 dark:border-white/10 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
      <div className="text-sm text-slate-500 mb-6">
        Home / Hostels / <span className="font-bold text-slate-900 dark:text-white">{hostel.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Details & About */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <Typography variant="h1" className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              {hostel.name}
            </Typography>
          </div>

          {/* Contact & Meta Details */}
          <div className="space-y-3 mb-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-4 text-primary">
              {contact.phones?.map((phone: string, i: number) => (
                <div key={i} className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4" />
                  <span>{phone}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5">
                <Mail className="h-4 w-4" />
                <span>{contact.email}</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400 font-medium">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{contact.address}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
              <GraduationCap className="h-4 w-4 text-primary shrink-0" />
              <span>{hostel.college}</span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-3 mb-8">
            <Badge className="bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1.5 flex items-center gap-1">
              {hostel.gender === "Male" ? "Male" : "Female"}
            </Badge>
            <Badge variant="success" className="bg-emerald-500 text-white border-0 px-3 py-1.5 flex items-center gap-1 font-extrabold">
              <Star className="h-3.5 w-3.5 fill-current" />
              {Number(hostel.rating).toFixed(1)}
            </Badge>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">{hostel.reviewsCount || 100} reviews</span>
          </div>

          {/* Description */}
          <div className="prose prose-sm prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            {hostel.description ? (
              hostel.description.split('\n').map((paragraph: string, idx: number) => (
                <p key={idx} className="mb-3">{paragraph}</p>
              ))
            ) : (
              <p>Premium accommodation located in {hostel.city}.</p>
            )}
          </div>
        </div>

        {/* Right Side: Image Gallery */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="relative h-[300px] md:h-[400px] w-full rounded-[2rem] overflow-hidden group shadow-lg">
            <Image
              src={mainImage}
              alt={hostel.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Image counter pill */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
              1/{images.length}
            </div>
          </div>
          
          {/* Thumbnails Row */}
          {thumbImages.length > 0 && (
            <div className="grid grid-cols-3 gap-4 h-24 sm:h-32">
              {thumbImages.map((thumb: string, idx: number) => {
                const isLast = idx === thumbImages.length - 1;
                return (
                  <div key={idx} className="relative w-full h-full rounded-[1.25rem] overflow-hidden group cursor-pointer shadow-md">
                    <Image
                      src={thumb}
                      alt={`${hostel.name} thumbnail ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {isLast && extraImagesCount > 0 && (
                      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white transition-colors group-hover:bg-black/50">
                        <span className="text-xs font-semibold mb-0.5">See More</span>
                        <span className="text-xl font-extrabold">+{extraImagesCount}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Map Location */}
          <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mt-4 bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-white/5 group">
            {/* Stylized Map Background */}
            <div className="absolute inset-0 opacity-40 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(#94A3B8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <MapPin className="h-10 w-10 text-red-500 drop-shadow-md relative z-10 -mt-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
            </div>
            
            <div className="absolute top-4 right-4 z-20">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hostel.name + " " + hostel.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-4 py-2 shadow-md text-xs flex items-center gap-1.5 transition-colors"
              >
                Open in Maps
              </a>
            </div>
            
            <div className="absolute bottom-2 left-0 right-0 flex justify-center text-[10px] text-slate-500 font-medium">
              <div className="bg-white/80 dark:bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm flex gap-4">
                <span>Keyboard shortcuts</span>
                <span>Map data ©2026</span>
                <span>Terms</span>
                <span>Report a map error</span>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <button className="w-full bg-gradient-to-r from-[#0aa82a] to-[#0d9426] hover:from-[#088c22] hover:to-[#0b7a1d] text-white rounded-[1.25rem] py-3.5 font-bold flex items-center justify-center gap-2 border border-white/20 shadow-lg shadow-green-600/20 transition-all hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Fee Structure
            </button>
            <button className="w-full bg-gradient-to-r from-[#0aa82a] to-[#0d9426] hover:from-[#088c22] hover:to-[#0b7a1d] text-white rounded-[1.25rem] py-3.5 font-bold flex items-center justify-center gap-2 border border-white/20 shadow-lg shadow-green-600/20 transition-all hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
