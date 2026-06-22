import React from "react";
import Link from "next/link";
import { allProjects } from "../../data/projects";

const ProjectCard = ({ project }: { project: any }) => (
  <Link href="/ourworks" className="relative group overflow-hidden rounded-[24px] shadow-sm block h-[240px] md:h-[280px] lg:h-[300px] cursor-pointer w-full">
    <img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    {/* Gradient overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Text Overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tags && project.tags.slice(0, 2).map((tag: string, idx: number) => (
          <span key={idx} className="bg-white/20 backdrop-blur-md text-white text-[10px] md:text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-white/30">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">{project.title}</h3>
      <p className="text-gray-300 text-xs md:text-sm font-medium mt-1">{project.category}</p>
    </div>
  </Link>
);

export default function Projects() {
  const dummyText = "Take a look at some of the digital experiences we've crafted to help businesses grow and engage their audiences effectively.";

  // Filter projects up to Web Design (Exclude Web Development)
  const homeProjects = allProjects.filter(p => p.category !== "Web Development");

  return (
    <section className="bg-[#fcfcfc] py-24 md:py-32 overflow-hidden relative">
      <style dangerouslySetInnerHTML={{__html: `
        .scroll-container::-webkit-scrollbar {
          height: 6px;
        }
        .scroll-container::-webkit-scrollbar-track {
          background: transparent; 
        }
        .scroll-container::-webkit-scrollbar-thumb {
          background: #e5e5e5; 
          border-radius: 10px;
        }
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: #ccc; 
        }

        /* Responsive grid columns */
        .scroll-grid {
          grid-auto-columns: calc(85vw - 1.5rem);
        }
        @media (min-width: 640px) {
          .scroll-grid {
            grid-auto-columns: 340px;
          }
        }
        @media (min-width: 1024px) {
          .scroll-grid {
            grid-auto-columns: calc(25vw - 1.5rem);
            max-width: none;
          }
        }
        @media (min-width: 1280px) {
          .scroll-grid {
            grid-auto-columns: 295px; /* Fits exactly 4 in the 1280px container width */
          }
        }
      `}} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-start gap-4 mb-12 lg:mb-16">
          <span className="inline-block border border-gray-200 rounded-full px-5 py-2 text-[13px] font-semibold text-gray-600 tracking-wide bg-white shadow-sm">
            Portfolio
          </span>
          <div className="max-w-md relative z-20 mt-2">
            <p className="text-gray-400 text-sm md:text-base leading-[1.8] font-medium">
              {dummyText}
            </p>
          </div>
          <div className="max-w-2xl text-left mt-2">
            <h2 className="text-[36px] md:text-5xl lg:text-[52px] font-bold leading-[1.12] text-[#111] tracking-tight">
              Explore our most successful projects
            </h2>
          </div>
        </div>
      </div>

      {/* Horizontally Scrollable 2-Row Grid Container */}
      <div className="pl-6 md:pl-[calc(50vw-384px)] lg:pl-[calc(50vw-640px)] w-full relative z-20 pb-10">
        <div 
          className="scroll-container scroll-grid grid gap-4 lg:gap-6 overflow-x-auto pr-6 pb-8 snap-x snap-mandatory"
          style={{ 
            gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
            gridAutoFlow: 'column'
          }}
        >
          {homeProjects.map((project, idx) => (
            <div key={idx} className="snap-center w-full h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button Bottom Right */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 flex justify-end mt-4">
        <Link href="/ourworks" className="bg-[#18181b] text-white px-8 py-4 rounded-full font-bold text-[15px] flex items-center gap-3 hover:bg-black transition-colors shadow-xl group">
          See all projects
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

    </section>
  );
}
