"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // FIX: Automatically close the mobile menu whenever the page changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Branches", path: "/branches" },
    { name: "Barbers", path: "/barbers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* FIX: Invisible overlay to close menu when tapping outside */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[90] lg:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <motion.nav 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] bg-black/80 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl flex flex-col"
      >
        <div className="flex justify-between items-center px-5 sm:px-6 py-4 w-full relative z-10">
          
          {/* THE WELDONE LOGO */}
          <Link href="/" className="group flex-shrink-0">
            <div className="flex items-stretch p-[2px] border-2 border-[#FFCC00] bg-black group-hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(255,204,0,0.15)]">
              <div className="bg-[#FFCC00] px-2 sm:px-3 pt-1 pb-[2px] flex items-center justify-center">
                <span className="font-sans font-black text-black text-[24px] sm:text-[28px] leading-[0.8] tracking-tighter uppercase">WEL</span>
              </div>
              <div className="bg-black px-2 sm:px-3 pt-1 pb-[2px] flex items-center justify-center">
                <span className="font-sans font-black text-[#FFCC00] text-[24px] sm:text-[28px] leading-[0.8] tracking-tighter uppercase">DONE</span>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors relative ${
                    isActive ? "text-[#FFCC00]" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div layoutId="navline" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FFCC00] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#FFCC00] p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/10 mx-4 relative z-10 bg-black/50"
            >
              <div className="flex flex-col gap-4 py-6">
                {links.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link 
                      key={link.name} 
                      href={link.path}
                      className={`text-base font-bold uppercase tracking-wider transition-colors block text-center ${
                        isActive ? "text-[#FFCC00]" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}