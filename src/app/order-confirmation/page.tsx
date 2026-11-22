"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, Truck, Package, Clock, Mail } from "lucide-react";

interface OrderData {
  orderId: string;
  transactionId: string;
  amount: number;
  subtotal: number;
  tax: number;
  shipping: number;
  items: { id: string; name: string; quantity: number; price: number }[];
  shippingAddress: { address: string; city: string; zip: string; country: string };
  customer: { name: string; email: string };
  status: string;
  estimatedDelivery: string;
}

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem("ff-order");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Use a microtask to avoid synchronous setState in effect
        queueMicrotask(() => setOrder(parsed));
      } catch {
        queueMicrotask(() => setOrder(null));
      }
    } else {
      queueMicrotask(() => setLoading(false));
    }
    if (saved) {
      queueMicrotask(() => setLoading(false));
    }
  }, []);

  if (loading) {
    return (
      <div className="relative py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-8 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
          <p className="text-muted">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="relative py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">No order found</h1>
          <p className="text-muted text-lg mb-10">It looks like you haven&apos;t placed an order yet.</p>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 px-10 py-4 bg-amber-500 text-charcoal font-bold rounded-full text-lg hover:bg-white transition-all duration-300"
          >
            Start shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-8 h-8 text-amber-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Order confirmed</h1>
          <p className="text-muted text-lg mb-10">Thank you for your order. We&apos;re getting your Feast Forge ready to ship.</p>

          {/* Order info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-5 h-5 text-amber-400" />
                <span className="text-white font-bold">Order #{order.orderId}</span>
              </div>
              <p className="text-sm text-muted">Status: {order.status}</p>
              <p className="text-sm text-muted">Transaction: {order.transactionId}</p>
            </div>
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-5 h-5 text-amber-400" />
                <span className="text-white font-bold">Shipping</span>
              </div>
              <p className="text-sm text-muted">Ships in 1-2 business days</p>
              <p className="text-sm text-muted">Est. delivery: {order.estimatedDelivery}</p>
            </div>
          </div>

          {/* Order items */}
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5 mb-8 text-left">
            <h3 className="text-lg font-bold text-white mb-4">Order items</h3>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                  <div>
                    <span className="text-white font-medium">{item.name}</span>
                    <span className="text-muted text-sm ml-2">× {item.quantity}</span>
                  </div>
                  <span className="text-white font-mono">$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="text-white">$ {order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Tax (8%)</span>
                <span className="text-white">$ {order.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Shipping</span>
                <span className="text-white">$ {order.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-white/10">
                <span>Total</span>
                <span>$ {order.amount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Shipping address */}
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5 mb-8 text-left">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-400" /> Shipping to
            </h3>
            <p className="text-white">{order.customer.name}</p>
            <p className="text-muted text-sm">{order.shippingAddress.address}</p>
            <p className="text-muted text-sm">{order.shippingAddress.city}, {order.shippingAddress.zip}</p>
            <p className="text-muted text-sm">{order.shippingAddress.country}</p>
            <p className="text-muted text-sm mt-2">{order.customer.email}</p>
          </div>

          {/* Delivery estimate */}
          <div className="flex items-center gap-3 text-left mb-8">
            <Clock className="w-5 h-5 text-muted" />
            <div>
              <p className="text-white font-bold">Estimated delivery</p>
              <p className="text-sm text-muted">{order.estimatedDelivery}</p>
            </div>
          </div>

          <div className="mt-8">
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