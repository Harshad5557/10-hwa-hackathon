"use client";

import Link from "next/link";
import { Mail, Phone, Share2, Send } from "lucide-react";
import { NAV_LINKS, LEGAL_LINKS, BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-ff bg-amber-500 flex items-center justify-center">
                <span className="text-charcoal font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Feast<span className="text-amber-500">Forge</span></span>
            </div>
            <p className="ff-body-sm mb-8">
              Premium intelligent dog enrichment and puzzle feeding systems. Engineered like consumer technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-white transition-colors"><Share2 className="w-5 h-5" /></a>
              <a href="#" className="text-muted hover:text-white transition-colors"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              {["Product", "How it works", "Technology", "Maze Library", "Accessories"].map((label) => {
                const link = NAV_LINKS.find((l) => l.label === label);
                return (
                  <li key={label}>
                    <Link
                      href={link?.href || "#"}
                      className="text-muted hover:text-amber-500 transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {["Support", "Shipping", "Returns", "Warranty", "Privacy", "Terms"].map((label) => {
                const link = LEGAL_LINKS.find((l) => l.label === label) || NAV_LINKS.find((l) => l.label === label);
                return (
                  <li key={label}>
                    <Link
                      href={link?.href || "#"}
                      className="text-muted hover:text-amber-500 transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
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

        <div className="border-t border-white/10 py-12 mt-12">
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
