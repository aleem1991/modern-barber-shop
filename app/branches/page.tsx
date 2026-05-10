"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { BRANCHES } from "@/lib/data";
import Link from "next/link";

export default function BranchesPage() {
  return (
    <div className="relative container mx-auto px-6 py-24 min-h-screen">
      
      {/* Background Gold Accent */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full" />

      <header className="mb-20 text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-black tracking-tighter mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          OUR <span className="text-[#FFCC00]">STATIONS</span>
        </motion.h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {BRANCHES.map((branch, index) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card bg-black/60 p-8 rounded-3xl group hover:border-[#FFCC00]/50 transition-all flex flex-col"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">{branch.name}</h2>
            <div className="space-y-4 text-gray-400 mb-8 flex-grow">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#FFCC00]" size={20} />
                <span>{branch.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#FFCC00]" size={20} />
                <span>{branch.hours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#FFCC00]" size={20} />
                <span>{branch.phone}</span>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl h-48 bg-white/5 mb-6 relative">
              <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none group-hover:bg-transparent transition-colors" />
              <iframe src={branch.mapUrl} className="w-full h-full lg:grayscale lg:group-hover:grayscale-0 transition-all duration-500" />
            </div>

            <Link 
              href={`/branches/${branch.id}`} 
              className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-[#FFCC00] hover:text-black hover:border-[#FFCC00] transition-all"
            >
              VIEW BRANCH DETAILS <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}