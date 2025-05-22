"use client";

import { FaDiscord, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSession, signIn, signOut } from "next-auth/react"
import Hero from "@repo/ui/landingpage/Hero";
import Features from "@repo/ui/landingpage/Features"
import Testimonials from "@repo/ui/landingpage/Testimonials"
import CTA from "@repo/ui/landingpage/CTA";



export default function SpayLandingPage() {
    const { data: session } = useSession()


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
      {session?.user ? (
        <>
          <span className="mr-4 text-black font-medium text-sm">
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
            className="px-4 py-2 mr-4 text-black font-medium text-sm border border-black rounded-md hover:bg-gray-100 transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-black text-white font-medium text-sm rounded-md hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </button>
        </>
      )}
    </div>
       
          </div>
        </div>
        
 
      </nav>

      <Hero/>
      <Features/>
      <Testimonials/>
      <CTA />
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