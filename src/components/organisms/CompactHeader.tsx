"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { ThemeToggle } from "../atoms/ThemeToggle";

const CompactHeader = () => {
  const pathname = usePathname();
  const isKnowMorePage = pathname === "/know-more";
  const isHostelsPage = pathname === "/hostels";

  const primaryCta = isKnowMorePage || isHostelsPage
    ? { href: "/", label: "Back to home" }
    : { href: "/hostels", label: "View listings" };

  const secondaryCta = isKnowMorePage
    ? { href: "/hostels", label: "View listings" }
    : { href: "/know-more", label: "Know More" };

  return (
    <header className="border-b border-slate-200 bg-white/95 text-slate-900 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/95 dark:text-slate-100 dark:shadow-[0_2px_12px_rgba(2,6,23,0.35)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Livinnza home">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href={primaryCta.href} variant="outline" size="sm" className="border-slate-200 bg-transparent text-slate-700 hover:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="secondary" size="sm" className="border-slate-200 bg-primary text-white hover:bg-primary-hover dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </header>
  );
};

export { CompactHeader };
