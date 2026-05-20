"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/", targetId: "root" },
    { name: "Browse by City", href: "/hostels?selectCity=true", targetId: "hostels" },
    { name: "How it Works", href: "/know-more", targetId: "app-features" },
    { name: "Partner with Us", href: "/partner-with-us", targetId: "enquiry" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      if (targetId === "root") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className ?? ""}`}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={pathname === "/" ? `#${link.targetId}` : link.href}
          onClick={(e) => handleClick(e, link.targetId)}
          className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export { NavLinks };
