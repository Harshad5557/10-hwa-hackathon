"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Check, X, Crown, Info } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";
import { MODEL_TIERS, COMPARISON_FEATURES, COMPARISON_NOTES, type ComparisonFeature } from "@/lib/compare-data";

export default function ComparePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Compare models</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Choose your level of enrichment</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              All tiers share the same core geometry. Differences in features, library access, and app connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Product images row */}
      <Section variant="dark">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {MODEL_TIERS.map((tier) => (
            <div key={tier.id} className="text-center">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-charcoal mb-6">
                <Image
                  src={tier.image}
                  alt={tier.name}
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
                {tier.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-amber-500 text-charcoal text-[10px] font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
                      <Crown className="w-3 h-3" /> Most popular
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
              <span className="text-sm text-amber-400 font-medium">{tier.subtitle}</span>
              <div className="mt-4">
                <span className="text-3xl font-bold text-white">$ {tier.price}</span>
                <span className="text-muted text-sm"> USD</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table - Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 text-left text-sm font-bold text-muted uppercase w-48">Feature</th>
                {MODEL_TIERS.map((tier) => (
                  <th key={tier.id} className="py-6 px-6 text-center">
                    <span className={cn(
                      "text-sm font-bold",
                      tier.popular ? "text-amber-500" : "text-white"
                    )}>
                      {tier.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((feature) => (
                <tr key={feature.key} className="border-b border-white/5">
                  <td className="py-4 text-white font-medium text-sm">{feature.label}</td>
                  {MODEL_TIERS.map((tier) => (
                    <td key={tier.id} className="py-4 px-6 text-center">
                      {feature[tier.id as "light" | "smart" | "pro"] ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-charcoal">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="text-muted/40">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Price row */}
              <tr className="border-t border-white/10">
                <td className="py-6 text-white font-bold">Price</td>
                {MODEL_TIERS.map((tier) => (
                  <td key={tier.id} className="py-6 px-6 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div>
                        <span className="text-2xl font-bold text-white">$ {tier.price}</span>
                        <span className="text-xs text-muted"> USD</span>
                      </div>
                      <Button
                        variant={tier.popular ? "primary" : "outline"}
                        size="sm"
                        asChild
                      >
                        <Link href="/product">Choose {tier.name}</Link>
                      </Button>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Comparison cards - Mobile */}
        <div className="md:hidden space-y-6">
          {MODEL_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "p-6 rounded-3xl border",
                tier.popular
                  ? "border-amber-500 bg-amber-500/5"
                  : "border-white/10 bg-white/5"
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  <span className="text-sm text-amber-400">{tier.subtitle}</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">$ {tier.price}</span>
                  <span className="text-xs text-muted block">USD</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {COMPARISON_FEATURES.map((feature) => {
                  const hasFeature = feature[tier.id as "light" | "smart" | "pro"];
                  return (
                    <li key={feature.key} className="flex items-center gap-2 text-sm">
                      {hasFeature ? (
                        <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted/40 flex-shrink-0" />
                      )}
                      <span className={hasFeature ? "text-white" : "text-muted/40"}>{feature.label}</span>
                    </li>
                  );
                })}
              </ul>
              <Button
                variant={tier.popular ? "primary" : "outline"}
                size="sm"
                className="w-full"
                asChild
              >
                <Link href="/product">Choose {tier.name}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Important note */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-4">
            <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-bold mb-2">{COMPARISON_NOTES.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{COMPARISON_NOTES.text}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="ff-heading-lg mb-4">Ready to change mealtime?</h2>
          <p className="ff-body-lg text-muted mb-8 max-w-lg mx-auto">
            Choose your tier and start enriching your dog's feeding experience today.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/product">Shop Feast Forge</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}