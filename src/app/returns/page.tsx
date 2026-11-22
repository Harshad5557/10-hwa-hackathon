import Link from "next/link";

export default function ReturnsPage() {
  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link href="/" className="text-muted hover:text-white transition-colors text-sm">Home</Link>
          <span className="text-muted/50 ml-2">/</span>
          <span className="text-white font-medium ml-2">Returns</span>
        </nav>
        <h1 className="text-3xl font-bold text-white mb-8">Returns policy</h1>
        <div className="space-y-8 text-muted leading-relaxed">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">30-day return window</h2>
            <p>You may return any unused Feast Forge product within 30 days of delivery for a full refund.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Condition</h2>
            <p>Products must be in original condition with all packaging and accessories included.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">How to return</h2>
            <p>Contact hello@feastforge.example to initiate a return. We'll provide a prepaid return label.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
