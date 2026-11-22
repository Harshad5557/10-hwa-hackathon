import Link from "next/link";
import { BookOpen, CheckCircle, Search, Grid2x2 } from "lucide-react";

export default function MazeLibraryPage() {
  const mazes = [
    { name: "Spiral Chase", difficulty: "Beginner", dogs: "All sizes", description: "A gentle spiral path that encourages steady pawing and nose work." },
    { name: "Spin & Seek", difficulty: "Intermediate", dogs: "Medium & large", description: "Requires coordinated disk rotation to align treat pockets." },
    { name: "Double Lock", difficulty: "Advanced", dogs: "Experienced solvers", description: "Two disks must be aligned simultaneously to release kibble." },
    { name: "Vortex Spiral", difficulty: "Expert", dogs: "High-drive dogs", description: "Complex multi-layer spiral with delayed release timing." },
  ];

  const tiers = [
    { name: "Feast Forge Light", mazes: "Validated maze library", detail: "Manual difficulty, basic portion limits" },
    { name: "Feast Forge Smart", mazes: "Expanded validated maze library", detail: "App pairing, feeding schedules, history" },
    { name: "Feast Forge Pro", mazes: "Full validated configuration library", detail: "Adaptive recommendations, advanced analytics" },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Maze library</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">A new puzzle every time</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">Curated maze configurations validated for engagement and safety across dog sizes and experience levels.</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Maze configurations by tier</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((t) => (
                <div key={t.name} className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-4">{t.name}</h3>
                  <p className="text-muted text-sm mb-4">{t.mazes}</p>
                  <p className="text-xs text-amber-400 font-medium mb-6">{t.detail}</p>
                  <Link href="#" className="text-sm font-bold text-amber-400 hover:text-amber-300">View mazes →</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Sample maze designs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mazes.map((m) => (
                <div key={m.name} className="p-6 rounded-3xl border border-white/10 bg-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-amber-400 uppercase">{m.difficulty}</span>
                    <Search className="w-4 h-4 text-muted" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{m.name}</h4>
                  <p className="text-muted text-sm mb-4">{m.description}</p>
                  <span className="text-xs text-muted uppercase tracking-wider">{m.dogs}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to design your own?</h2>
            <p className="text-muted mb-6">The Feast Forge Pro tier includes the full validated configuration library for custom maze creation.</p>
            <Link href="/product" className="px-8 py-3 border border-amber-500 text-amber-500 font-bold rounded-full hover:bg-amber-500 hover:text-charcoal transition-colors">
              Explore Pro tier
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
