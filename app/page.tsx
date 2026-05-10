"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const marqueeText = "PRECISION FADES • HOT TOWEL SHAVES • ELITE GROOMING • BEARD SCULPTING • COLOR SPECIALISTS • ";

  return (
    <div className="relative w-full min-h-[calc(100svh-6rem)] flex flex-col items-center justify-center overflow-hidden px-4 py-12">
      
      {/* BRIGHTER Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Barber Background" 
          className="w-full h-full object-cover opacity-80 grayscale" /* Increased opacity from 60 to 80 */
        />
        {/* Lighter gradient overlay so the image is much more visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]/90" />
      </div>

      {/* PREMIUM GOLD Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#FFCC00]/25 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-amber-600/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0 mix-blend-screen" />

      {/* Main Hero Content */}
      <div className="z-10 flex flex-col items-center text-center w-full max-w-5xl mb-12 sm:mb-20">
        
        {/* NEW HEADLINE TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.95] font-black tracking-tighter mb-6 drop-shadow-2xl"
        >
          DOMINANCE <br />
            EXPRESSED IN <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-amber-500">STYLE</span>
        </motion.h1>

        {/* NEW DESCRIPTION TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm sm:text-lg text-gray-200 mb-10 sm:mb-12 max-w-2xl mx-auto font-light px-2 drop-shadow-md"
        >
          Precision in every cut. Confidence in every look. Experience premium barbering at Weldone.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-2 sm:px-0"
        >
          <Link 
            href="/branches" 
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#FFCC00] text-black font-black uppercase tracking-wider rounded-2xl overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,204,0,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
              Find a Branch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link 
            href="/barbers" 
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-black/40 backdrop-blur-xl text-white font-bold uppercase tracking-wider rounded-2xl transition-all hover:scale-105 active:scale-95 border border-white/20 hover:border-[#FFCC00]/50 shadow-2xl text-sm sm:text-base"
          >
            Meet the Barbers
          </Link>
        </motion.div>
      </div>

      {/* THE GOLD INFINITE MARQUEE */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#FFCC00]/5 border-y border-[#FFCC00]/20 py-4 backdrop-blur-md"
      >
        <motion.div
          className="flex whitespace-nowrap text-[#FFCC00] font-bold tracking-[0.3em] text-xs sm:text-sm uppercase"
          animate={{ x: [0, -1035] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          <span className="px-4">{marqueeText}</span>
          <span className="px-4">{marqueeText}</span>
          <span className="px-4">{marqueeText}</span>
          <span className="px-4">{marqueeText}</span>
        </motion.div>
      </motion.div>
    </div>
  );
}