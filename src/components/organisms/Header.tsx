"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { NavLinks } from "../molecules/NavLinks";
import { ThemeToggle } from "../atoms/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-slate-100 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4 lg:py-5">
          <Link href="/" aria-label="Livinnza home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button href="/hostels" variant="outline" size="sm" className="rounded-full border-white/15 bg-transparent px-4 text-slate-100 hover:bg-white/10">
              View listings
            </Button>
            <Button href="/know-more" variant="secondary" size="sm" className="rounded-full border-white/10 bg-primary text-white px-4 hover:bg-primary-hover">
              Know More
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-100"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="hidden items-center justify-between gap-6 border-t border-white/10 py-3 lg:flex">
          <NavLinks className="text-xs xl:text-sm" />

          <div className="flex items-center gap-3">
            <div className="max-w-xs text-right text-xs leading-5 text-slate-400 xl:text-sm">
              <div className="font-semibold text-slate-100">Our Address</div>
              <div>Bagalur, New Airport Road, North Bengaluru, Karnataka</div>
            </div>
            <Button href="#book" size="sm" className="rounded-full px-4 xl:px-5">
              Book appointment
            </Button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-white/10 py-4 md:hidden">
            <NavLinks className="flex-col items-start gap-4" />
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/hostels" variant="outline" className="w-full rounded-full">
                View listings
              </Button>
              <Button href="/know-more" variant="secondary" className="w-full rounded-full bg-primary text-white hover:bg-primary-hover">
                Know More
              </Button>
              <Button href="#book" className="w-full rounded-full">
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
