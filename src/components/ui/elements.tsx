"use client";

import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 ff-caption tracking-wide normal-case",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Stat({ label, value, className }: { label: string; value: string | number; className?: string }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="ff-caption">{label}</span>
      <span className="ff-heading-lg mt-1 text-white">{value}</span>
    </div>
  );
}
