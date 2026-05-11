"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileBranchOpen, setMobileBranchOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileBranchOpen(false);
  }, [pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { 
      name: "Branches", 
      path: "/branches",
      subLinks: [
        { name: "Downtown Core", path: "/branches/downtown-core" },
        { name: "koramangala-hub", path: "/branches/koramangala-hub" },
        { name: "indiranagar-elite", path: "/branches/indiranagar-elite" }
      ]
    },
    { name: "Barbers", path: "/barbers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <motion.nav 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] bg-black/80 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-2xl flex flex-col"
      >
        <div className="flex justify-between items-center px-6 py-4 w-full relative z-10">
          <Link href="/" className="group flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center">
            {links.map((link) => {
              const isActive = pathname === link.path || (link.subLinks && pathname.startsWith(link.path));
              
              if (link.subLinks) {
                return (
                  <div key={link.name} className="relative group py-2">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <Link 
                        href={link.path}
                        className={`text-sm font-bold uppercase tracking-wider transition-colors ${isActive ? "text-[#FFCC00]" : "text-gray-400 group-hover:text-white"}`}
                      >
                        {link.name}
                      </Link>
                      <ChevronDown size={14} className="text-gray-400 group-hover:text-white group-hover:rotate-180 transition-transform" />
                    </div>

                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
                      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl flex flex-col gap-1">
                        {link.subLinks.map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.path}
                            className="px-4 py-3 text-xs font-bold text-gray-400 hover:text-black hover:bg-[#FFCC00] rounded-lg transition-all uppercase tracking-widest"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={link.name} href={link.path} className={`text-sm font-bold uppercase tracking-wider transition-colors relative py-2 ${isActive ? "text-[#FFCC00]" : "text-gray-400 hover:text-white"}`}>
                  {link.name}
                  {isActive && <motion.div layoutId="navline" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FFCC00] rounded-full" />}
                </Link>
              );
            })}
          </div>
          
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#FFCC00] p-2 bg-white/5 rounded-lg border border-white/10">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden border-t border-white/10 mx-4 bg-black/50">
              <div className="flex flex-col gap-2 py-6">
                {links.map((link) => {
                  const isActive = pathname === link.path;
                  
                  if (link.subLinks) {
                    return (
                      <div key={link.name} className="flex flex-col items-center">
                        <div className="flex items-center gap-4 py-2">
                          <Link 
                            href={link.path}
                            className={`text-base font-bold uppercase tracking-wider ${isActive ? "text-[#FFCC00]" : "text-gray-400"}`}
                          >
                            {link.name}
                          </Link>
                          {/* Chevron is the only thing that toggles the sub-menu */}
                          <button 
                            onClick={(e) => { e.preventDefault(); setMobileBranchOpen(!mobileBranchOpen); }}
                            className="p-2 bg-white/5 rounded-full border border-white/10"
                          >
                            <ChevronDown size={16} className={`transition-transform text-[#FFCC00] ${mobileBranchOpen ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        
                        <AnimatePresence>
                          {mobileBranchOpen && (
                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden w-full px-8">
                              <div className="flex flex-col bg-white/5 rounded-2xl py-2 my-2">
                                {link.subLinks.map((sub) => (
                                  <Link key={sub.name} href={sub.path} className="py-4 text-sm font-bold text-gray-300 hover:text-[#FFCC00] text-center uppercase tracking-widest">
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link key={link.name} href={link.path} className={`text-base font-bold uppercase tracking-wider block text-center py-2 ${isActive ? "text-[#FFCC00]" : "text-gray-400"}`}>
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