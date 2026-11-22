import Link from "next/link";
import { Star, MessageSquare, Mail, ChevronRight } from "lucide-react";
import { Section, SectionHeader, Button } from "@/components/ui";

// No verified reviews available yet. Reviews will be added as they are collected.
const reviews: { name: string; location: string; rating: number; text: string; dog: string; tier: string }[] = [];

export default function ReviewsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Customer reviews</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Real dogs. Real results.</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Hear from Feast Forge owners about how puzzle feeding has changed mealtime.
            </p>
          </div>

          {reviews.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">No reviews yet</h2>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                We're collecting feedback from our first customers. Reviews will appear here once verified.
                If you've purchased Feast Forge, we'd love to hear about your experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" asChild>
                  <Link href="/product">Shop Feast Forge <ChevronRight className="w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/support">Share your feedback</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((r, i) => (
                <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/5">
                  <div className="flex items-center gap-2 mb-4 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={r.rating >= star ? "w-4 h-4 fill-amber-500" : "w-4 h-4 text-white/20"} />
                    ))}
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
                  <div className="space-y-1 text-sm">
                    <span className="text-white font-bold">{r.name}</span>
                    <span className="text-muted block">{r.dog}</span>
                    <span className="text-xs text-amber-400 font-medium">{r.tier}</span>
                    <span className="text-xs text-muted block">{r.location}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

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