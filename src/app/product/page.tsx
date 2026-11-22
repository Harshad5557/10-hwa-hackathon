"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart, CheckCircle, Package, Shield, Wrench, Droplets, Info } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";

const galleryImages = [
  { src: "/images/product/hero.jpg", alt: "Feast Forge Smart Feeder Maze - Main view", label: "Main" },
  { src: "/images/product/hero-alt.jpg", alt: "Feast Forge Smart Feeder Maze - Alternate view", label: "Angle" },
  { src: "/images/exploded/exploded-view.jpg", alt: "Feast Forge - Exploded view", label: "Exploded" },
  { src: "/images/product/size-reference.jpg", alt: "Feast Forge - Size reference", label: "Size" },
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTier, setSelectedTier] = useState("smart");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const tier = BRAND.product.tiers.find((t) => t.id === selectedTier)!;

  const handleAddToCart = () => {
    addItem({
      id: `ff-${selectedTier}`,
      name: tier.name,
      price: tier.price,
      quantity,
      image: "/images/product/hero.jpg",
    });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Product gallery + info */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div className="space-y-4">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-charcoal">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
                {/* Navigation arrows */}
                <button
                  onClick={() => setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-bg/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-dark-bg/80 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-bg/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-dark-bg/80 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      "shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all",
                      selectedImage === i
                        ? "border-amber-500 ring-2 ring-amber-500/20"
                        : "border-white/10 hover:border-white/20"
                    )}
                    aria-label={`View ${img.label}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info - sticky on desktop */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-8">
              <div>
                <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Feast Forge Smart Feeder Maze</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Premium engineering. Intelligent enrichment.</h1>
                <p className="text-muted text-lg leading-relaxed">
                  Three rotating maze disks. Transparent hopper. Amber status ring. Engineered to make every meal a new challenge.
                </p>
              </div>

              {/* Model selection */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">Select model</label>
                <div className="grid grid-cols-3 gap-3">
                  {BRAND.product.tiers.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTier(t.id)}
                      className={cn(
                        "p-4 rounded-2xl border transition-all text-left",
                        selectedTier === t.id
                          ? "border-amber-500 bg-amber-500/5 ring-1 ring-amber-500/20"
                          : "border-white/10 hover:border-white/20 hover:bg-white/5"
                      )}
                    >
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">{t.subtitle}</span>
                      <span className="text-white font-bold text-sm block">{t.name}</span>
                      <span className="text-muted text-xs block mt-1">${t.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">$ {tier.price}</span>
                <span className="text-muted text-sm">USD</span>
              </div>

              {/* Quantity selector */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-bold text-white w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <Button variant="primary" size="lg" className="w-full" onClick={handleAddToCart}>
                <ShoppingCart className="w-5 h-5" /> Add to cart
              </Button>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 text-sm text-muted">
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
          </div>
        </div>
      </section>

      {/* Product architecture */}
      <Section variant="secondary">
        <SectionHeader
          title="Product architecture"
          description="Ten components. One integrated system. Every part serves a purpose."
        />
        <div className="grid md:grid-cols-5 gap-4">
          {BRAND.product.geometry.map((part) => (
            <div
              key={part.id}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-amber-500/30"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                part.color === "amber"
                  ? "bg-amber-500 text-charcoal"
                  : "bg-white/10 text-white border border-white/20"
              }`}>
                <span className="text-[10px] font-bold">{part.id}</span>
              </div>
              <h4 className="font-bold text-white mb-1 text-sm">{part.name}</h4>
            </div>
          ))}
        </div>
      </Section>

      {/* How the feeding mechanism works */}
      <Section variant="dark">
        <SectionHeader
          title="How the feeding mechanism works"
          description="From filling the hopper to your dog's first solve."
        />
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Fill the hopper", desc: "Pour dry kibble into the transparent removable hopper. Capacity up to 400g (proposed target)." },
            { step: "02", title: "Set the maze", desc: "Choose a difficulty position for each of the three rotating disks via local controls or the app." },
            { step: "03", title: "Your dog solves it", desc: "Kibble dispenses through the portion gate as your dog interacts with the maze disks." },
            { step: "04", title: "A new puzzle every time", desc: "Change disk positions between meals to keep feeding engaging and mentally stimulating." },
          ].map((s) => (
            <div key={s.step} className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <span className="text-amber-400 font-bold">{s.step}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Specs, compatible food, cleaning, warranty - Cream */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Specifications */}
          <div>
            <h2 className="ff-heading-lg mb-6 text-dark-bg">Proposed specifications</h2>
            <p className="text-muted text-sm mb-6">Targets only, not verified specifications.</p>
            <div className="space-y-4">
              {BRAND.product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between py-3 border-b border-charcoal/10">
                  <span className="text-charcoal font-medium">{spec.label}</span>
                  <span className="text-muted text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compatible food, cleaning, warranty */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-dark-bg mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-500" /> Compatible dry food
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Feast Forge is designed for standard dry kibble. Very large or irregularly shaped treats may not dispense reliably. Kibble diameter should be consistent for optimal maze interaction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark-bg mb-3 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-amber-500" /> Cleaning instructions
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Remove the transparent hopper and wash with warm, soapy water. The maze disks can be wiped clean with a damp cloth. Do not submerge the base unit. Allow all parts to dry completely before reassembly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark-bg mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-500" /> Warranty
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                2-year limited warranty covering defects in materials and workmanship under normal use. Motor, electronics, and structural components are covered. Damage from misuse, accidents, or unauthorized modifications is not covered.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark-bg mb-3 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-amber-500" /> What&apos;s included
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-amber-500" /> Feast Forge Smart Feeder Maze unit</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-amber-500" /> USB-C power cable</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-amber-500" /> Quick start guide</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-amber-500" /> Maze configuration cards</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Important note */}
      <Section variant="dark">
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
    </div>
  );
}