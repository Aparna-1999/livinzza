import React from "react";
import Image from "next/image";
import { MapPin, GraduationCap, Mars, Venus, Layers3 } from "lucide-react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

interface HostelListingCardProps {
  name: string;
  gender: "Male" | "Female";
  city: string;
  college: string;
  roomTypes: string[];
  image: string;
}

const HostelListingCard = ({ name, gender, city, college, roomTypes, image }: HostelListingCardProps) => {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900 dark:shadow-[0_2px_20px_rgba(2,6,23,0.35)]">
      <div className="grid lg:grid-cols-[320px_1fr]">
        <div className="relative min-h-[260px] bg-slate-100 dark:bg-slate-800">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div className="p-6 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-[clamp(1.7rem,3vw,2.5rem)] font-black tracking-tight text-slate-900 dark:text-white">{name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-full bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200">
                  {gender === "Male" ? <Mars className="mr-1 h-3.5 w-3.5" /> : <Venus className="mr-1 h-3.5 w-3.5" />}
                  {gender}
                </Badge>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{city}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>{college}</span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {roomTypes.map((type) => (
              <Badge key={type} variant="secondary" className="rounded-full bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200">
                <Layers3 className="mr-1 h-3.5 w-3.5" />
                {type}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <Button href="#" className="rounded-xl px-5 py-2 text-sm">
              Know More
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export { HostelListingCard };
