// app/branches/[slug]/BranchClient.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, ChevronDown, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";

// --- GLOBAL SERVICES DATA ---
const SERVICE_CATEGORIES = [
  {
    id: "hair-cut",
    title: "Hair Cut & Shave",
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
    items: [
      { name: "Loreal Dandruff Treatment", price: "800" },
      { name: "Loreal Hair Spa", price: "700" },
      { name: "Hair Straightening", price: "1500" },
    ]
  },
  {
    id: "natural-facial",
    title: "Natural Facial",
    items: [
      { name: "Gold Facial", price: "1000" },
      { name: "Papaya Facial", price: "700" },
      { name: "Banana Facial", price: "700" },
      { name: "Fruit Facial", price: "700" },
      { name: "Diamond Facial", price: "1000" },
    ]
  },
  {
    id: "clean-up",
    title: "Clean Up",
    items: [
      { name: "Branded Lotus", price: "400" },
      { name: "Normal Fruit", price: "300" },
    ]
  },
  {
    id: "d-tan",
    title: "D-Tan",
    items: [
      { name: "Raaga", price: "400" },
      { name: "VLCC", price: "350" },
    ]
  }
];

// --- UPDATED BRANCH SPECIFIC DATA & ARTISTS ---
const BRANCH_DATA: Record<string, any> = {
  "downtown-core": {
    name: "Downtown Core",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    address: "123 Tech Plaza, Bangalore",
    phone: "+91 98765 43210",
    hours: "9:00 AM - 9:00 PM",
    artists: [
      { name: "Vikram Singh", role: "Master Barber", rating: 5.0, image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" },
      { name: "Sarah Lee", role: "Color Specialist", rating: 4.9, image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop" },
      { name: "Rahul M.", role: "Fade Specialist", rating: 4.8, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
      { name: "Leo M.", role: "Beard Sculptor", rating: 4.9, image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop" },
      { name: "Anita K.", role: "Skin Expert", rating: 4.9, image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop" },
      { name: "David O.", role: "Senior Barber", rating: 5.0, image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  "koramangala-hub": {
    name: "Koramangala Hub",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
    address: "4th Block, Koramangala, Bangalore",
    phone: "+91 98765 43211",
    hours: "10:00 AM - 10:00 PM",
    artists: [
      { name: "Julian T.", role: "Master Barber", rating: 5.0, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
      { name: "Aaron D.", role: "Fade Specialist", rating: 4.8, image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop" },
      { name: "Maya R.", role: "Skin Expert", rating: 4.9, image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop" },
      { name: "Samir K.", role: "Senior Barber", rating: 4.7, image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" },
      { name: "Omar H.", role: "Precision Scissor", rating: 4.9, image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop" },
      { name: "Noah C.", role: "Style Director", rating: 5.0, image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  "indiranagar-elite": {
    name: "Indiranagar Elite",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
    address: "100ft Road, Indiranagar, Bangalore",
    phone: "+91 98765 43212",
    hours: "9:00 AM - 9:00 PM",
    artists: [
      { name: "Xavier L.", role: "Master Barber", rating: 5.0, image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop" },
      { name: "Ben P.", role: "Executive Stylist", rating: 4.9, image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" },
      { name: "Chloe M.", role: "Colorist", rating: 5.0, image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop" },
      { name: "Daniel W.", role: "Senior Barber", rating: 4.8, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
      { name: "Lucas F.", role: "Beard Sculptor", rating: 4.9, image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop" },
      { name: "Isaac V.", role: "Style Director", rating: 5.0, image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop" }
    ]
  }
};

export default function BranchClient({ slug }: { slug: string }) {
  const branch = BRANCH_DATA[slug];
  const [openServiceId, setOpenServiceId] = useState<string | null>(SERVICE_CATEGORIES[0].id);

  if (!branch) return <div className="py-40 text-center text-white text-2xl font-bold">Branch Not Found</div>;

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 mix-blend-screen rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">

        <Link href="/branches" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFCC00] transition-colors -mb-16">
          <ArrowLeft size={18} /> Back to all locations
        </Link>
        
        {/* SECTION 1: Branch Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase text-white">
              {branch.name} <br/> <span className="text-[#FFCC00]">Branch</span>
            </h1>
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <MapPin className="text-[#FFCC00]" size={24} /> <span className="text-lg">{branch.address}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <Phone className="text-[#FFCC00]" size={24} /> <span className="text-lg">{branch.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                <Clock className="text-[#FFCC00]" size={24} /> <span className="text-lg">{branch.hours}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
            <img src={branch.image} alt={branch.name} className="w-full h-[400px] lg:h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>

        {/* SECTION 2: Meet The Team */}
        <div className="pt-12 border-t border-white/10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">Meet The <span className="text-[#FFCC00]">Artists</span></h2>
            <p className="text-gray-400 text-lg">The elite craftsmen stationed at {branch.name}.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {branch.artists.map((artist: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
              >
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#FFCC00] text-black text-xs font-bold uppercase tracking-widest rounded-full">{artist.role}</span>
                    <span className="flex items-center gap-1 text-[#FFCC00] text-xs font-bold bg-black/50 px-2 py-1 rounded-full backdrop-blur-md">
                      <Star size={12} className="fill-[#FFCC00]" /> {artist.rating}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{artist.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Standard Branch Services (Interactive Accordion) */}
        <div className="pt-12 border-t border-white/10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">Branch <span className="text-[#FFCC00]">Services</span></h2>
            <p className="text-gray-400 text-lg">Standardized premium treatments available at all WELDONE locations.</p>
          </motion.div>

          <div className="space-y-4">
            {SERVICE_CATEGORIES.map((category) => {
              const isOpen = openServiceId === category.id;
              
              return (
                <div key={category.id} className="glass-card bg-black/40 border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20">
                  <button 
                    onClick={() => setOpenServiceId(isOpen ? null : category.id)}
                    className="w-full px-6 py-5 sm:py-6 flex justify-between items-center bg-transparent"
                  >
                    <span className={`text-lg sm:text-xl font-bold uppercase tracking-widest transition-colors ${isOpen ? "text-[#FFCC00]" : "text-white"}`}>
                      {category.title}
                    </span>
                    <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? "bg-[#FFCC00] border-[#FFCC00] text-black rotate-180" : "border-white/10 text-white bg-white/5"}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="w-full h-[1px] bg-white/10 mb-4" />
                          <div className="flex flex-col gap-2">
                            {category.items.map((item, idx) => (
                              <div key={idx} className="flex justify-between items-center group py-3">
                                <span className="text-base sm:text-lg text-gray-300 group-hover:text-white transition-colors">
                                  {item.name}
                                </span>
                                <div className="flex-grow border-b-2 border-dotted border-white/10 mx-4 group-hover:border-[#FFCC00]/30 transition-colors" />
                                <div className="flex items-start gap-1">
                                  <span className="text-[#FFCC00] text-xs font-bold mt-1">₹</span>
                                  <span className="text-[#FFCC00] font-black text-xl">{item.price}</span>
                                  <span className="text-gray-500 text-xs font-bold mt-1">/-</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}