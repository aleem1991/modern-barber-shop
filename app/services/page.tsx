"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="relative container mx-auto px-6 py-24 min-h-screen overflow-hidden">
      
      {/* Premium Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFCC00]/10 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">OUR <span className="text-[#FFCC00]">SERVICES</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Premium grooming treatments tailored for the modern gentleman.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card bg-black/60 rounded-3xl overflow-hidden group hover:-translate-y-2 hover:border-[#FFCC00]/50 hover:shadow-[0_10px_40px_rgba(255,204,0,0.15)] transition-all duration-300 flex flex-col"
          >
            {/* NEW: Image Section at the top of the card */}
            <div className="h-56 w-full overflow-hidden relative border-b border-white/5">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-all duration-700 lg:grayscale lg:group-hover:grayscale-0 group-hover:scale-110" 
              />
              {/* Dark fade at the bottom of the image so it blends into the card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 pointer-events-none" />
            </div>

            {/* Text Content */}
            <div className="p-6 sm:p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#FFCC00] transition-colors">{service.title}</h3>
                
                {/* Upgraded Price Tag styling */}
                <span className="text-[#FFCC00] font-black text-xl bg-[#FFCC00]/10 px-3 py-1 rounded-lg border border-[#FFCC00]/20">
                  {service.price}
                </span>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6 flex-grow">{service.desc}</p>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 font-bold uppercase tracking-widest group-hover:text-[#FFCC00] transition-colors mt-auto">
                <Sparkles size={16} /> WELDONE Signature
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}