import Link from "next/link";
import { Truck, Package, Shield, User as UserIcon } from "lucide-react";

export default function AccessoriesPage() {
  const accessories = [
    {
      name: "Extra hopper",
      price: 29,
      description: "Spare transparent hopper for quick swaps between meals.",
      icon: <Package className="w-5 h-5" />,
    },
    {
      name: "Replacement portion gate",
      price: 19,
      description: "Precision-engineered portion gate for consistent kibble dispensing.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      name: "USB-C power adapter",
      price: 24,
      description: "Official USB-C power adapter for Feast Forge feeders.",
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      name: "Cleaning brush set",
      price: 15,
      description: "Specialized brushes for hopper and maze disk maintenance.",
      icon: <Truck className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Accessories</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Complete the setup</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">Official accessories designed specifically for Feast Forge Smart Feeder Maze.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {accessories.map((a) => (
              <div key={a.name} className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  {a.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{a.name}</h3>
                <p className="text-muted text-sm mb-4">{a.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white">${a.price}</span>
                  <span className="text-muted text-sm">USD</span>
                </div>
                <button className="mt-6 w-full py-2.5 border border-amber-500 text-amber-400 font-bold rounded-full text-xs uppercase tracking-wider hover:bg-amber-500 hover:text-charcoal transition-colors">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
