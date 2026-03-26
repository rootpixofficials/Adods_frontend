import React from 'react';
import CTA from '../components/Home/CTA';

export default function WhoWeAre() {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "12", label: "Years Experience" },
    { number: "40+", label: "Global Clients" },
    { number: "98%", label: "Client Retention" }
  ];

  const team = [
    { name: "Eleanor Pena", role: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { name: "Jerome Bell", role: "Head of Design", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { name: "Kathryn Murphy", role: "Lead Developer", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { name: "Courtney Henry", role: "Marketing Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <div className="min-h-screen bg-white animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative w-full pt-44 pb-24 px-6 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-full mb-8 inline-block select-none">
            About Us
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold mb-8 tracking-tight leading-tight">
            We build digital experiences that matter
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            As a global creative digital agency, we combine strategy, design, and engineering to help brands thrive in today's fast-paced digital landscape.
          </p>
        </div>
      </section>

      {/* Story & Stats Section */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Our Team Collaboration" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
             </div>
             
             <div className="flex flex-col">
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight">Driven by creativity and analytics</h2>
               <p className="text-gray-500 leading-relaxed mb-6 text-[17px]">
                 At Addods, we blend cutting-edge strategy with pixel-perfect design. Founded in 2012, our belief is simple: every brand has a unique story, and our mission is to tell it through immersive, high-performing digital experiences.
               </p>
               <p className="text-gray-500 leading-relaxed text-[17px] mb-12">
                 From early-stage startups aiming to disrupt the market to established enterprises undergoing digital transformation, we partner with visionary leaders to build products that command attention and drive real business value.
               </p>
               
               {/* Stats Grid */}
               <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                 {stats.map((stat, i) => (
                   <div key={i} className="flex flex-col">
                     <span className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.number}</span>
                     <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Meet the Leadership</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A diverse team of passionate strategists, designers, and engineers pushing the boundaries of what's possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-300 text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
}