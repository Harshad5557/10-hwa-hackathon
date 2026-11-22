import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, shipping, customer } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "No items in order" }, { status: 400 });
    }

    if (!customer || !customer.email || !customer.name) {
      return NextResponse.json({ error: "Customer information required" }, { status: 400 });
    }

    // Validate prices server-side
    const PRODUCT_PRICES: Record<string, number> = {
      "ff-light": 129,
      "ff-smart": 199,
      "ff-pro": 279,
      "acc-hopper": 29,
      "acc-gate": 19,
      "acc-usb-c": 24,
      "acc-brush": 15,
      "acc-maze-upper": 22,
      "acc-maze-middle": 26,
      "acc-maze-lower": 32,
    };

    let subtotal = 0;
    for (const item of items) {
      const price = PRODUCT_PRICES[item.id];
      if (price === undefined) {
        return NextResponse.json({ error: `Unknown product: ${item.id}` }, { status: 400 });
      }
      subtotal += price * (item.quantity || 1);
    }

    const tax = Math.round(subtotal * 0.08 * 100) / 100;
    const shippingCost = subtotal >= 75 ? 0 : 9.99;
    const total = Math.round((subtotal + tax + shippingCost) * 100) / 100;

    // Sandbox payment processing
    // In a real implementation, this would call a payment provider (Stripe, etc.)
    // For sandbox, we simulate a successful payment with a transaction ID
    const paymentResult = {
      success: true,
      transactionId: `sandbox_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      amount: total,
      currency: "USD",
      status: "completed",
    };

    if (!paymentResult.success) {
      return NextResponse.json(
        { error: "Payment failed", paymentStatus: "failed" },
        { status: 402 }
      );
    }

    // Generate order
    const orderId = `FF-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      orderId,
      transactionId: paymentResult.transactionId,
      amount: total,
      subtotal: Math.round(subtotal * 100) / 100,
      tax,
      shipping: shippingCost,
      items: items.map((item: { id: string; name: string; quantity: number }) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: PRODUCT_PRICES[item.id],
      })),
      shippingAddress: shipping,
      customer: {
        name: customer.name,
        email: customer.email,
      },
      status: "confirmed",
      estimatedDelivery: "5-7 business days",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}