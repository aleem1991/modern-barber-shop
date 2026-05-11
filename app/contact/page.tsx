"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", // NEW: Phone state added
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    
    const targetEmail = "mraleem2004@gmail.com"; 
    
    const subject = encodeURIComponent(`New Inquiry from ${formData.firstName} ${formData.lastName}`);
    
    // UPDATED: Logic to include the phone number if it exists
    const phoneText = formData.phone ? `Phone: ${formData.phone}\n` : "";
    
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      phoneText + `\n` +
      `Message:\n${formData.message}`
    );

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="relative container mx-auto px-6 py-24 min-h-screen max-w-6xl">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">GET IN <span className="text-[#FFCC00]">TOUCH</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Have a question? Reach out to our headquarters.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
          <div className="glass-card bg-black/60 p-8 rounded-3xl flex items-center gap-6 group hover:border-[#FFCC00]/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#FFCC00]/10 flex items-center justify-center text-[#FFCC00] group-hover:scale-110 transition-transform"><MapPin size={28} /></div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-white">Headquarters</h3>
              <p className="text-gray-400">123 Tech Plaza, Downtown Core, Bangalore</p>
            </div>
          </div>
          <div className="glass-card bg-black/60 p-8 rounded-3xl flex items-center gap-6 group hover:border-[#FFCC00]/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#FFCC00]/10 flex items-center justify-center text-[#FFCC00] group-hover:scale-110 transition-transform"><Phone size={28} /></div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-white">Direct Line</h3>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
          </div>
          <div className="glass-card bg-black/60 p-8 rounded-3xl flex items-center gap-6 group hover:border-[#FFCC00]/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#FFCC00]/10 flex items-center justify-center text-[#FFCC00] group-hover:scale-110 transition-transform"><Mail size={28} /></div>
            <div>
              <h3 className="text-xl font-bold mb-1 text-white">Email Us</h3>
              <p className="text-gray-400">mraleem2004@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="glass-card bg-black/60 p-10 rounded-3xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Send a Message</h2>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">First Name</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCC00] transition-colors" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Last Name</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCC00] transition-colors" placeholder="Doe" />
              </div>
            </div>

            {/* Email and Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCC00] transition-colors" placeholder="john@example.com" />
              </div>
              {/* NEW: Optional Phone Input */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Phone <span className="text-gray-600 text-xs normal-case">(Optional)</span></label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCC00] transition-colors" placeholder="+91 98765..." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase">Message</label>
              <textarea required rows={4} name="message" value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCC00] transition-colors resize-none" placeholder="How can we help you?" />
            </div>
            
            <button type="submit" className="w-full py-4 bg-[#FFCC00] text-black font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors hover:scale-[1.02] active:scale-[0.98]">
              Send Inquiry <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}