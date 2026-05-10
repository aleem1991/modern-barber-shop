import { BRANCHES, BARBERS, SERVICES } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowLeft, Scissors, User, Sparkles } from "lucide-react";

// Required for Hostinger Static Export to pre-build all 5 branch pages
export function generateStaticParams() {
  return BRANCHES.map((branch) => ({
    id: branch.id,
  }));
}

export default async function BranchDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const branch = BRANCHES.find((b) => b.id === resolvedParams.id);
  
  if (!branch) return notFound();

  // Find barbers that work at THIS specific branch
  const branchBarbers = BARBERS.filter((b) => b.branch === branch.name);
  
  // Find services that are offered at THIS specific branch
  const branchServices = SERVICES.filter((s) => branch.services.includes(s.title));

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-24 max-w-7xl">
      
      {/* Back Button */}
      <Link href="/branches" className="inline-flex items-center gap-2 text-gray-400 hover:text-#FFCC00 transition-colors mb-8 sm:mb-12">
        <ArrowLeft size={18} /> Back to all locations
      </Link>

      {/* Branch Header */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4 text-white">
          {branch.name.toUpperCase()} <span className="text-#FFCC00">STATION</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Experience premium grooming tailored specifically at our {branch.name} location.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: Map & Timings */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 sm:p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
              <MapPin className="text-#FFCC00" /> Location Details
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Address</p>
                <p className="font-medium text-lg text-white">{branch.address}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Operating Hours</p>
                <p className="flex items-center gap-2 font-medium text-lg text-white"><Clock size={18} className="text-#FFCC00"/> {branch.hours}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Direct Line</p>
                <p className="flex items-center gap-2 font-medium text-lg text-white"><Phone size={18} className="text-#FFCC00"/> {branch.phone}</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-2 rounded-3xl overflow-hidden h-64 sm:h-80 w-full relative group">
            <div className="absolute inset-0 bg-#FFCC00/10 pointer-events-none group-hover:bg-transparent transition-colors z-10 rounded-3xl" />
            <iframe 
  src={branch.mapUrl} 
  className="w-full h-full rounded-2xl transition-all duration-700 lg:grayscale lg:group-hover:grayscale-0" 
/>
          </div>
        </div>

        {/* RIGHT COLUMN: Barbers & Services */}
        <div className="lg:col-span-7 space-y-8 sm:space-y-12">
          
          {/* Barbers Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-4">
              <User className="text-#FFCC00" /> Artists on Duty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branchBarbers.length > 0 ? branchBarbers.map(barber => (
                <div key={barber.id} className="glass-card p-4 rounded-2xl flex items-center gap-4 hover:border-#FFCC00/50 transition-colors">
                  <img src={barber.image} alt={barber.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/10" />
                  <div>
                    <p className="font-bold text-white">{barber.name}</p>
                    <p className="text-xs text-sky-400 uppercase tracking-wider">{barber.role}</p>
                  </div>
                </div>
              )) : (
                <p className="text-gray-500 italic">Artists currently rotating. Call for schedules.</p>
              )}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white border-b border-white/10 pb-4">
              <Sparkles className="text-#FFCC00" /> Services Offered Here
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branchServices.map(service => (
                <div key={service.id} className="glass-card p-5 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-white text-lg">{service.title}</h3>
                    <span className="text-#FFCC00 font-black">{service.price}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}