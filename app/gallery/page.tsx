"use client";
import { motion } from "framer-motion";
import { GALLERY } from "@/lib/data";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
  <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">
    OUR <span className="text-[#FFCC00]">WORK</span>
  </h1>
</motion.div>

      {/* CSS Columns for Masonry Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {GALLERY.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 3) * 0.1 }}
            className="break-inside-avoid rounded-2xl overflow-hidden glass-card group cursor-pointer"
          >
            <img 
  src={img} 
  alt="Barber Gallery" 
  className="w-full h-auto object-cover transition-all duration-500 opacity-100 lg:opacity-80 lg:group-hover:opacity-100 lg:group-hover:scale-105" 
/>
          </motion.div>
        ))}
      </div>
    </div>
  );
}