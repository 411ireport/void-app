import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate waitlist signup
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-950 text-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">VOID</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-indigo-400 transition">Features</a>
          <a href="#how-it-works" className="hover:text-indigo-400 transition">How It Works</a>
          <a href="#waitlist" className="hover:text-indigo-400 transition">Join Waitlist</a>
        </nav>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all shadow-md">
          Connect Wallet
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Your Data Enters. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">New Data Emerges.</span>
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
          VOID lets you submit sensitive data securely, then returns completely new processed data — stripped of identity and context.
        </p>
        <a
          href="#waitlist"
          className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transform transition-all shadow-lg font-semibold"
        >
          Join the Beta Waitlist
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Why VOID?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            title="Privacy First"
            description="Original data is never stored. Only hashed representations are used in processing."
            icon={<ShieldIcon />}
          />
          <FeatureCard
            title="Blockchain Verifiable"
            description="Every transformation is recorded on-chain for auditability and trust."
            icon={<ChainIcon />}
          />
          <FeatureCard
            title="Data Reboot Engine"
            description="Generates new data points based on patterns, not copies — protecting identities."
            icon={<RefreshIcon />}
          />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-900/30 py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <StepCard number={1} title="Submit Data" description="Upload or enter your data through our secure interface." />
            <StepCard number={2} title="Process & Discard" description="Our engine strips PII and discards original inputs after hashing." />
            <StepCard number={3} title="Get Rebooted Data" description="Receive newly generated, anonymized, and useful data outputs." />
          </div>
        </div>
      </section>

      {/* CTA / Waitlist */}
      <section id="waitlist" className="container mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Stay Ahead of the Curve</h3>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Be among the first to experience the future of private data processing.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-5 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-80"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all shadow-lg"
            >
              Join Beta
            </button>
          </form>
        ) : (
          <p className="text-green-400 font-medium">Thank you! You're now on the waitlist.</p>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        <p>© 2025 VOID | Blockchain-Powered Privacy Protocol</p>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-indigo-500 transition-all h-full flex flex-col items-center text-center">
      <div className="mb-4 text-indigo-400">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

// Step Card Component
function StepCard({ number, title, description }) {
  return (
    <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-700">
      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-lg mb-4 mx-auto">
        {number}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

// Icons
function ShieldIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function ChainIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 10h-2a4 4 0 00-4-4V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2v2c0 2.2-1.8 4-4 4s-4-1.8-4-4v-2H6a2 2 0 01-2-2V8a2 2 0 012-2h2V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2z"></path>
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 4v6h-6M1 20v-6h6M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"></path>
    </svg>
  );
}