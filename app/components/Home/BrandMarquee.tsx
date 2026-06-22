import React from "react";

export default function BrandMarquee() {
  // Generate logo paths from 1 to 61 to populate the marquee
  const logos = Array.from({ length: 61 }, (_, i) => `/images/Brandlogos/logo ${i + 1}.png`);

  return (
    <div className="w-full mt-20 md:mt-28 py-10 md:py-14 bg-transparent flex flex-col relative z-10 overflow-hidden">
      
      {/* Ticker Container */}
      <div className="flex w-full overflow-hidden">
        
        {/* Animated Track */}
        <div className="flex w-fit animate-[marquee_120s_linear_infinite] hover:[animation-play-state:paused]">
          
          {/* Group 1 */}
          <div className="flex items-stretch">
            {logos.map((src, idx) => (
              <div 
                key={idx} 
                className="w-[300px] md:w-[450px] flex-shrink-0 flex items-center justify-center py-6 px-4 md:py-8 md:px-8 transition-opacity duration-300 cursor-pointer group"
              >
                <img 
                  src={src} 
                  alt={`Client Logo ${idx + 1}`} 
                  className="w-52 md:w-72 h-28 md:h-36 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          {/* Group 2 (Duplicate for Seamless Loop) */}
          <div className="flex items-stretch" aria-hidden="true">
            {logos.map((src, idx) => (
              <div 
                key={`dup-${idx}`} 
                className="w-[300px] md:w-[450px] flex-shrink-0 flex items-center justify-center py-6 px-4 md:py-8 md:px-8 transition-opacity duration-300 cursor-pointer group"
              >
                <img 
                  src={src} 
                  alt={`Client Logo ${idx + 1}`} 
                  className="w-52 md:w-72 h-28 md:h-36 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
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
