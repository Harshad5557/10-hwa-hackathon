import Link from "next/link";
import { User as UserIcon, Clock, Package, Settings } from "lucide-react";

export default function AccountPage() {
  const orders = [
    { id: "FF-2024-0842", date: "Nov 15, 2026", status: "Delivered", total: "$199.00", items: 1 },
    { id: "FF-2024-0731", date: "Oct 22, 2026", status: "Delivered", total: "$44.00", items: 2 },
  ];

  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white">My account</h1>
            <p className="text-muted">Manage your orders and preferences.</p>
          </div>
          <Link href="/" className="px-6 py-3 border border-white/10 rounded-xl text-muted font-medium hover:text-white hover:bg-white/5 transition-colors">Continue shopping</Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <button className="w-full py-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-left text-white font-bold hover:bg-amber-500/20 transition-colors">
                <UserIcon className="w-5 h-5 mr-3" /> Profile
              </button>
              <button className="w-full py-4 text-left text-muted font-medium hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                <Package className="w-5 h-5 mr-3" /> Orders
              </button>
              <button className="w-full py-4 text-left text-muted font-medium hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                <Settings className="w-5 h-5 mr-3" /> Preferences
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
              <h2 className="text-xl font-bold text-white mb-8">Recent orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 mb-4">
                      <th className="pb-3 text-xs font-bold text-muted uppercase">Order #</th>
                      <th className="pb-3 text-xs font-bold text-muted uppercase">Date</th>
                      <th className="pb-3 text-xs font-bold text-muted uppercase">Status</th>
                      <th className="pb-3 text-xs font-bold text-muted uppercase text-right">Total</th>
                      <th className="pb-3 text-xs font-bold text-muted uppercase text-right">Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((o) => (
                      <tr key={o.id} className="border-b border-white/5 last:border-0">
                        <td className="py-4 text-white font-mono">{o.id}</td>
                        <td className="py-4 text-muted">{o.date}</td>
                        <td className="py-4">
                          <span className="px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold">{o.status}</span>
                        </td>
                        <td className="py-4 text-white font-bold text-right">{o.total}</td>
                        <td className="py-4 text-muted text-right">{o.items}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
