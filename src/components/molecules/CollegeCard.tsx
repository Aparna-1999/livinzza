"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

interface CollegeCardProps {
  name: string;
  location: string;
  hostels: string;
  image: string;
  className?: string;
}

const CollegeCard = ({ name, location, hostels, image, className }: CollegeCardProps) => {
  const pathname = usePathname();
  const targetHref = `/hostels?college=${encodeURIComponent(name)}`;

  const handleCollegeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const hostelsSection = document.getElementById("hostels");
      if (hostelsSection) {
        hostelsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <article className={`group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-950 ${className ?? ""}`}>
      {/* Image Header with Badge Overlay */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Floating Priority Badge */}
        <div className="absolute right-4 top-4 z-10">
          <Badge variant="secondary" className="rounded-full bg-slate-950/80 text-white backdrop-blur border border-white/10 px-3 py-1 text-xs">
            {hostels}
          </Badge>
        </div>
        {/* Floating icon */}
        <div className="absolute left-4 bottom-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col p-6">
        <Typography variant="h4" className="text-lg font-bold leading-snug text-slate-900 dark:text-white">
          {name}
        </Typography>
        <Typography variant="p" className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex-1">
          {location}
        </Typography>

        <Button
          href={targetHref}
          onClick={handleCollegeClick as any}
          variant="link"
          className="mt-6 h-auto p-0 text-sm font-semibold text-primary dark:text-primary inline-flex items-center gap-1 group-hover:underline"
        >
          Find hostels <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </article>
  );
};

export { CollegeCard };
