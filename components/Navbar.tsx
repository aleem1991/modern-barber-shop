"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] bg-black/40 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl flex flex-col"
    >
      <div className="flex justify-between items-center px-5 sm:px-6 py-4 w-full">

        {/* WELDONE LOGO - Image */}
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="group flex-shrink-0">
          <img
            src="/logo.png"
            alt="Weldone Logo"
            className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
          />
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
                  <motion.div
                    layoutId="navline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FFCC00] rounded-full"
                  />
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
            className="lg:hidden overflow-hidden border-t border-white/10 mx-4"
          >
            <div className="flex flex-col gap-4 py-6">
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
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
  );
}