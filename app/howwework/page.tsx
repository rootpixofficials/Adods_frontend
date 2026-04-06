import React from 'react';
import CTA from '../components/Home/CTA';
import AnimatedSection from '../components/AnimatedSection';

export default function HowWeWork() {
  const steps = [
    { 
      title: "1. Discover & Strategize", 
      duration: "Weeks 1-2",
      desc: "We start by diving deep into your brand, industry, and competitors. Through workshops and stakeholder interviews, we define the roadmap and set clear, measurable goals.",
      deliverables: ["Comprehensive Audit", "Competitor Analysis", "Project Roadmap", "Persona Development"]
    },
    { 
      title: "2. Design & Prototype", 
      duration: "Weeks 3-5",
      desc: "Our design team translates strategy into wireframes and visually stunning prototypes. We focus on user experience, ensuring the journey is intuitive before a single line of code is written.",
      deliverables: ["Wireframes", "High-Fidelity UI", "Clickable Prototypes", "Design System Setup"]
    },
    { 
      title: "3. Build & Integrate", 
      duration: "Weeks 6-10",
      desc: "Development kicks off using modern, scalable tech stacks (Next.js, Tailwind, Node). We build robust backend architectures and pixel-perfect frontends, integrating with your existing tools.",
      deliverables: ["Frontend Architecture", "Backend APIs", "CMS Integration", "Quality Assurance"]
    },
    { 
      title: "4. Launch & Optimize", 
      duration: "Ongoing",
      desc: "Going live is just the beginning. We monitor performance, analyze user behavior, and iterate based on real data to ensure maximum ROI and sustained growth.",
      deliverables: ["Analytics Setup", "A/B Testing", "Performance Monitoring", "Monthly Strategy Reviews"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <AnimatedSection className="relative w-full pt-44 pb-20 px-6 bg-black text-white overflow-hidden" direction="none">
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-full mb-8 inline-block cursor-default">
            Our Process
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold mb-8 tracking-tight leading-tight">
            How we bring ideas to life
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            A transparent, collaborative, and proven methodology that ensures we deliver exceptional results on time and on budget.
          </p>
        </div>
      </AnimatedSection>

      {/* Timeline Section */}
      <div className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl relative">
          
          <div className="space-y-24 relative">
            {steps.map((step, index) => (
              <AnimatedSection direction="up" delay={0.1} key={index} className="flex flex-col md:flex-row gap-12 group">
                {/* Visual Step Indicator */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-500">
                    {index + 1}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-black to-gray-200 mt-4 opacity-50"></div>
                  )}
                </div>

                {/* Content block */}
                <div className={`flex-1 p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 p-8 text-8xl font-black text-gray-100/50 -translate-y-6 translate-x-4 pointer-events-none select-none transition-transform duration-500 group-hover:-translate-x-2">
                    0{index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 bg-white border border-gray-200 text-xs font-bold uppercase tracking-widest rounded-full text-black mb-6">
                      {step.duration}
                    </span>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">{step.title}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">{step.desc}</p>
                    
                    <div>
                      <h4 className="font-semibold text-black uppercase tracking-wider text-sm mb-4">Key Deliverables</h4>
                      <div className="flex flex-wrap gap-3">
                        {step.deliverables.map((del, dIdx) => (
                          <span key={dIdx} className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-[20px] text-sm font-medium shadow-sm">
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ Sneak Peek */}
      <AnimatedSection className="pb-24 px-6 bg-white" direction="up">
        <div className="container mx-auto max-w-4xl text-center border-t border-gray-100 pt-24">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Got questions?</h2>
          <p className="text-gray-500 text-lg mb-8">We believe in complete transparency. Ask us anything about our stack, pricing, or timelines.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up">
        <CTA />
      </AnimatedSection>
    </div>
  );
}