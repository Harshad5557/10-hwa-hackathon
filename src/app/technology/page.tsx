import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/brand";
import { ChevronRight, Cpu, ShieldCheck, Wifi, Smartphone, BarChart3, Settings, CheckCircle } from "lucide-react";
import { Section, SectionHeader, Button } from "@/components/ui";
import { FeastForgeScrollSequence } from "@/components/feast-forge-scroll-sequence";

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
      {/* Scroll sequence hero */}
      <FeastForgeScrollSequence />

      {/* Tech features */}
      <Section variant="dark">
        <SectionHeader
          title="Engineered for enrichment"
          description="Every component of Feast Forge is designed with precision, from the motor system to the connectivity stack."
        />
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
      </Section>

      {/* Three disks explanation */}
      <Section variant="secondary">
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
          <div className="max-w-md mx-auto">
            <Image
              src="/images/exploded/exploded-view.jpg"
              alt="Feast Forge exploded view"
              width={600}
              height={400}
              className="w-full h-auto rounded-3xl"
            />
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