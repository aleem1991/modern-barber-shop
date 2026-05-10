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
            src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1000&auto=format&fit=crop" 
            className="w-full h-full object-cover transition-all duration-500 lg:grayscale lg:opacity-80 lg:hover:opacity-100 lg:hover:grayscale-0" 
            alt="Barber Shop Interior" 
          />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center relative z-10">
        <h2 className="text-3xl font-bold mb-8">Leadership</h2>
        <div className="glass-card bg-black/60 p-8 rounded-3xl inline-block max-w-sm w-full border border-white/5 hover:border-[#FFCC00]/30 transition-colors">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#FFCC00]/30">
             <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-all duration-500 lg:grayscale lg:hover:grayscale-0" 
              alt="Founder" 
            />
          </div>
          <h3 className="text-2xl font-bold text-white">Marcus Thorne</h3>
          <p className="text-[#FFCC00] uppercase text-sm font-black tracking-widest mb-4">Founder & Master Barber</p>
          <p className="text-gray-400 text-sm">"We don't just cut hair. We architect confidence."</p>
        </div>
      </motion.div>
    </div>
  );
}