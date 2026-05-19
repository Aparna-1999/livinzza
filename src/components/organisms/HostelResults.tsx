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
  {
    name: "North Bangalore Student Residence",
    gender: "Male" as const,
    city: "Bangalore, Karnataka",
    college: "Reva University / Several Colleges",
    roomTypes: ["Single", "Double", "Triple"],
    image: "/images/boys_room.png",
  },
  {
    name: "Premium Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Main Campus",
    roomTypes: ["Single", "Double", "Twin Share"],
    image: "/images/girls_room.png",
  },
  {
    name: "Bangalore Academic Stay",
    gender: "Male" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Airport Road Campus",
    roomTypes: ["Double", "Triple"],
    image: "/images/lifestyle_1.png",
  },
  {
    name: "Parent-Approved Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University",
    roomTypes: ["Single", "Double"],
    image: "/images/lifestyle_2.png",
  },
  {
    name: "Christ College Executive Stay",
    gender: "Male" as const,
    city: "Bangalore, Karnataka",
    college: "Christ University",
    roomTypes: ["Single", "Double Sharing AC"],
    image: "/images/christ_university.png",
  },
  {
    name: "Jain University Elite Residence",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Jain University",
    roomTypes: ["Single", "Double Sharing AC", "Triple Sharing"],
    image: "/images/jain_university.png",
  },
  {
    name: "VIT Vellore Campus Linked Stay",
    gender: "Male" as const,
    city: "Vellore, Tamil Nadu",
    college: "VIT Vellore",
    roomTypes: ["Single", "Double", "Triple"],
    image: "/images/vit_vellore.png",
  },
  {
    name: "Kochi Marine Drive Student Housing",
    gender: "Female" as const,
    city: "Kochi, Kerala",
    college: "Cochin University of Science and Technology",
    roomTypes: ["Double", "Triple"],
    image: "/images/kochi.png",
  },
  {
    name: "Delhi University Scholars Home",
    gender: "Male" as const,
    city: "Delhi NCR",
    college: "Delhi University",
    roomTypes: ["Single", "Double", "Triple"],
    image: "/images/delhi_university.png",
  },
  {
    name: "Kottayam Garden Residence",
    gender: "Female" as const,
    city: "Kottayam, Kerala",
    college: "Mahatma Gandhi University area",
    roomTypes: ["Double", "Triple"],
    image: "/images/kottayam.png",
  },
];

interface HostelResultsProps {
  citySlug?: string;
  collegeQuery?: string;
  hostelQuery?: string;
}

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "");

const HostelResults = ({ citySlug, collegeQuery, hostelQuery }: HostelResultsProps) => {
  let filteredResults = hostelResults;

  if (citySlug) {
    filteredResults = filteredResults.filter((hostel) => slugify(hostel.city).includes(slugify(citySlug)));
  }

  if (collegeQuery) {
    const q = collegeQuery.toLowerCase();
    filteredResults = filteredResults.filter((hostel) => hostel.college.toLowerCase().includes(q));
  }

  if (hostelQuery) {
    const q = hostelQuery.toLowerCase();
    filteredResults = filteredResults.filter((hostel) => hostel.name.toLowerCase().includes(q));
  }

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
            No hostels found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
};

export { HostelResults };
