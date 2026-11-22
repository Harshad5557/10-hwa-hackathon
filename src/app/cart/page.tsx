"use client";

import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import { ShoppingCart, Plus, Minus, X, ChevronLeft, Truck, CreditCard, RefreshCw } from "lucide-react";

const products = [
  { id: "ff-light", name: "Feast Forge Light", price: 129, image: null },
  { id: "ff-smart", name: "Feast Forge Smart", price: 199, image: null },
  { id: "ff-pro", name: "Feast Forge Pro", price: 279, image: null },
];

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, itemCount, clearCart } = useCart();

  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center gap-2">
          <Link href="/" className="text-muted hover:text-white transition-colors text-sm"><ChevronLeft className="w-4 h-4 mr-2" />Continue shopping</Link>
        </nav>

        <h1 className="text-3xl font-bold text-white mb-12">Your cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-16 h-16 text-muted/30 mx-auto mb-6" />
            <h2 className="text-xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-muted">Add Feast Forge products to get started.</p>
            <Link href="/product" className="mt-8 inline-block px-8 py-3 bg-amber-500 text-charcoal font-bold rounded-full hover:bg-white transition-colors">Shop now</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-6 py-6 border-b border-white/5 last:border-0">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5 text-amber-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold">{item.name}</h3>
                      <p className="text-muted text-sm">${item.price} USD</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-white font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted/60 hover:text-red-400 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-white font-mono">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                  <div className="space-y-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-muted">Subtotal ({itemCount} item{itemCount !== 1 ? "s" : ""})</span>
                      <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-3">Coupon code</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Enter code"
                          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <button className="px-4 py-3 bg-amber-500 text-charcoal font-bold rounded-xl hover:bg-white transition-colors text-sm">Apply</button>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm text-muted">
                      <div className="flex justify-between"><span>Shipping</span><span>Calculated at checkout</span></div>
                      <div className="flex justify-between"><span>Tax</span><span>Calculated at checkout</span></div>
                    </div>
                    <div className="mt-6 flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={clearCart}
                      className="w-full py-4 border border-white/10 rounded-xl text-muted font-bold hover:text-white hover:bg-white/5 transition-colors text-sm"
                    >
                      Clear cart
                    </button>
                    <Link
                      href="/checkout"
                      className="w-full py-5 bg-amber-500 text-charcoal font-bold rounded-xl text-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Checkout <ChevronLeft className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
