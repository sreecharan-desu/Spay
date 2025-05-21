"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";


export const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
  );
};
