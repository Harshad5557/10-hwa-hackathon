"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const variants = {
      primary: "bg-amber-500 text-charcoal shadow-amber/20",
      outline: "border border-white/10 text-white hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/10",
      ghost: "text-muted hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    if (asChild) {
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-ff font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 disabled:opacity-50 disabled:pointer-events-none",
            variants[variant],
            sizes[size],
            className
          )}
          {...props}
        >
          {children}
        </span>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-ff font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
