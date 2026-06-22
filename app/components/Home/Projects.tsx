import React from "react";
import Link from "next/link";
import { allProjects } from "../../data/projects";

const ProjectCard = ({ project }: { project: any }) => (
  <Link href="/ourworks" className="relative group overflow-hidden rounded-xl shadow-md block h-[240px] md:h-[280px] lg:h-[300px] cursor-pointer w-full border border-black/5">
    <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover"
      />
    </div>
  </Link>
);

export default function Projects() {
  const dummyText = "Take a look at some of the digital experiences we've crafted to help businesses grow and engage their audiences effectively.";

  // Filter projects up to Web Design (Exclude Web Development)
  const homeProjects = allProjects.filter(p => p.category !== "Web Development");

  // Split into two rows
  const halfLength = Math.ceil(homeProjects.length / 2);
  const topRowProjects = homeProjects.slice(0, halfLength);
  const bottomRowProjects = homeProjects.slice(halfLength);

  return (
    <section className="bg-[#fcfcfc] py-24 md:py-32 overflow-hidden relative">
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
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

      {/* Two Independent Scrolling Rows */}
      <div className="w-full relative z-20 pb-10 flex flex-col gap-6">
        
        {/* Top Row */}
        <div className="flex gap-4 lg:gap-6 overflow-x-auto no-scrollbar pl-6 md:pl-12 xl:pl-[calc(50vw-640px)] pr-6 snap-x snap-mandatory">
          {topRowProjects.map((project, idx) => (
            <div key={idx} className="snap-center flex-shrink-0 w-[85vw] sm:w-[340px] lg:w-[calc(25vw-1.5rem)] xl:w-[295px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex gap-4 lg:gap-6 overflow-x-auto no-scrollbar pl-6 md:pl-12 xl:pl-[calc(50vw-640px)] pr-6 snap-x snap-mandatory">
          {bottomRowProjects.map((project, idx) => (
            <div key={idx} className="snap-center flex-shrink-0 w-[85vw] sm:w-[340px] lg:w-[calc(25vw-1.5rem)] xl:w-[295px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>

      {/* CTA Button Bottom Right */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-20 flex justify-end mt-4">
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
