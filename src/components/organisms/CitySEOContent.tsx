"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "../atoms/Typography";
import { CheckCircle2, ShieldCheck, MapPin, Sparkles } from "lucide-react";

interface CitySEOContentProps {
  citySlug: string;
}

const seoData: Record<string, any> = {
  bangalore: {
    introTitle: "Bangalore",
    intro: "New city, new chapter — let's make sure you land somewhere that actually feels like home. Looking for hostels in Bangalore? Livinzza helps students find safe, affordable stays in Bangalore near their campus — no brokerage, no stress, no guesswork.",
    whyTitle: "Why Livinzza in Bangalore?",
    whyText: "Shifting to Bangalore for college is exciting — but finding a decent place to stay shouldn't eat up your first week. If you've been searching for hostels in Bangalore and ended up more confused than when you started, you're not alone. Livinzza lists affordable student hostels close to major colleges and universities across the city. Every property is checked for safety, and most come with the essentials already sorted: high-speed Wi-Fi, home-cooked meals, laundry, and proper study zones. Whether you're coming from another state or just another city, you'll find a community of students in the same boat. And yes — your parents can stop worrying too.",
    includedIntro: "Your room comes fully furnished — just walk in with your bags. Meals, laundry, 24/7 security, and fast internet are all taken care of. There's a dedicated study space when you need focus, and a common area when you need people.",
    features: [
      { title: "Move In, Settle In", desc: "Furnished rooms, zero setup hassle." },
      { title: "Safe, Always", desc: "CCTV and on-site security, reassuring for parents too." },
      { title: "Internet That Keeps Up", desc: "Wi-Fi framed around actual student use." },
      { title: "Food That Hits Home", desc: "Meals with an emotional, relatable angle." },
      { title: "Study Without Distractions", desc: "Dedicated zones, not just a desk in the corner." },
      { title: "Your People Are Here", desc: "Community framed as a genuine benefit, not a perk." }
    ],
    conclusionTitle: "Come take a look — no pressure",
    conclusionText: "Still comparing hostels in Bangalore and not sure where to start? Browse affordable stays in Bangalore on Livinzza or book a free visit. No commitment, no hard sell — just a chance to find a place that feels right before your semester begins."
  },
  kochi: {
    introTitle: "Kochi",
    intro: "God's own city, your own chapter — let's make sure you find a place that feels like home from day one. Looking for hostels in Kochi? Livinzza helps students find safe, affordable stays in Kochi near their campus — no brokerage, no stress, no guesswork.",
    whyTitle: "Why Livinzza in Kochi?",
    whyText: "Moving to Kochi for college is a big deal — and the last thing you want is to spend your first weeks stressing over where to sleep. If you've been scrolling through listings for hostels in Kochi and still can't figure out what's legit and what's not, you're not alone. Livinzza lists affordable student hostels close to major colleges and universities across the city. Every property is checked for safety, and most come with everything you need from day one: high-speed Wi-Fi, home-cooked meals, laundry, and quiet study zones. Whether you're arriving from another state or a nearby town, you'll walk into a ready community of students just like you. And your parents? They'll breathe a little easier too.",
    includedIntro: "Your room is fully furnished and move-in ready — no running around for furniture or fittings. Meals, laundry, round-the-clock security, and reliable internet are all part of the deal. Need to get your head down for an exam? There's a study space for that. Need to unwind after a long day? The common area has you covered.",
    features: [
      { title: "Move In, Settle In", desc: "Furnished rooms with everything in place — bed, storage, study table. Drop your bags and you're already home." },
      { title: "Safe, Always", desc: "CCTV coverage, secure access, and on-site staff at all hours. Peace of mind for you and everyone back home." },
      { title: "Internet That Keeps Up", desc: "Fast, reliable Wi-Fi that handles lectures, assignments, group calls, and everything in between." },
      { title: "Food That Feels Like Home", desc: "Freshly prepared, hygienic meals every day. The kind of food that actually makes you feel looked after." },
      { title: "Study Without Distractions", desc: "A dedicated space to focus when it matters most — not just a corner squeezed into your room." },
      { title: "Your People Are Here", desc: "A hostel full of students from different places, building the same new life. Your circle starts here." }
    ],
    conclusionTitle: "Come take a look — no pressure",
    conclusionText: "Still weighing your options for hostels in Kochi and not sure where to land? Explore affordable stays in Kochi on Livinzza or schedule a free visit. No commitment, no pressure — just a chance to find a place that feels right before the semester kicks off."
  },
  kottayam: {
    introTitle: "Kottayam",
    intro: "Moving to Kottayam for your studies? Finding the right accommodation can make your transition much easier. If you're searching for hostels in Kottayam, Livinzza helps students discover verified, budget-friendly stays close to colleges and universities across the city. No brokerage fees, no endless searching — just student-friendly housing you can trust.",
    whyTitle: "Why Choose Livinzza in Kottayam?",
    whyText: "Kottayam is home to numerous colleges, universities, and a highly student-focused environment. With thousands of students relocating here every year, finding a safe and comfortable place to stay is often the first challenge. Livinzza simplifies that process by listing affordable student hostels in convenient locations near educational institutions. Every accommodation is carefully reviewed, with facilities designed around everyday student needs. From reliable Wi-Fi and nutritious meals to laundry services and secure premises, everything is set up to help you settle in quickly and focus on your studies. Kottayam's reputation as a major education hub makes it an ideal place for student living.",
    includedIntro: "Move in without worrying about furniture, utilities, or daily essentials. Most hostels come equipped with everything students need for a comfortable stay.",
    features: [
      { title: "Fully Furnished Rooms", desc: "Comfortable living spaces ready from day one" },
      { title: "Secure Student Accommodation", desc: "CCTV surveillance and safety measures for peace of mind" },
      { title: "Fast Internet Access", desc: "Stay connected for online classes, projects, and entertainment" },
      { title: "Daily Meal Facilities", desc: "Fresh, convenient meals that fit student schedules" },
      { title: "Dedicated Study Areas", desc: "Quiet spaces designed for learning and productivity" },
      { title: "Student-Friendly Community", desc: "Meet and connect with fellow students from different colleges" }
    ],
    extraSectionTitle: "Designed for Student Life",
    extraSectionText: "Whether you're arriving from another district in Kerala or a different state altogether, adjusting to a new city becomes easier when your accommodation supports your routine. Livinzza offer a balance of comfort, convenience, and community, helping students feel at home while pursuing their academic goals.",
    conclusionTitle: "Explore Before You Commit",
    conclusionText: "Still looking at hostels in Kottayam and weighing your options? Browse available student accommodations on Livinzza and schedule a visit to see the facilities yourself. Take your time, ask questions, and choose a place that feels right for your college journey — without pressure or hidden surprises."
  },
  trivandrum: {
    introTitle: "Trivandrum",
    intro: "Searching for a comfortable hostel in Trivandrum? Livinzza helps students find affordable, secure hostels in Trivandrum located near leading colleges, universities, and educational institutions. Skip the hassle of dealing with brokers and endless property visits—find student accommodation that's designed around your needs.",
    whyTitle: "Why Choose Livinzza in Trivandrum?",
    whyText: "As Kerala's capital city, Trivandrum attracts students from across the state and beyond for higher education. Finding accommodation that is both comfortable and convenient can be challenging, especially when you're new to the city. Livinzza makes the process easier by connecting students with verified hostels located close to major educational hubs. Each property is selected with student living in mind, offering practical amenities that support both academic and personal life. From dependable Wi-Fi and daily meals to laundry services and secure surroundings, everything is arranged to help you settle in from day one.",
    includedIntro: "Hostels are equipped with essential facilities that make student life simpler and more convenient.",
    features: [
      { title: "Fully Furnished Rooms", desc: "Move in comfortably without additional setup costs" },
      { title: "Safe and Secure Environment", desc: "CCTV monitoring and security measures for added peace of mind" },
      { title: "High-Speed Wi-Fi", desc: "Reliable internet for studying, assignments, and entertainment" },
      { title: "Daily Meal Options", desc: "Fresh meals that fit into a busy student schedule" },
      { title: "Dedicated Study Spaces", desc: "Quiet areas designed for focus and productivity" },
      { title: "Student Community Living", desc: "Connect with fellow students and build new friendships" }
    ],
    extraSectionTitle: "Built Around Student Needs",
    extraSectionText: "Whether you're moving from another district in Kerala or relocating from another state, having the right accommodation can make all the difference. Livinzza provide a welcoming environment where students can balance academics, personal growth, and social connections while enjoying the convenience of city life.",
    conclusionTitle: "Find Your Stay with Confidence",
    conclusionText: "Still comparing hostels in Trivandrum? Explore affordable stays in Trivandrum on Livinzza and schedule a visit to see the facilities firsthand. Take your time to find a place that matches your preferences, budget, and lifestyle before starting your academic journey."
  },
  calicut: {
    introTitle: "Calicut",
    intro: "Searching for a student hostel in Calicut? Livinzza helps students find safe, affordable hostels in Calicut near colleges, universities, and educational institutions across the city. Whether you're moving for undergraduate studies, professional courses, or higher education, finding the right place to stay becomes much easier with verified student accommodation options.",
    whyTitle: "Why Choose Livinzza in Calicut?",
    whyText: "Calicut is one of Kerala's most popular student destinations, attracting learners from different parts of the state and beyond. Finding accommodation that offers comfort, convenience, and security can be overwhelming when you're new to the city. Livinzza simplifies your search by connecting you with affordable hostels located close to major educational hubs. Every property is selected to support student life, offering practical facilities that make daily living more convenient. From uninterrupted internet access and meal plans to laundry facilities and secure premises, everything is designed to help students settle in and focus on their academic goals.",
    includedIntro: "Most hostels provide the essential amenities students need for a comfortable and hassle-free stay.",
    features: [
      { title: "Fully Furnished Rooms", desc: "Move in with ease and start living comfortably from day one" },
      { title: "Secure Living Spaces", desc: "Safety-focused accommodations with modern security measures" },
      { title: "Reliable Wi-Fi Connectivity", desc: "Stay connected for classes, assignments, and entertainment" },
      { title: "Daily Meal Services", desc: "Convenient meal options that fit student routines" },
      { title: "Dedicated Study Areas", desc: "Quiet spaces that encourage focus and productivity" },
      { title: "Supportive Student Community", desc: "Live alongside fellow students and build meaningful connections" }
    ],
    extraSectionTitle: "A Better Student Living Experience",
    extraSectionText: "Relocating to a new city comes with plenty of adjustments, but accommodation shouldn't be one of your worries. Livinzza helps you find hostels designed to create a balanced student lifestyle, combining comfort, convenience, and a welcoming environment that helps you feel at home while pursuing your education.",
    conclusionTitle: "Explore Your Options Today",
    conclusionText: "Still searching for hostels in Calicut? Browse affordable stays in Calicut on Livinzza and schedule a visit to explore the facilities in person. Compare your options, choose the location that works best for you, and find a place where you can focus on making the most of your college experience."
  },
  pune: {
    introTitle: "Pune",
    intro: "Looking for hostels in Pune that are comfortable, affordable, and close to your college? Livinzza helps students find quality accommodation in Pune near major universities and educational institutions. Whether you're moving to the city for the first time or relocating for higher studies, finding the right student stay is now much simpler.",
    whyTitle: "Why Choose Livinzza in Pune?",
    whyText: "Pune is widely recognized as one of India's leading education hubs, attracting students from across the country every year. With so many accommodation options available, finding a place that balances convenience, safety, and affordability can be challenging. Livinzza makes the search easier by connecting students with well-maintained hostels located near popular colleges and universities. Every stay is selected with student requirements in mind, offering essential facilities that support both academic and personal life. From high-speed internet and meal services to laundry facilities and secure surroundings, everything is designed to help students settle in comfortably.",
    includedIntro: "Hostels are equipped with the everyday essentials students need for a smooth and convenient living experience.",
    features: [
      { title: "Fully Furnished Rooms", desc: "Comfortable accommodation that's ready from the day you move in" },
      { title: "Secure Environment", desc: "Safety-focused properties with security measures for peace of mind" },
      { title: "High-Speed Wi-Fi", desc: "Reliable internet access for classes, assignments, and entertainment" },
      { title: "Daily Meal Services", desc: "Fresh and convenient meal options for busy student schedules" },
      { title: "Dedicated Study Spaces", desc: "Areas designed to support concentration and productivity" },
      { title: "Vibrant Student Community", desc: "Connect with students from different colleges and backgrounds" }
    ],
    extraSectionTitle: "Student Living Made Easier",
    extraSectionText: "Adjusting to a new city can take time, but the right accommodation can make the process much smoother. Livinzza offer a practical and welcoming environment where students can focus on academics, build friendships, and enjoy a comfortable stay throughout their educational journey.",
    conclusionTitle: "Start Your Search Today",
    conclusionText: "Still exploring hostels in Pune? Browse affordable stays in Pune on Livinzza and schedule a visit to check out the facilities firsthand. Compare your options, find a location that suits your needs, and choose a place where you can feel at home while pursuing your studies."
  }
};

const CitySEOContent = ({ citySlug }: CitySEOContentProps) => {
  const data = seoData[citySlug.toLowerCase()];

  if (!data) return null;

  return (
    <div className="w-full bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-slate-700 dark:text-slate-300 space-y-12">
        
        {/* Intro */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {data.introTitle}
            </Typography>
          </div>
          <Typography variant="p" className="text-base sm:text-lg leading-relaxed">
            {data.intro}
          </Typography>
        </section>

        {/* Why Livinzza */}
        <section className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full blur-2xl" />
          <Typography variant="h3" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">
            {data.whyTitle}
          </Typography>
          <Typography variant="p" className="text-base leading-relaxed relative z-10">
            {data.whyText}
          </Typography>
        </section>

        {/* What's Included */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <Typography variant="h3" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              What's Included
            </Typography>
          </div>
          <Typography variant="p" className="mb-6 text-base leading-relaxed">
            {data.includedIntro}
          </Typography>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {data.features.map((feature: any, idx: number) => (
              <div key={idx} className="flex gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/60 dark:border-white/5 hover:border-primary/30 transition-colors shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">{feature.title}</div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Optional Extra Section */}
        {data.extraSectionTitle && (
          <section>
            <Typography variant="h3" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {data.extraSectionTitle}
            </Typography>
            <Typography variant="p" className="text-base leading-relaxed">
              {data.extraSectionText}
            </Typography>
          </section>
        )}

        {/* Conclusion */}
        <section className="bg-primary/5 border border-primary/10 rounded-3xl p-8 text-center flex flex-col items-center">
          <Typography variant="h3" className="text-xl sm:text-2xl font-bold text-primary dark:text-primary mb-3">
            {data.conclusionTitle}
          </Typography>
          <Typography variant="p" className="text-base leading-relaxed max-w-2xl mx-auto mb-6">
            {data.conclusionText}
          </Typography>
          <Link 
            href={`/city/${citySlug}/hostels`}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            Explore Now
          </Link>
        </section>

      </div>
    </div>
  );
};

export { CitySEOContent };
