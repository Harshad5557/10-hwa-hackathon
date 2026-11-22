import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <Link href="/" className="text-muted hover:text-white transition-colors text-sm">Home</Link>
          <span className="text-muted/50 ml-2">/</span>
          <span className="text-white font-medium ml-2">Privacy</span>
        </nav>
        <h1 className="text-3xl font-bold text-white mb-8">Privacy policy</h1>
        <div className="space-y-8 text-muted leading-relaxed">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Information we collect</h2>
            <p>We collect information you provide when placing an order or creating an account, such as name, email, and shipping address.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">How we use your information</h2>
            <p>To process orders, manage accounts, and send updates about your Feast Forge products.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Payment security</h2>
            <p>We do not store raw card information. Payment processing is handled through a secure sandbox provider.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
            <p>Questions? Email hello@feastforge.example.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
