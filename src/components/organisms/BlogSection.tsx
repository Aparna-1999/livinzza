"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Typography } from "../atoms/Typography";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

const blogPosts = [
  {
    title: "10 Tips for Finding the Perfect College Hostel",
    excerpt: "Navigating off-campus housing can be stressful. Here is a definitive guide to what you should look for when choosing your student accommodation.",
    image: "/images/boys_room.png",
    category: "Student Life",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    slug: "tips-finding-perfect-college-hostel",
  },
  {
    title: "Why Universities Are Outsourcing Student Housing",
    excerpt: "More colleges are partnering with specialized housing providers to scale their campus capacity without sacrificing quality or brand reputation.",
    image: "/images/delhi_university.png",
    category: "For Universities",
    date: "Oct 08, 2026",
    readTime: "7 min read",
    slug: "universities-outsourcing-student-housing",
  },
  {
    title: "Understanding Hostel Safety and Discipline Standards",
    excerpt: "For parents, safety is the number one priority. Learn how Livinnza maintains rigorous security and disciplinary measures across all locations.",
    image: "/images/girls_room.png",
    category: "Safety & Security",
    date: "Sep 29, 2026",
    readTime: "4 min read",
    slug: "hostel-safety-discipline-standards",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Typography variant="small" className="uppercase tracking-[0.26em] text-sky-600 dark:text-sky-200/70">
              Livinnza Journal
            </Typography>
            <Typography variant="h2" className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Latest insights and news
            </Typography>
            <Typography variant="p" className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Stay updated with the latest trends in student housing, campus life, and institutional partnerships.
            </Typography>
          </div>
          <Button href="/blog" variant="secondary" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-900 dark:border-white/10 dark:text-white dark:hover:bg-slate-800">
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:border-white/10 dark:bg-slate-900 dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
            >
              <Link href={`/blog/${post.slug}`} className="relative h-56 w-full overflow-hidden block outline-none">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-slate-900 backdrop-blur-md dark:bg-slate-950/80 dark:text-white border-0 shadow-sm">
                    {post.category}
                  </Badge>
                </div>
              </Link>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="block mt-4 outline-none">
                    <Typography variant="h4" className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-sky-400">
                      {post.title}
                    </Typography>
                  </Link>
                  <Typography variant="p" className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3 dark:text-slate-300">
                    {post.excerpt}
                  </Typography>
                </div>
                <div className="mt-6">
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-sky-600 dark:hover:text-sky-400 outline-none">
                    Read full article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button href="/blog" variant="secondary" className="w-full justify-center gap-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-900 dark:border-white/10 dark:text-white dark:hover:bg-slate-800">
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { BlogSection };
