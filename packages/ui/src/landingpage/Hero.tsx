import { useEffect, useState } from "react";
import { ArrowRight, CreditCard, Shield } from "lucide-react";
import { signIn } from "next-auth/react";
export default function Hero() {
    const [animateHero, setAnimateHero] = useState(false);
  
  // Animation on load
  useEffect(() => {
    setAnimateHero(true);
  }, []);

    return<>
              {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${animateHero ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
                Payments Made <span className="text-gray-700">Secure & Simple</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
Spay is a secure and seamless payment gateway powered by a custom-built <b className="font-extrabold text-black font-900">dummy</b> bank server, simulating real-world banking for modern app integration.              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button onClick={() => signIn()} className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors flex items-center">
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
    </>
}