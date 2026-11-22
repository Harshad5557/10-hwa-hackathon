"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, CreditCard, AlertTriangle, CheckCircle } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const steps = ["Shipping", "Payment", "Review"];

export default function CheckoutPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ email: "", name: "", address: "", city: "", zip: "", country: "US" });
  const [cardData, setCardData] = useState({ number: "", expiry: "", cvc: "" });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const { items, subtotal, itemCount, clearCart } = useCart();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (step < steps.length - 1) {
      setStep(step + 1);
      return;
    }

    // Final step: process payment
    setIsProcessing(true);

    try {
      // Validate order server-side first
      const validateRes = await fetch("/api/validate-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      if (!validateRes.ok) {
        const data = await validateRes.json();
        throw new Error(data.error || "Order validation failed");
      }

      const validated = await validateRes.json();

      // Process checkout
      const checkoutRes = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: validated.items,
          shipping: {
            address: formData.address,
            city: formData.city,
            zip: formData.zip,
            country: formData.country,
          },
          customer: {
            name: formData.name,
            email: formData.email,
          },
        }),
      });

      if (!checkoutRes.ok) {
        const data = await checkoutRes.json();
        throw new Error(data.error || "Checkout failed");
      }

      const order = await checkoutRes.json();

      // Store order details for confirmation page
      sessionStorage.setItem("ff-order", JSON.stringify(order));

      clearCart();
      router.push("/order-confirmation");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center gap-2">
          <Link href="/cart" className="text-muted hover:text-white transition-colors text-sm"><ChevronLeft className="w-4 h-4 mr-2" />Back to cart</Link>
        </nav>

        <h1 className="text-3xl font-bold text-white mb-6">Checkout</h1>
        <p className="text-muted mb-12">Complete your order. No payment information is stored on our servers.</p>

        {error && (
          <div className="mb-6 p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Progress */}
        <div className="flex gap-8 mb-12">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-2 relative">
              <span className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10",
                i < step ? "bg-amber-500 text-charcoal" : i === step ? "bg-white text-charcoal" : "bg-white/5 border border-white/10 text-muted"
              )}>
                {i + 1}
              </span>
              <span className={cn("text-sm font-medium", i <= step ? "text-white" : "text-muted")}>{s}</span>
              {i < steps.length - 1 && <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-[calc(100%+16px)] h-[2px] bg-white/10 -z-0" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8 p-8 rounded-3xl border border-white/10 bg-white/5">
              <h2 className="text-xl font-bold text-white mb-6">{steps[step]}</h2>

              {step === 0 && (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white">Full name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Shipping address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white">ZIP / Postal</label>
                      <input
                        type="text"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>
                </>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-center gap-4">
                    <CreditCard className="w-6 h-6 text-amber-400" />
                    <div>
                      <h3 className="text-white font-bold">Payment (sandbox)</h3>
                      <p className="text-xs text-muted">This is a payment sandbox. No real charges are processed. No card data is stored.</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Card number</label>
                    <input
                      type="text"
                      maxLength={19}
                      value={cardData.number}
                      onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white">Expiry date</label>
                      <input
                        type="text"
                        maxLength={5}
                        value={cardData.expiry}
                        onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="12/34"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white">CVC</label>
                      <input
                        type="text"
                        maxLength={4}
                        value={cardData.cvc}
                        onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-amber-500" />
                      <h3 className="text-white font-bold">Order summary</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">Items ({itemCount})</span>
                        <span className="text-white">$ {subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">Shipping</span>
                        <span className="text-white">Calculated</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">Tax (8%)</span>
                        <span className="text-white">Calculated</span>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex justify-between text-lg font-bold text-white">
                        <span>Total</span>
                        <span className="text-white">$ {subtotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted">By placing this order, you agree to our Terms and Privacy Policy.</p>
                </>
              )}

              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border border-white/10 rounded-xl text-muted font-bold hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="px-8 py-3 bg-amber-500 text-charcoal font-bold rounded-xl hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? "Processing..." : step === steps.length - 1 ? "Place order" : "Continue"}
                </button>
              </div>
            </form>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-8 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-lg font-bold text-white mb-6">Order summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-muted mb-2">
                  <span>Subtotal ({itemCount} item{itemCount !== 1 ? "s" : ""})</span>
                  <span className="text-white font-bold">$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-white/10 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted">Shipping</span><span className="text-white">Calculated</span></div>
                  <div className="flex justify-between"><span className="text-muted">Tax (8%)</span><span className="text-white">Calculated</span></div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-white font-bold">$ {subtotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-sm text-amber-300">
                <AlertTriangle className="w-4 h-4 mr-2 inline" />
                Sandbox environment — no real transactions processed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

