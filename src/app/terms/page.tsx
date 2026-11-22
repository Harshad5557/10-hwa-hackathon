import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link href="/" className="text-muted hover:text-white transition-colors text-sm">Home</Link>
          <span className="text-muted/50 ml-2">/</span>
          <span className="text-white font-medium ml-2">Terms</span>
        </nav>
        <h1 className="text-3xl font-bold text-white mb-8">Terms of service</h1>
        <div className="space-y-8 text-muted leading-relaxed">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Acceptance of terms</h2>
            <p>By using the Feast Forge website and placing orders, you agree to these terms.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Orders</h2>
            <p>All orders are subject to availability and pricing shown at checkout. Prices are in USD.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Payments</h2>
            <p>Payments are processed through a secure sandbox. No raw card data is stored on our servers.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Limitation of liability</h2>
            <p>Feast Forge products are for enrichment use only. Not intended to diagnose, treat, or prevent any condition.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
