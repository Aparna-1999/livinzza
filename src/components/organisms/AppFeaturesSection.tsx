"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import {
  Sparkles,
  Users,
  Compass,
  CreditCard,
  ShieldCheck,
  ClipboardCheck,
  QrCode,
  Coins,
  LayoutGrid,
  Wifi,
  Battery,
  UserCheck,
  Building2,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Flame,
  Check,
  CheckCircle,
  Sliders,
  DollarSign
} from "lucide-react";

// ----------------------------------------------------
// Data Structure for Student Features
// ----------------------------------------------------
const studentFeatures = [
  {
    id: "roommates",
    title: "Preview Your Roommates Before Booking",
    description: "Get a glimpse of your future roommates before confirming your stay. View basic profiles to choose a living space that feels comfortable, compatible, and right for you.",
    badge: "Compatibility",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "compare",
    title: "Compare Hostels with Ease",
    description: "Explore and compare multiple hostels based on pricing, room types, amenities, and location—helping you find the ideal stay that matches your lifestyle and budget.",
    badge: "Smart Search",
    icon: Compass,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "payments",
    title: "Safe & Seamless Payments",
    description: "Experience secure online payments with instant invoices and digital receipts. Enjoy a transparent, reliable, and hassle-free payment process every step of the way.",
    badge: "Secure Pay",
    icon: CreditCard,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "safety",
    title: "Enhanced Safety & Peace of Mind",
    description: "Ensure a secure living experience with real-time attendance tracking, smart notifications, and streamlined leave approvals—keeping students safe and parents reassured.",
    badge: "Smart Approvals",
    icon: ShieldCheck,
    color: "from-indigo-500 to-violet-600",
  },
];

// ----------------------------------------------------
// Data Structure for Institution Features
// ----------------------------------------------------
const institutionFeatures = [
  {
    id: "onboarding",
    title: "100% Paperless Digital Onboarding",
    description: "Collect documents, perform student verification, and execute room licensing contracts digitally before students even set foot on campus.",
    badge: "Seamless KYC",
    icon: ClipboardCheck,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "attendance",
    title: "Smart QR Gate Passes & Curfew",
    description: "Automated curfew tracking, digital leave applications, and real-time gate pass QR generation to keep parents, wardens, and management aligned.",
    badge: "Curfew Safety",
    icon: QrCode,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "billing",
    title: "Auto-Billing & Real-Time Collections",
    description: "Automatically issue monthly invoices, reconcile rental payments, process deposits, and send automated fee reminders to parents.",
    badge: "Financial Hub",
    icon: Coins,
    color: "from-emerald-500 to-green-600",
  },
  {
    id: "inventory",
    title: "Dynamic Room Inventory & Asset Control",
    description: "Gain real-time visibility into bed occupancy, room types, maintenance tickets, and overall hostel resource utilization from a single dashboard.",
    badge: "Operations Center",
    icon: LayoutGrid,
    color: "from-rose-500 to-pink-600",
  },
];

const AppFeaturesSection = () => {
  const [activeTab, setActiveTab] = useState<"student" | "institution">("student");
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const [feeRemindersSent, setFeeRemindersSent] = useState(false);

  const currentFeatures = activeTab === "student" ? studentFeatures : institutionFeatures;
  const currentFeature = currentFeatures[activeFeatureIdx] || currentFeatures[0];

  // Helper to handle tab switch and reset active index
  const handleTabChange = (tab: "student" | "institution") => {
    setActiveTab(tab);
    setActiveFeatureIdx(0);
  };

  // ----------------------------------------------------
  // Interactive Phone Screen Mockup Renderer
  // ----------------------------------------------------
  const renderPhoneScreen = () => {
    switch (currentFeature.id) {
      // ---------------- STUDENTS ----------------
      case "roommates":
        return (
          <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-800/80 pb-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Roommate Matching</span>
                <span className="text-[10px] bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 font-semibold px-2 py-0.5 rounded-full">Shared Room</span>
              </div>
              <div className="flex flex-col items-center my-3">
                <div className="relative flex items-center justify-center h-20 w-20 rounded-full border-4 border-indigo-500 bg-white dark:bg-slate-800 shadow-md">
                  <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">94%</span>
                  <div className="absolute inset-0 rounded-full border border-indigo-300 animate-ping opacity-25" />
                </div>
                <span className="mt-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">Compatibility Score</span>
              </div>
              
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xs">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-300 shrink-0">RD</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold truncate">Rohan Dev (You)</div>
                    <div className="text-[9px] text-slate-400 truncate">CS Sophomore • Early Bird</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xs">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-300 shrink-0">KS</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold truncate">Kabir Sen</div>
                    <div className="text-[9px] text-slate-400 truncate">CS Sophomore • Tech Enthusiat • Early Bird</div>
                  </div>
                </div>
              </div>

              <div className="mt-3 p-2 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-950/50 rounded-xl">
                <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <UserCheck className="h-3 w-3 shrink-0" /> Shared Lifestyle Prefs
                </div>
                <p className="text-[9px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Both prefer silent study hours (9pm - 11pm), vegetarian meals, and non-smoking environment.
                </p>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white rounded-xl py-2 text-[11px] font-bold hover:bg-indigo-700 transition shadow-sm">
              Confirm & Book Room
            </button>
          </div>
        );

      case "compare":
        return (
          <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-800/80 pb-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Hostel Compare</span>
                <span className="text-[10px] bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 font-semibold px-2 py-0.5 rounded-full">2 Found</span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-800 p-2.5 rounded-xl flex flex-col justify-between">
                  <div>
                    <h5 className="text-[11px] font-black truncate">Orion Living</h5>
                    <span className="text-[9px] text-slate-400">Boys PG • 1.2km away</span>
                    <div className="my-2 border-t border-slate-100 dark:border-slate-700/50 pt-2 space-y-1 text-[9px] text-slate-500 dark:text-slate-400">
                      <div>AC Room: <span className="font-bold text-slate-700 dark:text-slate-200">Yes</span></div>
                      <div>Food Plan: <span className="font-bold text-slate-700 dark:text-slate-200">3 Meals</span></div>
                      <div>Security: <span className="font-bold text-slate-700 dark:text-slate-200">CCTV & Warden</span></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-cyan-600 dark:text-cyan-400">₹18,500/mo</div>
                    <span className="text-[8px] text-slate-400">Rating: 4.8★</span>
                  </div>
                </div>

                <div className="border-2 border-primary bg-primary/5 dark:bg-primary/10 p-2.5 rounded-xl flex flex-col justify-between relative">
                  <div className="absolute -top-2 right-2 bg-primary text-white text-[7px] font-bold uppercase px-1.5 py-0.5 rounded-full tracking-wider">Best Value</div>
                  <div>
                    <h5 className="text-[11px] font-black truncate">Livinnza Heights</h5>
                    <span className="text-[9px] text-slate-400">Boys PG • 0.5km away</span>
                    <div className="my-2 border-t border-slate-100 dark:border-slate-700/50 pt-2 space-y-1 text-[9px] text-slate-500 dark:text-slate-400">
                      <div>AC Room: <span className="font-bold text-slate-700 dark:text-slate-200">Yes</span></div>
                      <div>Food Plan: <span className="font-bold text-slate-700 dark:text-slate-200">All Incl.</span></div>
                      <div>Security: <span className="font-bold text-slate-700 dark:text-slate-200">Smart Guard</span></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-primary">₹16,000/mo</div>
                    <span className="text-[8px] text-slate-400">Rating: 4.5★</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800 text-[9px]">
                <div className="font-bold border-b border-slate-100 dark:border-slate-700 pb-1 mb-1 text-slate-600 dark:text-slate-300">Feature Match Analysis</div>
                <div className="flex justify-between py-1"><span>Proximity to campus</span> <span className="font-bold text-emerald-600">Heights wins</span></div>
                <div className="flex justify-between py-1"><span>Gym access</span> <span className="font-bold text-slate-500">Orion only</span></div>
              </div>
            </div>
            <button className="w-full bg-primary text-white rounded-xl py-2 text-[11px] font-bold hover:bg-primary-hover transition shadow-sm">
              Confirm Selected Stay
            </button>
          </div>
        );

      case "payments":
        return (
          <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-800/80 pb-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Checkout Success</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full">Secure SSL</span>
              </div>

              {/* Glowing Virtual Card */}
              <div className="relative w-full h-32 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-700 to-indigo-800 p-4 text-white shadow-lg overflow-hidden flex flex-col justify-between">
                <div className="absolute -right-10 -bottom-10 h-28 w-28 bg-white/5 rounded-full blur-xl" />
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-emerald-200/80">LIVINNZA RESIDENT</div>
                    <div className="text-xs font-bold mt-1 tracking-wider">AARAV MEHTA</div>
                  </div>
                  <CreditCard className="h-5 w-5 opacity-80" />
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs font-mono tracking-widest">•••• •••• •••• 9815</span>
                  <span className="text-[8px] bg-white/20 px-2 py-0.5 rounded backdrop-blur">EXPIRES 09/29</span>
                </div>
              </div>

              {/* Payment Receipt */}
              <div className="mt-4 p-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-800 flex flex-col items-center">
                <div className="h-9 w-9 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2">
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Rent Payment Successful</span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">₹18,500.00</h3>
                <span className="text-[8px] text-slate-400 mt-0.5 font-mono">Txn ID: TXN_881926348</span>

                <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700 my-2.5" />
                <div className="w-full text-[9px] space-y-1 text-slate-500 dark:text-slate-400">
                  <div className="flex justify-between"><span>Hostel Stay:</span> <span className="font-bold text-slate-700 dark:text-slate-200">Orion Living</span></div>
                  <div className="flex justify-between"><span>Billing Cycle:</span> <span className="font-bold text-slate-700 dark:text-slate-200">June 2026</span></div>
                </div>
              </div>
            </div>
            <button className="w-full bg-emerald-600 text-white rounded-xl py-2 text-[11px] font-bold hover:bg-emerald-700 transition shadow-sm">
              View Digital Invoice
            </button>
          </div>
        );

      case "safety":
        return (
          <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-800/80 pb-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Security Gate Pass</span>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                </span>
              </div>

              {/* QR Gate Pass Card */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800 flex flex-col items-center text-center shadow-xs">
                <span className="text-[10px] font-bold text-slate-400">DIGITAL ENTRY PASS</span>
                <h4 className="text-xs font-black text-slate-900 dark:text-white mt-0.5">Rohan Dev • Room 304</h4>

                {/* Styled CSS QR Code */}
                <div className="relative my-3.5 p-2 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200/50 dark:border-slate-800">
                  <div className="h-28 w-28 flex flex-col gap-0.5 justify-between">
                    {/* Visual representations of QR patterns */}
                    <div className="flex justify-between h-8">
                      <div className="w-8 h-8 border-[4px] border-slate-900 dark:border-white rounded" />
                      <div className="w-8 h-8 border-[4px] border-slate-900 dark:border-white rounded" />
                    </div>
                    <div className="flex justify-between items-end h-8">
                      <div className="w-8 h-8 border-[4px] border-slate-900 dark:border-white rounded" />
                      <div className="w-8 h-8 flex flex-wrap p-0.5 gap-0.5">
                        <div className="w-2.5 h-2.5 bg-slate-900 dark:bg-white" />
                        <div className="w-2.5 h-2.5 bg-slate-900 dark:bg-white" />
                        <div className="w-2.5 h-2.5 bg-slate-900 dark:bg-white" />
                      </div>
                    </div>
                  </div>
                  {/* Glowing Scanning Bar animation */}
                  <div className="absolute left-0 right-0 top-0 h-0.5 bg-indigo-500/80 shadow-[0_0_8px_#6366f1] animate-[bounce_2.5s_infinite]" />
                </div>

                <div className="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">
                  Generated at 10:30 AM • Valid until 10:00 PM today
                </div>
              </div>

              {/* Status metrics */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-[9px]">
                <div className="bg-white dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-800/75 p-2.5 rounded-xl">
                  <span className="text-slate-400">Curfew Limit</span>
                  <div className="font-bold text-slate-800 dark:text-white mt-0.5 flex items-center gap-1">
                    <Clock className="h-3 w-3 text-amber-500" /> 09:30 PM
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-800/75 p-2.5 rounded-xl">
                  <span className="text-slate-400">Leave Approval</span>
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Approved
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white rounded-xl py-2 text-[11px] font-bold hover:bg-indigo-700 transition shadow-sm">
              Apply for Leave
            </button>
          </div>
        );

      // ---------------- INSTITUTIONS ----------------
      case "onboarding":
        return (
          <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-800/80 pb-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">KYC Portal</span>
                <span className="text-[10px] bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300 font-semibold px-2 py-0.5 rounded-full">Admin Dashboard</span>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-2 mb-3 text-[10px]">
                <div className="bg-violet-500 text-white p-2 rounded-xl">
                  <span className="text-[8px] text-violet-100 uppercase tracking-wider block">Total Enrolled</span>
                  <div className="text-base font-extrabold mt-0.5">1,280</div>
                </div>
                <div className="bg-white dark:bg-slate-800 border border-slate-200/85 dark:border-slate-800 p-2 rounded-xl">
                  <span className="text-[8px] text-slate-400 uppercase tracking-wider block">Pending KYC</span>
                  <div className="text-base font-extrabold text-violet-600 dark:text-violet-400 mt-0.5">12</div>
                </div>
              </div>

              {/* Active Verification Card */}
              <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl border border-slate-200/70 dark:border-slate-800">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1.5">
                    <div className="h-6 w-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-black">AM</div>
                    <div>
                      <h5 className="text-[10px] font-bold">Aarav Mehta</h5>
                      <span className="text-[8px] text-slate-400 block">CSE Sophomore</span>
                    </div>
                  </div>
                  <span className="text-[8px] bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 font-bold px-1.5 py-0.5 rounded">Pending Approval</span>
                </div>

                <div className="space-y-2 mt-2.5 text-[9px]">
                  <div className="flex justify-between items-center p-1 bg-slate-50 dark:bg-slate-900 rounded">
                    <span>Aadhaar Verification</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-0.5"><Check className="h-3 w-3" /> VERIFIED</span>
                  </div>
                  <div className="flex justify-between items-center p-1 bg-slate-50 dark:bg-slate-900 rounded">
                    <span>Admission Letter</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-0.5"><Check className="h-3 w-3" /> VERIFIED</span>
                  </div>
                  <div className="flex justify-between items-center p-1 bg-slate-50 dark:bg-slate-900 rounded">
                    <span>Parent Declaration</span>
                    <span className="text-amber-600 font-bold flex items-center gap-0.5">Needs Review</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl py-2 text-[10px] font-bold transition">
                Reject
              </button>
              <button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-2 text-[10px] font-bold transition shadow-sm">
                Approve KYC
              </button>
            </div>
          </div>
        );

      case "attendance":
        return (
          <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-800/80 pb-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Attendance Log</span>
                <span className="text-[10px] bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 font-semibold px-2 py-0.5 rounded-full">Gate Portal</span>
              </div>

              {/* Real-time statistics block */}
              <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 text-[10px] mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-500">Curfew Compliance Rate</span>
                  <span className="font-black text-amber-600 dark:text-amber-400">98.2%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-950 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[98.2%] rounded-full" />
                </div>
                <div className="flex justify-between mt-1 text-[8px] text-slate-400">
                  <span>212 present</span>
                  <span>3 late exceptions</span>
                </div>
              </div>

              {/* Real-time scrolling feed */}
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block mb-1.5">Live Check-ins</span>
              <div className="space-y-1.5 max-h-[140px] overflow-y-auto">
                <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800/70 rounded-xl text-[9px]">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="font-bold">Rohan S.</span>
                  </div>
                  <span className="text-slate-400 font-mono">Checked IN @ 9:15 PM</span>
                </div>

                <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800/70 rounded-xl text-[9px]">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span className="font-bold">Anjali R.</span>
                  </div>
                  <span className="text-slate-400 font-mono">Checked OUT @ 6:40 PM</span>
                </div>

                <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 border border-red-200/50 dark:border-red-900/30 bg-red-50/20 dark:bg-red-950/10 rounded-xl text-[9px]">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-bold text-red-600 dark:text-red-400">Kabir M.</span>
                  </div>
                  <span className="text-red-500 font-mono font-bold">LATE OUT • Alert sent</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-2 text-[11px] font-bold transition shadow-sm">
              Trigger Guard Alert
            </button>
          </div>
        );

      case "billing":
        return (
          <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-800/80 pb-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Billing Center</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full">Collections</span>
              </div>

              {/* Revenue Stats */}
              <div className="grid grid-cols-2 gap-2 text-[10px] mb-3">
                <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 p-2.5 rounded-xl">
                  <span className="text-slate-400 uppercase text-[8px] tracking-wider block">Total Rent Invoiced</span>
                  <div className="text-base font-extrabold text-slate-950 dark:text-white mt-0.5">₹24.8L</div>
                  <span className="text-[8px] text-emerald-600 mt-1 font-semibold block">94% Reconciled</span>
                </div>
                <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 p-2.5 rounded-xl">
                  <span className="text-slate-400 uppercase text-[8px] tracking-wider block">Unpaid Balance</span>
                  <div className="text-base font-extrabold text-rose-500 dark:text-rose-400 mt-0.5">₹1.2L</div>
                  <span className="text-[8px] text-slate-400 mt-1 block">4 outstanding bills</span>
                </div>
              </div>

              {/* Outstanding table */}
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block mb-1.5">Pending Payments</span>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-800 text-[9px]">
                  <div>
                    <span className="font-bold block">Kabir Sen (Parent)</span>
                    <span className="text-[8px] text-slate-400">Due: May 20, 2026</span>
                  </div>
                  <span className="font-extrabold text-slate-950 dark:text-white font-mono">₹18,500</span>
                </div>

                <div className="flex items-center justify-between p-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-800 text-[9px]">
                  <div>
                    <span className="font-bold block">Sanjay D. (Parent)</span>
                    <span className="text-[8px] text-slate-400">Due: May 22, 2026</span>
                  </div>
                  <span className="font-extrabold text-slate-950 dark:text-white font-mono">₹16,000</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setFeeRemindersSent(true);
                setTimeout(() => setFeeRemindersSent(false), 3000);
              }}
              className={`w-full text-white rounded-xl py-2 text-[11px] font-bold transition shadow-sm flex items-center justify-center gap-1.5 ${
                feeRemindersSent ? "bg-emerald-600 hover:bg-emerald-700" : "bg-emerald-500 hover:bg-emerald-600"
              }`}
            >
              {feeRemindersSent ? (
                <>
                  <Check className="h-4 w-4" /> Reminders Dispatched
                </>
              ) : (
                <>
                  <TrendingUp className="h-4 w-4 shrink-0" /> Send Auto-Reminders
                </>
              )}
            </button>
          </div>
        );

      case "inventory":
        return (
          <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-4 justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-800/80 pb-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Room Inventory</span>
                <span className="text-[10px] bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 font-semibold px-2 py-0.5 rounded-full">Occupancy</span>
              </div>

              {/* Room Grid Preview */}
              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block mb-1.5">Block A Occupancy Map</span>
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="border border-red-200 bg-red-100/40 dark:border-red-900/30 dark:bg-red-950/20 p-2 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-[10px] font-black text-red-600 dark:text-red-400">101</span>
                  <span className="text-[7px] text-red-500 font-semibold uppercase mt-0.5">FULL</span>
                </div>
                <div className="border border-amber-200 bg-amber-100/40 dark:border-amber-900/30 dark:bg-amber-950/20 p-2 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-[10px] font-black text-amber-600 dark:text-amber-400">102</span>
                  <span className="text-[7px] text-amber-500 font-semibold uppercase mt-0.5">1 BED</span>
                </div>
                <div className="border border-emerald-200 bg-emerald-100/40 dark:border-emerald-900/30 dark:bg-emerald-950/20 p-2 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400">103</span>
                  <span className="text-[7px] text-emerald-500 font-semibold uppercase mt-0.5">FREE</span>
                </div>
                <div className="border border-red-200 bg-red-100/40 dark:border-red-900/30 dark:bg-red-950/20 p-2 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-[10px] font-black text-red-600 dark:text-red-400">104</span>
                  <span className="text-[7px] text-red-500 font-semibold uppercase mt-0.5">FULL</span>
                </div>
              </div>

              {/* Maintenance Ticket Alert */}
              <div className="p-2.5 bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-950/30 rounded-xl">
                <div className="text-[9px] font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" /> Pending Maintenance Ticket
                </div>
                <p className="text-[8px] text-slate-500 dark:text-slate-400 mt-1">
                  Room 102 reported issue: AC filter clogged. Assigned to technician. Status: In Progress.
                </p>
              </div>
            </div>
            <button className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-xl py-2 text-[11px] font-bold transition shadow-sm">
              Allocate New Rooms
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="app-features" className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-950">
      {/* Dynamic background gradients */}
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10" />
      <div className="absolute left-1/4 bottom-10 -z-10 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl dark:bg-indigo-500/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4 border border-slate-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary dark:border-white/10 dark:bg-white/5 dark:text-primary/80">
            <Sparkles className="mr-1.5 h-3.5 w-3.5 inline text-primary" />
            Tailored Experiences
          </Badge>
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Designed for Students. Built for Institutions.
          </Typography>
          <Typography variant="p" className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Select an audience below to explore features carefully optimized for every aspect of high-trust, premium student housing operations.
          </Typography>
        </div>

        {/* Dynamic sliding segmented switcher */}
        <div className="flex justify-center mb-12">
          <div className="relative flex p-1.5 bg-slate-200/60 dark:bg-slate-900 border border-slate-200/30 dark:border-white/5 rounded-full shadow-inner max-w-md w-full">
            <button
              onClick={() => handleTabChange("student")}
              className={`flex-1 relative z-10 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-colors duration-300 focus:outline-none flex items-center justify-center gap-1.5 ${
                activeTab === "student" ? "text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              <Users className="h-4 w-4 shrink-0" />
              For Students
            </button>

            <button
              onClick={() => handleTabChange("institution")}
              className={`flex-1 relative z-10 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-colors duration-300 focus:outline-none flex items-center justify-center gap-1.5 ${
                activeTab === "institution" ? "text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              <Building2 className="h-4 w-4 shrink-0" />
              For Institutions
            </button>

            {/* Sliding background indicator */}
            <motion.div
              className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full bg-primary -z-0"
              animate={{
                x: activeTab === "student" ? 0 : "100%",
                width: "calc(50% - 6px)",
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Column: Interactive Feature List */}
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-4"
              >
                {currentFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  const isActive = activeFeatureIdx === idx;

                  return (
                    <button
                      key={feature.id}
                      onClick={() => setActiveFeatureIdx(idx)}
                      className={`text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "border-primary bg-white shadow-md dark:bg-slate-900 dark:border-primary/50 scale-[1.01]"
                          : "border-slate-200/60 bg-transparent hover:bg-white/50 dark:border-white/5 dark:hover:bg-white/5"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-white scale-110 shadow-sm"
                            : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Typography
                            variant="h4"
                            className={`text-lg font-bold transition-colors leading-tight ${
                              isActive ? "text-primary dark:text-white" : "text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {feature.title}
                          </Typography>
                          <span
                            className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full border tracking-wide ${
                              isActive
                                ? "bg-primary/10 border-primary/20 text-primary dark:text-white"
                                : "bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-800 dark:border-white/10 dark:text-slate-400"
                            }`}
                          >
                            {feature.badge}
                          </span>
                        </div>

                        <Typography
                          variant="p"
                          className={`mt-2 text-sm leading-relaxed transition-colors ${
                            isActive ? "text-slate-600 dark:text-slate-300" : "text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          {feature.description}
                        </Typography>
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Premium High-Fidelity App UI Mockup Visualizer */}
          <div className="relative flex justify-center items-center">
            {/* Ambient colorful glow corresponding to the active feature color theme */}
            <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-tr from-primary/10 to-indigo-500/10 blur-2xl opacity-80" />

            {/* Smart Phone Frame Wrapper */}
            <div className="relative mx-auto w-[320px] h-[610px] rounded-[3rem] border-[12px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden ring-4 ring-slate-800/50">
              {/* Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-slate-900 rounded-b-2xl z-40 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* Status Bar */}
              <div className="absolute top-2.5 left-0 right-0 px-6 flex justify-between items-center text-[10px] font-bold text-slate-500 dark:text-slate-400 z-30 select-none">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="h-3 w-3" />
                  <Battery className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Dynamic screen display */}
              <div className="h-full w-full pt-10 pb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${currentFeature.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="h-full w-full"
                  >
                    {renderPhoneScreen()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Screen reflection/glassmorphism overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 z-20 rounded-[2.2rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AppFeaturesSection };
