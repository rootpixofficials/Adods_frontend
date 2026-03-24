import React from "react";

export default function BrandMarquee() {
  return (
    <div className="mt-16 md:mt-24 w-full max-w-7xl mx-auto overflow-hidden flex items-center justify-center bg-transparent relative z-10 px-4 sm:px-8">
      {/* Ticker Container with fade-out edges */}
      <div 
        className="flex w-full overflow-hidden" 
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        
        {/* Animated Track */}
        <div className="flex animate-marquee min-w-max gap-12 sm:gap-24 items-center opacity-60 hover:opacity-100 transition-opacity duration-500 py-4">
          
          {/* Group 1 */}
          <div className="flex gap-12 sm:gap-24 items-center">
            <span className="text-3xl font-bold italic tracking-tighter">Sass</span>
            <span className="text-gray-400 font-bold">+</span>
            <span className="text-3xl font-bold font-serif opacity-90">ububa</span>
            <span className="text-gray-400 font-bold">+</span>
            <span className="text-3xl font-extrabold tracking-widest lowercase">digg</span>
            <span className="text-gray-400 font-bold">+</span>
            <span className="text-3xl font-medium tracking-tight text-gray-800 relative inline-flex items-center">
              <div className="w-4 h-4 border-2 border-gray-800 rounded-full mr-2 opacity-70"></div>
              Cinfores
            </span>
            <span className="text-gray-400 font-bold">+</span>
            <span className="text-3xl font-semibold opacity-80 flex items-center pr-4">☕ Java</span>
          </div>

          <span className="text-gray-400 font-bold">+</span>

          {/* Group 2 (Duplicate for Seamless Loop) */}
          <div className="flex gap-12 sm:gap-24 items-center" aria-hidden="true">
            <span className="text-3xl font-bold italic tracking-tighter">Sass</span>
            <span className="text-gray-400 font-bold">+</span>
            <span className="text-3xl font-bold font-serif opacity-90">ububa</span>
            <span className="text-gray-400 font-bold">+</span>
            <span className="text-3xl font-extrabold tracking-widest lowercase">digg</span>
            <span className="text-gray-400 font-bold">+</span>
            <span className="text-3xl font-medium tracking-tight text-gray-800 relative inline-flex items-center">
              <div className="w-4 h-4 border-2 border-gray-800 rounded-full mr-2 opacity-70"></div>
              Cinfores
            </span>
            <span className="text-gray-400 font-bold">+</span>
            <span className="text-3xl font-semibold opacity-80 flex items-center pr-12">☕ Java</span>
          </div>

        </div>
      </div>
    </div>
  );
}
