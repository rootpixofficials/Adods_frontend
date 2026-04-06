"use client";

import React from 'react';
import CTA from '../components/Home/CTA';
import AnimatedSection from '../components/AnimatedSection';

export default function Blog() {
  const featuredPost = {
    title: "How Addods BECAME the best digital marketing agency in KERALA",
    excerpt: "From humble local beginnings to orchestrating global campaigns, here is an inside look at the philosophy, dynamic technology stack, and relentless focus on data that cemented Addods as the premier growth partner for businesses across the state and beyond.",
    category: "Agency News",
    date: "Mar 26, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  };

  const posts = [
    { id: 1, title: "The Future of Digital Marketing with Generative AI Technologies", category: "Marketing", date: "Mar 24, 2026", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Why UI/UX is Crucial for Sustained E-commerce Conversion Rates", category: "Design", date: "Mar 20, 2026", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Building Scalable Next.js Server Components for Extreme SEO", category: "Development", date: "Mar 15, 2026", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Brand Voice: Reaching Gen-Z on Evolving Social Media Platforms", category: "Strategy", date: "Mar 10, 2026", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Case Study: Redesigning a Fintech Dashboard for 10M+ Global Users", category: "Case Study", date: "Feb 28, 2026", image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "The Rise of Micro-Interactions Pattern in Modern Web Applications", category: "UX Design", date: "Feb 15, 2026", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <AnimatedSection className="relative w-full pt-44 pb-20 px-6 bg-black text-white overflow-hidden" direction="none">
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-full mb-8 inline-block cursor-default">
            Insights & News
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold mb-8 tracking-tight leading-tight">
            Elevating Brands globally from Kerala
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-6">
            Dive into our actionable articles exploring technology, strategy, design, and culture. Written by the strategic minds powering the best digital marketing agency in KERALA. We help businesses scale through Search Engine Optimization (SEO), advanced UI/UX design, and data-driven marketing campaigns.
          </p>
        </div>
      </AnimatedSection>

      {/* SEO Content Section */}
      <AnimatedSection className="py-16 px-6 bg-gray-50 border-y border-gray-200" direction="up" delay={0.2}>
        <div className="container mx-auto max-w-5xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black tracking-tight">Our Marketing & SEO Philosophy</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            As the leading <strong className="text-black">digital marketing agency in Kerala</strong>, we believe that organic growth is the bedrock of long-term digital success. Our dedicated SEO (Search Engine Optimization) and Content Marketing frameworks ensure that your brand isn't just uniquely designed, but practically dominates search engine results pages (SERPs). Our expert team utilizes technical SEO audits, highly targeted semantic keyword implementation, backlink acquisition, and uncompromised content quality standards to elevate your site directly to Page One of Google.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2 inline-block">On-Page SEO</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">Optimizing web structures, intelligent metadata analysis, and strict adherence to Google's core web vitals and algorithm benchmarks.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2 inline-block">Content Strategy</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">Writing highly contextual, rich, and structured articles that resonate with engagingly human narratives while hitting semantic keyword clusters.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-3 border-b-2 border-black pb-2 inline-block">Technical SEO</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">Server-side rendering, ultra-fast TTFB, perfectly optimized Next.js robust frameworks, and responsive mobile-first accessibility standards.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Post */}
      <AnimatedSection className="py-20 px-6 bg-white overflow-hidden" direction="up">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight pl-2 text-black border-l-4 border-black pl-5">Spotlight Story</h2>
          <div className="group cursor-pointer rounded-[3rem] overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500 w-full h-[500px] lg:h-[600px] border border-gray-100 flex items-center justify-center bg-gray-900">
            <img src={featuredPost.image} alt="Featured Post" className="w-full h-full object-cover filter brightness-[0.6] group-hover:scale-105 transition-transform duration-1000 absolute inset-0" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16 text-white bg-gradient-to-t from-black via-black/60 to-transparent z-10">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white text-black rounded-full">{featuredPost.category}</span>
                <span className="text-sm font-medium opacity-80">{featuredPost.date}</span>
                <span className="text-sm font-medium opacity-80 hidden md:inline-block">• {featuredPost.readTime}</span>
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-[4.5rem] font-bold mb-6 max-w-4xl tracking-tight leading-tight group-hover:underline decoration-white/30 decoration-4 underline-offset-8 transition-all">{featuredPost.title}</h3>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl font-light line-clamp-2 md:line-clamp-3">{featuredPost.excerpt}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Grid */}
      <div className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-black border-l-4 border-black pl-5">Recent Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, idx) => (
              <AnimatedSection key={post.id} direction="up" delay={idx * 0.1} className="bg-gray-50 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group flex flex-col cursor-pointer">
                <div className="relative w-full h-[260px] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow bg-white">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#000]">{post.category}</span>
                    <span className="text-sm text-gray-500 font-medium">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 flex-grow tracking-tight leading-snug group-hover:underline decoration-black/20 decoration-2 transition-all">{post.title}</h3>
                  <div className="font-semibold text-black inline-flex items-center space-x-2 w-max group-hover:translate-x-2 transition-transform">
                    <span>Read Article</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection direction="up" delay={0.2} className="mt-20 text-center">
             <button className="bg-transparent border-2 border-black text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-colors duration-300">
               Load More Articles
             </button>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Newsletter */}
      <AnimatedSection className="py-24 px-6 bg-white" direction="up">
        <div className="container mx-auto max-w-5xl bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-300 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 opacity-30 pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 tracking-tight text-black">Stay in the loop</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto relative z-10 font-medium leading-relaxed">Join over 10,000 subscribers getting the latest insights, news, and design trends delivered straight to their inbox every month. No spam, just pure value.</p>
          
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" className="flex-1 px-8 py-4 rounded-full border border-gray-300 outline-none focus:border-black transition-colors bg-white text-black" required />
            <button type="submit" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg">
              Subscribe Free
            </button>
          </form>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.2}>
        <CTA />
      </AnimatedSection>
    </div>
  );
}
