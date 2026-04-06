"use client";

import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name: "John D.",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.",
    name: "Sarah W.",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    text: "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi.",
    name: "Michael R.",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentT = testimonials[currentIndex];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-white text-black">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column (Reviews Text) */}
          <div className="w-full md:w-7/12 flex flex-col justify-between py-4">
            
            <div className="flex flex-col flex-grow">
              {/* Header Area */}
              <div className="flex flex-col items-start text-left mb-10 md:mb-20 relative">
                <span className="px-5 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase border border-gray-300 rounded-[30px] mb-8 hover:bg-black hover:text-white transition-colors duration-300">
                  Reviews
                </span>
                <h2 className="text-3xl sm:text-[2.5rem] md:text-5xl lg:text-[4rem] font-bold leading-[1.05] tracking-tight max-w-2xl text-black">
                  Here's what people say about our work
                </h2>
              </div>
              
              {/* Testimonial Area */}
              <div className="flex flex-col relative mb-10 md:mb-16 min-h-[180px]">
                {/* Quote Icon — inline on mobile, absolute on md+ */}
                <svg className="w-10 h-10 md:w-14 md:h-14 text-black mb-3 md:mb-0 md:absolute md:-left-10 md:-top-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    d="M10 11V8C10 6.89543 9.10457 6 8 6H6C4.89543 6 4 6.89543 4 8V11C4 12.1046 4.89543 13 6 13H8C5.5 13.5 4 15 4 17.5" />
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    d="M20 11V8C20 6.89543 19.1046 6 18 6H16C14.8954 6 14 6.89543 14 8V11C14 12.1046 14.8954 13 16 13H18C15.5 13.5 14 15 14 17.5" />
                </svg>

                <div key={`text-${currentT.id}`} className="animate-[fadeIn_0.5s_ease-in-out] md:pl-2">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 leading-[1.6] font-normal mb-8 z-10 relative">
                    {currentT.text}
                  </p>
                  <div className="flex flex-col mt-4">
                    <span className="font-semibold text-lg text-black">{currentT.name}</span>
                    <span className="text-gray-400 text-sm mt-0.5">{currentT.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots and Arrows */}
            <div className="flex items-center justify-between md:justify-start md:space-x-12 pb-8 px-4 md:px-0 mt-4 md:mt-0">
              {/* Arrows */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                  aria-label="Previous Testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                  aria-label="Next Testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center space-x-3 hidden md:flex">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                      currentIndex === idx ? 'bg-black w-6' : 'bg-gray-200 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Column (Image & small text) — hidden on mobile, shown md+ */}
          <div className="hidden md:flex w-full md:w-5/12 flex-col items-center md:items-end space-y-16 mt-4 md:mt-20">
            <p className="text-gray-400 text-[13px] leading-loose max-w-[240px] px-4 md:px-0 md:text-right self-start md:self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            
            {/* Oval masked image */}
            <div className="relative w-[260px] h-[330px] lg:w-[300px] lg:h-[380px] overflow-hidden rounded-[150px] shadow-2xl transition-transform hover:scale-[1.02] duration-500 ease-out group">
              <img 
                key={`img-${currentT.id}`}
                src={currentT.image} 
                alt={currentT.name}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 animate-[fadeIn_0.5s_ease-in-out]"
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* Simple fade animation styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default Testimonial;
