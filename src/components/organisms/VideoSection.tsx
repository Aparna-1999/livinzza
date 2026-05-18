"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { Typography } from "../atoms/Typography";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Typography variant="small" className="uppercase tracking-[0.26em] text-primary dark:text-primary/80">
            About Livinnza
          </Typography>
          <Typography variant="h2" className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            See how we transform student housing
          </Typography>
          <Typography variant="p" className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            A quick look at how we partner with universities to create safe, reliable, and premium accommodations for students.
          </Typography>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 shadow-2xl dark:border-white/10 aspect-video group">
            {!isPlaying ? (
              <>
                {/* Thumbnail Image */}
                <Image
                  src="/images/vit_vellore.png"
                  alt="Livinnza overview video thumbnail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(true)}
                    className="group/btn relative flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all hover:bg-white hover:text-primary shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                    aria-label="Play video"
                  >
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity group-hover/btn:opacity-100" />
                    <Play className="relative z-10 h-8 w-8 ml-1" fill="currentColor" />
                  </motion.button>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white drop-shadow-md">
                  <div className="font-semibold tracking-wide">The Livinnza Experience</div>
                  <div className="text-sm font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">02:15</div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 bg-slate-950 flex items-center justify-center flex-col">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                {/* Actual video iframe would go here, using a placeholder for now */}
                <div className="flex flex-col items-center text-center px-4 animate-in fade-in duration-700">
                  <Play className="h-16 w-16 text-primary mb-4 opacity-50" />
                  <Typography variant="h3" className="text-2xl font-bold text-white mb-2">
                    Video Player Demo
                  </Typography>
                  <Typography variant="p" className="text-slate-400 max-w-md">
                    This is where your promotional video about Livinnza will play. You can easily embed a YouTube or Vimeo iframe here.
                  </Typography>
                </div>
              </div>
            )}
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-b from-primary/10 to-transparent opacity-50 dark:from-primary/20 blur-xl" />
        </div>
      </div>
    </section>
  );
};

export { VideoSection };
