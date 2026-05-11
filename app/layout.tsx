import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProvider from "@/components/ScrollProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weldone Barbers | Master the Art of Grooming",
  description: "Experience premium grooming at our exclusive branches.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} antialiased overflow-x-hidden bg-[#050505] text-white`}>
        <ScrollProvider>
          <Navbar />
          <main className="pt-24 min-h-[100svh] flex flex-col">
            {children}
          </main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}