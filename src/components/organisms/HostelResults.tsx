"use client";

import React, { useState } from "react";
import { HostelListingCard } from "../molecules/HostelListingCard";
import { MapPin, Search, ArrowLeftRight, Bed, GraduationCap, User, Star } from "lucide-react";
import { Button } from "../atoms/Button";

const hostelResults = [
  {
    name: "Nest Boys Hostel",
    gender: "Male" as const,
    city: "Kochi, Kerala",
    college: "Cochin University of Science and Technology",
    roomTypes: ["Double Sharing", "Triple Sharing", "Four Sharing"],
    image: "/images/boys_room.png",
    price: "₹5,800",
    rating: 4.5,
    amenities: ["Wifi", "Single Room"],
  },
  {
    name: "Hail Mary Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Main Campus",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/girls_room.png",
    price: "₹6,200",
    rating: 4.6,
    amenities: ["Wifi", "AC"],
  },
  {
    name: "St Catherine Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Airport Road Campus",
    roomTypes: ["Twin Share AC", "Single Sharing"],
    image: "/images/girls_room.png",
    price: "₹7,000",
    rating: 4.8,
    amenities: ["Wifi", "AC", "Food"],
  },
  {
    name: "Kottayam Scholar Hostel",
    gender: "Male" as const,
    city: "Kottayam, Kerala",
    college: "Mahatma Gandhi University area",
    roomTypes: ["Double Sharing", "Triple Sharing"],
    image: "/images/boys_room.png",
    price: "₹5,200",
    rating: 4.3,
    amenities: ["Wifi"],
  },
  {
    name: "Trivandrum Academic Residence",
    gender: "Female" as const,
    city: "Trivandrum, Kerala",
    college: "University district",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/girls_room.png",
    price: "₹6,400",
    rating: 4.7,
    amenities: ["Wifi", "Food"],
  },
  {
    name: "Calicut Verified Stay",
    gender: "Male" as const,
    city: "Calicut, Kerala",
    college: "Calicut educational corridor",
    roomTypes: ["Double Sharing", "Triple Sharing"],
    image: "/images/boys_room.png",
    price: "₹5,500",
    rating: 4.4,
    amenities: ["Wifi"],
  },
  {
    name: "North Bangalore Student Residence",
    gender: "Male" as const,
    city: "Bangalore, Karnataka",
    college: "Reva University / Several Colleges",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/boys_room.png",
    price: "₹8,500",
    rating: 4.8,
    amenities: ["Wifi", "AC", "Single Room"],
  },
  {
    name: "Premium Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Main Campus",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/girls_room.png",
    price: "₹7,200",
    rating: 4.9,
    amenities: ["Wifi", "AC", "Food"],
  },
  {
    name: "Bangalore Academic Stay",
    gender: "Male" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Airport Road Campus",
    roomTypes: ["Double Sharing", "Triple Sharing"],
    image: "/images/lifestyle_1.png",
    price: "₹6,500",
    rating: 4.7,
    amenities: ["Wifi", "Single Room"],
  },
  {
    name: "Parent-Approved Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/lifestyle_2.png",
    price: "₹6,800",
    rating: 4.6,
    amenities: ["Wifi", "Food"],
  },
  {
    name: "Christ College Executive Stay",
    gender: "Male" as const,
    city: "Bangalore, Karnataka",
    college: "Christ University",
    roomTypes: ["Single Sharing", "Double Sharing AC"],
    image: "/images/christ_university.png",
    price: "₹9,200",
    rating: 4.9,
    amenities: ["Wifi", "AC", "Single Room", "Food"],
  },
  {
    name: "Jain University Elite Residence",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Jain University",
    roomTypes: ["Single Sharing", "Double Sharing AC"],
    image: "/images/jain_university.png",
    price: "₹8,900",
    rating: 4.8,
    amenities: ["Wifi", "AC", "Food"],
  },
  {
    name: "VIT Vellore Campus Linked Stay",
    gender: "Male" as const,
    city: "Vellore, Tamil Nadu",
    college: "VIT Vellore",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/vit_vellore.png",
    price: "₹7,500",
    rating: 4.7,
    amenities: ["Wifi", "Single Room"],
  },
  {
    name: "Kochi Marine Drive Student Housing",
    gender: "Female" as const,
    city: "Kochi, Kerala",
    college: "Cochin University of Science and Technology",
    roomTypes: ["Double Sharing", "Triple Sharing"],
    image: "/images/kochi.png",
    price: "₹6,900",
    rating: 4.6,
    amenities: ["Wifi", "Food"],
  },
  {
    name: "Delhi University Scholars Home",
    gender: "Male" as const,
    city: "Delhi NCR",
    college: "Delhi University",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/delhi_university.png",
    price: "₹8,100",
    rating: 4.8,
    amenities: ["Wifi", "AC"],
  },
  {
    name: "Kottayam Garden Residence",
    gender: "Female" as const,
    city: "Kottayam, Kerala",
    college: "Mahatma Gandhi University area",
    roomTypes: ["Double Sharing", "Triple Sharing"],
    image: "/images/kottayam.png",
    price: "₹6,200",
    rating: 4.7,
    amenities: ["Wifi", "Food"],
  },
];

interface HostelResultsProps {
  citySlug?: string;
  collegeQuery?: string;
  hostelQuery?: string;
}

const CITY_NAME_BY_SLUG: Record<string, string> = {
  bangalore: "Bangalore",
  kochi: "Kochi",
  vellore: "Vellore",
  calicut: "Calicut",
  "delhi-ncr": "Delhi NCR",
  kottayam: "Kottayam",
};

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "");

const HostelResults = ({ citySlug, collegeQuery, hostelQuery }: HostelResultsProps) => {
  const initialCityName = citySlug ? CITY_NAME_BY_SLUG[citySlug.toLowerCase()] ?? "" : "";
  const [cityVal, setCityVal] = useState(initialCityName);
  const [collegeVal, setCollegeVal] = useState(collegeQuery || "");
  const [hostelVal, setHostelVal] = useState(hostelQuery || "");
  const [filters, setFilters] = useState({
    boysOnly: false,
    girlsOnly: false,
    under6000: false,
    between6000And8000: false,
    above8000: false,
    ac: false,
    wifi: false,
    single: false,
    rating48: false,
    rating45: false,
  });

  const clearAllFilters = () => {
    setCityVal("");
    setCollegeVal("");
    setHostelVal("");
    setFilters({
      boysOnly: false,
      girlsOnly: false,
      under6000: false,
      between6000And8000: false,
      above8000: false,
      ac: false,
      wifi: false,
      single: false,
      rating48: false,
      rating45: false,
    });
  };

  const isAnyFilterActive =
    cityVal !== "" ||
    collegeVal !== "" ||
    hostelVal !== "" ||
    Object.values(filters).some(Boolean);

  let filteredResults = hostelResults;

  // 1. Search Query filtering (City, College, Hostel)
  if (cityVal.trim() !== "") {
    const q = cityVal.toLowerCase();
    filteredResults = filteredResults.filter((hostel) =>
      hostel.city.toLowerCase().includes(q)
    );
  }
  if (collegeVal.trim() !== "") {
    const q = collegeVal.toLowerCase();
    filteredResults = filteredResults.filter((hostel) =>
      hostel.college.toLowerCase().includes(q)
    );
  }
  if (hostelVal.trim() !== "") {
    const q = hostelVal.toLowerCase();
    filteredResults = filteredResults.filter((hostel) =>
      hostel.name.toLowerCase().includes(q)
    );
  }

  // 2. Gender filtering
  if (filters.boysOnly || filters.girlsOnly) {
    filteredResults = filteredResults.filter((hostel) => {
      if (filters.boysOnly && hostel.gender === "Male") return true;
      if (filters.girlsOnly && hostel.gender === "Female") return true;
      return false;
    });
  }

  // 3. Price filtering
  if (filters.under6000 || filters.between6000And8000 || filters.above8000) {
    filteredResults = filteredResults.filter((hostel) => {
      const priceNum = parseInt(hostel.price.replace(/[^0-9]/g, ""), 10);
      if (filters.under6000 && priceNum < 6000) return true;
      if (filters.between6000And8000 && priceNum >= 6000 && priceNum <= 8000) return true;
      if (filters.above8000 && priceNum > 8000) return true;
      return false;
    });
  }

  // 4. Rating filtering
  if (filters.rating48 || filters.rating45) {
    filteredResults = filteredResults.filter((hostel) => {
      if (filters.rating48 && hostel.rating >= 4.8) return true;
      if (filters.rating45 && hostel.rating >= 4.5) return true;
      return false;
    });
  }

  // 5. Amenities filtering
  if (filters.ac || filters.wifi || filters.single) {
    filteredResults = filteredResults.filter((hostel) => {
      if (filters.ac && !hostel.amenities.includes("AC")) return false;
      if (filters.wifi && !hostel.amenities.includes("Wifi")) return false;
      if (filters.single && !hostel.amenities.includes("Single Room")) return false;
      return true;
    });
  }

  return (
    <section className="bg-slate-50 pb-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Sidebar Filters */}
          <aside className="w-full lg:w-72 xl:w-80 shrink-0 sticky top-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm">


            {/* 2. City Input */}
            <div className="mb-4">
              <label className="text-[10px] font-bold text-slate-455 dark:text-slate-400 uppercase tracking-wider block mb-1.5">City</label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={cityVal}
                  onChange={(e) => setCityVal(e.target.value)}
                  placeholder="Search City (e.g. Kochi)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-slate-950 dark:text-white placeholder-slate-400/80"
                />
              </div>
            </div>

            {/* 3. College Input */}
            <div className="mb-4">
              <label className="text-[10px] font-bold text-slate-455 dark:text-slate-400 uppercase tracking-wider block mb-1.5">College</label>
              <div className="relative">
                <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={collegeVal}
                  onChange={(e) => setCollegeVal(e.target.value)}
                  placeholder="Search College"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-slate-950 dark:text-white placeholder-slate-400/80"
                />
              </div>
            </div>

            {/* 4. Hostel Input */}
            <div className="mb-6">
              <label className="text-[10px] font-bold text-slate-455 dark:text-slate-400 uppercase tracking-wider block mb-1.5">Hostel Name</label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={hostelVal}
                  onChange={(e) => setHostelVal(e.target.value)}
                  placeholder="Search Hostel Name"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-slate-950 dark:text-white placeholder-slate-400/80"
                />
              </div>
            </div>

            {/* 3. Gender Checkbox group */}
            <div className="mb-6 border-t border-slate-100 dark:border-white/5 pt-4">
              <h4 className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">Gender</h4>
              <div className="space-y-2.5">
                <label className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                  <input
                    type="checkbox"
                    checked={filters.boysOnly}
                    onChange={() => setFilters(prev => ({ ...prev, boysOnly: !prev.boysOnly }))}
                    className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                  />
                  <span>Boys Only</span>
                </label>
                <label className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                  <input
                    type="checkbox"
                    checked={filters.girlsOnly}
                    onChange={() => setFilters(prev => ({ ...prev, girlsOnly: !prev.girlsOnly }))}
                    className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                  />
                  <span>Girls Only</span>
                </label>
              </div>
            </div>

            {/* 4. Price range group */}
            <div className="mb-6 border-t border-slate-100 dark:border-white/5 pt-4">
              <h4 className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">Price Per Month</h4>
              <div className="space-y-2.5">
                <label className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                  <input
                    type="checkbox"
                    checked={filters.under6000}
                    onChange={() => setFilters(prev => ({ ...prev, under6000: !prev.under6000 }))}
                    className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                  />
                  <span>Under ₹6,000</span>
                </label>
                <label className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                  <input
                    type="checkbox"
                    checked={filters.between6000And8000}
                    onChange={() => setFilters(prev => ({ ...prev, between6000And8000: !prev.between6000And8000 }))}
                    className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                  />
                  <span>₹6,000 - ₹8,000</span>
                </label>
                <label className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                  <input
                    type="checkbox"
                    checked={filters.above8000}
                    onChange={() => setFilters(prev => ({ ...prev, above8000: !prev.above8000 }))}
                    className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                  />
                  <span>₹8,000+</span>
                </label>
              </div>
            </div>

            {/* 5. Rating filter group */}
            <div className="mb-6 border-t border-slate-100 dark:border-white/5 pt-4">
              <h4 className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">Rating</h4>
              <div className="space-y-2.5">
                <label className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                  <input
                    type="checkbox"
                    checked={filters.rating48}
                    onChange={() => setFilters(prev => ({ ...prev, rating48: !prev.rating48 }))}
                    className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                  />
                  <span>4.8+ Stars</span>
                </label>
                <label className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                  <input
                    type="checkbox"
                    checked={filters.rating45}
                    onChange={() => setFilters(prev => ({ ...prev, rating45: !prev.rating45 }))}
                    className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                  />
                  <span>4.5+ Stars</span>
                </label>
              </div>
            </div>

            {/* 6. Amenities group */}
            <div className="mb-6 border-t border-slate-100 dark:border-white/5 pt-4">
              <h4 className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">Amenities</h4>
              <div className="space-y-2.5">
                <label className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                  <input
                    type="checkbox"
                    checked={filters.ac}
                    onChange={() => setFilters(prev => ({ ...prev, ac: !prev.ac }))}
                    className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                  />
                  <span>AC Available</span>
                </label>
                <label className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                  <input
                    type="checkbox"
                    checked={filters.wifi}
                    onChange={() => setFilters(prev => ({ ...prev, wifi: !prev.wifi }))}
                    className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                  />
                  <span>Wifi Included</span>
                </label>
                <label className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-400 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                  <input
                    type="checkbox"
                    checked={filters.single}
                    onChange={() => setFilters(prev => ({ ...prev, single: !prev.single }))}
                    className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                  />
                  <span>Single Room</span>
                </label>
              </div>
            </div>

            {/* Clear button */}
            {isAnyFilterActive && (
              <button
                onClick={clearAllFilters}
                className="w-full text-center text-xs font-semibold py-2.5 mt-2 rounded-xl text-primary border border-primary/20 hover:bg-primary/5 dark:text-blue-400 dark:border-blue-400/20 dark:hover:bg-blue-400/5 transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Right Column: Listings Grid */}
          <div className="flex-1 w-full">
            {/* Listings Header (Count and Compare) */}
            <div className="flex items-center justify-between gap-4 mb-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Showing <span className="font-bold text-slate-900 dark:text-white">{filteredResults.length}</span> {filteredResults.length === 1 ? 'hostel' : 'hostels'}
              </div>
              <Button href="/hostels" variant="secondary" className="rounded-xl px-4 py-2.5 text-xs shadow-sm">
                <ArrowLeftRight className="h-3.5 w-3.5" />
                Compare (up to 3)
              </Button>
            </div>

            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((hostel) => (
                  <HostelListingCard key={hostel.name} {...hostel} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-500 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-400">
                No hostels found matching your active filter criteria. Try clearing some filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { HostelResults };
