import React from "react";

export default function BrandMarquee() {
  // Generate logo paths from 1 to 61
  const logos = Array.from({ length: 61 }, (_, i) => `/Images/Brandlogos/logo ${i + 1}.png`);

  return (
    <div className="my-16 md:my-28 w-[95%] md:w-[96%] mx-auto overflow-hidden flex flex-col items-center justify-center py-20 md:py-32 relative z-10 rounded-[2rem] md:rounded-[4rem] border border-white/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] bg-[#050505]">
      
      {/* Wow-factor glowing animated background */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[120%] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[120%] bg-white/[0.04] blur-[140px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" style={{ maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, #000 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, #000 40%, transparent 100%)" }}></div>

      <div className="relative z-20 flex flex-col items-center w-full">
        <p className="text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-white to-gray-500">
          Trusted by 60+ innovative teams universally
        </p>

        {/* Ticker Container with fade-out edges designed for dark bg */}
        <div 
          className="flex w-full overflow-hidden" 
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
          
          {/* Animated Track - Increased Speed */}
          <div className="flex animate-[marquee_60s_linear_infinite] min-w-max items-center hover:[animation-play-state:paused]">
            
            {/* Group 1 */}
            <div className="flex items-center gap-4 md:gap-8 pl-4">
              {logos.map((src, idx) => (
                <React.Fragment key={idx}>
                  <div className="relative w-[380px] h-[220px] md:w-[480px] md:h-[280px] flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-[1.12] group">
                     {/* Hover Glow Behind Logo */}
                     <div className="absolute inset-0 bg-white/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <img 
                       src={src} 
                       alt={`Brand Logo ${idx + 1}`} 
                       className="w-full h-full object-contain opacity-60 group-hover:opacity-100 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-500 relative z-10 p-2"
                     />
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Group 2 (Duplicate for Seamless Loop) */}
            <div className="flex items-center gap-4 md:gap-8 pl-4 md:pl-8 pr-4" aria-hidden="true">
              {logos.map((src, idx) => (
                <React.Fragment key={`dup-${idx}`}>
                  <div className="relative w-[380px] h-[220px] md:w-[480px] md:h-[280px] flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-[1.12] group">
                     {/* Hover Glow Behind Logo */}
                     <div className="absolute inset-0 bg-white/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <img 
                       src={src} 
                       alt={`Brand Logo ${idx + 1}`} 
                       className="w-full h-full object-contain opacity-60 group-hover:opacity-100 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-500 relative z-10 p-2"
                     />
                  </div>
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Marquee Animation Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
