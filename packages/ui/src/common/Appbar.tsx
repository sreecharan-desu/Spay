"use client";

import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {useRouter} from "next/navigation"

export const Appbar = () => {
    const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false);
    const [isLocalhost, setIsLocalhost] = useState(false);
    const router = useRouter()
      useEffect(() => {
        // This only runs on the client
        if (typeof window !== "undefined" && window.location.hostname === "localhost") {
          setIsLocalhost(true);
        }
      }, []);
    
  return (
        
        <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <div className="flex items-center">
                <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="ml-2 text-black font-bold text-xl">Spay</span>
              </div>
              {
                isLocalhost ?  <>
                            <div className="hidden md:flex items-center space-x-4">
                {session?.user ? (
                  <>
                    <span className="text-black font-medium text-sm">
                      Welcome, {session.user.name}
                    </span>
                    <button
                      onClick={() => signOut()}
                      className="px-4 py-2 bg-red-600 text-white font-medium text-sm rounded-md hover:bg-red-700 transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => signIn()}
                      className="px-4 py-2 text-black font-medium text-sm border border-black rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Signin
                    </button>
                    <button
                      onClick={() => router.push('/auth/signup')}
                      className="px-4 py-2 bg-black text-white font-medium text-sm rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
    
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-black focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
    
            <>
                    {isOpen && isLocalhost && (
              <div className="md:hidden mt-2 space-y-2">
                {session?.user ? (
                  <>
                    <span className="block text-black font-medium text-sm">
                      Welcome, {session.user.name}
                    </span>
                    <button
                      onClick={() => signOut()}
                      className="w-full px-4 py-2 bg-red-600 text-white font-medium text-sm rounded-md hover:bg-red-700 transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => signIn()}
                      className="w-full px-4 py-2 text-black font-medium text-sm border border-black rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Signin
                    </button>
                    <button
                      onClick={() => signIn()}
                      className="w-full px-4 py-2 bg-black text-white font-medium text-sm rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            )}
            </>
    
                  
                  </> : <></>
              }
            </div>
          </div>
        </nav>
    
  );
};
