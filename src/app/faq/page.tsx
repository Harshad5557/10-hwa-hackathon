"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, Button } from "@/components/ui";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Product information",
    items: [
      { question: "What is Feast Forge?", answer: "Feast Forge is an intelligent dog enrichment and puzzle feeding system. It combines a transparent hopper, three rotating maze disks, a portion gate, and an amber LED status ring to create a new feeding challenge at every meal." },
      { question: "What are the three tiers?", answer: "Feast Forge Light (Starter) includes validated maze library, manual difficulty, local controls, and basic portion limits. Feast Forge Smart (Expanded) adds app pairing, feeding schedules, feeding history, device status, and Wi-Fi notifications. Feast Forge Pro (Full) includes adaptive difficulty recommendations, advanced analytics, and expanded app controls." },
      { question: "What is the hopper capacity?", answer: "Up to 400g (proposed target). The hopper is transparent, removable, and food-grade BPA-free." },
      { question: "How tall and wide is the product?", answer: "Approximately 28cm high and 22cm wide (proposed targets, not verified specifications)." },
    ],
  },
  {
    title: "Food compatibility",
    items: [
      { question: "What kibble sizes work with Feast Forge?", answer: "Feast Forge is designed for standard dry kibble. Very large or irregularly shaped treats may not dispense reliably." },
      { question: "Can I use wet food?", answer: "No. Feast Forge is designed for dry kibble only. Wet food may clog the maze disks and portion gate." },
      { question: "What about freeze-dried treats?", answer: "Small, uniform freeze-dried treats may work, but results may vary. Standard dry kibble is recommended for optimal maze interaction." },
    ],
  },
  {
    title: "Cleaning",
    items: [
      { question: "How do I clean the Feast Forge?", answer: "Remove the transparent hopper and wash with warm, soapy water. The maze disks can be wiped clean with a damp cloth. Do not submerge the base unit. Allow all parts to dry completely before reassembly." },
      { question: "Can I put parts in the dishwasher?", answer: "The transparent hopper and maze disks can be hand-washed. Do not place the base unit or electronics in water or a dishwasher." },
      { question: "How often should I clean it?", answer: "Clean the hopper and maze disks after each refill or at least weekly. Wipe the base unit with a damp cloth as needed." },
    ],
  },
  {
    title: "Feeding",
    items: [
      { question: "Do I need the app to use Feast Forge?", answer: "No. All tiers include local controls for manual difficulty and portion settings. App pairing is available on Smart and Pro tiers." },
      { question: "How does the maze work?", answer: "Three rotating disks (smallest upper, medium middle, largest lower) each have four index positions. Rotating the disks changes the maze path kibble travels through, creating a new puzzle at every meal." },
      { question: "How many maze combinations are there?", answer: "64 theoretical position combinations (proposed target). These are not verified, unique, or safe puzzles. Validated configurations are limited to those in each tier's maze library." },
      { question: "How much food does it hold?", answer: "Up to 400g (proposed target). The hopper is transparent so you can see when it needs refilling." },
    ],
  },
  {
    title: "Technology",
    items: [
      { question: "What powers the device?", answer: "USB-C power (target). The device is designed to be plugged in during use." },
      { question: "How does the motor work?", answer: "An enclosed motor and drive system rotates each maze disk to precise index positions. The motor is quiet and designed for indoor use." },
      { question: "What does the amber LED ring do?", answer: "The amber LED status ring pulses during the feeding cycle and stays steady when feeding is complete. It provides visual feedback at a glance." },
      { question: "Are the sensors reliable?", answer: "Integrated sensors detect kibble dispensing and disk position. Control electronics manage motor timing and LED status. These are proposed design features." },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { question: "Does it connect to Wi-Fi?", answer: "Wi-Fi connectivity is a proposed approach for Smart and Pro tiers. App pairing via Bluetooth Low Energy is also proposed. These are design intentions, not confirmed operational features." },
      { question: "What app features are available?", answer: "Proposed features include feeding schedules, feeding history, device status, Wi-Fi notifications, and configuration controls. Available on Smart and Pro tiers." },
      { question: "Is the app available on iOS and Android?", answer: "The Feast Forge app is designed for both iOS and Android. App features are proposed targets for Smart and Pro tiers." },
    ],
  },
  {
    title: "Safety",
    items: [
      { question: "Is Feast Forge safe for my dog?", answer: "Feast Forge is designed for enrichment use with standard dry kibble. It is not intended to diagnose, treat, or prevent any condition. Always supervise your dog during initial use." },
      { question: "Are there small parts?", answer: "The maze disks and portion gate are internal components. The transparent hopper is removable but sized to prevent ingestion. Always follow usage guidelines." },
      { question: "Can my dog chew on it?", answer: "Feast Forge is not a chew toy. It is a feeding device. Supervise your dog and remove the device if damaged." },
    ],
  },
  {
    title: "Shipping",
    items: [
      { question: "How long does shipping take?", answer: "Orders typically ship within 1-2 business days and arrive within 5-7 business days within the continental US." },
      { question: "Do you ship internationally?", answer: "International shipping is not currently available. We ship to US addresses only." },
      { question: "What are the shipping costs?", answer: "Shipping rates are calculated at checkout based on your location and order weight. Free shipping on orders over $75." },
    ],
  },
  {
    title: "Warranty",
    items: [
      { question: "What is the warranty?", answer: "Feast Forge comes with a 2-year limited warranty covering defects in materials and workmanship under normal use." },
      { question: "What's covered?", answer: "Motor, electronics, and structural components under normal use conditions." },
      { question: "What's not covered?", answer: "Damage from misuse, accidents, unauthorized modifications, or normal wear and tear." },
      { question: "How do I file a claim?", answer: "Contact hello@feastforge.example with your order number and photos of the issue." },
    ],
  },
];

function FAQAccordion({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
      <div className="space-y-3">
        {category.items.map((item, i) => (
          <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-white font-medium pr-4">{item.question}</span>
              {openIndex === i ? (
                <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted flex-shrink-0" />
              )}
            </button>
            {openIndex === i && (
              <div className="px-6 pb-6">
                <p className="text-muted text-sm leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase mb-2 block">FAQ</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Frequently asked questions</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Everything you need to know about Feast Forge Smart Feeder Maze.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category) => (
              <FAQAccordion key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>

      <Section variant="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="ff-heading-lg mb-4">Still have questions?</h2>
          <p className="ff-body-lg text-muted mb-8 max-w-lg mx-auto">
            Our support team is here to help.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/support">Contact support</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}