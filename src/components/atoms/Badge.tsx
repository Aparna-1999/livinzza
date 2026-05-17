import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "destructive";
}

const Badge = ({ className, variant = "default", ...props }: BadgeProps) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15",
    outline: "text-slate-700 border border-slate-200 bg-transparent dark:text-slate-200 dark:border-white/12",
    success: "bg-emerald-500 text-white hover:bg-emerald-500/80",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  );
};

export { Badge };
