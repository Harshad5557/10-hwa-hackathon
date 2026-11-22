import Link from "next/link";
import { Cpu, ShieldCheck, Wifi, Smartphone, BarChart3, Settings, Link as LinkIcon } from "lucide-react";

export default function TechnologyPage() {
  const techFeatures = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Sensors and control electronics",
      description: "Integrated sensors detect kibble dispensing and disk position. Control electronics manage motor timing and LED status.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Enclosed motor and drive system",
      description: "Quiet, enclosed motor rotates each maze disk to precise index positions. Four positions per disk, 64 theoretical combinations (proposed target).",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Connectivity",
      description: "USB-C power target. Bluetooth Low Energy and Wi-Fi connectivity approach for app pairing and notifications (tiers dependent).",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "App pairing (Smart & Pro)",
      description: "Feeding schedules, feeding history, device status, and Wi-Fi notifications through the Feast Forge app.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced analytics (Pro)",
      description: "Adaptive difficulty recommendations and expanded app controls based on your dog's feeding patterns.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Local controls (all tiers)",
      description: "Manual difficulty adjustment and basic portion limits directly on the device, no app required.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Technology</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Engineered for enrichment</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">Every component of Feast Forge is designed with precision, from the motor system to the connectivity stack.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techFeatures.map((f) => (
              <div key={f.title} className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Three rotating disks. One system.</h2>
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  The lower maze disk is the largest, the middle is medium, and the upper is the smallest. Each rotates independently to four index positions, creating theoretical position combinations that keep every meal different.
                </p>
                <ul className="space-y-3 text-muted text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
Upper disk: smallest
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
Middle disk: medium
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
Lower disk: largest
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
Four index positions per disk
                  </li>
                </ul>
              </div>
              <div className="h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-charcoal flex items-center justify-center">
                <LinkIcon className="w-12 h-12 text-muted/50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
