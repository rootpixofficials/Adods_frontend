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
  const dummyText = "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ali";

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
          
          <ProjectCard title="Map product" category="UX Case Study">
            {/* Map Placeholder */}
            <div className="relative w-[80%] h-[80%] bg-white rounded-xl shadow-sm border border-gray-100 p-2 overflow-hidden flex flex-col">
              <div className="flex-1 bg-green-50 rounded-lg relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                   <div className="w-3 h-3 bg-white rounded-full"></div>
                 </div>
                 {/* Map lines */}
                 <div className="absolute top-0 left-1/4 w-0.5 h-full bg-white opacity-60"></div>
                 <div className="absolute top-1/3 left-0 w-full h-0.5 bg-white opacity-60"></div>
              </div>
            </div>
          </ProjectCard>

          <ProjectCard title="AI Music product" category="UX Case Study">
            {/* Grid Faces Placeholder */}
            <div className="relative w-[80%] h-[80%] bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                <div className="flex-1 h-3 bg-gray-100 rounded w-full"></div>
              </div>
              <div className="grid grid-cols-4 gap-2 flex-1 mt-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`bg-gray-200 rounded-md w-full h-full ${i % 3 === 0 ? 'bg-purple-200' : ''} ${i % 4 === 0 ? 'bg-indigo-300' : ''}`}></div>
                ))}
              </div>
            </div>
          </ProjectCard>

          <ProjectCard title="AI Music product" category="UX Case Study">
            <div className="relative w-[80%] h-[80%] bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg"></div>
                <div className="flex-1 h-3 bg-gray-100 rounded w-full"></div>
              </div>
              <div className="grid grid-cols-4 gap-2 flex-1 mt-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`bg-gray-200 rounded-md w-full h-full ${i % 2 === 0 ? 'bg-pink-200' : ''} ${i % 5 === 0 ? 'bg-orange-300' : ''}`}></div>
                ))}
              </div>
            </div>
          </ProjectCard>

          {/* Dummy extra card to allow scrolling properly */}
          <ProjectCard title="Fintech Dashboard" category="UI Design">
            <div className="relative w-[80%] h-[80%] bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-3">
               <div className="w-1/2 h-4 bg-gray-100 rounded"></div>
               <div className="flex gap-2 h-1/2">
                 <div className="flex-1 bg-green-100 rounded-lg"></div>
                 <div className="w-1/3 bg-blue-100 rounded-lg"></div>
               </div>
               <div className="flex-1 bg-gray-50 rounded-lg"></div>
            </div>
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
