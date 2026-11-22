"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Cpu, ShieldCheck, Wifi, Smartphone, BarChart3, Settings, CheckCircle, Info } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";
import { FeastForgeScrollSequence } from "@/components/feast-forge-scroll-sequence";

interface Component {
  id: number;
  name: string;
  description: string;
  detail: string;
  position: { top: string; left: string };
  image: string;
}

const components: Component[] = [
  {
    id: 1,
    name: "Top gap",
    description: "Flat circular lid covering the hopper opening.",
    detail: "Removable for easy filling. Sits flush with the hopper rim.",
    position: { top: "8%", left: "50%" },
    image: "/images/exploded/exploded-view.jpg",
  },
  {
    id: 2,
    name: "Transparent hopper",
    description: "Clear cylindrical container holding dry kibble.",
    detail: "Food-grade, BPA-free transparent polymer. Easy to remove, clean, and refill. Capacity up to 400g (proposed target).",
    position: { top: "22%", left: "50%" },
    image: "/images/product/hero.jpg",
  },
  {
    id: 3,
    name: "Portion gate",
    description: "Ring mechanism controlling kibble release between hopper and maze layers.",
    detail: "Regulates how much kibble dispenses at each interaction. Precision-engineered for consistent portioning.",
    position: { top: "38%", left: "50%" },
    image: "/images/exploded/exploded-view.jpg",
  },
  {
    id: 4,
    name: "Maze Layer 1 (smallest)",
    description: "Upper rotating disk. The entry point for kibble into the maze system.",
    detail: "Smallest of the three disks. Rotates to four index positions. Upper disk is the first interaction point.",
    position: { top: "48%", left: "35%" },
    image: "/images/exploded/exploded-view.jpg",
  },
  {
    id: 5,
    name: "Maze Layer 2 (medium)",
    description: "Middle rotating disk. Redirects kibble direction between layers.",
    detail: "Medium-sized disk. Rotates independently to four index positions. Changes kibble path between upper and lower layers.",
    position: { top: "55%", left: "65%" },
    image: "/images/exploded/exploded-view.jpg",
  },
  {
    id: 6,
    name: "Maze Layer 3 (largest)",
    description: "Lower rotating disk. The final path controlling kibble exit to the portion gate.",
    detail: "Largest of the three disks. Rotates to four index positions. Final interaction point before kibble exits.",
    position: { top: "62%", left: "50%" },
    image: "/images/exploded/exploded-view.jpg",
  },
  {
    id: 7,
    name: "Gears & motor assembly",
    description: "Enclosed motor and drive system rotating each maze disk to precise index positions.",
    detail: "Quiet, enclosed motor. Rotates disks independently. Four positions per disk. 64 theoretical position combinations (proposed target).",
    position: { top: "72%", left: "40%" },
    image: "/images/exploded/exploded-view.jpg",
  },
  {
    id: 8,
    name: "Smart PCB & battery",
    description: "Control electronics managing motor timing, sensor input, and LED status.",
    detail: "Integrated sensors detect kibble dispensing and disk position. Control electronics manage motor timing and LED status ring.",
    position: { top: "78%", left: "60%" },
    image: "/images/exploded/exploded-view.jpg",
  },
  {
    id: 9,
    name: "Amber LED status ring",
    description: "Status indicator at base level. Pulses during feeding, steady when complete.",
    detail: "Visual feedback for feeding cycle status. Pulses during active feeding. Steady glow when feeding is complete.",
    position: { top: "85%", left: "50%" },
    image: "/images/product/hero.jpg",
  },
  {
    id: 10,
    name: "Base structure",
    description: "Wide stable foundation with Feast Forge Smart branding.",
    detail: "Provides stability during feeding interaction. Houses the motor, electronics, and LED ring. Wide footprint prevents tipping.",
    position: { top: "92%", left: "50%" },
    image: "/images/product/hero.jpg",
  },
];

const techFeatures = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Sensors and control electronics",
    description: "Integrated sensors detect kibble dispensing and disk position. Control electronics manage motor timing and LED status.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Enclosed motor and drive system",
    description: "Quiet, enclosed motor rotates each maze disk to precise index positions. Four positions per disk.",
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Connectivity",
    description: "USB-C power target. Bluetooth Low Energy and Wi-Fi connectivity approach for app pairing and notifications.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "App pairing (Smart & Pro)",
    description: "Feeding schedules, feeding history, device status, and Wi-Fi notifications through the Feast Forge app.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Advanced analytics (Pro)",
    description: "Adaptive difficulty recommendations and expanded app controls based on feeding patterns.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Local controls (all tiers)",
    description: "Manual difficulty adjustment and basic portion limits directly on the device, no app required.",
  },
];

export default function TechnologyPage() {
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  return (
    <div className="relative">
      {/* Scroll sequence hero */}
      <FeastForgeScrollSequence />

      {/* Tech features grid */}
      <Section variant="dark">
        <SectionHeader
          title="Engineered for enrichment"
          description="Every component of Feast Forge is designed with precision, from the motor system to the connectivity stack."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {techFeatures.map((f) => (
            <div key={f.title} className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Interactive component explorer */}
      <Section variant="secondary">
        <SectionHeader
          title="Explore the components"
          description="Click on any component hotspot to learn about its function and design."
        />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Exploded view with hotspots */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-charcoal">
              <Image
                src="/images/exploded/exploded-view.jpg"
                alt="Feast Forge exploded view with component hotspots"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              {/* Hotspot overlays */}
              {components.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComponent(comp)}
                  className={cn(
                    "absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all",
                    selectedComponent?.id === comp.id
                      ? "bg-amber-500 border-amber-500 scale-125 shadow-lg shadow-amber-500/40"
                      : "bg-dark-bg/80 border-amber-500/60 hover:bg-amber-500/20 hover:scale-110"
                  )}
                  style={{ top: comp.position.top, left: comp.position.left }}
                  aria-label={`View ${comp.name}`}
                >
                  <span className="text-[10px] font-bold text-white">{comp.id}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-muted mt-4 text-center">
              Click numbered hotspots to explore individual components.
            </p>
          </div>

          {/* Component detail panel */}
          <div className="lg:sticky lg:top-24">
            {selectedComponent ? (
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                    <span className="text-charcoal font-bold">{selectedComponent.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedComponent.name}</h3>
                </div>
                <p className="text-muted text-lg mb-4 leading-relaxed">{selectedComponent.description}</p>
                <p className="text-muted text-sm leading-relaxed mb-6">{selectedComponent.detail}</p>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={selectedComponent.image}
                    alt={selectedComponent.name}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Info className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Select a component</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Click on any numbered hotspot on the exploded view to learn about that component&apos;s function and design.
                </p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Three disks explanation */}
      <Section variant="dark">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Three rotating disks. One system.</h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              The lower maze disk is the largest, the middle is medium, and the upper is the smallest. Each rotates independently to four index positions, creating theoretical position combinations that keep every meal different.
            </p>
            <ul className="space-y-3 text-muted text-sm">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Upper disk: smallest
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Middle disk: medium
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Lower disk: largest
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Four index positions per disk
              </li>
            </ul>
          </div>
          <div className="max-w-md mx-auto">
            <Image
              src="/images/exploded/exploded-view.jpg"
              alt="Feast Forge exploded view"
              width={600}
              height={400}
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </Section>

      {/* Important note */}
      <Section variant="secondary">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-4">
            <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-bold mb-2">Important note</h3>
              <p className="text-muted text-sm leading-relaxed">
                Theoretical position combinations are not verified, unique, or safe puzzles. No safety, behavioral, or performance claims are made beyond intended enrichment use. Specifications listed are proposed targets, not confirmed facts.
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