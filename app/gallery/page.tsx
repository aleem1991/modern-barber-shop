"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// You can add as many images here as you want (20, 50, 100+). 
// The grid will automatically organize them cleanly!
const GALLERY_DATA = [
  { id: 1, title: "Precision Fade", category: "Haircut", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Straight Razor Lineup", category: "Beard", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Classic Pompadour", category: "Styling", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Textured Crop", category: "Haircut", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "The Executive Contour", category: "Haircut", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Hot Towel Shave", category: "Treatment", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop" },
  { id: 7, title: "Beard Sculpting", category: "Beard", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop" },
  { id: 8, title: "Creative Color", category: "Coloring", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % GALLERY_DATA.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? GALLERY_DATA.length - 1 : selectedIndex - 1);
    }
  };

  return (
    <div className="relative w-full min-h-screen px-4 sm:px-6 lg:px-12 py-24 flex flex-col items-center bg-[#050505]">
      
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      {/* Page Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 relative z-10 text-center w-full max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-4">
          OUR <span className="text-[#FFCC00]">WORK</span>
        </h1>
        <p className="text-gray-400 text-lg">A curated showcase of our finest craftsmanship.</p>
      </motion.div>

      {/* THE GRID: Scales perfectly whether you have 4 images or 40 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl relative z-10">
        {GALLERY_DATA.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-white/5"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 lg:grayscale lg:group-hover:grayscale-0"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100 border border-white/10">
                <Maximize2 size={18} className="text-[#FFCC00]" />
              </div>
              <p className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.category}
              </p>
              <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-[#FFCC00] hover:bg-white/5 p-3 rounded-full transition-all z-50"
            >
              <X size={32} />
            </button>

            {/* Navigation Arrows */}
            <button 
              onClick={showPrev}
              className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#FFCC00] hover:bg-white/5 p-3 sm:p-4 rounded-full transition-all z-50 hidden sm:block"
            >
              <ChevronLeft size={40} />
            </button>
            
            <button 
              onClick={showNext}
              className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#FFCC00] hover:bg-white/5 p-3 sm:p-4 rounded-full transition-all z-50 hidden sm:block"
            >
              <ChevronRight size={40} />
            </button>

            {/* Main Lightbox Image */}
            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            >
              <img 
                src={GALLERY_DATA[selectedIndex].image} 
                alt={GALLERY_DATA[selectedIndex].title} 
                className="w-full h-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="bg-[#FFCC00]/10 text-[#FFCC00] border border-[#FFCC00]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 inline-block">
                  {GALLERY_DATA[selectedIndex].category}
                </span>
                <h2 className="text-3xl font-bold text-white">
                  {GALLERY_DATA[selectedIndex].title}
                </h2>
              </div>
            </motion.div>

            {/* Mobile Nav Controls (Visible only on small screens) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 sm:hidden bg-black/50 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
              <button onClick={showPrev} className="text-white hover:text-[#FFCC00]"><ChevronLeft size={28} /></button>
              <span className="text-white/50 text-sm font-medium tracking-widest">{selectedIndex + 1} / {GALLERY_DATA.length}</span>
              <button onClick={showNext} className="text-white hover:text-[#FFCC00]"><ChevronRight size={28} /></button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}