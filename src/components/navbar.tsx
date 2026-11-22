"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/brand";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-header" : "transparent-nav"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-ff bg-amber-500 flex items-center justify-center">
              <span className="text-charcoal font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Feast<span className="text-amber-500">Forge</span></span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href ? "text-amber-500" : "text-muted hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/compare" className="text-sm font-medium text-muted hover:text-white">Compare</Link>

            <div className="flex items-center gap-4">
              <button className="text-muted hover:text-white transition-colors" aria-label="Account">
                <User className="w-5 h-5" />
              </button>
              <button
                onClick={() => router.push("/cart")}
                className={cn(
                  "relative w-10 h-10 rounded-ff bg-charcoal/50 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-charcoal/70 transition-all",
                  itemCount > 0 && "amber-glow"
                )}
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-amber-500 text-charcoal text-[10px] font-bold flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-muted hover:text-white"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block py-3 text-lg font-medium transition-colors",
                  pathname === link.href ? "text-amber-500" : "text-white hover:text-amber-500"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/compare" onClick={() => setMobileOpen(false)} className="block py-3 text-lg font-medium text-white hover:text-amber-500">Compare</Link>
            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <button className="flex-1 py-3 bg-amber-500 text-charcoal font-bold rounded-ff text-center hover:bg-white/90 transition-colors" onClick={() => router.push("/cart")}>
                Cart ({itemCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
