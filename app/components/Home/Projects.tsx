import React from "react";

const ProjectCard = ({ title, category, children }: { title: string; category: string; children: React.ReactNode }) => (
  <div className="min-w-[320px] md:min-w-[400px] lg:min-w-[450px] bg-white rounded-[40px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] snap-center flex-shrink-0 group cursor-pointer transition-transform duration-500 hover:-translate-y-2 border border-black/[0.02]">
    
    <div className="flex justify-between items-start mb-10">
      <div>
        <h3 className="text-xl font-bold text-[#111]">{title}</h3>
        <p className="text-gray-400 text-[13px] font-medium mt-1">{category}</p>
      </div>
      
      {/* Black Circular Arrow Icon */}
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </div>

    {/* Project Image Placeholder */}
    <div className="w-full h-[250px] md:h-[280px] bg-[#f4f4f4] rounded-[24px] overflow-hidden relative flex items-center justify-center group-hover:bg-[#ebebeb] transition-colors duration-300">
      {children}
    </div>

  </div>
);

export default function Projects() {
  const dummyText = "Take a look at some of the digital experiences we've crafted to help businesses grow and engage their audiences effectively.";

  return (
    <section className="bg-[#fcfcfc] py-24 md:py-32 overflow-hidden relative">
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-start gap-4 mb-20 lg:mb-24">
          
          {/* Badge */}
          <span className="inline-block border border-gray-200 rounded-full px-5 py-2 text-[13px] font-semibold text-gray-600 tracking-wide bg-white shadow-sm">
            Portfolio
          </span>

          {/* Left: Paragraph immediately beneath Badge */}
          <div className="max-w-md relative z-20 mt-2">
            <p className="text-gray-400 text-sm md:text-base leading-[1.8] font-medium">
              {dummyText}
            </p>
          </div>

          {/* Headline */}
          <div className="max-w-2xl text-left mt-2">
            <h2 className="text-[36px] md:text-5xl lg:text-[52px] font-bold leading-[1.12] text-[#111] tracking-tight">
              Explore our most successful projects
            </h2>
          </div>
          
        </div>
      </div>

      {/* Horizontally Scrollable Cards Container */}
      <div 
        className="pl-6 md:pl-[calc(50vw-384px)] lg:pl-[calc(50vw-640px)] w-full relative z-20 pb-10"
      >
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pr-6 pb-8 pt-4">
          
          <ProjectCard title="Cerebro Identity" category="Branding">
            <img src="/images/Branding/cerebro D6 (1).webp" alt="Cerebro Identity" className="w-full h-full object-cover rounded-[24px] hover:scale-105 transition-transform duration-500" />
          </ProjectCard>

          <ProjectCard title="Kunafa Promo" category="Marketing">
            <img src="/images/Marketing/kunafa eid 2.webp" alt="Kunafa Promo" className="w-full h-full object-cover rounded-[24px] hover:scale-105 transition-transform duration-500" />
          </ProjectCard>

          <ProjectCard title="Routex" category="Web Design">
            <img src="/images/Web desing/Routex.png" alt="Routex Showcasing Website" className="w-full h-full object-cover rounded-[24px] hover:scale-105 transition-transform duration-500" />
          </ProjectCard>

          <ProjectCard title="Origon E-Commerce" category="Web Development">
            <img src="/images/Web development/origon.png" alt="Origon E-Commerce" className="w-full h-full object-cover rounded-[24px] hover:scale-105 transition-transform duration-500" />
          </ProjectCard>

        </div>
      </div>

      {/* CTA Button Bottom Right */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 flex justify-end">
        <button className="bg-[#18181b] text-white px-8 py-4 rounded-full font-bold text-[15px] flex items-center gap-3 hover:bg-black transition-colors shadow-xl group">
          See all projects
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

    </section>
  );
}
