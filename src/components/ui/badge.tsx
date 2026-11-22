"use client";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: {
  className?: string;
  variant?: "default" | "amber" | "outline";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>) {
  const variants = {
    default: "bg-white/10 border border-white/20 text-white",
    amber: "bg-amber-500 text-charcoal",
    outline: "border border-white/10 text-muted bg-transparent",
  };

  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 ff-micro font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
