"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Globe2, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";

const generateDays = (month: number, year: number) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const days = [];
  
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Simulated time slots
const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
];

export const ScheduleContent = () => {
  const today = new Date();
  // Fixing the initial date state to ensure consistent hydration
  const [currentDate, setCurrentDate] = useState(() => {
    // Start at May 2026 as per reference, or current date if later
    const initDate = new Date();
    if (initDate.getFullYear() < 2026) {
       initDate.setFullYear(2026, 4, 1); // May 2026
    }
    return initDate;
  });
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = generateDays(month, year);

  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));

  const handleBook = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true);
      // Reset after 3 seconds for demo purposes
      setTimeout(() => {
        setIsBooked(false);
        setSelectedDate(null);
        setSelectedTime(null);
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <Typography variant="small" className="uppercase tracking-[0.25em] text-primary dark:text-primary/95 font-extrabold mb-4 block">
            Livinzza Stays
          </Typography>
          <Typography variant="h1" className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Appointment Scheduling
          </Typography>
          <Typography variant="p" className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Select a date and a 20-minute slot to connect with our campus advisors.
          </Typography>
        </div>

        {/* Scheduling Widget */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row relative">
          
          <AnimatePresence>
            {isBooked && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center rounded-[2.5rem]"
              >
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <Typography variant="h2" className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Booking Confirmed!
                  </Typography>
                  <Typography variant="p" className="text-slate-500 dark:text-slate-400">
                    Your appointment for {MONTHS[month]} {selectedDate}, {year} at {selectedTime} has been scheduled.
                  </Typography>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Left Column: Calendar */}
          <div className="w-full md:w-1/2 lg:w-3/5 p-8 sm:p-12 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10">
            <div className="flex items-center justify-between mb-8">
              <Typography variant="h3" className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                {MONTHS[month]} {year}
              </Typography>
              <div className="flex gap-2">
                <button 
                  onClick={prevMonth}
                  className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextMonth}
                  className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-y-6 text-center mb-8">
              {WEEKDAYS.map((day) => (
                <div key={day} className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {day.charAt(0)}
                </div>
              ))}
              {days.map((day, idx) => {
                const isSelected = day === selectedDate;
                // Mock past days logic
                const isPast = Boolean(day && day < today.getDate() && month === today.getMonth() && year === today.getFullYear());
                
                return (
                  <div key={idx} className="flex justify-center">
                    {day ? (
                      <button
                        disabled={isPast}
                        onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                          ${isSelected 
                            ? 'bg-primary text-white shadow-md shadow-primary/30 scale-110' 
                            : isPast 
                              ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary'
                          }
                        `}
                      >
                        {day}
                      </button>
                    ) : (
                      <div className="w-10 h-10" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-white/5">
              <Globe2 className="h-4 w-4 shrink-0 text-slate-400" />
              Time zone: Indian Standard Time (IST) • Kolkata / Chennai
            </div>
          </div>

          {/* Right Column: Time Slots */}
          <div className="w-full md:w-1/2 lg:w-2/5 p-8 sm:p-12 bg-slate-50/50 dark:bg-slate-950/50 flex flex-col">
            {selectedDate ? (
              <>
                <Typography variant="h4" className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                  Available Times <span className="text-sm font-normal text-slate-500 block mt-1">for {MONTHS[month]} {selectedDate}</span>
                </Typography>
                
                <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar max-h-[400px]">
                  {TIME_SLOTS.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <div key={time} className="flex gap-2">
                        <button
                          onClick={() => setSelectedTime(time)}
                          className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold border transition-all duration-200 flex items-center justify-center gap-2
                            ${isSelected 
                              ? 'border-primary bg-primary text-white shadow-md' 
                              : 'border-primary/30 text-primary bg-primary/5 hover:border-primary hover:bg-primary/10'
                            }
                          `}
                        >
                          {!isSelected && <Clock className="h-4 w-4 opacity-70" />}
                          {time}
                        </button>
                        {isSelected && (
                          <motion.div 
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            className="shrink-0"
                          >
                            <Button onClick={handleBook} className="h-full rounded-xl px-6">
                              Confirm
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-6">
                  <CalendarIcon className="h-6 w-6 text-slate-400 dark:text-slate-500" />
                </div>
                <Typography variant="h3" className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  No date selected
                </Typography>
                <Typography variant="p" className="text-sm text-slate-500 dark:text-slate-400">
                  Please select a date from the calendar to view available 20-minute scheduling slots.
                </Typography>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
