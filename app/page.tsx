/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Shield, CreditCard, BarChart4, CheckCircle, Smartphone, Globe, Menu, X } from "lucide-react";
import Image from "next/image";

// Simulate platform logos
const platformLogos = [
  { name: "Amazon", color: "bg-blue-200" },
  { name: "Flipkart", color: "bg-blue-100" },
  { name: "Uber", color: "bg-blue-200" },
  { name: "Zomato", color: "bg-blue-100" },
  { name: "Swiggy", color: "bg-blue-200" },
  { name: "BookMyShow", color: "bg-blue-100" },
];

export default function SpayLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [countStats, setCountStats] = useState({ users: 0, transactions: 0, merchants: 0 });
  
  // Animation on load
  useEffect(() => {
    setAnimateHero(true);
    
    // Animate statistics counter
    const interval = setInterval(() => {
      setCountStats(prev => ({
        users: prev.users < 100 ? prev.users + 1 : 100,
        transactions: prev.transactions < 500 ? prev.transactions + 5 : 500,
        merchants: prev.merchants < 50 ? prev.merchants + 1 : 50,
      }));
    }, 30);
    
    return () => clearInterval(interval);
  }, []);
  
  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "E-commerce Owner",
      content: "Spay transformed our checkout experience. We've seen a 35% increase in conversion rates since integration.",
      avatar: "bg-blue-400"
    },
    {
      name: "Michael Rodriguez",
      role: "Finance Director",
      content: "The security features in Spay give us peace of mind. Transactions are processed instantly with complete transparency.",
      avatar: "bg-blue-500"
    },
    {
      name: "Aisha Patel",
      role: "App Developer",
      content: "Integration was seamless - their API documentation is the best I've worked with. Support team is exceptional.",
      avatar: "bg-blue-600"
    }
  ];
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="ml-2 text-blue-600 font-bold text-xl">Spay</span>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Features</a>
                <a href="#business" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Business</a>
                <a href="#developers" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Developers</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Testimonials</a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <button className="px-4 py-2 mr-4 text-blue-600 font-medium text-sm border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md hover:bg-blue-700 transition-colors">
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
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md">Features</a>
              <a href="#business" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md">Business</a>
              <a href="#developers" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md">Developers</a>
              <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md">Testimonials</a>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <button className="w-full px-4 py-2 mb-2 text-blue-600 font-medium text-sm border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`text-white transition-all duration-1000 ${animateHero ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Payments Made <span className="text-blue-200">Secure & Simple</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-lg">
                Spay is the next-generation payment gateway that handles your transactions with bank-grade security and lightning-fast speeds.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                  How It Works
                </button>
              </div>
              <div className="mt-12">
                <p className="text-blue-200 font-medium mb-4">TRUSTED BY LEADING PLATFORMS</p>
                <div className="flex flex-wrap gap-4">
                  {platformLogos.map((logo, index) => (
                    <div key={index} className={`${logo.color} p-2 rounded-md text-blue-800 font-medium`}>
                      {logo.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${animateHero ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="bg-white rounded-xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Balance</p>
                    <p className="text-2xl font-bold text-gray-800">₹24,500.00</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">
                        <CreditCard className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Amazon Payment</p>
                        <p className="text-xs text-gray-500">May 12, 2025</p>
                      </div>
                    </div>
                    <p className="font-medium text-green-600">+₹2,500.00</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">
                        <Smartphone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Mobile Recharge</p>
                        <p className="text-xs text-gray-500">May 10, 2025</p>
                      </div>
                    </div>
                    <p className="font-medium text-red-600">-₹999.00</p>
                  </div>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                  Send Money
                </button>
              </div>
              <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-blue-200 rounded-full border-4 border-white z-10"></div>
              <div className="absolute -top-4 -left-4 h-8 w-8 bg-blue-300 rounded-full border-4 border-white z-10"></div>
            </div>
          </div>
        </div>
        
        {/* Geometric decorations */}
        <div className="absolute top-20 right-10 h-16 w-16 rounded-full bg-blue-400 opacity-20"></div>
        <div className="absolute bottom-20 left-10 h-32 w-32 rounded-full bg-blue-300 opacity-20"></div>
        <div className="absolute top-40 left-1/4 h-24 w-24 rounded-full bg-blue-200 opacity-10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
              <p className="text-4xl font-bold text-blue-600">{countStats.users}M+</p>
              <p className="mt-2 text-gray-600">Active Users</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
              <p className="text-4xl font-bold text-blue-600">{countStats.transactions}M+</p>
              <p className="mt-2 text-gray-600">Transactions Daily</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
              <p className="text-4xl font-bold text-blue-600">{countStats.merchants}K+</p>
              <p className="mt-2 text-gray-600">Partner Merchants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience Next-Gen Payment Technology</h2>
            <p className="mt-4 text-lg text-gray-600">
              Spay combines cutting-edge security with seamless user experience to revolutionize how payments are processed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 h-12 w-12 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bank-Grade Security</h3>
              <p className="text-gray-600">
                End-to-end encryption with multi-factor authentication protects every transaction from unauthorized access.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 h-12 w-12 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Transfers</h3>
              <p className="text-gray-600">
                Send and receive money in real-time with zero waiting periods, across any bank or platform.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 h-12 w-12 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <BarChart4 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track spending patterns and transaction history with intuitive visualizations and detailed reports.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Fraud Detection</h3>
                <p className="text-gray-600 mb-6">
                  Our AI-powered system monitors transactions 24/7, detecting and preventing suspicious activities before they impact your finances.
                </p>
                <ul className="space-y-3">
                  {['Behavioral analysis', 'Real-time monitoring', 'Anomaly detection', 'Instant alerts'].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors self-start">
                  Learn More
                </button>
              </div>
              <div className="bg-blue-600 p-8 md:p-12 text-white flex items-center">
                <div>
                  <h4 className="text-xl font-bold mb-6">How secure is your payment gateway?</h4>
                  <div className="space-y-6">
                    <div className="bg-blue-500 rounded-lg p-4">
                      <p className="text-sm text-blue-100 mb-2">Industry Standard</p>
                      <div className="w-full bg-blue-400 rounded-full h-2">
                        <div className="bg-blue-100 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="bg-blue-500 rounded-lg p-4">
                      <p className="text-sm text-blue-100 mb-2">Competitor Average</p>
                      <div className="w-full bg-blue-400 rounded-full h-2">
                        <div className="bg-blue-100 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-blue-500 rounded-lg p-4">
                      <p className="text-sm text-blue-100 mb-2">Spay Security</p>
                      <div className="w-full bg-blue-400 rounded-full h-2">
                        <div className="bg-blue-100 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built for Modern Businesses</h2>
            <p className="mt-4 text-lg text-gray-600">
              Streamline your payment operations with tools designed for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Business Suite</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <Globe className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Global Payments</h4>
                      <p className="mt-2 text-gray-600">Accept payments in 150+ currencies with automatic conversion and competitive rates.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Subscription Management</h4>
                      <p className="mt-2 text-gray-600">Automate recurring payments with flexible billing cycles and customer management.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <BarChart4 className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Business Analytics</h4>
                      <p className="mt-2 text-gray-600">Gain insights into your cash flow, customer behavior, and transaction trends.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                  Business Solutions
                </button>
                <button className="ml-4 px-6 py-3 text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 rounded-xl h-full w-full absolute -top-4 -right-4"></div>
              <div className="bg-white rounded-xl shadow-lg p-8 relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Enterprise Dashboard</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">Transaction Volume</p>
                      <span className="text-green-600 text-sm font-medium">+12.5%</span>
                    </div>
                    <div className="flex space-x-1">
                      {[40, 60, 30, 70, 50, 80, 60].map((height, i) => (
                        <div key={i} className="h-16 w-full">
                          <div className={`bg-blue-600 h-${height === 80 ? '16' : height === 70 ? '14' : height === 60 ? '12' : height === 50 ? '10' : height === 40 ? '8' : '6'} rounded-sm`}></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500">Conversion Rate</p>
                      <p className="text-2xl font-bold text-gray-900">89.2%</p>
                      <p className="text-xs text-green-600">+2.4% from last month</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500">Avg. Transaction</p>
                      <p className="text-2xl font-bold text-gray-900">₹1,258</p>
                      <p className="text-xs text-green-600">+₹125 from last month</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">Top Payment Methods</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-3 w-3 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-sm">Credit Card</span>
                        </div>
                        <span className="text-sm font-medium">42%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-3 w-3 bg-blue-400 rounded-full mr-2"></div>
                          <span className="text-sm">UPI</span>
                        </div>
                        <span className="text-sm font-medium">38%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-3 w-3 bg-blue-300 rounded-full mr-2"></div>
                          <span className="text-sm">Net Banking</span>
                        </div>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="h-3 w-3 bg-blue-200 rounded-full mr-2"></div>
                          <span className="text-sm">Other</span>
                        </div>
                        <span className="text-sm font-medium">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Developer-Friendly Integration</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive API documentation and SDKs make integration a breeze. Get up and running in minutes, not days.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">RESTful API with Clear Documentation</h4>
                    <p className="mt-1 text-gray-600">Well-structured endpoints with interactive examples and tutorials.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">Multiple SDKs Available</h4>
                    <p className="mt-1 text-gray-600">Official libraries for JavaScript, Python, Java, PHP, and more.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">Sandbox Environment</h4>
                    <p className="mt-1 text-gray-600">Test your integration thoroughly before going live.</p>
                  </div>
                </div>
              </div>
              <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                Developer Hub
              </button>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                              <div className="flex bg-gray-800 px-4 py-2">
                <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                <p className="ml-2 text-gray-400 text-sm">Spay API Example</p>
              </div>
              <div className="p-6 text-blue-300 font-mono text-sm">
                <p><span className="text-gray-400">// Initialize Spay with your API key</span></p>
                <p className="text-blue-200">import <span className="text-green-400">Spay</span> from <span className="text-yellow-300">&apos;spay-node&apos;</span>;</p>
                <p className="mt-2 text-blue-200">const spay = new <span className="text-green-400">Spay</span>({`{`}</p>
                <p className="ml-4 text-blue-200">  apiKey: <span className="text-yellow-300">&lsquo;sk_test_123456789&apos;</span>,</p>
                <p className="ml-4 text-blue-200">  environment: <span className="text-yellow-300">&apos;sandbox&apos;</span></p>
                <p className="text-blue-200">{`}`});</p>
                <p className="mt-4 text-gray-400">// Create a payment intent</p>
                <p className="text-blue-200">const paymentIntent = await spay.paymentIntents.create({`{`}</p>
                <p className="ml-4 text-blue-200">  amount: <span className="text-purple-400">1000</span>,</p>
                <p className="ml-4 text-blue-200">  currency: <span className="text-yellow-300">&apos;inr&apos;</span>,</p>
                <p className="ml-4 text-blue-200">  description: <span className="text-yellow-300">&apos;Payment for order #123&apos;</span>,</p>
                <p className="ml-4 text-blue-200">  metadata: {`{`} orderId: <span className="text-yellow-300">&apos;order_123&apos;</span> {`}`}</p>
                <p className="text-blue-200">{`}`});</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted by Businesses Worldwide</h2>
            <p className="mt-4 text-lg text-gray-600">
              See what our customers have to say about their experience with Spay.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 ${index === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute top-0 left-0'}`}
                  style={{ display: index === activeTestimonial ? 'block' : 'none' }}
                >
                  <div className="bg-blue-50 rounded-xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                        <div className={`${testimonial.avatar} h-16 w-16 rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <p className="text-lg md:text-xl text-gray-800 italic mb-6">&apos;{testimonial.content}&apos;</p>
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${index === activeTestimonial ? 'bg-blue-600' : 'bg-blue-200'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Image src="/logo.svg" width={24}  height={24} alt="Company logo" className="h-10 mx-auto opacity-60 hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <Image src="/logo.svg" width={24}  height={24} alt="Company logo" className="h-10 mx-auto opacity-60 hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <Image src="/logo.svg" width={24}  height={24} alt="Company logo" className="h-10 mx-auto opacity-60 hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <Image src="/logo.svg" width={24}  height={24} alt="Company logo" className="h-10 mx-auto opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Download the Spay App</h2>
              <p className="text-lg text-blue-100 mb-8">
                Take control of your finances on the go. Our mobile app puts the power of Spay in your pocket.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center bg-white text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3C8.58375 3 7.42356 3.27639 6.54479 3.84732C5.66602 4.41824 5 5.30083 5 6.5C5 7.69917 5.66602 8.58176 6.54479 9.15268C7.42356 9.72361 8.58375 10 10 10C11.4162 10 12.5764 9.72361 13.4552 9.15268C14.334 8.58176 15 7.69917 15 6.5C15 5.30083 14.334 4.41824 13.4552 3.84732C12.5764 3.27639 11.4162 3 10 3Z" />
                    <path d="M5 8C5 9.5 6.5 11 10 11C13.5 11 15 9.5 15 8V15.5C15 16.3284 14.3284 17 13.5 17H6.5C5.67157 17 5 16.3284 5 15.5V8Z" />
                  </svg>
                  App Store
                </button>
                <button className="flex items-center bg-white text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.9903 2.5L5.8125 7.70745L8.06775 9.96838L13.2456 4.76949L10.9903 2.5Z" />
                    <path d="M5.80469 7.71582L2.5 11.0359L4.77399 13.3099L8.06868 9.9975L5.80469 7.71582Z" />
                    <path d="M13.2329 4.75781L11.3281 2.83655L12.4561 1.69861C12.8339 1.31836 13.4417 1.31836 13.8195 1.69861L14.3708 2.24986C14.7487 2.62842 14.7487 3.23889 14.3708 3.61745L13.2329 4.75781Z" />
                    <path d="M8.08203 9.98144L4.76855 13.2949L5.8125 14.3389L9.12598 11.0254L8.08203 9.98144Z" />
                    <path d="M4.75 13.3096L2.5 15.5596L5.8125 18.872L8.0625 16.622L4.75 13.3096Z" />
                  </svg>
                  Google Play
                </button>
              </div>
              <div className="mt-10">
                <div className="flex items-center space-x-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-blue-100">4.8/5 from 10,000+ reviews</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl h-96 w-48 mx-auto overflow-hidden">
                <div className="bg-blue-600 h-10 w-full flex items-center justify-center">
                  <div className="h-2 w-16 bg-white rounded-full"></div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <div className="h-6 w-6 bg-blue-600 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-xs">S</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-800">Hi, Jane!</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-500">Available Balance</p>
                    <p className="text-lg font-bold text-gray-800">₹38,245.50</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="bg-blue-50 p-2 rounded-md flex flex-col items-center">
                      <div className="bg-blue-100 h-6 w-6 rounded-full flex items-center justify-center mb-1">
                        <svg className="h-3 w-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg>
                      </div>
                      <p className="text-xs">Send</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-md flex flex-col items-center">
                      <div className="bg-blue-100 h-6 w-6 rounded-full flex items-center justify-center mb-1">
                        <svg className="h-3 w-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M12 13l-4 4m0 0l-4-4m4 4V1" />
                        </svg>
                      </div>
                      <p className="text-xs">Receive</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-md flex flex-col items-center">
                      <div className="bg-blue-100 h-6 w-6 rounded-full flex items-center justify-center mb-1">
                        <svg className="h-3 w-3 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M4 4L16 16M16 4L4 16" />
                        </svg>
                      </div>
                      <p className="text-xs">Scan</p>
                    </div>
                  </div>
                  <p className="text-xs font-medium text-gray-600 mb-2">Recent Transactions</p>
                  <div className="space-y-2">
                    <div className="bg-gray-50 p-2 rounded-md flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-6 w-6 bg-blue-100 rounded-full mr-2"></div>
                        <p className="text-xs">Groceries</p>
                      </div>
                      <p className="text-xs font-medium text-red-600">-₹850</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-md flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-6 w-6 bg-green-100 rounded-full mr-2"></div>
                        <p className="text-xs">Salary</p>
                      </div>
                      <p className="text-xs font-medium text-green-600">+₹45,000</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full">
                  <div className="bg-gray-100 h-16 flex justify-around items-center">
                    <div className="flex flex-col items-center">
                      <div className="h-5 w-5 bg-blue-600 rounded-full"></div>
                      <p className="text-xs mt-1">Home</p>
                    </div>
                    <div className="flex flex-col items-center opacity-50">
                      <div className="h-5 w-5 bg-blue-300 rounded-full"></div>
                      <p className="text-xs mt-1">Cards</p>
                    </div>
                    <div className="flex flex-col items-center opacity-50">
                      <div className="h-5 w-5 bg-blue-300 rounded-full"></div>
                      <p className="text-xs mt-1">Stats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your payment experience?</h2>
                <p className="text-blue-100 mb-6 md:mb-0">
                  Join thousands of businesses that trust Spay for secure and seamless transactions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors">
                  Create Free Account
                </button>
                <button className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="ml-2 text-blue-600 font-bold text-xl">Spay</span>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Secure, seamless payments for modern businesses. Powered by advanced technology to make transactions effortless.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Security</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">API Reference</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Developers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© 2025 Spay. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}