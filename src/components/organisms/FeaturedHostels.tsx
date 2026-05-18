import React from "react";
import { Typography } from "../atoms/Typography";
import { HostelCard } from "../molecules/HostelCard";
import { Button } from "../atoms/Button";

const FeaturedHostels = () => {
  const hostels = [
    {
      name: "North Bangalore Student Residence",
      location: "College-linked hostel with disciplined supervision",
      price: "₹8,500",
      rating: 4.8,
      image: "/images/boys_room.png",
    },
    {
      name: "Premium Girls Hostel",
      location: "Verified facilities for safe and comfortable living",
      price: "₹7,200",
      rating: 4.9,
      image: "/images/girls_room.png",
    },
    {
      name: "Bangalore Academic Stay",
      location: "Ideal for students seeking short commute routes",
      price: "₹6,500",
      rating: 4.7,
      image: "/images/boys_room.png",
    },
    {
      name: "Parent-Approved Girls Hostel",
      location: "Designed for trust, safety, and clarity",
      price: "₹6,800",
      rating: 4.6,
      image: "/images/girls_room.png",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Typography variant="small" className="uppercase tracking-[0.26em] text-primary dark:text-primary/80">
              Verified & Trusted
            </Typography>
            <Typography variant="h2" className="mt-4 text-3xl md:text-4xl text-slate-900 dark:text-white">
              Featured hostel options for Bangalore students
            </Typography>
            <Typography variant="p" className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Hand-picked stays with clear pricing, credible visuals, and a standard of care that gives students and parents confidence.
            </Typography>
          </div>
          <Button href="/hostels" variant="outline" className="hidden rounded-full border-slate-300 bg-white px-6 text-slate-700 hover:bg-slate-100 lg:flex dark:border-white/15 dark:bg-transparent dark:text-slate-100 dark:hover:bg-white/10">View all hostels</Button>
        </div>
        
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {hostels.map((hostel, index) => (
            <HostelCard key={index} {...hostel} />
          ))}
        </div>

        <div className="mt-12 text-center lg:hidden">
          <Button href="/hostels" variant="outline" className="w-full rounded-full border-slate-300 bg-white px-6 text-slate-700 hover:bg-slate-100 sm:w-auto dark:border-white/15 dark:bg-transparent dark:text-slate-100 dark:hover:bg-white/10">View all hostels</Button>
        </div>
      </div>
    </section>
  );
};

export { FeaturedHostels };
