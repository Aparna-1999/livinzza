"use client";

import React, { useState, useEffect } from "react";
import { HostelListingCard } from "../molecules/HostelListingCard";
import {
  MapPin,
  Search,
  ArrowLeftRight,
  GraduationCap,
  User,
  Star,
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  X,
  Clock,
  ShieldCheck,
  Flame,
  Coffee,
  Check
} from "lucide-react";
import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";
import { motion, AnimatePresence } from "framer-motion";

import { hostelResults } from "../../data/hostels";

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
  pune: "Pune"
};

const HostelResults = ({ citySlug, collegeQuery, hostelQuery }: HostelResultsProps) => {
  const initialCityName = citySlug ? CITY_NAME_BY_SLUG[citySlug.toLowerCase()] ?? "" : "";
  const [cityVal, setCityVal] = useState(initialCityName);
  const [collegeVal, setCollegeVal] = useState(collegeQuery || "");
  const [hostelVal, setHostelVal] = useState(hostelQuery || "");

  useEffect(() => {
    if (hostelQuery !== undefined) {
      setHostelVal(hostelQuery || "");
    }
  }, [hostelQuery]);

  useEffect(() => {
    if (citySlug !== undefined) {
      setCityVal(citySlug ? CITY_NAME_BY_SLUG[citySlug.toLowerCase()] ?? "" : "");
    }
  }, [citySlug]);

  useEffect(() => {
    if (collegeQuery !== undefined) {
      setCollegeVal(collegeQuery || "");
    }
  }, [collegeQuery]);

  // Sidebar accordions
  const [genderOpen, setGenderOpen] = useState(true);
  const [amenitiesOpen, setAmenitiesOpen] = useState(true);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  // Map Modal
  const [mapOpen, setMapOpen] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState<typeof hostelResults[0] | null>(null);

  const [filters, setFilters] = useState({
    // Suggested Filters (3rd Screenshot)
    rushDeal: false,
    lastMinute: false,
    fiveStar: false,
    fourStar: false,
    breakfast: false,
    threeStar: false,

    // Price filters
    price0to2500: false,
    price2500to6000: false,
    price6000to9000: false,
    price9000plus: false,

    // Gender (collapsible)
    boysOnly: false,
    girlsOnly: false,

    // Amenities (collapsible)
    ac: false,
    wifi: false,
    single: false,
    food: false
  });

  const clearAllFilters = () => {
    setCityVal("");
    setCollegeVal("");
    setHostelVal("");
    setFilters({
      rushDeal: false,
      lastMinute: false,
      fiveStar: false,
      fourStar: false,
      breakfast: false,
      threeStar: false,
      price0to2500: false,
      price2500to6000: false,
      price6000to9000: false,
      price9000plus: false,
      boysOnly: false,
      girlsOnly: false,
      ac: false,
      wifi: false,
      single: false,
      food: false
    });
  };

  const isAnyFilterActive =
    cityVal !== "" ||
    collegeVal !== "" ||
    hostelVal !== "" ||
    Object.values(filters).some(Boolean);

  // 1. Dynamic Counts calculation
  const countRush = hostelResults.filter(h => parseInt(h.price.replace(/[^0-9]/g, ""), 10) < 6500).length;
  const countLastMinute = hostelResults.filter(h => h.rating >= 4.7 && parseInt(h.price.replace(/[^0-9]/g, ""), 10) < 7000).length;
  const countFiveStar = hostelResults.filter(h => h.rating >= 4.8).length;
  const countFourStar = hostelResults.filter(h => h.rating >= 4.6 && h.rating < 4.8).length;
  const countBreakfast = hostelResults.filter(h => h.amenities.includes("Food")).length;
  const countThreeStar = hostelResults.filter(h => h.rating >= 4.3 && h.rating < 4.6).length;

  const countPrice1 = hostelResults.filter(h => {
    const p = parseInt(h.price.replace(/[^0-9]/g, ""), 10);
    return p <= 2500;
  }).length;
  const countPrice2 = hostelResults.filter(h => {
    const p = parseInt(h.price.replace(/[^0-9]/g, ""), 10);
    return p > 2500 && p <= 6000;
  }).length;
  const countPrice3 = hostelResults.filter(h => {
    const p = parseInt(h.price.replace(/[^0-9]/g, ""), 10);
    return p > 6000 && p <= 9000;
  }).length;
  const countPrice4 = hostelResults.filter(h => {
    const p = parseInt(h.price.replace(/[^0-9]/g, ""), 10);
    return p > 9000;
  }).length;

  // 2. Main Filtering logic
  let filteredResults = hostelResults;

  if (cityVal.trim() !== "") {
    const q = cityVal.toLowerCase();
    filteredResults = filteredResults.filter(h => h.city.toLowerCase().includes(q));
  }
  if (collegeVal.trim() !== "") {
    const q = collegeVal.toLowerCase();
    filteredResults = filteredResults.filter(h => h.college.toLowerCase().includes(q));
  }
  if (hostelVal.trim() !== "") {
    const q = hostelVal.toLowerCase();
    filteredResults = filteredResults.filter(h =>
      h.name.toLowerCase().includes(q) ||
      h.city.toLowerCase().includes(q) ||
      h.college.toLowerCase().includes(q)
    );
  }

  if (filters.boysOnly || filters.girlsOnly) {
    filteredResults = filteredResults.filter(h => {
      if (filters.boysOnly && h.gender === "Male") return true;
      if (filters.girlsOnly && h.gender === "Female") return true;
      return false;
    });
  }

  if (filters.price0to2500 || filters.price2500to6000 || filters.price6000to9000 || filters.price9000plus) {
    filteredResults = filteredResults.filter(h => {
      const p = parseInt(h.price.replace(/[^0-9]/g, ""), 10);
      if (filters.price0to2500 && p <= 2500) return true;
      if (filters.price2500to6000 && p > 2500 && p <= 6000) return true;
      if (filters.price6000to9000 && p > 6000 && p <= 9000) return true;
      if (filters.price9000plus && p > 9000) return true;
      return false;
    });
  }

  if (filters.ac || filters.wifi || filters.single || filters.food) {
    filteredResults = filteredResults.filter(h => {
      if (filters.ac && !h.amenities.includes("AC")) return false;
      if (filters.wifi && !h.amenities.includes("Wifi")) return false;
      if (filters.single && !h.amenities.includes("Single Room")) return false;
      if (filters.food && !h.amenities.includes("Food")) return false;
      return true;
    });
  }

  if (filters.rushDeal || filters.lastMinute || filters.fiveStar || filters.fourStar || filters.breakfast || filters.threeStar) {
    filteredResults = filteredResults.filter(h => {
      const p = parseInt(h.price.replace(/[^0-9]/g, ""), 10);
      if (filters.rushDeal && p < 6500) return true;
      if (filters.lastMinute && h.rating >= 4.7 && p < 7000) return true;
      if (filters.fiveStar && h.rating >= 4.8) return true;
      if (filters.fourStar && h.rating >= 4.6 && h.rating < 4.8) return true;
      if (filters.breakfast && h.amenities.includes("Food")) return true;
      if (filters.threeStar && h.rating >= 4.3 && h.rating < 4.6) return true;
      return false;
    });
  }

  return (
    <section className="bg-slate-50 pb-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Sidebar Filters */}
          <aside className="w-full lg:w-[320px] shrink-0 sticky top-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[2rem] p-6 shadow-sm">


            {/* 2. Locality search input */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={hostelVal}
                  onChange={(e) => setHostelVal(e.target.value)}
                  placeholder="Search for locality / hotel name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary dark:border-white/10 dark:bg-slate-950 dark:text-white placeholder-slate-400/80"
                />
              </div>
            </div>

            {/* 3. Suggested For You Section */}
            <div className="mb-6">
              <h4 className="text-[10px] font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3">Suggested For You</h4>
              <div className="space-y-2.5">
                {[
                  { id: "rushDeal", label: "Rush Deal", count: countRush, icon: Flame, color: "text-orange-500" },
                  { id: "lastMinute", label: "Last Minute Deals", count: countLastMinute, icon: Clock, color: "text-amber-500" },
                  { id: "fiveStar", label: "5 Star", count: countFiveStar, icon: Star, color: "text-yellow-500" },
                  { id: "fourStar", label: "4 Star", count: countFourStar, icon: Star, color: "text-yellow-500" },
                  { id: "breakfast", label: "Breakfast Included", count: countBreakfast, icon: Coffee, color: "text-blue-500" },
                  { id: "threeStar", label: "3 Star", count: countThreeStar, icon: Star, color: "text-yellow-500" }
                ].map(item => (
                  <label key={item.id} className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-450 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors group">
                    <span className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={(filters as any)[item.id]}
                        onChange={() => setFilters(prev => ({ ...prev, [item.id]: !(prev as any)[item.id] }))}
                        className="rounded border-slate-300 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                      />
                      <item.icon className={`h-3.5 w-3.5 ${item.color} opacity-80`} />
                      <span>{item.label}</span>
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-slate-500 transition-colors">({item.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 4. Price Per Month Section */}
            <div className="mb-6 border-t border-slate-100 dark:border-white/5 pt-4">
              <h4 className="text-[10px] font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3">Price Per Month</h4>
              <div className="space-y-2.5">
                {[
                  { id: "price0to2500", label: "₹0 - ₹2,500", count: countPrice1 },
                  { id: "price2500to6000", label: "₹2,500 - ₹6,000", count: countPrice2 },
                  { id: "price6000to9000", label: "₹6,000 - ₹9,000", count: countPrice3 },
                  { id: "price9000plus", label: "₹9,000+", count: countPrice4 }
                ].map(item => (
                  <label key={item.id} className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-450 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors group">
                    <span className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={(filters as any)[item.id]}
                        onChange={() => setFilters(prev => ({ ...prev, [item.id]: !(prev as any)[item.id] }))}
                        className="rounded border-slate-300 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                      />
                      <span>{item.label}</span>
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-slate-500 transition-colors">({item.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 5. Collapsible Gender Section */}
            <div className="border-t border-slate-100 dark:border-white/5 pt-4">
              <button
                onClick={() => setGenderOpen(!genderOpen)}
                className="w-full flex items-center justify-between text-[10px] font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3 focus:outline-none cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  Gender Options
                </span>
                {genderOpen ? <ChevronUp className="h-3 w-3 text-slate-400" /> : <ChevronDown className="h-3 w-3 text-slate-400" />}
              </button>
              
              {genderOpen && (
                <div className="space-y-2.5 pb-4 animate-fadeIn">
                  <label className="flex items-center gap-2.5 text-xs font-medium text-slate-650 dark:text-slate-450 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                    <input
                      type="checkbox"
                      checked={filters.boysOnly}
                      onChange={() => setFilters(prev => ({ ...prev, boysOnly: !prev.boysOnly }))}
                      className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                    />
                    <span>Boys Only</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-xs font-medium text-slate-650 dark:text-slate-450 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                    <input
                      type="checkbox"
                      checked={filters.girlsOnly}
                      onChange={() => setFilters(prev => ({ ...prev, girlsOnly: !prev.girlsOnly }))}
                      className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                    />
                    <span>Girls Only</span>
                  </label>
                </div>
              )}
            </div>

            {/* 6. Collapsible Amenities Section */}
            <div className="border-t border-slate-100 dark:border-white/5 pt-4">
              <button
                onClick={() => setAmenitiesOpen(!amenitiesOpen)}
                className="w-full flex items-center justify-between text-[10px] font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3 focus:outline-none cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-slate-400" />
                  Amenities
                </span>
                {amenitiesOpen ? <ChevronUp className="h-3 w-3 text-slate-400" /> : <ChevronDown className="h-3 w-3 text-slate-400" />}
              </button>
              
              {amenitiesOpen && (
                <div className="space-y-2.5 pb-4 animate-fadeIn">
                  {[
                    { id: "wifi", label: "WiFi Included" },
                    { id: "ac", label: "AC Available" },
                    { id: "single", label: "Single Room Available" },
                    { id: "food", label: "Food Services" }
                  ].map(amenity => (
                    <label key={amenity.id} className="flex items-center gap-2.5 text-xs font-medium text-slate-650 dark:text-slate-450 cursor-pointer hover:text-slate-900 dark:hover:text-white">
                      <input
                        type="checkbox"
                        checked={(filters as any)[amenity.id]}
                        onChange={() => setFilters(prev => ({ ...prev, [amenity.id]: !(prev as any)[amenity.id] }))}
                        className="rounded border-slate-350 text-primary focus:ring-primary h-4.5 w-4.5 accent-primary cursor-pointer"
                      />
                      <span>{amenity.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 7. Collapsible Advanced Search Fields (City/College) */}
            <div className="border-t border-slate-100 dark:border-white/5 pt-4">
              <button
                onClick={() => setAdvancedOpen(!advancedOpen)}
                className="w-full flex items-center justify-between text-[10px] font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3 focus:outline-none cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400" />
                  Detailed Scope
                </span>
                {advancedOpen ? <ChevronUp className="h-3 w-3 text-slate-400" /> : <ChevronDown className="h-3 w-3 text-slate-400" />}
              </button>
              
              {advancedOpen && (
                <div className="space-y-4 pb-4 pt-1 animate-fadeIn">
                  {/* City search */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">Filter City</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={cityVal}
                        onChange={(e) => setCityVal(e.target.value)}
                        placeholder="e.g. Bangalore"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none font-semibold"
                      />
                    </div>
                  </div>
                  
                  {/* College search */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">Filter College</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={collegeVal}
                        onChange={(e) => setCollegeVal(e.target.value)}
                        placeholder="e.g. Kristu Jayanti"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none font-semibold"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Clear Button */}
            {isAnyFilterActive && (
              <button
                onClick={clearAllFilters}
                className="w-full text-center text-xs font-bold py-3 mt-4 rounded-xl text-primary border border-primary/20 hover:bg-primary/5 dark:text-blue-400 dark:border-blue-400/20 dark:hover:bg-blue-400/5 transition-all cursor-pointer hover:shadow-sm"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Right Column: Listings Grid */}
          <div className="flex-1 w-full">
            {/* Listings Header (Count and Dynamic Status) */}
            <div className="flex items-center justify-between gap-4 mb-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 shadow-sm">
              <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-350">
                Found <span className="font-extrabold text-slate-900 dark:text-white text-base">{filteredResults.length}</span> {filteredResults.length === 1 ? 'verified hostel' : 'verified hostels'}
              </div>
              <Button href="/hostels" variant="secondary" className="rounded-xl px-4 py-2.5 text-xs shadow-sm font-bold flex items-center gap-1.5">
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
              <div className="rounded-3xl border border-slate-200 bg-white p-16 text-center shadow-sm dark:border-white/10 dark:bg-slate-900">
                <SlidersHorizontal className="h-10 w-10 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                <Typography variant="h3" className="text-lg font-bold text-slate-800 dark:text-white mb-2">No Matches Found</Typography>
                <Typography variant="p" className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  No hostels matched your exact search combination. Try removing some filters or updating your locality query.
                </Typography>
                <button
                  onClick={clearAllFilters}
                  className="mt-5 px-6 py-2.5 rounded-xl bg-primary text-white font-extrabold text-xs shadow-md hover:bg-primary-hover active:scale-97 cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { HostelResults };
