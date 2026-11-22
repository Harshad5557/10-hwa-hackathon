import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/lib/cart-context";
import { ToastProvider } from "@/lib/toast-context";
import { AuthProvider } from "@/lib/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feast Forge | Intelligent Dog Enrichment & Puzzle Feeding",
  description: "A new puzzle every time. Turn everyday feeding into a more engaging experience with Feast Forge Smart Feeder Maze.",
  metadataBase: new URL("https://10-hwa-hackathon.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-dark-bg text-white antialiased">
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <CartProvider>
          <ToastProvider>
            <AuthProvider>
              <Navbar />
              <main id="main-content" className="flex-1">{children}</main>
              <Footer />
            </AuthProvider>
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
