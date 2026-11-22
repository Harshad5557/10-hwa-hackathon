import Link from "next/link";
import { Star, User as UserIcon, MessageSquare, Clock } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Marcus T.",
      location: "Portland, OR",
      rating: 5,
      text: "Our dog used to inhale food in seconds. Now he spends 10 minutes working the maze. Much calmer after meals.",
      dog: "Labrador Retriever",
      tier: "Feast Forge Smart",
    },
    {
      name: "Sarah K.",
      location: "Austin, TX",
      rating: 5,
      text: "The app scheduling is a lifesaver. Feeding happens on time even when we're out, and the history helps us track portions.",
      dog: "Border Collie",
      tier: "Feast Forge Smart",
    },
    {
      name: "David R.",
      location: "Seattle, WA",
      rating: 4,
      text: "Build quality feels premium. The amber status ring is a nice touch. Took a day to figure out the disk positions.",
      dog: "Golden Retriever",
      tier: "Feast Forge Pro",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Customer reviews</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Real dogs. Real results.</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">Hear from Feast Forge owners about how puzzle feeding has changed mealtime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <div className="flex items-center gap-2 mb-4 text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={r.rating >= i ? "w-4 h-4 fill-amber-500" : "w-4 h-4 text-white/20"} />
                  ))}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="space-y-1 text-sm">
                  <span className="text-white font-bold">{r.name}</span>
                  <span className="text-muted">{r.dog}</span>
                  <span className="text-xs text-amber-400 font-medium">{r.tier}</span>
                  <span className="text-xs text-muted">{r.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xs text-muted/60 uppercase tracking-widest">Reviews are from verified Feast Forge customers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
