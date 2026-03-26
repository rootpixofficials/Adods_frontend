import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="w-full pb-20 pt-10 px-4 md:px-6 bg-white flex justify-center">
      <div className="container max-w-5xl rounded-[3rem] bg-gradient-to-br from-[#1a1a1a] via-[#050505] to-[#121212] p-12 md:p-24 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
        
        {/* Subtle glass effect or light glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>

        <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white mb-6 z-10 relative tracking-tight leading-tight">
          Let's start designing your project
        </h2>
        
        <p className="text-gray-400 text-base md:text-[1.1rem] max-w-xl mb-12 z-10 relative font-light leading-relaxed">
          Want to see how to transform your brand into a unique style?<br className="hidden md:block" /> Send us a message!
        </p>
        
        <div className="relative z-10 flex items-center justify-center">
          <Link href="/contact" className="peer flex items-center justify-center bg-white text-black px-10 py-4 rounded-[40px] font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]">
            Send us a message
          </Link>
          
          {/* Decorative dashes */}
          <div className="absolute -right-12 -bottom-8 w-16 h-16 pointer-events-none opacity-0 peer-hover:opacity-100 peer-hover:-translate-y-2 transition-all duration-300">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 8 L32 14" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse origin-center" />
              <path d="M15 18 L24 28" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse origin-center [animation-delay:200ms]" />
              <path d="M6 25 L10 35" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse origin-center [animation-delay:400ms]" />
            </svg>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CTA;
