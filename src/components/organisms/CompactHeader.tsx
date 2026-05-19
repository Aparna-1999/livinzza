"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { ThemeToggle } from "../atoms/ThemeToggle";
import { CitySelector } from "../molecules/CitySelector";

const CompactHeader = () => {
  const pathname = usePathname();

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="border-b border-slate-200 bg-white/95 text-slate-900 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/95 dark:text-slate-100 dark:shadow-[0_2px_12px_rgba(2,6,23,0.35)] w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4 px-4 py-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <Link href="/" aria-label="Livinnza home" className="shrink-0">
            <Logo />
          </Link>
          <CitySelector />
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          <ThemeToggle />
          <Button onClick={(e) => scrollToSection(e, "hostels")} variant="outline" size="sm" className="border-slate-200 bg-transparent text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 px-2.5 sm:px-4 text-xs sm:text-sm whitespace-nowrap shrink-0">
            View listings
          </Button>
          <Button href="/know-more" variant="secondary" size="sm" className="hidden sm:inline-flex border-slate-200 bg-primary text-white hover:bg-primary-hover dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15 px-2.5 sm:px-4 text-xs sm:text-sm whitespace-nowrap shrink-0">
            Know More
          </Button>
        </div>
      </div>
    </header>
  );
};

export { CompactHeader };
