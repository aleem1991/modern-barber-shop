export const BRANCHES = [
  { id: "downtown-core", name: "Downtown Core", address: "123 Tech Plaza, Bangalore", hours: "9:00 AM - 9:00 PM", phone: "+91 98765 43210", barbers: ["Vikram", "Sarah", "Leo"], services: ["Executive Haircut", "Beard Sculpting", "The Full Overhaul", "Color & Highlights"], mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.22!2d77.59!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" },
  { id: "koramangala-hub", name: "Koramangala Hub", address: "4th Block, Koramangala, Bangalore", hours: "10:00 AM - 10:00 PM", phone: "+91 98765 43211", barbers: ["Arjun", "Rahul"], services: ["Executive Haircut", "Beard Sculpting", "Charcoal Facial"], mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.22!2d77.62!3d12.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000001!5m2!1sen!2sin" },
  { id: "indiranagar-elite", name: "Indiranagar Elite", address: "100ft Road, Indiranagar, Bangalore", hours: "9:00 AM - 9:00 PM", phone: "+91 98765 43212", barbers: ["Chris", "Neha", "Sam"], services: ["Executive Haircut", "The Full Overhaul", "Color & Highlights", "Kids Styling"], mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.22!2d77.64!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000002!5m2!1sen!2sin" },
  { id: "whitefield-lounge", name: "Whitefield Lounge", address: "ITPL Main Rd, Whitefield, Bangalore", hours: "11:00 AM - 9:00 PM", phone: "+91 98765 43213", barbers: ["Manoj", "Priya"], services: ["Executive Haircut", "Beard Sculpting", "Kids Styling"], mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.22!2d77.74!3d12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000003!5m2!1sen!2sin" },
  { id: "jayanagar-classic", name: "Jayanagar Classic", address: "11th Main Rd, Jayanagar, Bangalore", hours: "8:00 AM - 8:00 PM", phone: "+91 98765 43214", barbers: ["Kiran", "David"], services: ["Executive Haircut", "Beard Sculpting", "The Full Overhaul", "Charcoal Facial"], mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.22!2d77.58!3d12.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000004!5m2!1sen!2sin" }
];

export const BARBERS = [
  { id: 1, name: "Vikram Singh", role: "Master Barber", branch: "Downtown Core", specialty: "Precision Fades & Scissor Work", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Sarah Lee", role: "Color Specialist", branch: "Downtown Core", specialty: "Creative Coloring & Bleach", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Arjun Reddy", role: "Beard Specialist", branch: "Koramangala Hub", specialty: "Hot Towel Shaves & Beard Sculpting", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Chris Evans", role: "Senior Stylist", branch: "Indiranagar Elite", specialty: "Classic Gentleman Cuts", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Manoj Kumar", role: "Stylist", branch: "Whitefield Lounge", specialty: "Modern Textures", image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Kiran Rao", role: "Master Barber", branch: "Jayanagar Classic", specialty: "Traditional Grooming", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop" }
];
export const SERVICES = [
  { id: 1, title: "Executive Haircut", price: "₹800", desc: "Precision consultation, cut, wash, and premium styling.", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Beard Sculpting", price: "₹500", desc: "Trimming, shaping, and hot towel straight razor line-up.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "The Full Overhaul", price: "₹1500", desc: "Haircut, beard sculpt, black mask facial, and hair wash.", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Color & Highlights", price: "₹2000+", desc: "Professional coloring, bleaching, and tone matching.", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Kids Styling", price: "₹600", desc: "Patient, stylish cuts for the next generation (Under 12).", image: "https://images.unsplash.com/photo-1532710093739-9470acff878b?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Charcoal Facial", price: "₹700", desc: "Deep pore cleansing and skin rejuvenation.", image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=800&auto=format&fit=crop" },
];
export const GALLERY = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532710093739-9470acff878b?q=80&w=1000&auto=format&fit=crop",
];