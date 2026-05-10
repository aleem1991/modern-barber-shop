"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Scissors } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-12 rounded-3xl max-w-lg w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-#FFCC00/10 rounded-full blur-3xl pointer-events-none" />
        
        <Scissors size={48} className="text-#FFCC00 mx-auto mb-6 opacity-50" />
        <h1 className="text-7xl font-black tracking-tighter mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          It looks like we clipped a little too much off the top. The page you are looking for doesn't exist.
        </p>
        
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-#FFCC00 text-black font-bold rounded-xl hover:bg-sky-400 transition-colors">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}