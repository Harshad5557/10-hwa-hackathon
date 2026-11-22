import Link from "next/link";
import { CheckCircle, Truck, Package, Clock } from "lucide-react";

export default function OrderConfirmationPage() {
  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-8 h-8 text-amber-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">Order confirmed</h1>
          <p className="text-muted text-lg mb-10">Thank you for your order. We're getting your Feast Forge ready to ship.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-5 h-5 text-amber-400" />
                <span className="text-white font-bold">Order #FF-2024-0842</span>
              </div>
              <p className="text-sm text-muted">Placed today</p>
            </div>
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-5 h-5 text-amber-400" />
                <span className="text-white font-bold">Shipping</span>
              </div>
              <p className="text-sm text-muted">Ships in 1-2 business days</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-left">
              <Clock className="w-5 h-5 text-muted" />
              <div>
                <p className="text-white font-bold">Estimated delivery</p>
                <p className="text-sm text-muted">5-7 business days</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-10 py-4 bg-amber-500 text-charcoal font-bold rounded-full text-lg hover:bg-white transition-all duration-300"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
