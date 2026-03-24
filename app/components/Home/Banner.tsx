// src/app/components/Home/Banner.tsx
import Link from "next/link";
import Orbit from "./Orbit";
import BrandMarquee from "./BrandMarquee";

export default function Banner() {
  return (
    <section className="bg-white pt-24 pb-10 md:pt-32 overflow-hidden relative">

      {/* Minimal Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[100px] animate-blob mix-blend-multiply opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] bg-pink-100/50 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply opacity-70"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="max-w-2xl relative z-20">
            {/* "Welcome to Adods" - Animated Pill bouncing slightly */}
            <div className="inline-block relative mb-8 animate-breath hover:[animation-play-state:paused]">
              <span className="border border-gray-300 rounded-full px-5 py-2 text-sm text-gray-700 font-semibold tracking-wide shadow-sm bg-white/80 backdrop-blur-sm cursor-default hover:bg-gray-50 transition-colors">
                Welcome to Adods
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight relative mb-8 text-gray-900">
              <span className="block">WE CRAFT BRANDS</span>
              <span className="block mt-2">& DIGITAL</span>
              <span className="block mt-2 relative inline-block">
                EXPERIENCES
                {/* Abstract Star SVG next to experiences */}
                <svg className="absolute -right-24 top-0 w-20 h-20 text-black animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C12 7.525 16.475 12 22 12C16.475 12 12 16.475 12 22C12 16.475 7.525 12 2 12C7.525 12 12 7.525 12 2Z" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-[17px] max-w-lg leading-relaxed font-medium mb-12 relative z-10">
              Elevate Your Brand with Exceptional Design Solutions. From branding to UI, we bring your vision to life with tailored online design services.
            </p>

            {/* Button */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center bg-black text-white pl-8 pr-2 py-2 rounded-full text-base font-semibold hover:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 animate-breath hover:[animation-play-state:paused]"
              >
                <span className="mr-6">Let's talk</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-95 transition-transform shadow-sm">
                  <svg className="w-5 h-5 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </Link>
              {/* Quirky lines next to button */}
              <div className="ml-6 flex gap-2 rotate-12 opacity-80 animate-[pulse_2s_ease-in-out_infinite]">
                <div className="w-1.5 h-6 bg-black rounded-full mix-blend-multiply"></div>
                <div className="w-1.5 h-6 bg-black rounded-full translate-y-3 mix-blend-multiply"></div>
                <div className="w-1.5 h-6 bg-black rounded-full translate-y-1 mix-blend-multiply"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Rotating Orbit Component */}
          <div className="relative pt-12 lg:pt-0 z-20">
            <Orbit />
          </div>
        </div>

        {/* Bottom Logo Strip Component */}
        <BrandMarquee />
      </div>
    </section>
  );
}