"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative container mx-auto px-6 py-24 min-h-screen max-w-5xl">
      
      {/* Premium Gold Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">THE <span className="text-[#FFCC00]">VISION</span></h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card bg-black/60 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-[#FFCC00]">Our Story</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Founded with a passion for the craft, Weldone was built on a simple premise: grooming should not be a chore, but an experience. We rejected the old-fashioned, dusty barbershop aesthetic in favor of something built for the modern era.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Today, across our exclusive branches, we combine timeless barbering techniques with cutting-edge environments, giving our clients a space to relax, recharge, and master their aesthetic.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-96 rounded-3xl overflow-hidden glass-card">
          <img 
            src="/vision.png" 
            className="w-full h-full object-cover transition-all duration-500 lg:grayscale lg:opacity-80 lg:hover:opacity-100 lg:hover:grayscale-0" 
            alt="Barber Shop Interior" 
          />
        </motion.div>
      </div>

      
    </div>
  );
}