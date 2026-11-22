"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Clock, Shield, Truck, Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";

const contactMethods = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@feastforge.example" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (800) 555-0199" },
  { icon: <Clock className="w-5 h-5" />, label: "Hours", value: "Mon–Fri, 9am–6pm PT" },
];

const helpSections = [
  {
    title: "Setup",
    items: [
      "Unbox and place on a flat surface",
      "Remove the transparent hopper and fill with dry kibble",
      "Connect USB-C power cable",
      "Set initial maze configuration using local controls",
    ],
  },
  {
    title: "Troubleshooting",
    items: [
      "If the motor doesn't rotate, check power connection",
      "If kibble doesn't dispense, check portion gate alignment",
      "If LED ring doesn't light, verify power supply",
      "Reset device by unplugging for 10 seconds",
    ],
  },
  {
    title: "Cleaning",
    items: [
      "Remove hopper and wash with warm, soapy water",
      "Wipe maze disks with damp cloth",
      "Do not submerge base unit",
      "Allow all parts to dry before reassembly",
    ],
  },
  {
    title: "Connectivity",
    items: [
      "Ensure device is powered on",
      "Enable Bluetooth on your phone",
      "Open Feast Forge app and follow pairing instructions",
      "Wi-Fi notifications require network connection",
    ],
  },
];

export default function SupportPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">Support</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">We're here to help</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Answers to common questions and ways to reach our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <Section variant="dark">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((m) => (
            <div key={m.label} className="p-6 rounded-3xl border border-white/10 bg-white/5 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-500/10 flex items-center justify-center">
                {m.icon}
              </div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">{m.label}</span>
              <p className="text-white font-medium">{m.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Help sections */}
      <Section variant="secondary">
        <SectionHeader
          title="Help center"
          description="Guides for setup, troubleshooting, cleaning, and connectivity."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpSections.map((section) => (
            <div key={section.title} className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-lg font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact form */}
      <Section variant="dark">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Contact us"
            description="Send us a message and we'll get back to you within 1-2 business days."
          />

          {submitted ? (
            <div className="p-8 rounded-3xl border border-amber-500/20 bg-amber-500/5 text-center">
              <CheckCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Message sent</h3>
              <p className="text-muted text-sm">We'll get back to you within 1-2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl border border-white/10 bg-white/5">
              {error && (
                <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">Name *</label>
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
                  <label className="text-sm font-bold text-white">Email *</label>
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
                <label className="text-sm font-bold text-white">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  placeholder="Tell us about your issue..."
                />
              </div>

              <Button variant="primary" size="lg" className="w-full" type="submit">
                <Send className="w-5 h-5" /> Send message
              </Button>
            </form>
          )}
        </div>
      </Section>

      {/* Policy pages */}
      <Section variant="secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Policy pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Shipping", "Returns", "Warranty", "Privacy", "Terms"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                className="px-6 py-3 rounded-xl border border-white/10 text-muted hover:text-white hover:border-amber-500/30 transition-colors text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}