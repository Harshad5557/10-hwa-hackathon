import Link from "next/link";
import { Mail, Phone, Clock, Shield, Truck } from "lucide-react";

export default function SupportPage() {
  const faqs = [
    {
      q: "How do I clean the Feast Forge Smart Feeder Maze?",
      a: "Remove the transparent hopper and wash it with warm, soapy water. The maze disks can be wiped clean. Do not submerge the base unit.",
    },
    {
      q: "What kibble sizes work with Feast Forge?",
      a: "Feast Forge is designed for standard dry kibble. Very large or irregularly shaped treats may not dispense reliably.",
    },
    {
      q: "Do I need the app to use Feast Forge?",
      a: "No. All tiers include local controls for manual difficulty and portion settings. App pairing is available on Smart and Pro tiers.",
    },
    {
      q: "What is the warranty?",
      a: "Feast Forge comes with a 2-year limited warranty covering defects in materials and workmanship.",
    },
    {
      q: "How long does shipping take?",
      a: "Orders typically ship within 1-2 business days and arrive within 5-7 business days within the continental US.",
    },
  ];

  const contactMethods = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@feastforge.example" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (800) 555-0199" },
    { icon: <Clock className="w-5 h-5" />, label: "Hours", value: "Mon–Fri, 9am–6pm PT" },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Support</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">We're here to help</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">Answers to common questions and ways to reach our team.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Frequently asked questions</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-white/5 pb-6 last:border-none">
                    <h3 className="text-white font-bold mb-3">{faq.q}</h3>
                    <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Contact us</h3>
                <div className="space-y-4">
                  {contactMethods.map((m) => (
                    <div key={m.label} className="flex items-start gap-3">
                      {m.icon}
                      <div>
                        <span className="text-xs font-bold text-amber-400 uppercase">{m.label}</span>
                        <p className="text-white">{m.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Policy pages</h3>
                <div className="space-y-3">
                  <Link href="/shipping" className="text-muted hover:text-amber-500 transition-colors">Shipping</Link>
                  <Link href="/returns" className="text-muted hover:text-amber-500 transition-colors">Returns</Link>
                  <Link href="/warranty" className="text-muted hover:text-amber-500 transition-colors">Warranty</Link>
                  <Link href="/privacy" className="text-muted hover:text-amber-500 transition-colors">Privacy</Link>
                  <Link href="/terms" className="text-muted hover:text-amber-500 transition-colors">Terms</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
