import React from "react";
import Link from "next/link";

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  const links = [
    { name: "About Livinnza", href: "/know-more" },
    { name: "Browse by City", href: "/hostels?selectCity=true" },
    { name: "Find by College", href: "/hostels?focusCollege=true" },
    { name: "How it Works", href: "/know-more" },
    { name: "Partner with Us", href: "/partner-with-us" },
  ];

  return (
    <nav className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className ?? ""}`}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export { NavLinks };
