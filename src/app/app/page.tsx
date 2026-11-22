import Link from "next/link";
import { Smartphone, Wifi, Bell, Clock, BarChart3 } from "lucide-react";

export default function AppPage() {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "App pairing",
      description: "Pair your Feast Forge Smart or Pro feeder with the companion app via Bluetooth Low Energy.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Feeding schedules",
      description: "Set automatic feeding times and portion sizes for each day of the week.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Feeding history",
      description: "Track when and how much your dog eats, with trends over time.",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Wi-Fi notifications",
      description: "Receive alerts when feeding is complete, hopper is low, or device needs attention.",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Device status",
      description: "Check battery, connectivity, and amber LED ring status from anywhere.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Feast Forge app</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Feeding, reimagined</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">Pair your Smart or Pro feeder with the Feast Forge app for schedules, history, and notifications.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6">Available on iOS and Android</h2>
                <p className="text-muted text-lg mb-8">The Feast Forge app is free to download. App pairing is available on Smart and Pro tiers.</p>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 bg-white text-charcoal px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-50/80 transition-colors">
                    <span>Download on the</span>
                    <span className="font-bold">App Store</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 bg-white text-charcoal px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-50/80 transition-colors">
                    <span>Get it on</span>
                    <span className="font-bold">Google Play</span>
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-charcoal flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-40 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/5">
                    <Smartphone className="w-10 h-10 text-amber-400" />
                  </div>
                  <p className="text-muted text-sm">App preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
