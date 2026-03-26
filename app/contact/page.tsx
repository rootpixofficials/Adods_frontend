"use client";

import React from 'react';
import CTA from '../components/Home/CTA';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative w-full pt-44 pb-20 px-6 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-white/20 rounded-full mb-8 inline-block text-white">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-white">
            Let's build something amazing together
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you have a fully fleshed out RFQ or just a napkin sketch, we'd love to hear about it. Our team is ready to help you succeed.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Info container */}
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Drop by our office or say hi via email.</h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-12">
                  We usually respond within 24 hours. If it's urgent, feel free to give us a call during standard business hours.
                </p>
                
                <div className="space-y-10">
                  <div className="flex flex-col">
                    <h4 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-2">New Business</h4>
                    <a href="mailto:hello@addods.com" className="text-2xl font-semibold hover:text-blue-600 transition-colors">hello@addods.com</a>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-2">Join the team</h4>
                    <a href="mailto:careers@addods.com" className="text-2xl font-semibold hover:text-blue-600 transition-colors">careers@addods.com</a>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-2">Call Us</h4>
                    <a href="tel:+1234567890" className="text-2xl font-semibold hover:text-blue-600 transition-colors">+1 (234) 567-890</a>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-2">Headquarters</h4>
                    <p className="text-xl font-medium text-gray-800">
                      123 Creative Street, Tech District<br/>New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-10 md:p-14 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/50">
              <h3 className="text-3xl font-bold mb-8">Send us a message</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="text-sm font-bold mb-3 ml-2 text-gray-700">First Name</label>
                    <input type="text" className="px-6 py-4 bg-white rounded-full border border-gray-200 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="John" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-bold mb-3 ml-2 text-gray-700">Last Name</label>
                    <input type="text" className="px-6 py-4 bg-white rounded-full border border-gray-200 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-3 ml-2 text-gray-700">Email Address</label>
                  <input type="email" className="px-6 py-4 bg-white rounded-full border border-gray-200 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" placeholder="john@example.com" />
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-3 ml-2 text-gray-700">Project Type</label>
                  <select className="px-6 py-4 bg-white rounded-full border border-gray-200 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all appearance-none cursor-pointer">
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                    <option>Branding</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-bold mb-3 ml-2 text-gray-700">Message</label>
                  <textarea rows={5} className="px-6 py-5 bg-white rounded-[2rem] border border-gray-200 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none" placeholder="Tell us about your project goals, timeline, and budget..."></textarea>
                </div>
                
                <button type="button" className="w-full bg-black text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg mt-4">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
