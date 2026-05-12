"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// The Complete Barbershop Menu Data
const SERVICE_CATEGORIES = [
  {
    id: "hair-cut",
    title: "Hair Cut & Shave",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Hair Cut", price: "120" },
      { name: "Stylish Hair Cut", price: "150" },
      { name: "Clean Shave", price: "70" },
      { name: "Stylish Shave", price: "90" },
      { name: "Children Hair Cut", price: "120" },
    ]
  },
  {
    id: "head-massage",
    title: "Head Massage",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Olive Oil", price: "120" },
      { name: "Navaratan", price: "150" },
      { name: "Coconut", price: "150" },
      { name: "Almond", price: "150" },
      { name: "Hair Wash", price: "150" },
    ]
  },
  {
    id: "hair-spa",
    title: "Hair Spa",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Loreal Dandruff Treatment", price: "800" },
      { name: "Loreal Hair Spa", price: "700" },
      { name: "Hair Straightening", price: "1500" },
    ]
  },
  {
    id: "hair-colouring",
    title: "Hair Colouring",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Loreal Ammonia Free", price: "500" },
      { name: "Matrix", price: "400" },
      { name: "Streax", price: "400" },
      { name: "Garnier", price: "300" },
      { name: "Fruit Gel", price: "300" },
    ]
  },
  {
    id: "skin-care",
    title: "Skin Care Facial",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "O3+ Facial", price: "2000" },
      { name: "4 Layer Lotus", price: "2000" },
      { name: "Skin Whitening", price: "1500" },
    ]
  },
  {
    id: "natural-facial",
    title: "Natural Facial",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Gold Facial", price: "1000" },
      { name: "Papaya Facial", price: "700" },
      { name: "Banana Facial", price: "700" },
      { name: "Fruit Facial", price: "700" },
      { name: "Diamond Facial", price: "1000" },
    ]
  },
  {
    id: "raaga",
    title: "Raaga",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Gold Facial", price: "1500" },
      { name: "Fairness Facial", price: "1500" },
      { name: "Platinum Facial", price: "1500" },
    ]
  },
  {
    id: "clean-up",
    title: "Clean Up",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Branded Lotus", price: "400" },
      { name: "Normal Fruit", price: "300" },
    ]
  },
  {
    id: "d-tan",
    title: "D-Tan",
    image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Raaga", price: "400" },
      { name: "VLCC", price: "350" },
    ]
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id);
  const currentData = SERVICE_CATEGORIES.find(cat => cat.id === activeCategory);

  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  
  // NEW: Add a reference specifically for the scrolling container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // UPDATED: Custom scroll logic that only targets the menu container
  useEffect(() => {
    const activeButton = buttonRefs.current[activeCategory];
    const container = scrollContainerRef.current;

    // Only run this horizontal math on mobile screens where the container actually scrolls
    if (activeButton && container && window.innerWidth < 768) {
      const containerCenter = container.offsetWidth / 2;
      const buttonCenter = activeButton.offsetLeft + (activeButton.offsetWidth / 2);
      
      // Calculate exactly how far the container needs to slide inside its own box
      const scrollPos = buttonCenter - containerCenter;

      container.scrollTo({
        left: scrollPos,
        behavior: "smooth"
      });
    }
  }, [activeCategory]);

  return (
    <div className="relative container mx-auto px-6 py-24 min-h-screen">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">OUR <span className="text-[#FFCC00]">SERVICES</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Comprehensive grooming and wellness treatments.</p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-10">
        
        {/* LEFT COLUMN: Category Navigation */}
        <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
          {/* UPDATED: Added the scrollContainerRef here */}
          <div 
            ref={scrollContainerRef}
            className="sticky top-32 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar border-b md:border-b-0 border-white/10 md:border-l border-white/10 md:pl-6 relative"
          >
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  ref={(el) => {
                    buttonRefs.current[category.id] = el;
                  }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative whitespace-nowrap text-left px-4 py-3 sm:py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm flex-shrink-0 ${
                    isActive 
                      ? "text-black bg-[#FFCC00] shadow-[0_0_20px_rgba(255,204,0,0.3)]" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {category.title}
                  
                  {isActive && (
                    <motion.div 
                      layoutId="active-dot" 
                      className="absolute -left-[30px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFCC00] hidden md:block" 
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Cinematic Image Banner + Price List */}
        <div className="md:w-2/3 lg:w-3/4 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card bg-black/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative w-full h-48 sm:h-64 lg:h-72">
                <img 
                  src={currentData?.image} 
                  alt={currentData?.title} 
                  className="w-full h-full object-cover lg:grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10">
                  <span className="text-[#FFCC00] text-xs font-bold tracking-widest uppercase mb-2 block drop-shadow-md">
                    WELDONE Signature
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg">
                    {currentData?.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-10 flex flex-col gap-2">
                {currentData?.items.map((item, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.05) }}
                    key={index} 
                    className="flex justify-between items-center group py-4 border-b border-white/5 hover:border-[#FFCC00]/30 transition-colors"
                  >
                    <span className="text-lg sm:text-xl font-medium text-gray-300 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    
                    <div className="flex-grow border-b-2 border-dotted border-white/10 mx-6 group-hover:border-[#FFCC00]/30 transition-colors hidden sm:block" />
                    
                    <div className="flex items-start gap-1">
                      <span className="text-[#FFCC00] text-sm font-bold mt-1">₹</span>
                      <span className="text-[#FFCC00] font-black text-xl sm:text-2xl">{item.price}</span>
                      <span className="text-gray-500 text-sm font-bold mt-1">/-</span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}