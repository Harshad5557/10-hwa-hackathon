import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, CheckCircle, Package, Droplets, Settings, Zap, Bell } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";

const steps = [
  {
    step: "01",
    title: "Fill the hopper",
    description: "Pour dry kibble into the transparent removable hopper. Capacity up to 400g (proposed target). The hopper is food-grade, BPA-free, and easy to remove for cleaning.",
    icon: <Package className="w-6 h-6" />,
    image: "/images/product/hero.jpg",
    imageAlt: "Feast Forge Smart Feeder Maze with transparent hopper",
  },
  {
    step: "02",
    title: "Configure feeding limits",
    description: "Set portion size and feeding schedule using local controls on the device. Smart and Pro tiers add app-based scheduling and portion management.",
    icon: <Settings className="w-6 h-6" />,
    image: "/images/product/hero-alt.jpg",
    imageAlt: "Feast Forge device controls",
  },
  {
    step: "03",
    title: "Select a maze configuration",
    description: "Choose a difficulty position for each of the three rotating disks. Four index positions per disk. Change configurations between meals for a new challenge.",
    icon: <Zap className="w-6 h-6" />,
    image: "/images/exploded/exploded-view.jpg",
    imageAlt: "Feast Forge maze disks in exploded view",
  },
  {
    step: "04",
    title: "Portion release and maze interaction",
    description: "Kibble dispenses through the portion gate as your dog interacts with the maze disks. The enclosed motor rotates disks to precise positions. Amber LED pulses during feeding.",
    icon: <ChevronRight className="w-6 h-6" />,
    image: "/images/lifestyle/dog-lifestyle.jpg",
    imageAlt: "Dog interacting with Feast Forge feeder",
  },
  {
    step: "05",
    title: "Device feedback",
    description: "Amber LED status ring pulses during feeding, steady when complete. Smart and Pro tiers provide app notifications for feeding completion, low hopper, and device status.",
    icon: <Bell className="w-6 h-6" />,
    image: "/images/app/app-presentation.jpg",
    imageAlt: "Feast Forge companion app showing device status",
  },
  {
    step: "06",
    title: "Cleaning and maintenance",
    description: "Remove the transparent hopper and wash with warm, soapy water. Maze disks can be wiped clean. Do not submerge the base unit. Allow all parts to dry completely before reassembly.",
    icon: <Droplets className="w-6 h-6" />,
    image: "/images/product/size-reference.jpg",
    imageAlt: "Feast Forge size reference and components",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">How it works</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Four simple steps. Endless enrichment.</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              From filling the hopper to your dog&apos;s first solve, see how Feast Forge transforms feeding time.
            </p>
          </div>
        </div>
      </section>

      {/* Steps - alternating layout */}
      {steps.map((s, i) => (
        <Section key={s.step} variant={i % 2 === 0 ? "dark" : "secondary"}>
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
            <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 block">{s.step}</span>
              <h2 className="text-3xl font-bold text-white mb-4">{s.title}</h2>
              <p className="text-muted text-lg leading-relaxed mb-6">{s.description}</p>
              {s.step === "06" && (
                <div className="flex items-start gap-3 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted">
                    Do not submerge the base unit. Allow all parts to dry completely before reassembly.
                  </p>
                </div>
              )}
            </div>
            <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
              <div className="rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Section>
      ))}

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