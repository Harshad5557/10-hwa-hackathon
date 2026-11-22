import Link from "next/link";

export default function ShippingPage() {
  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link href="/" className="text-muted hover:text-white transition-colors text-sm">Home</Link>
          <span className="text-muted/50 ml-2">/</span>
          <span className="text-white font-medium ml-2">Shipping</span>
        </nav>
        <h1 className="text-3xl font-bold text-white mb-8">Shipping policy</h1>
        <div className="space-y-8 text-muted leading-relaxed">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Processing time</h2>
            <p>Orders typically ship within 1-2 business days after payment confirmation.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Delivery estimates</h2>
            <p>Standard shipping delivers within 5-7 business days within the continental United States.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Shipping rates</h2>
            <p>Shipping rates are calculated at checkout based on your location and order weight.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">International shipping</h2>
            <p>International shipping is not currently available. We ship to US addresses only.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
