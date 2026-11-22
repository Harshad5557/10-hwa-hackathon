import Link from "next/link";
import { ChevronRight, Play, Monitor, Brain, Layers, Zap } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Fill the hopper",
      description: "Pour dry kibble into the transparent removable hopper. Capacity up to 400g (proposed target).",
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Set the maze",
      description: "Choose a difficulty position for each of the three rotating disks via local controls or the app.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Your dog solves it",
      description: "Kibble dispenses through the portion gate as your dog interacts with the maze disks.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "A new puzzle every time",
      description: "Change disk positions between meals to keep feeding engaging and mentally stimulating.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">How it works</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Four simple steps. Endless enrichment.</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">From filling the hopper to your dog's first solve, see how Feast Forge transforms feeding time.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  {s.icon}
                </div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 block">{s.step}</span>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-white/10 pt-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6">Scroll to see the mechanism in motion</h2>
                <p className="text-muted text-lg mb-8">
                  Watch how the three rotating disks work together with the portion gate to dispense kibble at controlled intervals.
                </p>
                <Link href="/technology" className="flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors">
                  Explore the technology <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="lg:w-1/2 h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-charcoal flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold mb-2">Product animation</h4>
                  <p className="text-muted text-sm">Mechanism in motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
