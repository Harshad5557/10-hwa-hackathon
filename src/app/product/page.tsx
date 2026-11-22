import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/brand";
import { ChevronRight, Cpu, ShieldCheck, Wifi, Smartphone, BarChart3, Settings, CheckCircle } from "lucide-react";
import { Section, SectionHeader, Button } from "@/components/ui";

export default function ProductPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Feast Forge Smart Feeder Maze</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Premium engineering. Intelligent enrichment.</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">Three rotating maze disks. Transparent hopper. Amber status ring. Engineered to make every meal a new challenge.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-charcoal shadow-2xl">
                <Image
                  src="/images/product/hero.jpg"
                  alt="Feast Forge Smart Feeder Maze"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Transparent hopper</span>
                <span className="w-px h-4 bg-white/20" />
                <span>Matte charcoal body</span>
                <span className="w-px h-4 bg-white/20" />
                <span>Three maze disks</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">Transparent removable hopper</h3>
                  <p className="text-muted text-sm">Food-grade, BPA-free transparent polymer. Easy to remove, clean, and refill. Capacity up to 400g (proposed target).</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">Three circular maze disks</h3>
                  <p className="text-muted text-sm">Smallest upper, medium middle, largest lower. Four index positions per disk. 64 theoretical position combinations (proposed target).</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">Amber LED status ring</h3>
                  <p className="text-muted text-sm">Status indicator at base level. Pulses during feeding cycle, steady when complete.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exploded view */}
      <Section variant="secondary">
        <SectionHeader
          title="Assembled to scattered. Scroll to explore."
          description="From fully assembled to component-exploded, every geometric relationship is preserved."
        />
        <div className="max-w-5xl mx-auto">
          <Image
            src="/images/exploded/exploded-view.jpg"
            alt="Feast Forge Smart Feeder Maze - Exploded view"
            width={1200}
            height={800}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </Section>

      {/* Specs */}
      <Section variant="dark">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proposed specifications</h2>
          <p className="text-muted">Targets only, not verified specifications.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {BRAND.product.specs.map((spec) => (
            <div key={spec.label} className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 block">{spec.label}</span>
              <span className="text-white font-medium">{spec.value}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted/70">Theoretical combinations are not verified, unique, or safe puzzles. No safety, behavioral, or performance claims are made beyond intended enrichment use.</p>
      </Section>

      {/* Size reference */}
      <Section variant="cream">
        <SectionHeader
          title="Product size reference"
          description="Compact enough for any home. Large enough to hold a full meal."
        />
        <div className="max-w-4xl mx-auto">
          <Image
            src="/images/product/size-reference.jpg"
            alt="Feast Forge Smart Feeder Maze - Size reference"
            width={1200}
            height={800}
            className="w-full h-auto rounded-3xl"
          />
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