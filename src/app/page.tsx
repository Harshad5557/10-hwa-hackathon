import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, CheckCircle, ChevronRight } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";
import { Kicker } from "@/components/ui/elements";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero - Dark cinematic */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.12),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-[calc(100vh-80px)]">
            <div className="flex flex-col justify-center">
              <Kicker>Smart status ring active</Kicker>
              <h1 className="ff-display mb-6">
                A new puzzle&nbsp;<span className="ff-text-gradient">every time.</span>
              </h1>
              <p className="ff-body-lg max-w-lg mb-8 text-muted">
                Turn everyday feeding into a more engaging experience. The Feast Forge Smart Feeder Maze
                intelligently rotates three internal disks — smallest upper, medium middle, largest lower —
                to create a fresh challenge at every meal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/product">Explore Feast Forge <ArrowRight className="w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/how-it-works"><Play className="w-5 h-5" /> How it works</Link>
                </Button>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row gap-8 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Free shipping on orders over $75</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>2-year warranty</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <Image
                src="/images/product/hero.jpg"
                alt="Feast Forge Smart Feeder Maze"
                width={600}
                height={600}
                className="w-full h-auto max-w-md mx-auto rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-white/20 rounded-full" />
        </div>
      </section>

      {/* Mobile hero visual */}
      <section className="relative py-12 lg:hidden overflow-hidden">
        <div className="max-w-xl mx-auto px-4">
          <Image
            src="/images/product/hero.jpg"
            alt="Feast Forge Smart Feeder Maze"
            width={600}
            height={600}
            className="w-full h-auto max-w-md mx-auto rounded-3xl"
            priority
          />
        </div>
      </section>

      {/* Product geometry - Warm light section */}
      <Section variant="cream">
        <SectionHeader
          title="Precision-engineered components"
          description="Ten parts. One system. Every geometric relationship preserved from the assembled state to fully exploded."
        />
        <div className="grid md:grid-cols-5 gap-4">
          {BRAND.product.geometry.map((part) => (
            <div
              key={part.id}
              className="group p-6 rounded-2xl border border-charcoal/30 bg-white hover:bg-amber-500/5 transition-all hover:border-amber-500/30"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                part.color === "amber"
                  ? "bg-amber-500 text-charcoal"
                  : "bg-charcoal/10 text-charcoal border border-charcoal/20"
              }`}>
                <span className="text-[10px] font-bold">{part.id}</span>
              </div>
              <h4 className="font-bold text-dark-bg mb-1">{part.name}</h4>
              <p className="text-xs text-muted leading-snug">{part.name} precision-engineered for durability.</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Exploded view - Technology section */}
      <Section variant="dark">
        <SectionHeader
          title="Assembled to scattered. Scroll to explore."
          description="From fully assembled to component-exploded, every geometric relationship is preserved."
        />
        <div className="max-w-4xl mx-auto">
          <Image
            src="/images/exploded/exploded-view.jpg"
            alt="Feast Forge Smart Feeder Maze - Exploded view"
            width={1200}
            height={800}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </Section>

      {/* Lifestyle - Warm light section */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="ff-heading-lg mb-6 text-dark-bg">Better mealtimes for every dog</h2>
            <p className="ff-body-lg text-charcoal mb-6">
              Most dogs eat too fast. Bored at mealtime, they miss out on mental stimulation.
              Feast Forge turns feeding into enrichment with a new puzzle at every meal.
            </p>
            <p className="ff-body text-muted mb-8">
              Three rotating disks, a transparent hopper, and an amber status ring combine
              to create an engaging feeding experience your dog will love.
            </p>
            <Button variant="primary" asChild>
              <Link href="/our-story">Our Story <ChevronRight className="w-5 h-5" /></Link>
            </Button>
          </div>
          <div>
            <Image
              src="/images/lifestyle/dog-lifestyle.jpg"
              alt="Dog interacting with Feast Forge Smart Feeder Maze"
              width={800}
              height={600}
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </Section>

      {/* Tiers - Dark section */}
      <Section variant="dark">
        <SectionHeader
          title="Three tiers. One puzzle."
          description="Choose your level of enrichment. All tiers share the same core geometry."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {BRAND.product.tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "group relative p-10 rounded-3xl border transition-all duration-300",
                tier.popular
                  ? "border-amber-500 bg-amber-500/5 ring-1 ring-amber-500/10"
                  : "border-white/10 hover:border-white/20 hover:bg-white/5"
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-charcoal text-[10px] font-bold rounded-full uppercase tracking-wider">
                  Most popular
                </span>
              )}
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 block">{tier.subtitle}</span>
              <h3 className="text-2xl font-bold text-white mb-3">{tier.name}</h3>
              <p className="text-muted text-sm mb-6 leading-relaxed">{tier.description}</p>
              <div className="mb-8">
                <span className="text-3xl font-bold text-white">$ {tier.price}</span>
                <span className="text-muted text-sm">USD</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-muted">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.popular ? "primary" : "outline"}
                className="w-full text-sm"
                asChild
              >
                <Link href="/product">Choose {tier.name}</Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* App presentation - Dark section */}
      <Section variant="secondary">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="ff-heading-lg mb-6">Feeding, reimagined</h2>
            <p className="ff-body-lg text-muted mb-6">
              Pair your Smart or Pro feeder with the Feast Forge app for schedules,
              history, and notifications.
            </p>
            <p className="ff-body text-muted mb-8">
              Feeding schedules, feeding history, device status, and Wi-Fi notifications
              — all from your phone.
            </p>
            <Button variant="primary" asChild>
              <Link href="/app">Explore the app <ChevronRight className="w-5 h-5" /></Link>
            </Button>
          </div>
          <div>
            <Image
              src="/images/app/app-presentation.jpg"
              alt="Feast Forge companion app"
              width={800}
              height={600}
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </Section>

      {/* Product family - Cream section */}
      <Section variant="cream">
        <SectionHeader
          title="The Feast Forge family"
          description="Lite, Smart, and Pro. Same core geometry. Different levels of enrichment."
        />
        <div className="max-w-5xl mx-auto">
          <Image
            src="/images/variants/product-family.jpg"
            alt="Feast Forge product family - Lite, Smart, Pro"
            width={1200}
            height={600}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </Section>

      {/* CTA - Dark cinematic with amber glow */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="ff-heading-lg mb-4">Ready to change mealtime?</h2>
            <p className="ff-body-lg text-muted mb-8 max-w-lg mx-auto">
              Choose your tier and start enriching your dog's feeding experience today.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/product">Shop Feast Forge</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}