import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { Crown, Check } from "lucide-react";

export default function ComparePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Compare tiers</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Choose your level of enrichment</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">All tiers share the same core geometry. Differences in features, library access, and app connectivity.</p>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-3xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 text-left text-xs font-bold text-muted uppercase w-32">Feature</th>
                  {BRAND.product.tiers.map((t) => (
                    <th key={t.id} className="py-6 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span className={t.popular ? "text-sm font-bold text-amber-500" : "text-sm font-bold text-white"}>{t.name}</span>
                        {t.popular && <Crown className="w-4 h-4 text-amber-500" />}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Validated maze library", key: "maze" },
                  { label: "Manual difficulty", key: "manual" },
                  { label: "App pairing", key: "app" },
                  { label: "Feeding schedules", key: "schedules" },
                  { label: "Feeding history", key: "history" },
                  { label: "Adaptive recommendations", key: "adaptive" },
                  { label: "Advanced analytics", key: "analytics" },
                  { label: "Wi-Fi notifications", key: "wifi" },
                ].map((feature) => (
                  <tr key={feature.label} className="border-b border-white/5">
                    <td className="py-4 text-white font-medium">{feature.label}</td>
                    {BRAND.product.tiers.map((t) => (
                      <td key={t.id} className="py-4 px-6 text-center">
                        {t.features.some((f) => f.toLowerCase().includes(feature.key)) ? (
                          <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mx-auto bg-amber-500 text-charcoal">
                            <Check className="w-3 h-3" />
                          </span>
                        ) : (
                          <span className="text-xs text-muted/50">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="py-6 text-white font-medium">Price</td>
                  {BRAND.product.tiers.map((t) => (
                    <td key={t.id} className="py-6 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl font-bold text-white">$ {t.price}</span>
                        <span className="text-xs text-muted">USD</span>
                      </div>
                      <Link href="/product" className={t.popular ? "mt-4 block px-4 py-2 rounded-full text-xs font-bold bg-amber-500 text-charcoal hover:bg-white/90 transition-colors" : "mt-4 block px-4 py-2 rounded-full text-xs font-bold border border-white/10 text-white hover:bg-white/5 transition-colors"}>
                        Choose
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
