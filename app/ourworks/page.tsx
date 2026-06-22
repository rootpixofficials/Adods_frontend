"use client";

import React, { useState } from 'react';
import CTA from '../components/Home/CTA';
import AnimatedSection from '../components/AnimatedSection';
import { allProjects } from '../data/projects';

export default function OurWorks() {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  // allProjects is now imported from ../data/projects.ts

  const filters = ["All", "Branding", "Marketing", "Web Design", "Web Development"];

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <AnimatedSection className="relative w-full pt-44 pb-20 px-6 bg-black text-white overflow-hidden" direction="none">
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto relative z-10 max-w-6xl text-center">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-full mb-8 inline-block">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold mb-8 tracking-tight leading-tight">
            Proof is in the pixels
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            A curated selection of our finest work. See how we've helped visionary brands innovate, scale, and dominate their industries.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((f, i) => (
              <button 
                key={i} 
                onClick={() => { setFilter(f); setVisibleCount(6); }}
                className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all ${filter === f ? "bg-white text-black border-white" : "border-white/20 text-gray-300 hover:border-white hover:text-white"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery */}
      <div className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedProjects.map((project, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.1} className="group cursor-pointer rounded-xl overflow-hidden shadow-md block h-[280px] md:h-[320px] lg:h-[350px] w-full border border-black/5">
                <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {visibleCount < filteredProjects.length && (
            <AnimatedSection direction="up" className="mt-20 text-center">
              <button 
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="bg-white border-2 border-black text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-colors duration-300"
              >
                Load More Projects
              </button>
            </AnimatedSection>
          )}
        </div>
      </div>
      
      <AnimatedSection direction="up">
        <CTA />
      </AnimatedSection>
    </div>
  );
}
