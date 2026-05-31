"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../atoms/Badge";
import { Typography } from "../atoms/Typography";
import { 
  CreditCard, 
  CalendarCheck, 
  AlertOctagon, 
  CheckCircle2, 
  Clock, 
  MoreHorizontal,
  ArrowUpRight,
  User
} from "lucide-react";

const FeatureMockups = () => {
  return (
    <div className="flex flex-col gap-32 py-16">
      
      {/* Mockup 1: Automated Billing */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute left-[-10%] top-[-10%] -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[80px] dark:bg-blue-500/20" />
            
            {/* The UI Widget */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900/90">
              <div className="border-b border-slate-100 bg-slate-50/50 p-5 dark:border-white/5 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Payment Collection</div>
                      <div className="text-xs text-slate-500">Auto-synced via UPI</div>
                    </div>
                  </div>
                  <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
                    This Month
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6 flex justify-between items-end">
                  <div>
                    <div className="text-sm font-semibold text-slate-500 mb-1">Total Collected</div>
                    <div className="text-3xl font-black text-slate-900 dark:text-white">₹12,45,000</div>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg dark:bg-emerald-500/10 dark:text-emerald-400">
                    <ArrowUpRight className="h-4 w-4" /> 14%
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Rahul Sharma", room: "Room 204", amount: "₹15,000", status: "Paid", time: "Today, 10:45 AM" },
                    { name: "Sneha Reddy", room: "Room 102", amount: "₹18,500", status: "Paid", time: "Today, 09:12 AM" },
                    { name: "Vikram Singh", room: "Room 305", amount: "₹15,000", status: "Pending", time: "Due in 2 days" },
                  ].map((tx, idx) => (
                    <div key={idx} className="flex items-center justify-between rounded-xl border border-slate-100 p-4 hover:border-slate-200 dark:border-white/5 dark:hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          <User className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">{tx.name}</div>
                          <div className="text-xs text-slate-500">{tx.room} • {tx.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-black text-slate-900 dark:text-white">{tx.amount}</div>
                        <div className={`text-[10px] font-bold uppercase tracking-wider ${tx.status === 'Paid' ? 'text-emerald-500' : 'text-orange-500'}`}>
                          {tx.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col items-start"
          >
            <Badge variant="secondary" className="mb-4 border border-blue-200 bg-blue-50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
              Zero Manual Entry
            </Badge>
            <Typography variant="h2" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Automated Billing & UPI
            </Typography>
            <Typography variant="p" className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Simplify rent collection with automated billing. Generate rent invoices instantly and collect digitally via UPI. Payments sync directly to your dashboard without any manual reconciliation.
            </Typography>
          </motion.div>
        </div>
      </section>

      {/* Mockup 2: Attendance */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <Badge variant="secondary" className="mb-4 border border-emerald-200 bg-emerald-50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
              100% Student Safety
            </Badge>
            <Typography variant="h2" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Live Attendance & Leaves
            </Typography>
            <Typography variant="p" className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Track resident check-ins and curfews instantly. Warden apps make night attendance a breeze, while parent apps provide real-time peace of mind about student whereabouts.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute right-[-10%] bottom-[-10%] -z-10 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[80px] dark:bg-emerald-500/15" />
            
            {/* The UI Widget */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900/90">
              <div className="border-b border-slate-100 bg-slate-50/50 p-5 dark:border-white/5 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white">
                      <CalendarCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Night Attendance</div>
                      <div className="text-xs text-slate-500">Block A (Girls)</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">46/48</div>
                    <div className="text-[10px] font-bold uppercase text-slate-400">Present</div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {[
                    { name: "Aditi Rao", room: "A-101", status: "Present", icon: CheckCircle2, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10" },
                    { name: "Priya Desai", room: "A-101", status: "Present", icon: CheckCircle2, color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10" },
                    { name: "Meera Nair", room: "A-102", status: "Approved Leave", icon: Clock, color: "text-blue-500 bg-blue-50 dark:bg-blue-500/10" },
                    { name: "Kavya S", room: "A-102", status: "Late Entry", icon: AlertOctagon, color: "text-orange-500 bg-orange-50 dark:bg-orange-500/10" },
                  ].map((student, idx) => {
                    const Icon = student.icon;
                    return (
                      <div key={idx} className="flex items-center justify-between rounded-xl p-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0" />
                          <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white">{student.name}</div>
                            <div className="text-xs text-slate-500">Room {student.room}</div>
                          </div>
                        </div>
                        <div className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold ${student.color}`}>
                          <Icon className="h-3.5 w-3.5" />
                          {student.status}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                  <button className="w-full rounded-xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-colors">
                    Submit Report
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mockup 3: Complaints */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute left-[-10%] bottom-[-10%] -z-10 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[80px] dark:bg-indigo-500/20" />
            
            {/* The UI Widget */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900/90">
              <div className="border-b border-slate-100 bg-slate-50/50 p-5 dark:border-white/5 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white">
                      <AlertOctagon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Maintenance Desk</div>
                      <div className="text-xs text-slate-500">2 Active Issues</div>
                    </div>
                  </div>
                  <MoreHorizontal className="h-5 w-5 text-slate-400" />
                </div>
              </div>
              <div className="bg-slate-50/50 p-4 dark:bg-black/20">
                <div className="space-y-4">
                  {/* Ticket 1 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-slate-900">
                    <div className="flex justify-between items-start mb-3">
                      <div className="rounded bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase text-red-600 dark:bg-red-500/20 dark:text-red-400">High Priority</div>
                      <div className="text-[10px] text-slate-400">2 hrs ago</div>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">AC not cooling properly</div>
                    <div className="text-xs text-slate-500 mb-4">Room 405 • Reported by Rohan M.</div>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 dark:border-white/5">
                      <div className="flex -space-x-2">
                        <div className="h-6 w-6 rounded-full border-2 border-white bg-slate-200 dark:border-slate-900 dark:bg-slate-700" />
                        <div className="h-6 w-6 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700 dark:border-slate-900 dark:bg-indigo-900 dark:text-indigo-300">
                          +1
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Assign Technician</div>
                    </div>
                  </div>

                  {/* Ticket 2 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-slate-900 opacity-60">
                    <div className="flex justify-between items-start mb-3">
                      <div className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">Resolved</div>
                      <div className="text-[10px] text-slate-400">1 day ago</div>
                    </div>
                    <div className="text-sm font-bold text-slate-900 line-through dark:text-white mb-1">Broken window latch</div>
                    <div className="text-xs text-slate-500 mb-3">Room 211 • Reported by Amit K.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col items-start"
          >
            <Badge variant="secondary" className="mb-4 border border-indigo-200 bg-indigo-50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400">
              Rapid Resolution
            </Badge>
            <Typography variant="h2" className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Complaints & Maintenance
            </Typography>
            <Typography variant="p" className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Make issue reporting organized. Residents easily raise complaints through the app, helping wardens assign tasks to technicians and resolve them quickly with full transparency.
            </Typography>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export { FeatureMockups };
