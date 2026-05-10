import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Critical for Hostinger Static Hosting
  images: {
    unoptimized: true, // Required for static export
  },
  // Moved to the top-level for Next.js 16+
  reactCompiler: true, 
};

export default nextConfig;