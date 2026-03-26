import React from "react";

const ServiceCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8 md:p-10 transition-all duration-500 hover:bg-[#111111] hover:border-white/20 group">
    
    {/* Subtle Inner Glow on Hover */}
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] rounded-[32px] pointer-events-none transition-opacity duration-500 delay-100"></div>

    {/* Custom Icon */}
    <div className="mb-10 w-[48px] h-[48px] bg-white/[0.03] border border-white/10 rounded-[14px] flex items-center justify-center relative overflow-hidden">
      {/* Outer border lines aesthetic */}
      <div className="w-4 h-4 border border-white/40 flex items-center justify-center">
        {/* Glowing Center */}
        <div className="w-2 h-2 bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.6)]"></div>
      </div>
    </div>

    {/* Text Blocks */}
    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-white transition-colors duration-300">
      {title}
    </h3>
    <p className="text-[#a0a0a0] text-sm md:text-[15px] leading-[1.8] font-medium group-hover:text-gray-300 transition-colors duration-300">
      {desc}
    </p>

  </div>
);

export default function WhatWeDo() {
  const dummyText = "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos";
  
  const subtitleText = "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ali";

  const services = [
    { title: "Brand Identity", desc: dummyText },
    { title: "Illustration", desc: dummyText },
    { title: "UI/UX Design", desc: dummyText },
    { title: "Frontend Design", desc: dummyText },
    { title: "Android/IOS App", desc: dummyText },
    { title: "Software Development", desc: dummyText },
  ];

  return (
    <section className="bg-black py-24 md:py-32 overflow-hidden relative selection:bg-white/20">
      
      {/* Background Radial Glow (Top Left) */}
      <div 
        className="absolute top-0 left-0 w-full h-[1000px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 20% 15%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 25%, transparent 60%)"
        }}
      ></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-20 mb-20 lg:mb-24">
          
          {/* Left Column (Badge + Headline) */}
          <div className="max-w-2xl flex flex-col items-start relative z-20">
            <span className="inline-block border border-white/10 rounded-full px-5 py-2 text-[13px] md:text-sm font-semibold text-gray-300 tracking-wide bg-white/5 backdrop-blur-sm mb-6 lg:mb-8">
              What we do
            </span>
            
            <h2 className="text-[36px] md:text-5xl lg:text-[52px] font-bold leading-[1.12] text-white tracking-tight">
              We design meaningful not just quick impressions
            </h2>
          </div>

          {/* Right Column (Supporting Text) */}
          <div className="max-w-[400px] lg:mt-12 relative z-20">
            <p className="text-[#a0a0a0] text-base md:text-[17px] leading-relaxed font-medium">
              {subtitleText}
            </p>
          </div>
          
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-20">
          {services.map((service, idx) => (
            <ServiceCard key={idx} title={service.title} desc={service.desc} />
          ))}
        </div>

      </div>
    </section>
  );
}
