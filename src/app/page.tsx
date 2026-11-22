import Link from "next/link";
import { ShatteredProductViewer } from "@/components/shattered-product-viewer";
import { ArrowRight, Play, CheckCircle, Package } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/brand";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/80 to-dark-bg/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-[calc(100vh-80px)]">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium tracking-wider uppercase mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                </span>
                Smart status ring active
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 text-balance">
                A new puzzle&nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-amber-500">every time.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-lg">
                Turn everyday feeding into a more engaging experience. The Feast Forge Smart Feeder Maze
                intelligently rotates three internal disks to create a fresh challenge at every meal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/product" className="px-8 py-4 bg-amber-500 text-charcoal font-bold rounded-full text-lg hover:bg-white hover:text-charcoal transition-all duration-300 flex items-center justify-center gap-2">
                  Explore Feast Forge <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/how-it-works" className="px-8 py-4 border border-white/10 rounded-full text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" /> How it works
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  <span>Free shipping on orders over $75</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  <span>2-year warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <ShatteredProductViewer className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-6 bg-white/40 rounded-full" />
        </div>
      </section>

      {/* Product tiers preview */}
      <section className="py-24 border-y border-white/5 bg-dark-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Three tiers. One puzzle.</h2>
            <p className="text-muted">Choose your level of enrichment.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BRAND.product.tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  "group relative p-8 rounded-2xl border transition-all duration-300",
                  tier.popular
                    ? "border-amber-500 bg-amber-500/5 ring-1 ring-amber-500/20"
                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-charcoal text-xs font-bold rounded-full uppercase tracking-wider">
                    Most popular
                  </span>
                )}
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 block">{tier.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-muted text-sm mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">${tier.price}</span>
                  <span className="text-muted text-sm">USD</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-muted">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/product"
                  className={cn(
                    "w-full py-3 rounded-xl font-bold text-center transition-all duration-300 text-sm",
                    tier.popular
                      ? "bg-amber-500 text-charcoal hover:bg-white/90"
                      : "border border-white/10 text-white hover:bg-white/10"
                  )}
                >
                  Choose {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => {
              const geom = BRAND.product.geometry.find((g) => g.id === id);
              return (
                <div key={id} className="p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${geom?.color === "amber" ? "bg-amber-500/20 text-amber-500" : "bg-white/10 text-white"}`}>
                    <Package className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{geom?.name}</h4>
                  <p className="text-sm text-muted leading-relaxed">{geom?.name} precision-engineered for durability and ease of use.</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
