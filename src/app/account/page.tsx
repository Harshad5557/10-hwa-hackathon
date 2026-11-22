"use client";

import { useState } from "react";
import Link from "next/link";
import { User as UserIcon, Clock, Package, Settings, Mail, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";

type Tab = "signin" | "register" | "profile" | "orders";

const orders = [
  { id: "FF-2024-0842", date: "Nov 15, 2026", status: "Delivered", total: "$199.00", items: 1 },
  { id: "FF-2024-0731", date: "Oct 22, 2026", status: "Delivered", total: "$44.00", items: 2 },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!signInData.email || !signInData.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!signInData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setSuccess("Sign in successful. Welcome back!");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!registerData.name || !registerData.email || !registerData.password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!registerData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (registerData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setSuccess("Account created successfully. You can now sign in.");
  };

  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white">My account</h1>
            <p className="text-muted">Manage your profile, orders, and preferences.</p>
          </div>
          <Link href="/" className="px-6 py-3 border border-white/10 rounded-xl text-muted font-medium hover:text-white hover:bg-white/5 transition-colors">
            Continue shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {[
                { id: "signin" as Tab, label: "Sign in", icon: <UserIcon className="w-5 h-5" /> },
                { id: "register" as Tab, label: "Register", icon: <UserIcon className="w-5 h-5" /> },
                { id: "profile" as Tab, label: "Profile", icon: <Settings className="w-5 h-5" /> },
                { id: "orders" as Tab, label: "Orders", icon: <Package className="w-5 h-5" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setError(""); setSuccess(""); }}
                  className={cn(
                    "w-full py-4 px-4 rounded-xl text-left font-medium transition-colors flex items-center gap-3",
                    activeTab === tab.id
                      ? "bg-amber-500/10 border border-amber-500/20 text-white"
                      : "text-muted hover:text-white hover:bg-white/5"
                  )}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {error && (
              <div className="mb-6 p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-6 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-amber-400 text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {success}
              </div>
            )}

            {activeTab === "signin" && (
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 max-w-md">
                <h2 className="text-xl font-bold text-white mb-6">Sign in</h2>
                <form onSubmit={handleSignIn} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        type="email"
                        value={signInData.email}
                        onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={signInData.password}
                        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                        required
                        className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <Button variant="primary" className="w-full" type="submit">
                    Sign in
                  </Button>
                  <p className="text-center text-sm text-muted">
                    Don&apos;t have an account?{" "}
                    <button onClick={() => setActiveTab("register")} className="text-amber-400 hover:text-amber-300">
                      Register
                    </button>
                  </p>
                </form>
              </div>
            )}

            {activeTab === "register" && (
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 max-w-md">
                <h2 className="text-xl font-bold text-white mb-6">Create account</h2>
                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Full name</label>
                    <input
                      type="text"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Email</label>
                    <input
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Password</label>
                    <input
                      type="password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="At least 8 characters"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Confirm password</label>
                    <input
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Confirm password"
                    />
                  </div>
                  <Button variant="primary" className="w-full" type="submit">
                    Create account
                  </Button>
                  <p className="text-center text-sm text-muted">
                    Already have an account?{" "}
                    <button onClick={() => setActiveTab("signin")} className="text-amber-400 hover:text-amber-300">
                      Sign in
                    </button>
                  </p>
                </form>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <h2 className="text-xl font-bold text-white mb-6">Profile</h2>
                <div className="space-y-6 max-w-md">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Full name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Dog name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Max"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Dog breed</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Labrador Retriever"
                    />
                  </div>
                  <Button variant="primary" className="w-full">
                    Save changes
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <h2 className="text-xl font-bold text-white mb-8">Order history</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}