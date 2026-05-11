import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react"; // Removed Instagram, Facebook, Twitter

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FFCC00]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: THE BRAND LOGO */}
          <div className="space-y-6">
            {/* UPDATED: Image Logo Copied Here */}
            <Link href="/" className="group inline-block">
              <img 
                src="/logo.png" 
                alt="Weldone Barbers Logo" 
                className="h-12 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,204,0,0.2)]"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Uncompromising precision. Timeless style. Experience the ultimate standard in modern barbering.
            </p>
            
            {/* Social Icons - Replaced with raw SVGs so they never break */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#FFCC00] hover:bg-white/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#FFCC00] hover:bg-white/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#FFCC00] hover:bg-white/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-[#FFCC00] transition-colors">Our Story</Link></li>
              <li><Link href="/services" className="hover:text-[#FFCC00] transition-colors">Services & Pricing</Link></li>
              <li><Link href="/barbers" className="hover:text-[#FFCC00] transition-colors">Meet the Team</Link></li>
              <li><Link href="/gallery" className="hover:text-[#FFCC00] transition-colors">The Lookbook</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-[#FFCC00] transition-colors">Contact Us</Link></li>
              <li><Link href="/reviews" className="hover:text-[#FFCC00] transition-colors">Client Reviews</Link></li>
              <li><Link href="#" className="hover:text-[#FFCC00] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#FFCC00] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Headquarters</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FFCC00] shrink-0 mt-0.5" />
                <span>123 Tech Plaza, Downtown Core, Bangalore</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#FFCC00] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#FFCC00] shrink-0" />
                <span>hello@weldonebarbers.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} WELDONE Barbers. All rights reserved.</p>
          <p>Designed with <span className="text-[#FFCC00]">precision</span>.</p>
        </div>
      </div>
    </footer>
  );
}