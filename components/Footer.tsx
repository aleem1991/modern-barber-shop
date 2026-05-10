import Link from "next/link";
import { MapPin } from "lucide-react";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20 pt-16 pb-8 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div className="md:col-span-2">
          {/* Minimalist WELDONE Footer Logo */}
          <Link href="/" className="inline-flex items-stretch p-[2px] border-2 border-[#FFCC00] mb-6 hover:scale-105 transition-transform">
            <div className="bg-[#FFCC00] px-2 py-1 flex items-center justify-center">
              <span className="font-sans font-black text-black text-xl leading-none tracking-tighter uppercase">WEL</span>
            </div>
            <div className="bg-black px-2 py-1 flex items-center justify-center">
              <span className="font-sans font-black text-[#FFCC00] text-xl leading-none tracking-tighter uppercase">DONE</span>
            </div>
          </Link>
          
          <p className="text-gray-500 max-w-sm mb-6">
            Redefining the modern grooming aesthetic. Five exclusive locations. Elite craftsmanship.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-all"><InstagramIcon size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-all"><TwitterIcon size={18} /></a>
            <Link href="/branches" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-all"><MapPin size={18} /></Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Explore</h4>
          <ul className="space-y-4 text-gray-500 font-medium">
            <li><Link href="/about" className="hover:text-[#FFCC00] transition-colors">Our Story</Link></li>
            <li><Link href="/services" className="hover:text-[#FFCC00] transition-colors">Services</Link></li>
            <li><Link href="/barbers" className="hover:text-[#FFCC00] transition-colors">Meet the Team</Link></li>
            <li><Link href="/gallery" className="hover:text-[#FFCC00] transition-colors">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Legal</h4>
          <ul className="space-y-4 text-gray-500 font-medium">
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center border-t border-white/5 pt-8 text-gray-600 font-medium text-sm">
        <p>&copy; {new Date().getFullYear()} WELDONE Barbers. All rights reserved.</p>
      </div>
    </footer>
  );
}