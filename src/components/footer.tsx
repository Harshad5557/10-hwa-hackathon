"use client";

import Link from "next/link";
import { NAV_LINKS, LEGAL_LINKS, BRAND } from "@/lib/brand";
import { Mail, Phone, Share2, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                <span className="text-charcoal font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Feast<span className="text-amber-500">Forge</span></span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Premium intelligent dog enrichment and puzzle feeding systems. A new puzzle every time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-white transition-colors"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="text-muted hover:text-white transition-colors"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/product" className="text-muted hover:text-amber-500 transition-colors text-sm">Smart Feeder Maze</Link></li>
              <li><Link href="/how-it-works" className="text-muted hover:text-amber-500 transition-colors text-sm">How it works</Link></li>
              <li><Link href="/technology" className="text-muted hover:text-amber-500 transition-colors text-sm">Technology</Link></li>
              <li><Link href="/maze-library" className="text-muted hover:text-amber-500 transition-colors text-sm">Maze Library</Link></li>
              <li><Link href="/accessories" className="text-muted hover:text-amber-500 transition-colors text-sm">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/support" className="text-muted hover:text-amber-500 transition-colors text-sm">Help Center</Link></li>
              <li><Link href="/shipping" className="text-muted hover:text-amber-500 transition-colors text-sm">Shipping</Link></li>
              <li><Link href="/returns" className="text-muted hover:text-amber-500 transition-colors text-sm">Returns</Link></li>
              <li><Link href="/warranty" className="text-muted hover:text-amber-500 transition-colors text-sm">Warranty</Link></li>
              <li><Link href="/privacy" className="text-muted hover:text-amber-500 transition-colors text-sm">Privacy</Link></li>
              <li><Link href="/terms" className="text-muted hover:text-amber-500 transition-colors text-sm">Terms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted text-sm">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>hello@feastforge.example</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
            <p>© 2026 Feast Forge. All rights reserved.</p>
            <div className="flex gap-6">
              {LEGAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
