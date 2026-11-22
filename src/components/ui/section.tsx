"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  variant = "dark",
  container = true,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "secondary" | "cream" | "white";
  container?: boolean;
} & React.HTMLAttributes<HTMLElement>) {
  const variants = {
    dark: "bg-dark-bg text-white",
    secondary: "bg-secondary-dark text-white",
    cream: "bg-cream text-dark-bg",
    white: "bg-white text-dark-bg",
  };

  return (
    <section
      {...props}
      className={cn("relative section", variants[variant], className)}
    >
      {container ? <div className="container">{children}</div> : children}
    </section>
  );
}

export function SectionHeader({
  title,
  description,
  className,
  ...props
}: {
  title: string;
  description?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("text-center max-w-3xl mx-auto mb-16", className)}
    >
      <h2 className="ff-heading-xl mb-4">{title}</h2>
      {description && <p className="ff-body-lg text-muted">{description}</p>}
    </div>
  );
}
