import React from "react";
import Image from "next/image";

export default function Orbit() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center group cursor-pointer mt-10 md:mt-0">
      
      {/* Floating 250+ clients card (Top Left area) */}
      <div className="absolute top-0 md:-top-4 left-0 md:-left-12 xl:-left-16 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex-col items-start hidden sm:flex pointer-events-none z-30 animate-blob">
        <div className="text-[13px] font-bold text-gray-900 mb-2 leading-tight">
          250+ Satisfied<br/>Clients
        </div>
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-800">JH</div>
          <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-800">AM</div>
          <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-purple-800">SD</div>
          <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">+</div>
        </div>
      </div>

      {/* Central Sun - Adods Logo */}
      <div className="absolute z-10 w-32 h-32 md:w-36 md:h-36 bg-black rounded-full shadow-xl flex flex-col items-center justify-center border-4 border-white transition-transform duration-300 group-hover:scale-110">
        <Image
          src="/Images/adods_white_logo.png"
          alt="ADODS Logo"
          width={128}
          height={64}
          className="object-contain w-24 md:w-28 block mx-auto mt-2"
          priority
        />
      </div>

      {/* Outer Orbit (Facebook & LinkedIn) */}
      <div className="absolute inset-4 sm:inset-0 border-[0.5px] border-gray-200 rounded-full animate-[spin_25s_linear_infinite] group-hover:[animation-play-state:paused]">
        
        {/* Facebook */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#1877F2] rounded-2xl shadow-xl flex items-center justify-center text-white animate-[spin_25s_linear_infinite] border-2 border-white"
          style={{ animationDirection: "reverse" }}
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>

        {/* LinkedIn */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-[#0A66C2] rounded-2xl shadow-xl flex items-center justify-center text-white animate-[spin_25s_linear_infinite] border-2 border-white"
          style={{ animationDirection: "reverse" }}
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
      </div>

      {/* Inner Orbit (Instagram & WhatsApp) */}
      <div className="absolute inset-20 sm:inset-16 border-[0.5px] border-gray-200 rounded-full animate-[spin_18s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
        
        {/* Instagram */}
        <div 
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-2xl shadow-xl flex items-center justify-center text-white animate-[spin_18s_linear_infinite] border-2 border-white"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </div>

        {/* WhatsApp */}
        <div 
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#25D366] rounded-2xl shadow-xl flex items-center justify-center text-white animate-[spin_18s_linear_infinite] border-2 border-white"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.395.702 4.673 2.015 6.641L.423 24l5.485-1.439a11.968 11.968 0 006.123 1.686c6.645 0 12.031-5.386 12.031-12.031C24.062 5.385 18.676 0 12.031 0zm6.183 17.273c-.266.75-1.523 1.458-2.112 1.545-.558.083-1.28.169-3.778-.838-3.006-1.213-4.938-4.306-5.088-4.509-.15-.203-1.21-1.611-1.21-3.075 0-1.464.764-2.185 1.036-2.486.273-.301.595-.377.794-.377.198 0 .396.002.57.01.189.009.444-.075.694.526.265.642.861 2.105.938 2.257.078.152.13.33.027.533-.102.203-.153.33-.306.482-.152.152-.317.331-.453.456-.153.137-.315.289-.142.59.172.302.766 1.272 1.644 2.052 1.135 1.006 2.083 1.317 2.384 1.469.302.152.48.127.658-.076.178-.203.766-.89.967-1.196.2-.305.4-.253.676-.152.277.101 1.748.825 2.049.976.3.153.5.228.572.355.074.127.074.737-.193 1.487z"/>
          </svg>
        </div>

      </div>
    </div>
  );
}
