import React from "react";
import { HostelListingCard } from "../molecules/HostelListingCard";

const hostelResults = [
  {
    name: "Nest Boys Hostel",
    gender: "Male" as const,
    city: "Kochi, Kerala",
    college: "Cochin University of Science and Technology",
    roomTypes: ["Double", "Triple", "Four Sharing", "Five Sharing", "Six Sharing"],
    image: "/images/boys_room.png",
  },
  {
    name: "Hail Mary Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Main Campus",
    roomTypes: ["Single", "Double"],
    image: "/images/girls_room.png",
  },
  {
    name: "St Catherine Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Airport Road Campus",
    roomTypes: ["Twin Share", "Twin Share AC", "Single"],
    image: "/images/girls_room.png",
  },
  {
    name: "Kottayam Scholar Hostel",
    gender: "Male" as const,
    city: "Kottayam, Kerala",
    college: "Mahatma Gandhi University area",
    roomTypes: ["Double", "Triple"],
    image: "/images/boys_room.png",
  },
  {
    name: "Trivandrum Academic Residence",
    gender: "Female" as const,
    city: "Trivandrum, Kerala",
    college: "University district",
    roomTypes: ["Single", "Double", "Twin Share"],
    image: "/images/girls_room.png",
  },
  {
    name: "Calicut Verified Stay",
    gender: "Male" as const,
    city: "Calicut, Kerala",
    college: "Calicut educational corridor",
    roomTypes: ["Double", "Triple", "Four Sharing"],
    image: "/images/boys_room.png",
  },
];

interface HostelResultsProps {
  citySlug?: string;
}

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "");

const HostelResults = ({ citySlug }: HostelResultsProps) => {
  const filteredResults = citySlug
    ? hostelResults.filter((hostel) => slugify(hostel.city).includes(citySlug))
    : hostelResults;

  return (
    <section className="bg-slate-50 pb-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredResults.length > 0 ? (
          <div className="space-y-6">
            {filteredResults.map((hostel) => (
              <HostelListingCard key={hostel.name} {...hostel} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:shadow-none">
            No hostels found for this city yet.
          </div>
        )}
      </div>
    </section>
  );
};

export { HostelResults };
