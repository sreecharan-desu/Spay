"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Shield, CreditCard, Menu, X, CheckCircle, Star, ChevronRight } from "lucide-react";


export default function SpayLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);
  
  // Animation on load
  useEffect(() => {
    setAnimateHero(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="ml-2 text-black font-bold text-xl">Spay</span>
              </div>
        
            </div>
            <div className="hidden md:flex items-center">
              <button className="px-4 py-2 mr-4 text-black font-medium text-sm border border-black rounded-md hover:bg-gray-100 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-black text-white font-medium text-sm rounded-md hover:bg-gray-800 transition-colors">
                Sign Up
              </button>
            </div>
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-100 rounded-md">Features</a>
              <a href="#business" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-100 rounded-md">Business</a>
              <a href="#developers" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-100 rounded-md">Developers</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-100 rounded-md">About</a>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <button className="w-full px-4 py-2 mb-2 text-black font-medium text-sm border border-black rounded-md hover:bg-gray-100 transition-colors">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-black text-white font-medium text-sm rounded-md hover:bg-gray-800 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${animateHero ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
                Payments Made <span className="text-gray-700">Secure & Simple</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
Spay is a secure and seamless payment gateway powered by a custom-built <b className="font-extrabold text-black">dummy</b> bank server, simulating real-world banking for modern app integration.              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>

              </div>

            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${animateHero ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="bg-white rounded-xl border border-gray-200 p-6 transform hover:shadow-lg transition-all">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="h-10 w-10 bg-black rounded-md flex items-center justify-center">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Balance</p>
                    <p className="text-2xl font-bold text-black">₹24,500.00</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-black h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">
                        <CreditCard className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Recieved from SreeCharan</p>
                        <p className="text-xs text-gray-500">May 12, 2025</p>
                      </div>
                    </div>
                    <p className="font-medium text-green-600">+₹2,500.00</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-black h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Paid to Sreehari</p>
                        <p className="text-xs text-gray-500">May 10, 2025</p>
                      </div>
                    </div>
                    <p className="font-medium text-red-600">-₹999.00</p>
                  </div>
                </div>
                <button className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                  Send Money
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Why Choose Spay</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;ve built our platform with security, speed, and simplicity in mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bank-Grade Security</h3>
              <p className="text-gray-600">
                End-to-end encryption and advanced fraud detection keep your money and data safe.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Transfers</h3>
              <p className="text-gray-600">
                Send and receive money in seconds, not days. No waiting periods.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-black rounded-lg flex items-center justify-center mb-5">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Hidden Fees</h3>
              <p className="text-gray-600">
                Transparent pricing with no surprise charges. Know exactly what you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Trusted by Thousands</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what our customers have to say about their experience with Spay.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-6">
                "Spay has completely transformed how my business handles payments. The instant transfers are a game-changer for our cash flow."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Priya Sharma</p>
                  <p className="text-sm text-gray-500">Small Business Owner</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-6">
                "Security was my biggest concern when choosing a payment platform. With Spay, I've never had a single issue. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Arjun Patel</p>
                  <p className="text-sm text-gray-500">E-commerce Developer</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-6">
                &quot;The customer support team at Spay is exceptional. Any questions I&apos;ve had were answered promptly and thoroughly."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Rahul Mehta</p>
                  <p className="text-sm text-gray-500">Freelance Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to simplify your payments?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Join thousands of businesses and individuals who trust Spay for their payment needs.
              </p>
              <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center">
                Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-800 p-8 rounded-lg relative">
                <div className="flex justify-between items-center mb-6">
                  <div className="h-10 w-10 bg-white rounded-md flex items-center justify-center">
                    <span className="text-black font-bold text-xl">S</span>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Processing Time</p>
                    <p className="text-xl font-bold text-white">Instant</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-full bg-gray-700 h-2 rounded-full mb-2">
                    <div className="bg-white h-2 rounded-full w-4/5"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>80% faster than traditional banks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

import { FaDiscord, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
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