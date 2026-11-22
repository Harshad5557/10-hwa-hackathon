import { NextRequest, NextResponse } from "next/server";

// Server-side product price lookup - prices are validated here
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 });
    }

    // Validate each item's price server-side
    let serverSubtotal = 0;
    const validatedItems = [];

    for (const item of items) {
      const serverPrice = PRODUCT_PRICES[item.id];
      if (serverPrice === undefined) {
        return NextResponse.json(
          { error: `Unknown product: ${item.id}` },
          { status: 400 }
        );
      }

      const quantity = Math.max(1, Math.floor(item.quantity || 1));
      serverSubtotal += serverPrice * quantity;

      validatedItems.push({
        id: item.id,
        name: item.name,
        price: serverPrice,
        quantity,
      });
    }

    // Calculate tax (8% for simplicity) and shipping
    const tax = Math.round(serverSubtotal * 0.08 * 100) / 100;
    const shipping = serverSubtotal >= 75 ? 0 : 9.99;
    const total = Math.round((serverSubtotal + tax + shipping) * 100) / 100;

    return NextResponse.json({
      items: validatedItems,
      subtotal: Math.round(serverSubtotal * 100) / 100,
      tax,
      shipping,
      total,
      valid: true,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}