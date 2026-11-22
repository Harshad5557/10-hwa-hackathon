import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, CheckCircle, ChevronRight } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";
import { Kicker } from "@/components/ui/elements";
import { FeastForgeScrollSequence } from "@/components/feast-forge-scroll-sequence";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero - Dark cinematic full screen */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.12),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-[calc(100vh-80px)]">
            <div className="flex flex-col justify-center">
              <Kicker>Smart status ring active</Kicker>
              <h1 className="ff-display mb-6">
                A new puzzle&nbsp;<span className="ff-text-gradient">every time.</span>
              </h1>
              <p className="ff-body-lg max-w-lg mb-8 text-muted">
                Turn everyday feeding into a more engaging experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/product">Explore Feast Forge <ArrowRight className="w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/how-it-works"><Play className="w-5 h-5" /> See how it works</Link>
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

      {/* The idea behind Feast Forge - Warm cream */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="ff-heading-lg mb-6 text-dark-bg">Beyond familiar puzzles</h2>
            <p className="ff-body-lg text-charcoal mb-6">
              Most puzzle feeders use a fixed layout. Once your dog learns the pattern,
              the challenge fades. Feast Forge is designed around changing physical maze
              configurations — three rotating disks that rearrange between meals.
            </p>
            <p className="ff-body text-muted mb-8">
              The upper disk is the smallest. The middle is medium. The lower is the largest.
              Each rotates independently to four index positions, creating new paths for kibble
              to travel through every time you feed.
            </p>
            <Button variant="primary" asChild>
              <Link href="/how-it-works">See how it works <ChevronRight className="w-5 h-5" /></Link>
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

      {/* Exploded view animation - Dark cinematic */}
      <div className="relative">
        <div className="h-24 bg-gradient-to-b from-cream to-dark-bg" />
        <FeastForgeScrollSequence />
        <div className="h-24 bg-gradient-to-b from-dark-bg to-cream" />
      </div>

      {/* Three layer maze - Warm cream */}
      <Section variant="cream">
        <SectionHeader
          title="Three layers. One integrated system."
          description="Each disk rotates independently. Together they create a new maze at every meal."
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Upper disk", size: "Smallest", desc: "The entry point. Kibble enters through the top layer first." },
            { name: "Middle disk", size: "Medium", desc: "The redirect. Changes kibble direction between layers." },
            { name: "Lower disk", size: "Largest", desc: "The final path. Controls how kibble exits to the portion gate." },
          ].map((disk) => (
            <div key={disk.name} className="p-8 rounded-3xl border border-charcoal/20 bg-white text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-charcoal/10 border border-charcoal/20 flex items-center justify-center">
                <span className="text-charcoal font-bold text-lg">{disk.size.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-dark-bg mb-2">{disk.name}</h3>
              <p className="text-sm font-medium text-amber-500 mb-3">{disk.size}</p>
              <p className="text-sm text-muted leading-relaxed">{disk.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild className="border-charcoal/20 text-dark-bg hover:border-amber-500 hover:text-amber-500">
            <Link href="/technology">Explore the technology <ChevronRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </Section>

      {/* Feeding mechanism, portion control, device status - Dark */}
      <Section variant="dark">
        <SectionHeader
          title="Engineered for enrichment"
          description="Every part has a purpose from portion control to device update. Each feature helps make feeding easier and more engaging for your dog."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Portion control",
              desc: "The portion gate regulates how much kibble dispenses at each interaction. Basic limits on Light. Expanded controls on Smart and Pro.",
            },
            {
              title: "Feeding mechanism",
              desc: "Abitin motor turns each disc to one on a 4 position The enclose is designed for quit operation.",
            },
            {
              title: "Device status",
              desc: "Amber LED status ring pulses during feeding, steady when complete. Smart and Pro tiers add app-based status monitoring.",
            },
          ].map((feature) => (
            <div key={feature.title} className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Companion app - Warm cream */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/app/app-presentation.jpg"
              alt="Feast Forge companion app"
              width={800}
              height={600}
              className="w-full h-auto rounded-3xl"
            />
          </div>
          <div>
            <h2 className="ff-heading-lg mb-6 text-dark-bg">Feeding, reimagined</h2>
            <p className="ff-body-lg text-charcoal mb-6">
              Pair your Smart or Pro feeder with the Feast Forge app for schedules,
              history, and notifications.
            </p>
            <ul className="space-y-3 mb-8 text-charcoal">
              {["Feeding schedules", "Feeding history", "Device status", "Wi-Fi notifications"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <Button variant="primary" asChild>
              <Link href="/app">Explore the app <ChevronRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Product tiers - Dark */}
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

      {/* Product family - Cream */}
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

      {/* Final CTA - Dark cinematic with amber glow */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="ff-heading-lg mb-4">Make every meal more interesting</h2>
            <p className="ff-body-lg text-muted mb-8 max-w-lg mx-auto">
              Choose your tier and start enriching your dog&apos;s feeding experience today.
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