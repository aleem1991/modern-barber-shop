"use client";
import { motion } from "framer-motion";
import { BARBERS } from "@/lib/data";
import { MapPin, Scissors } from "lucide-react";

export default function BarbersPage() {
  return (
    <div className="relative container mx-auto px-6 py-24 min-h-screen">
      
      <div className="absolute bottom-0 left-0 w-[800px] h-[500px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 mix-blend-screen" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">MEET THE <span className="text-[#FFCC00]">ARTISTS</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">The elite craftsmen behind the WELDONE aesthetic.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
        {BARBERS.map((barber, index) => (
          <motion.div
            key={barber.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card bg-black/60 rounded-3xl overflow-hidden group hover:border-[#FFCC00]/30 transition-colors"
          >
            <div className="h-72 w-full overflow-hidden">
              <img src={barber.image} alt={barber.name} className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-500 lg:group-hover:scale-110" />
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-6 right-6 bg-[#FFCC00] text-black px-4 py-1 rounded-full text-xs font-black uppercase shadow-lg">
                {barber.role}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{barber.name}</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2"><MapPin size={16} className="text-[#FFCC00]"/> {barber.branch}</div>
                <div className="flex items-center gap-2"><Scissors size={16} className="text-[#FFCC00]"/> {barber.specialty}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}