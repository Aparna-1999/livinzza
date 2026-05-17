import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "small";
  className?: string;
  children: React.ReactNode;
}

const Typography = ({ variant = "p", className, children }: TypographyProps) => {
  const Component = variant === "small" ? "small" : variant;

  const variants = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-slate-900 dark:text-slate-50",
    h2: "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors text-slate-900 dark:text-slate-50",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50",
    p: "leading-7 [&:not(:first-child)]:mt-6 text-slate-600 dark:text-slate-300",
    span: "text-slate-600 dark:text-slate-300",
    small: "text-sm font-medium leading-none text-slate-500 dark:text-slate-400",
  };

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
};

export { Typography };
