"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "../atoms/Typography";

const galleryImages = [
  {
    src: "/images/lifestyle_1.png",
    alt: "Premium dorm room",
    caption: "Modern Living Spaces",
    span: "col-span-1 md:col-span-2 row-span-2",
    aspect: "aspect-square md:aspect-auto",
  },
  {
    src: "/images/lifestyle_2.png",
    alt: "Game room",
    caption: "Vibrant Community",
    span: "col-span-1 md:col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    src: "/images/lifestyle_3.png",
    alt: "Cafeteria",
    caption: "Healthy Dining",
    span: "col-span-1 md:col-span-1 row-span-1",
    aspect: "aspect-square",
  },
  {
    src: "/images/lifestyle_4.png",
    alt: "Library",
    caption: "Dedicated Study Zones",
    span: "col-span-1 md:col-span-2 row-span-1",
    aspect: "aspect-[2/1]",
  },
];

const LifestyleGallerySection = () => {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <Typography variant="small" className="uppercase tracking-[0.26em] text-primary dark:text-primary/80">
            Life at Livinnza
          </Typography>
          <Typography variant="h2" className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            More than just a room
          </Typography>
          <Typography variant="p" className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Experience a student lifestyle designed for comfort, community, and academic success. Every space is crafted to enhance your college years.
          </Typography>
        </div>

        {/* Bento Box Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] sm:auto-rows-[300px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-3xl ${img.span}`}
            >
              <div className={`relative w-full h-full ${img.aspect} md:aspect-auto`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Typography variant="h4" className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                    {img.caption}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { LifestyleGallerySection };
