"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle, Layers, Search } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";
import { MAZE_CONFIGS, LAYER_INFO, TIER_LABELS, DIFFICULTY_COLORS } from "@/lib/maze-data";

const layers = ["upper", "middle", "lower"] as const;

export default function MazeLibraryPage() {
  const [selectedLayer, setSelectedLayer] = useState<"upper" | "middle" | "lower">("upper");
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const layerInfo = LAYER_INFO[selectedLayer];
  const configs = MAZE_CONFIGS.filter((c) => c.layer === selectedLayer);
  const filteredConfigs = selectedTier
    ? configs.filter((c) => c.tier === selectedTier)
    : configs;

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Maze library</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">A new puzzle every time</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Curated maze configurations validated for engagement. Three rotating disks, four index positions each —
              64 theoretical position combinations (proposed target).
            </p>
          </div>
        </div>
      </section>

      {/* Layer selector */}
      <Section variant="dark">
        <SectionHeader
          title="The three maze layers"
          description="Each disk has a different size and role. Select a layer to explore its configurations."
        />

        {/* Layer tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {layers.map((layer) => (
            <button
              key={layer}
              onClick={() => setSelectedLayer(layer)}
              className={cn(
                "px-6 py-3 rounded-2xl border transition-all text-sm font-bold",
                selectedLayer === layer
                  ? "border-amber-500 bg-amber-500/10 text-amber-400"
                  : "border-white/10 text-muted hover:border-white/20 hover:text-white"
              )}
            >
              {LAYER_INFO[layer].name}
            </button>
          ))}
        </div>

        {/* Layer info + image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Layers className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{layerInfo.name}</h3>
                <span className="text-sm text-amber-400 font-medium">{layerInfo.size}</span>
              </div>
            </div>
            <p className="text-muted text-lg leading-relaxed mb-6">{layerInfo.description}</p>
            <p className="text-muted text-sm leading-relaxed">
              Diameter: {layerInfo.diameter}. Rotates to four index positions. Each position creates a different
              maze path for kibble to travel through.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/images/exploded/exploded-view.jpg"
              alt={`Feast Forge ${layerInfo.name} in exploded view`}
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 pointer-events-none">
              {selectedLayer === "upper" && (
                <div className="absolute top-[48%] left-[35%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-amber-500 shadow-lg shadow-amber-500/40 animate-pulse" />
              )}
              {selectedLayer === "middle" && (
                <div className="absolute top-[55%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-amber-500 shadow-lg shadow-amber-500/40 animate-pulse" />
              )}
              {selectedLayer === "lower" && (
                <div className="absolute top-[62%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 border-amber-500 shadow-lg shadow-amber-500/40 animate-pulse" />
              )}
            </div>
          </div>
        </div>

        {/* Tier filter */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedTier(null)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all",
              selectedTier === null
                ? "bg-amber-500 text-charcoal"
                : "bg-white/5 border border-white/10 text-muted hover:text-white"
            )}
          >
            All tiers
          </button>
          {["light", "smart", "pro"].map((tier) => (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all",
                selectedTier === tier
                  ? "bg-amber-500 text-charcoal"
                  : "bg-white/5 border border-white/10 text-muted hover:text-white"
              )}
            >
              {TIER_LABELS[tier]}
            </button>
          ))}
        </div>

        {/* Maze configurations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConfigs.map((config) => (
            <div
              key={config.id}
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${DIFFICULTY_COLORS[config.difficulty]}`}>
                  {config.difficulty}
                </span>
                <span className="text-xs text-muted uppercase tracking-wider">{config.dogs}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{config.name}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{config.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 font-medium">{TIER_LABELS[config.tier]}</span>
                <span className="text-xs text-muted/60 uppercase tracking-wider">{config.layer} layer</span>
              </div>
            </div>
          ))}
        </div>

        {filteredConfigs.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-muted/30 mx-auto mb-4" />
            <p className="text-muted">No configurations found for this filter.</p>
          </div>
        )}
      </Section>

      {/* How the three layers work together */}
      <Section variant="secondary">
        <SectionHeader
          title="Why three layers?"
          description="Each disk has a different size and role. Together they create a new maze at every meal."
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {layers.map((layer) => (
            <div key={layer} className="p-8 rounded-3xl border border-white/10 bg-white/5 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                <span className="text-amber-400 font-bold text-lg">{LAYER_INFO[layer].size.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{LAYER_INFO[layer].name}</h3>
              <p className="text-sm font-medium text-amber-400 mb-3">{LAYER_INFO[layer].size}</p>
              <p className="text-sm text-muted leading-relaxed">{LAYER_INFO[layer].description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Important note */}
      <Section variant="dark">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-4">
            <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-bold mb-2">Important note</h3>
              <p className="text-muted text-sm leading-relaxed">
                64 theoretical position combinations are proposed targets, not verified, unique, or safe puzzles.
                Validated configurations are limited to those listed in each tier&apos;s maze library.
                No safety, behavioral, or performance claims are made beyond intended enrichment use.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="ff-heading-lg mb-4">Ready to change mealtime?</h2>
          <p className="ff-body-lg text-muted mb-8 max-w-lg mx-auto">
            Choose your tier and start enriching your dog&apos;s feeding experience today.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/product">Shop Feast Forge</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}