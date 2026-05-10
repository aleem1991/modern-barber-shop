"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare, TrendingUp, User, Send } from "lucide-react";

// Mock data for initial reviews
const INITIAL_REVIEWS = [
  { id: 1, name: "Arjun M.", rating: 5, date: "May 2, 2026", comment: "Absolutely flawless fade. Marcus and his team are true artists. The hot towel shave is a must-try experience." },
  { id: 2, name: "David S.", rating: 5, date: "April 28, 2026", comment: "Best barbershop in Bangalore, hands down. The vibe is immaculate, the aesthetic is premium, and the service is elite." },
  { id: 3, name: "Rohan K.", rating: 4, date: "April 15, 2026", comment: "Great atmosphere and a really sharp cut. Had to wait a few minutes past my appointment time, but the result was worth it." },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [formData, setFormData] = useState({ name: "", rating: 5, comment: "" });

  // Analytics Calculations
  const totalReviews = reviews.length;
  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews).toFixed(1);
  const fiveStarCount = reviews.filter(r => r.rating === 5).length;
  const fiveStarPercentage = Math.round((fiveStarCount / totalReviews) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    const newReview = {
      id: Date.now(),
      name: formData.name,
      rating: formData.rating,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      comment: formData.comment,
    };

    setReviews([newReview, ...reviews]); // Adds new review to the top of the list
    setFormData({ name: "", rating: 5, comment: "" }); // Reset form
  };

  return (
    <div className="relative container mx-auto px-6 py-24 min-h-screen max-w-7xl">
      
      {/* Premium Gold Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FFCC00]/5 blur-[150px] pointer-events-none z-0 rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFCC00]/5 blur-[120px] pointer-events-none z-0 rounded-full mix-blend-screen" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">CLIENT <span className="text-[#FFCC00]">REVIEWS</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">See what our clients are saying, or leave your own mark.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* LEFT COLUMN: Analytics & Form */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Analytics Dashboard */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="glass-card bg-black/60 p-8 rounded-3xl border border-white/5">
            <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <TrendingUp className="text-[#FFCC00]" size={20}/> Overall Rating
            </h2>
            <div className="flex items-center gap-6">
              <div className="text-6xl font-black text-[#FFCC00] tracking-tighter">{averageRating}</div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className={star <= Number(averageRating) ? "fill-[#FFCC00] text-[#FFCC00]" : "text-gray-600"} />
                  ))}
                </div>
                <p className="text-gray-400 text-sm font-medium">Based on {totalReviews} reviews</p>
                <p className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest mt-1">{fiveStarPercentage}% 5-Star Ratings</p>
              </div>
            </div>
          </motion.div>

          {/* Submission Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card bg-black/60 p-8 rounded-3xl border border-white/5">
            <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <MessageSquare className="text-[#FFCC00]" size={20}/> Leave a Review
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Interactive Star Rating */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Your Rating</label>
                <div className="flex gap-2 cursor-pointer">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={28} 
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className={`transition-all ${
                        star <= (hoveredStar || formData.rating) 
                          ? "fill-[#FFCC00] text-[#FFCC00] scale-110" 
                          : "text-gray-600 hover:text-gray-400"
                      }`} 
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#FFCC00] transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Your Experience</label>
                <textarea 
                  required
                  rows={4} 
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFCC00] transition-colors resize-none" 
                  placeholder="Tell us about your haircut..."
                />
              </div>
              
              <button type="submit" className="w-full py-4 bg-[#FFCC00] text-black font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors hover:scale-[1.02] active:scale-[0.98]">
                Post Review <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Review Feed */}
        <div className="lg:col-span-7">
          <div className="flex flex-col gap-6">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card bg-black/40 p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-[#FFCC00]/20 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-white">{review.name}</h3>
                    <p className="text-xs text-gray-500 font-medium tracking-widest uppercase mt-1">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className={star <= review.rating ? "fill-[#FFCC00] text-[#FFCC00]" : "text-gray-700"} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{review.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}