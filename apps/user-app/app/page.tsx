/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaDiscord, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

// Custom SVG Icons
const ShieldIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CreditCardIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
);

export default function SpayLandingPage() {
  const [animateHero, setAnimateHero] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    setAnimateHero(true);
  }, []);

const handleWaitlistSubmit = (e:any) => {
  e.preventDefault();
  console.log("Waitlist email submitted:", email);
  toast.success("Thanks for joining the Spay waitlist! Stay tuned for the launch.");
  setEmail("");
};

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navbar */}
      <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#000000",
      color: "#ffffff",
      border: "1px solid #333333",
      borderRadius: "16px",
      padding: "12px 16px",
      fontSize: "14px",
      fontWeight: "500",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    },
    success: {
      iconTheme: {
        primary: "#ffffff",
        secondary: "#000000",
      },
    },
  }}
/>
      <nav className="sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-extrabold text-2xl">S</span>
              </div>
              <span className="ml-3 text-black font-extrabold text-2xl tracking-tight">Spay</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-black text-sm font-medium transition-colors">
                Features
              </a>
              <button
                onClick={() => router.push("#waitlist")}
                className="px-6 py-2.5 bg-black text-white font-medium text-sm rounded-full hover:bg-gray-900 transition-all transform hover:scale-105"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ease-out ${animateHero ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-black tracking-tight">
                The Future of <span className="text-green-500">Dummy</span> <span className="text-gray-500">Payments</span>
              </h1>
              <p className="mt-8 text-xl text-gray-600 max-w-md leading-relaxed">
                Spay is coming—a secure, seamless payment gateway powered by a custom <b className="font-extrabold text-black">dummy</b> bank server.
              </p>
              <form onSubmit={handleWaitlistSubmit} className="mt-12 flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-6 py-3 bg-gray-100 text-black text-sm font-medium rounded-full w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-black text-white font-medium text-sm rounded-full hover:bg-gray-900 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Join Waitlist <ArrowRightIcon />
                </button>
              </form>
              <p className="mt-6 text-sm text-gray-500">Be the first to experience Spay at launch.</p>
            </div>
            <div className={`transition-all duration-1000 ease-out delay-300 ${animateHero ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex justify-between items-center mb-10">
                  <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-extrabold text-2xl">S</span>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm font-medium">Balance (Preview)</p>
                    <p className="text-3xl font-bold text-black">₹24,500.00</p>
                  </div>
                </div>
                <div className="space-y-6 mb-10">
                  <div className="bg-gray-50 p-5 rounded-xl flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-black h-10 w-10 rounded-full flex items-center justify-center text-white mr-4">
                        <CreditCardIcon />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Received from SreeCharan</p>
                        <p className="text-xs text-gray-500">May 12, 2025</p>
                      </div>
                    </div>
                    <p className="font-medium text-gray-600">+₹2,500.00</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-xl flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-black h-10 w-10 rounded-full flex items-center justify-center text-white mr-4">
                        <ShieldIcon />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Paid to Sreehari</p>
                        <p className="text-xs text-gray-500">May 10, 2025</p>
                      </div>
                    </div>
                    <p className="font-medium text-gray-600">-₹999.00</p>
                  </div>
                </div>
                <button
                  disabled
                  className="w-full py-3.5 bg-gray-300 text-gray-600 font-medium rounded-full cursor-not-allowed transition-opacity"
                >
                  Send Money (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">What Spay Will Offer</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              We’re crafting a payment platform that’s secure, fast, and effortless.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="h-14 w-14 bg-black rounded-full flex items-center justify-center mb-6">
                <ShieldIcon />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Unbreakable Security</h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end encryption and advanced fraud detection to keep your transactions safe.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="h-14 w-14 bg-black rounded-full flex items-center justify-center mb-6">
                <CreditCardIcon />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Lightning-Fast Transfers</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant payments with no delays, designed for today’s pace.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="h-14 w-14 bg-black rounded-full flex items-center justify-center mb-6">
                <CheckCircleIcon />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">No Hidden Fees</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing so you always know what you’re paying for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Spay is Almost Here</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-md mx-auto leading-relaxed">
            Join the waitlist to get early access to the future of payments.
          </p>
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3.5 bg-gray-800 text-white text-sm font-medium rounded-full w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-white transition-all"
              required
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-white text-black font-medium text-sm rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Join Waitlist <ArrowRightIcon />
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-400">We’ll keep you posted on our launch date!</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/sreecharan-desu", icon: FaGithub },
    { name: "LinkedIn", url: "https://linkedin.com/in/sreecharan-desu", icon: FaLinkedin },
    { name: "X", url: "https://x.com/sr3x0r", icon: FaXTwitter },
    { name: "YouTube", url: "https://www.youtube.com/@mrsreecharan", icon: FaYoutube },
    { name: "Discord", url: "https://discord.com/users/1370022259606945792", icon: FaDiscord },
  ];

  return (
    <footer className="bg-black py-4 z-10 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white text-xl sm:text-2xl">Spay</span>
            <span className="text-gray-400 text-sm mt-1">© {year}</span>
          </div>

          {/* Creator Credit and Social Links */}
          <div className="flex flex-col mt-4 md:mt-0">
            {/* Creator Credit */}
            <div className="text-gray-400 text-sm flex items-center">
              <span>Made with</span>
              <span className="text-red-500 text-xl animate-pulse ml-1 transform hover:scale-125 transition-transform duration-300 cursor-default inline-block">
                ♥
              </span>
              <a
                href="https://sr3x0r.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-medium hover:text-white transition-colors group relative"
              >
                by SreeCharan
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
                  aria-label={link.name}
                  title={link.name}
                >
                  <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}