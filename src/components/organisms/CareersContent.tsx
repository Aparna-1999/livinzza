import React from "react";
import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import Link from "next/link";
import { Briefcase, Users, Megaphone, ArrowRight, Mail } from "lucide-react";

const CareersContent = () => {
  const openRoles = [
    {
      title: "Full Stack Software Engineer",
      location: "Bengaluru, India",
      experience: "2+ Years",
      type: "Full-time",
      tags: ["Python", "JavaScript", "TypeScript", "Next.js", "Tailwind", "React Native"],
      icon: <Briefcase className="h-6 w-6" />,
      link: "mailto:careers@livinnza.com"
    },
    {
      title: "Growth Consultant & Institutional Growth Partner",
      location: "India (Flexible)",
      experience: "Open to all levels",
      type: "Part-time or Full-time",
      tags: ["Growth", "Institutions", "Partnerships", "Flexible"],
      icon: <Users className="h-6 w-6" />,
      link: "mailto:careers@livinnza.com"
    },
    {
      title: "Social Media Handler",
      location: "India (Flexible / Remote)",
      experience: "Open to all levels",
      type: "Part-time (~4 hrs / day)",
      tags: ["Social Media", "Content", "Engagement", "Livinnza", "Flexible"],
      icon: <Megaphone className="h-6 w-6" />,
      link: "mailto:careers@livinnza.com"
    }
  ];

  return (
    <section className="bg-white pt-32 pb-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Typography variant="h1" className="mb-6">
            Help us shape the future of student living.
          </Typography>
          <Typography variant="p" className="text-xl text-slate-600 dark:text-slate-400">
            At Livinnza we're building real infrastructure for hostels and PGs across India. 
            Join a small, ambitious team and own meaningful work from day one.
          </Typography>
        </div>

        <div className="mb-20">
          <Typography variant="h2" className="mb-8 text-center">
            Find your place at Livinnza
          </Typography>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {openRoles.map((role, i) => (
              <div key={i} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 dark:border-white/10 dark:bg-slate-900 dark:hover:border-primary/50">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                    {role.icon}
                  </div>
                  <Typography variant="h3" className="mb-2 text-xl">
                    {role.title}
                  </Typography>
                  <div className="mb-6 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <p>📍 {role.location}</p>
                    <p>⏳ {role.experience}</p>
                    <p>💼 {role.type}</p>
                  </div>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {role.tags.map((tag, j) => (
                      <span key={j} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={role.link}>
                  <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    View Role <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-2xl rounded-3xl bg-slate-50 p-12 text-center dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-800">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <Typography variant="h3" className="mb-4">
            Don't see the right role?
          </Typography>
          <Typography variant="p" className="mb-8 text-slate-600 dark:text-slate-400">
            We're always open to talented people. Send us your work and let's start a conversation.
          </Typography>
          <Link href="mailto:careers@livinnza.com">
            <Button size="lg">Send Speculative CV</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { CareersContent };
