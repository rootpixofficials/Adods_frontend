import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#fafafa] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Top Left: Text & Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-8">
            <div className="mb-6">
              <Link href="/whoweare" className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 tracking-wide bg-white/50 backdrop-blur-sm hover:bg-black hover:text-white transition-all duration-300 animate-breath hover:[animation-play-state:paused]">
                Who we are
              </Link>
            </div>

            <div className="relative mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] text-[#111] tracking-tight relative z-10 max-w-lg">
                Meet Adods: Your Design Partners
              </h2>

              {/* Star SVG Right of Heading (Continuous spin) */}
              <svg className="absolute -top-6 right-10 md:right-24 w-12 h-12 text-black/90 drop-shadow-sm animate-[spin_8s_linear_infinite] hover:fill-gray-900 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L14.5 8.5L22 11L14.5 13.5L12 22L9.5 13.5L2 11L9.5 8.5L12 2Z" />
              </svg>

              {/* Single Loop Cursive Arrow pointing toward the Top Right Image */}
              <svg className="absolute bottom-4 right-0 md:-right-4 lg:-right-8 w-16 h-16 text-black opacity-90 drop-shadow-[4px_4px_0_rgba(180,180,180,0.8)] transition-transform duration-700 hover:scale-110 hover:-rotate-12 cursor-pointer" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 20 90 C 50 60, 60 20, 40 30 C 20 40, 20 70, 50 60 Q 70 50, 90 15" />
                <path d="M 70 15 L 90 15 L 85 35" />
              </svg>
            </div>

            <p className="text-gray-500 text-base md:text-[17px] leading-relaxed max-w-xl font-medium">
              We're not just designers; we're creators, problem-solvers, and your brand's best friends. At Adods, we live and breathe design, from captivating visuals to seamless digital experiences. Think of us as an extension of your team, ready to bring your ideas to life.
            </p>
          </div>

          {/* Top Right: Image 1 */}
          <div className="lg:col-span-5 relative w-full h-[300px] lg:h-[350px] mb-4 lg:mb-0">
            <div className="w-full h-full relative rounded-[32px] overflow-hidden grayscale-[40%] hover:grayscale-0 transition-all duration-700 shadow-sm border border-black/5">
              <Image
                src="/Images/Screenshot 2026-03-19 022454.png"
                alt="Team collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Continuous Black Card - Spanning 12 cols */}
          <div className="lg:col-span-12 bg-[#0a0a0a] rounded-[32px] md:rounded-[40px] relative overflow-hidden flex flex-col lg:flex-row min-h-[420px] shadow-2xl mt-4">

            {/* Wavy background spanning the whole card (simulated via radial gradients & svg) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 select-none" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.12) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(255,255,255,0.08) 0%, transparent 40%)" }}>
              {/* Decorative concentric wavy lines */}
              <svg className="absolute w-full h-full opacity-40 scale-[1.3] -translate-y-8" viewBox="0 0 1000 500" fill="none" stroke="white" strokeWidth="0.75" preserveAspectRatio="none">
                <path d="M-100,250 Q200,100 500,250 T1100,250" />
                <path d="M-100,280 Q200,130 500,280 T1100,280" />
                <path d="M-100,310 Q200,160 500,310 T1100,310" />
                <path d="M-100,340 Q200,190 500,340 T1100,340" />
                <path d="M-100,370 Q200,220 500,370 T1100,370" />
                <path d="M-100,400 Q200,250 500,400 T1100,400" />
              </svg>
            </div>

            {/* Left Box (Text & Pills) */}
            <div className="flex-1 p-8 md:p-14 relative z-10 flex flex-col justify-between">
              <div>
                <h3 className="text-4xl md:text-[50px] font-extrabold text-white mb-2 tracking-tight">40%</h3>
                <p className="text-gray-300 font-medium text-sm md:text-[15px] tracking-wide relative">
                  Increased growth revenues
                </p>
              </div>

              {/* Floating Pills Grid */}
              <div className="mt-20 flex flex-wrap gap-x-3 gap-y-4 max-w-[500px]">
                <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs md:text-[13px] -rotate-3 hover:rotate-0 hover:scale-105 transition-all shadow-[0_8px_30px_rgb(255,255,255,0.12)] cursor-default">Marketing</span>
                <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs md:text-[13px] rotate-2 hover:rotate-0 hover:scale-105 transition-all shadow-[0_8px_30px_rgb(255,255,255,0.12)] cursor-default">Web Design</span>
                <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs md:text-[13px] -rotate-1 hover:rotate-0 hover:scale-105 transition-all shadow-[0_8px_30px_rgb(255,255,255,0.12)] cursor-default">Web Design</span>
                <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs md:text-[13px] rotate-3 hover:rotate-0 hover:scale-105 transition-all shadow-[0_8px_30px_rgb(255,255,255,0.12)] cursor-default mt-1">Product Design</span>
                <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs md:text-[13px] -rotate-2 hover:rotate-0 hover:scale-105 transition-all shadow-[0_8px_30px_rgb(255,255,255,0.12)] cursor-default mt-3">SEO</span>
                <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs md:text-[13px] rotate-1 hover:rotate-0 hover:scale-105 transition-all shadow-[0_8px_30px_rgb(255,255,255,0.12)] cursor-default mt-1">Brand Positioning</span>
              </div>
            </div>

            {/* Right Box (Simulated Cutout + Image 2) */}
            <div className="w-full lg:w-[41.666%] h-[320px] lg:h-auto lg:self-stretch relative z-10 flex flex-col">
              <div className="hidden lg:block lg:flex-[1]"></div>
              {/* Inverted L Cutout magic block that sits exactly on the bottom right corner */}
              <div className="w-full flex-1 lg:flex-[4] bg-[#fafafa] rounded-tl-[32px] md:rounded-tl-[40px] pl-6 pt-6 relative">
                {/* The actual second image placed inside the cutout */}
                <div className="absolute inset-0 top-6 left-6 rounded-tl-[24px] md:rounded-tl-[32px] overflow-hidden grayscale-[40%] hover:grayscale-0 transition-all duration-700 shadow-sm border-t border-l border-black/5">
                  <Image
                    src="/Images/Screenshot 2026-03-19 024052.png"
                    alt="Working together"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
