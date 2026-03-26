import React from 'react';
import CTA from '../components/Home/CTA';

export default function WhatWeDo() {
  const services = [
    { 
      title: "Digital Marketing", 
      desc: "Data-driven strategies to boost your online presence and engage audiences. We leverage SEO, SEM, and social channels to drive qualified traffic and skyrocket your ROI.",
      features: ["Search Engine Optimization", "Pay-Per-Click Campaigns", "Social Media Management", "Content Marketing"]
    },
    { 
      title: "Brand Strategy & Identity", 
      desc: "Crafting unique brand identities that resonate with your target demographic. We uncover your brand's core values to create visually stunning guidelines and messaging.",
      features: ["Brand Positioning", "Logo & Visual Identity", "Voice & Tone Guidelines", "Market Research"]
    },
    { 
      title: "Web & Product Development", 
      desc: "High-performance, scalable, and beautifully designed web experiences. From marketing websites to complex SaaS platforms, we write clean, future-proof code.",
      features: ["MERN/Next.js Stacks", "Headless CMS Integration", "E-commerce Solutions", "API Development"]
    },
    { 
      title: "UI/UX Design", 
      desc: "User-centric interfaces that drive engagement and improve conversions. We design with empathy, ensuring every interaction feels intuitive, seamless, and delightful.",
      features: ["Wireframing & Prototyping", "User Testing", "Interactive Design", "Design Systems"]
    }
  ];

  return (
    <div className="min-h-screen bg-white animate-fade-in-up">
      {/* Hero */}
      <section className="relative w-full pt-44 pb-20 px-6 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-full mb-8 inline-block">
            Services & Expertise
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold mb-8 tracking-tight leading-tight">
            Comprehensive solutions for modern brands
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            We don't just execute tasks; we solve problems. Discover how our multi-disciplinary approach can elevate your business to new heights.
          </p>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-24 px-6 bg-gray-50 text-black">
        <div className="container mx-auto max-w-6xl space-y-24">
           {services.map((service, idx) => (
             <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Placeholder */}
                <div className="w-full lg:w-5/12 aspect-[4/3] relative rounded-[3rem] overflow-hidden bg-white shadow-lg border border-gray-100 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <h3 className="text-white text-5xl font-bold opacity-30 group-hover:scale-110 transition-transform duration-500 select-none text-center">
                      0{idx + 1}
                    </h3>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-7/12 flex flex-col">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Core Expertise</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{service.title}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-10">
                    {service.desc}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
             </div>
           ))}
        </div>
      </section>

      {/* Embedded Banner */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl text-center items-center justify-center flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure what you need?</h2>
          <p className="text-gray-500 mb-8 max-w-xl text-lg">Every business is unique. We provide free consultations to audit your current digital state and recommend a custom roadmap tailored just for you.</p>
        </div>
      </section>
      
      <CTA />
    </div>
  );
}