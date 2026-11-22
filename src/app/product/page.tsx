import Link from "next/link";
import { ShatteredProductViewer } from "@/components/shattered-product-viewer";
import { BRAND } from "@/lib/brand";
import { ChevronRight, Cpu, ShieldCheck, Wifi, Smartphone, BarChart3, Settings, CheckCircle } from "lucide-react";
import { Section, SectionHeader, Button } from "@/components/ui";

export default function ProductPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(253,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Feast Forge Smart Feeder Maze</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Premium engineering. Intelligent enrichment.</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">Three rotating maze disks. Transparent hopper. Amber status ring. Engineered to make every meal a new challenge.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-charcoal shadow-2xl">
                <ShatteredProductViewer className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Rotating disks in motion</span>
                <span className="w-px h-4 bg-white/20" />
                <span>Scroll to assemble &amp; disassemble</span>
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

      {/* Scroll interaction section */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Assembled to scattered. Scroll to explore.</h2>
              <p className="text-muted text-lg leading-relaxed">
                Slide through the product states to see how the Feast Forge Smart Feeder Maze is constructed. From fully assembled to component-exploded, every geometric relationship is preserved.
              </p>
            </div>
            <div className="lg:w-2/3 relative h-[500px]">
              <ShatteredProductViewer className="w-full h-full" scrollProgress={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to change mealtime?</h2>
            <p className="text-muted mb-8">Choose your tier and start enriching your dog's feeding experience today.</p>
            <Link href="/product" className="px-10 py-4 bg-amber-500 text-charcoal font-bold rounded-full hover:bg-white transition-colors">
              Shop Feast Forge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
