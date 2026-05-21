"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { NavLinks } from "../molecules/NavLinks";
import { ThemeToggle } from "../atoms/ThemeToggle";
import { CitySelector } from "../molecules/CitySelector";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleHeaderBtnClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      setIsOpen(false);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-900 backdrop-blur shadow-sm dark:border-white/10 dark:bg-slate-950/95 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4 lg:py-5">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <Link href="/" aria-label="Livinnza home" className="shrink-0">
              <Logo />
            </Link>
            <CitySelector />
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button href="/hostels" variant="outline" size="sm" className="rounded-full border-slate-200 bg-transparent px-4 text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:text-slate-100 dark:hover:bg-white/10">
              View listings
            </Button>
            <Button href="/know-more" onClick={(e) => handleHeaderBtnClick(e as any, "app-features")} variant="secondary" size="sm" className="rounded-full border-slate-200 bg-primary text-white px-4 hover:bg-primary-hover dark:border-white/10">
              Know More
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:text-slate-100 dark:hover:bg-white/10"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="hidden items-center justify-between gap-6 border-t border-slate-200 py-3 lg:flex dark:border-white/10">
          <NavLinks className="text-xs xl:text-sm" />

          <div className="flex items-center gap-3">
            <div className="max-w-xs text-right text-xs leading-5 text-slate-500 xl:text-sm dark:text-slate-400">
              <div className="font-semibold text-slate-900 dark:text-slate-100">Our Address</div>
              <div>Bagalur, New Airport Road, North Bengaluru, Karnataka</div>
            </div>
            <Button onClick={(e) => scrollToSection(e, "enquiry")} size="sm" className="rounded-full px-4 xl:px-5">
              Book appointment
            </Button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-slate-200 py-4 md:hidden dark:border-white/10">
            <NavLinks className="flex-col items-start gap-4" />
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/hostels" variant="outline" className="w-full rounded-full border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:text-slate-100 dark:hover:bg-white/10">
                View listings
              </Button>
              <Button href="/know-more" onClick={(e) => handleHeaderBtnClick(e as any, "app-features")} variant="secondary" className="w-full rounded-full bg-primary text-white hover:bg-primary-hover">
                Know More
              </Button>
              <Button onClick={(e) => scrollToSection(e, "enquiry")} className="w-full rounded-full">
                Book appointment
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export { Header };
