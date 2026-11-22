import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, CheckCircle, Smartphone, Wifi, Bell, Clock, BarChart3, Settings, User, Bluetooth, Shield, Zap, Info } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";

const appFeatures = [
  {
    icon: <User className="w-5 h-5" />,
    title: "Dog profile",
    description: "Create a profile for your dog with breed, age, weight, and feeding preferences. Track individual feeding patterns over time.",
    tier: "smart",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Feeding schedules",
    description: "Set automatic feeding times and portion sizes for each day of the week. Feeding happens on time even when you're away.",
    tier: "smart",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Feeding history",
    description: "Track when and how much your dog eats. View trends over time to understand feeding patterns and adjust portions.",
    tier: "smart",
  },
  {
    icon: <Wifi className="w-5 h-5" />,
    title: "Device status",
    description: "Check battery, connectivity, and amber LED ring status from anywhere. Know when the hopper needs refilling.",
    tier: "smart",
  },
  {
    icon: <Bluetooth className="w-5 h-5" />,
    title: "App pairing",
    description: "Pair your Feast Forge Smart or Pro feeder with the companion app via Bluetooth Low Energy. Simple setup process.",
    tier: "smart",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Wi-Fi notifications",
    description: "Receive alerts when feeding is complete, hopper is low, or device needs attention. Stay connected to your dog's feeding.",
    tier: "smart",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Configuration controls",
    description: "Adjust maze disk positions, portion limits, and difficulty settings directly from the app. Full control over your dog's feeding experience.",
    tier: "pro",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Adaptive difficulty recommendations",
    description: "Pro tier analyzes feeding patterns and suggests maze configuration changes to keep your dog engaged.",
    tier: "pro",
  },
];

const smartFeatures = [
  "App pairing via Bluetooth Low Energy",
  "Feeding schedules (daily/weekly)",
  "Feeding history and trends",
  "Device status monitoring",
  "Wi-Fi notifications",
  "Basic portion limits",
];

const proFeatures = [
  "Everything in Smart, plus:",
  "Adaptive difficulty recommendations",
  "Advanced analytics dashboard",
  "Expanded app controls",
  "Full validated configuration library",
  "Custom maze creation tools",
];

export default function AppPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Feast Forge app</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Feeding, reimagined</h1>
              <p className="text-lg text-muted max-w-2xl mb-8">
                Pair your Smart or Pro feeder with the Feast Forge app for schedules, history, and notifications.
                A digital companion designed to complement the physical product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/product">Get Feast Forge <ChevronRight className="w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/how-it-works">How it works</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/images/app/app-presentation.jpg"
                alt="Feast Forge companion app on smartphone"
                width={800}
                height={600}
                className="w-full h-auto rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* App features grid */}
      <Section variant="dark">
        <SectionHeader
          title="Proposed app features"
          description="A digital companion designed to work alongside the physical Feast Forge device. Features are proposed targets for Smart and Pro tiers."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appFeatures.map((f) => (
            <div key={f.title} className="p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-3">{f.description}</p>
              <span className="text-xs text-amber-400 font-medium uppercase tracking-wider">
                {f.tier === "pro" ? "Pro tier" : "Smart & Pro"}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Smartphone mockup showcase */}
      <Section variant="secondary">
        <SectionHeader
          title="A premium smartphone experience"
          description="Consistent with the Feast Forge brand. Dark, minimal, and focused on your dog's feeding."
        />
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Mockup 1 - Feeding schedule */}
          <div className="text-center">
            <div className="mx-auto w-48 h-80 rounded-3xl border-2 border-white/10 bg-charcoal overflow-hidden mb-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-charcoal rounded-b-xl z-10" />
              <div className="p-4 pt-8 space-y-3">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Schedule</div>
                <div className="space-y-2">
                  {["8:00 AM", "12:00 PM", "6:00 PM"].map((time) => (
                    <div key={time} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                      <span className="text-xs text-white">{time}</span>
                      <span className="text-[10px] text-muted">40g</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
                  <span className="text-[10px] text-amber-400 font-bold">Next: 8:00 AM</span>
                </div>
              </div>
            </div>
            <h3 className="text-white font-bold mb-2">Feeding schedules</h3>
            <p className="text-muted text-sm">Set times and portions for each day.</p>
          </div>

          {/* Mockup 2 - Device status */}
          <div className="text-center">
            <div className="mx-auto w-48 h-80 rounded-3xl border-2 border-white/10 bg-charcoal overflow-hidden mb-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-charcoal rounded-b-xl z-10" />
              <div className="p-4 pt-8 space-y-3">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Device status</div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs text-white">Connected</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] text-muted">
                    <span>Hopper level</span>
                    <span className="text-white">72%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "72%" }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] text-muted">
                    <span>Battery</span>
                    <span className="text-white">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 text-center">
                  <span className="text-[10px] text-muted">Last fed: 2 min ago</span>
                </div>
              </div>
            </div>
            <h3 className="text-white font-bold mb-2">Device status</h3>
            <p className="text-muted text-sm">Monitor your feeder from anywhere.</p>
          </div>

          {/* Mockup 3 - Feeding history */}
          <div className="text-center">
            <div className="mx-auto w-48 h-80 rounded-3xl border-2 border-white/10 bg-charcoal overflow-hidden mb-6 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-charcoal rounded-b-xl z-10" />
              <div className="p-4 pt-8 space-y-3">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">History</div>
                <div className="space-y-2">
                  {[
                    { time: "8:02 AM", amount: "42g", status: "Complete" },
                    { time: "12:01 PM", amount: "38g", status: "Complete" },
                    { time: "6:00 PM", amount: "45g", status: "Pending" },
                  ].map((entry) => (
                    <div key={entry.time} className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-white">{entry.time}</span>
                        <span className="text-muted">{entry.amount}</span>
                      </div>
                      <div className="text-[9px] text-muted mt-0.5">{entry.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-white font-bold mb-2">Feeding history</h3>
            <p className="text-muted text-sm">Track patterns over time.</p>
          </div>
        </div>
      </Section>

      {/* Smart vs Pro */}
      <Section variant="dark">
        <SectionHeader
          title="Smart vs Pro: What's the difference?"
          description="Both tiers include app pairing. Pro adds advanced features for deeper enrichment."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Smart */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Feast Forge Smart</h3>
                <span className="text-sm text-amber-400 font-medium">Expanded tier</span>
              </div>
            </div>
            <ul className="space-y-3">
              {smartFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="p-8 rounded-3xl border border-amber-500 bg-amber-500/5 ring-1 ring-amber-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-charcoal" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Feast Forge Pro</h3>
                <span className="text-sm text-amber-400 font-medium">Full tier</span>
              </div>
            </div>
            <ul className="space-y-3">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Important note */}
      <Section variant="secondary">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-4">
            <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-bold mb-2">Important note</h3>
              <p className="text-muted text-sm leading-relaxed">
                App features described are proposed targets for Smart and Pro tiers. Hardware connectivity (Bluetooth Low Energy, Wi-Fi)
                and app functionality are design intentions, not confirmed operational features. No safety, behavioral, or performance
                claims are made beyond intended enrichment use.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="ff-heading-lg mb-4">Ready to change mealtime?</h2>
          <p className="ff-body-lg text-muted mb-8 max-w-lg mx-auto">
            Choose your tier and start enriching your dog's feeding experience today.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/product">Shop Feast Forge</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}