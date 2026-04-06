import React from 'react';
import CTA from '../components/Home/CTA';
import AnimatedSection from '../components/AnimatedSection';

export default function OurWorks() {
  const projects = [
    { title: "Zeno Financial", category: "Fintech Dashboard", tags: ["UI/UX", "Next.js"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
    { title: "Lumina Beauty", category: "E-Commerce", tags: ["Shopify", "Branding"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
    { title: "Aura Architecture", category: "Corporate Website", tags: ["Web Design", "GSAP"], image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
    { title: "Flow App", category: "Productivity Tool", tags: ["Mobile App", "React Native"], image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
    { title: "Peak Analytics", category: "SaaS Platform", tags: ["Web App", "Dashboard"], image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
    { title: "Nova Tech", category: "Rebranding", tags: ["Strategy", "Identity"], image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }
  ];

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
          
          {/* Mock filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Web Design", "App Development", "Branding", "Marketing"].map((f, i) => (
              <button key={i} className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all ${i === 0 ? "bg-white text-black border-white" : "border-white/20 text-gray-300 hover:border-white hover:text-white"}`}>
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
            {projects.map((project, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.1} className="group cursor-pointer rounded-[2.5rem] bg-white p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
                <div className="relative w-full h-[320px] overflow-hidden rounded-[2rem] mb-6 mb-6 bg-gray-100">
                  <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* View Project Pill hover effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:-translate-y-1/2">
                    <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl inline-block whitespace-nowrap">
                      View full case study
                    </span>
                  </div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="flex flex-col px-4 pb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-semibold px-3 py-1 bg-gray-100 rounded-lg text-gray-600 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">{project.title}</h3>
                  <span className="text-gray-500 text-lg font-medium">{project.category}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection direction="up" className="mt-20 text-center">
            <button className="bg-white border-2 border-black text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-colors duration-300">
              Load More Projects
            </button>
          </AnimatedSection>
        </div>
      </div>
      
      <AnimatedSection direction="up">
        <CTA />
      </AnimatedSection>
    </div>
  );
}