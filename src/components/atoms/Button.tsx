"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary: "bg-primary text-white shadow-sm shadow-primary/20 hover:bg-primary-hover",
      secondary: "border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10",
      outline: "border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-white/5",
      ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
      icon: "h-10 w-10",
    };

    const sharedProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      className: cn(baseStyles, variants[variant], sizes[size], className),
      ...props,
    };

    if (href) {
      const { whileHover, whileTap, ...restProps } = sharedProps;
      const isExternal = href.startsWith("http");

      if (isExternal) {
        return (
          <a href={href} target={props.target} rel={props.rel || (props.target === "_blank" ? "noopener noreferrer" : undefined)} {...(restProps as any)}>
            {isLoading ? (
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : null}
            <span className="inline-flex items-center gap-2">{children}</span>
          </a>
        );
      }

      return (
        <Link href={href} target={props.target} {...(restProps as any)}>
          {isLoading ? (
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : null}
          <span className="inline-flex items-center gap-2">{children}</span>
        </Link>
      );
    }

    return (
      <motion.button ref={ref} {...sharedProps}>
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        <span className="inline-flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
