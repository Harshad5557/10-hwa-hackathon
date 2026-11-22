import Link from "next/link";
import { Truck, Heart, Shield, Users, Leaf } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Our story</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Better mealtimes for every dog</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">Feast Forge was built on a simple idea: feeding should engage the mind, not just the stomach.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The problem</h2>
              <p className="text-muted text-lg mb-6 leading-relaxed">
                Most dogs eat too fast. Bored at mealtime, they miss out on mental stimulation. We wanted to create something that turns feeding into enrichment.
              </p>
              <h2 className="text-3xl font-bold text-white mb-6">The solution</h2>
              <p className="text-muted text-lg mb-6 leading-relaxed">
                Feast Forge Smart Feeder Maze. Three rotating disks, a transparent hopper, and an amber status ring combine to create a new puzzle at every meal.
              </p>
            </div>
            <div className="h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-charcoal flex items-center justify-center">
              <Heart className="w-16 h-16 text-muted/30" />
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-4 gap-8">
            {[
              { icon: <Truck className="w-6 h-6" />, label: "Designed for dogs" },
              { icon: <Heart className="w-6 h-6" />, label: "Veterinarian informed" },
              { icon: <Shield className="w-6 h-6" />, label: "Safety tested" },
              { icon: <Users className="w-6 h-6" />, label: "Loved by owners" },
            ].map((item) => (
              <div key={item.label} className="text-center p-6 rounded-3xl border border-white/10 bg-white/5">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                <p className="text-sm text-muted uppercase tracking-wider font-bold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
