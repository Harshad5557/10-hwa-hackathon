import Link from "next/link";

export default function WarrantyPage() {
  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link href="/" className="text-muted hover:text-white transition-colors text-sm">Home</Link>
          <span className="text-muted/50 ml-2">/</span>
          <span className="text-white font-medium ml-2">Warranty</span>
        </nav>
        <h1 className="text-3xl font-bold text-white mb-8">Warranty</h1>
        <div className="space-y-8 text-muted leading-relaxed">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">2-year limited warranty</h2>
            <p>Feast Forge Smart Feeder Maze is covered by a 2-year limited warranty against defects in materials and workmanship.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">What's covered</h2>
            <p>Motor, electronics, and structural components under normal use conditions.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">What's not covered</h2>
            <p>Damage from misuse, accidents, unauthorized modifications, or normal wear and tear.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Filing a claim</h2>
            <p>Contact hello@feastforge.example with your order number and photos of the issue.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
