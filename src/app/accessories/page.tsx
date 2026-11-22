"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShoppingCart, Minus, Plus, CheckCircle, Package, Wrench, Zap } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";
import { ACCESSORIES, CATEGORY_LABELS } from "@/lib/accessories-data";

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { addItem } = useCart();

  const filteredAccessories = selectedCategory
    ? ACCESSORIES.filter((a) => a.category === selectedCategory)
    : ACCESSORIES;

  const getQuantity = (id: string) => quantities[id] || 1;
  const setQuantity = (id: string, qty: number) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, qty) }));
  };

  const handleAddToCart = (accessory: (typeof ACCESSORIES)[0]) => {
    addItem({
      id: accessory.id,
      name: accessory.name,
      price: accessory.price,
      quantity: getQuantity(accessory.id),
      image: accessory.image,
    });
  };

  const categories = ["replacement", "maintenance", "power"];

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Accessories</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Complete the setup</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Official accessories and replacement parts designed specifically for Feast Forge Smart Feeder Maze.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <Section variant="dark">
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all",
              selectedCategory === null
                ? "bg-amber-500 text-charcoal"
                : "bg-white/5 border border-white/10 text-muted hover:text-white"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all",
                selectedCategory === cat
                  ? "bg-amber-500 text-charcoal"
                  : "bg-white/5 border border-white/10 text-muted hover:text-white"
              )}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Accessories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccessories.map((accessory) => (
            <div
              key={accessory.id}
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 bg-charcoal">
                <Image
                  src={accessory.image}
                  alt={accessory.name}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400">
                  {CATEGORY_LABELS[accessory.category]}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{accessory.name}</h3>
              <p className="text-muted text-sm leading-relaxed mb-3">{accessory.description}</p>
              <p className="text-xs text-muted/60 mb-4">{accessory.compatibility}</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-white">$ {accessory.price}</span>
                <span className="text-muted text-sm">USD</span>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => setQuantity(accessory.id, getQuantity(accessory.id) - 1)}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-white font-medium">{getQuantity(accessory.id)}</span>
                <button
                  onClick={() => setQuantity(accessory.id, getQuantity(accessory.id) + 1)}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <Button
                variant="outline"
                className="w-full text-sm"
                onClick={() => handleAddToCart(accessory)}
              >
                <ShoppingCart className="w-4 h-4" /> Add to cart
              </Button>
            </div>
          ))}
        </div>

        {filteredAccessories.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-muted/30 mx-auto mb-4" />
            <p className="text-muted">No accessories found in this category.</p>
          </div>
        )}
      </Section>

      {/* Important note */}
      <Section variant="secondary">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-4">
            <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-bold mb-2">Compatibility note</h3>
              <p className="text-muted text-sm leading-relaxed">
                Accessories listed are compatible with all Feast Forge models. Replacement parts are designed to match
                original specifications. Compatibility with future models is not guaranteed. New accessories will be
                added as they become available.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="ff-heading-lg mb-4">Need a replacement part?</h2>
          <p className="ff-body-lg text-muted mb-8 max-w-lg mx-auto">
            Contact our support team for assistance with specific replacement needs.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/support">Contact support</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}