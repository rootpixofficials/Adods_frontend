import React from "react";
import { motion } from "framer-motion";

const ArrowSvg = ({ className }: { className?: string }) => (
  <svg className={`text-black opacity-90 drop-shadow-[2px_2px_0_rgba(180,180,180,0.5)] transition-transform duration-700 hover:scale-110 ${className}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 20 90 C 50 60, 60 20, 40 30 C 20 40, 20 70, 50 60 Q 70 50, 90 15" />
    <path d="M 70 15 L 90 15 L 85 35" />
  </svg>
);

const ProcessCard = ({ number, title, desc, rotate }: { number: string; title: string; desc: string; rotate: string }) => (
  <div className={`relative w-full max-w-[320px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 ${rotate} transition-transform duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] z-20 inline-block`}>
    <div className="absolute inset-[6px] border border-gray-200 rounded-[26px] pointer-events-none"></div>

    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#e0e0e0] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] flex items-center justify-center border border-gray-300">
      <div className="w-[6px] h-[6px] bg-[#333] rounded-full shadow-sm"></div>
    </div>

    <div className="mt-8 text-left">
      <span className="text-xl text-gray-400 font-semibold">{number}</span>
      <h3 className="text-2xl md:text-[28px] font-bold text-[#111] mt-2 mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

export default function HowWeWork() {
  const introText = "As a digital marketing agency in Kerala, the focus is on SEO services, social media marketing, Google Ads, and website development to help businesses grow. From strategy to execution, every step is built to increase visibility, generate leads, and deliver measurable results in Kerala and Malappuram.";

  const strategyDesc = "Understanding your business goals and building a clear digital marketing strategy focused on growth, visibility, and results.";
  const planningDesc = "Planning SEO services, social media marketing, and Google Ads campaigns to reach the right audience in Kerala and Malappuram.";
  const executionDesc = "Implementing strategies through content, ads, and website optimization to drive traffic, leads, and conversions.";
  const growthDesc = "Monitoring performance, optimizing campaigns, and scaling results for long-term business growth.";

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "140px 140px",
            backgroundPosition: "center top",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Row 1: Title & Card 01 */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="max-w-lg relative"
          >
            <div className="mb-6">
              <span className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 tracking-wide bg-white/80 backdrop-blur-sm">
                How we work
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] text-[#111] tracking-tight">
              How We Drive Digital Growth for Your Business
            </h2>
            
            <p className="text-gray-500 text-base md:text-[17px] leading-relaxed mt-6 font-medium max-w-md">
              {introText}
            </p>

            <ArrowSvg className="hidden lg:block absolute bottom-4 -right-12 w-16 h-16 rotate-[45deg] z-50 text-black" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-auto flex justify-center lg:justify-end lg:pr-10 relative"
          >
            <ProcessCard number="01" title="Strategy" desc={strategyDesc} rotate="rotate-[6deg]" />
            {/* Arrow from 01 pointing to 02 */}
            <ArrowSvg className="hidden lg:block absolute -bottom-16 left-10 w-16 h-16 rotate-[130deg] z-50 text-black" />
          </motion.div>
        </div>

        {/* Connector 01 -> 02 */}
        <div className="hidden lg:flex w-full justify-center -my-24 z-0 relative pointer-events-none">
          <svg className="w-[800px] h-[320px] opacity-40" viewBox="0 0 800 320" fill="none" stroke="#666" strokeWidth="2" strokeDasharray="6 6">
             <path d="M 650,40 C 500,100 300,200 150,280" />
          </svg>
        </div>

        {/* Row 2: Card 02 */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex justify-center lg:justify-start lg:pl-[10%] relative z-20 mt-12 lg:mt-0"
        >
          <div className="relative inline-block">
            <ProcessCard number="02" title="Planning" desc={planningDesc} rotate="-rotate-[5deg]" />
            {/* Arrow from 02 pointing to 03 */}
            <ArrowSvg className="hidden lg:block absolute -bottom-16 -right-6 w-16 h-16 rotate-[45deg] z-50 text-black" />
          </div>
        </motion.div>

        {/* Connector 02 -> 03 (Left to Right) */}
        <div className="hidden lg:flex w-full justify-center -my-24 z-0 relative pointer-events-none">
          <svg className="w-[800px] h-[320px] opacity-40" viewBox="0 0 800 320" fill="none" stroke="#666" strokeWidth="2" strokeDasharray="6 6">
             <path d="M 200,40 C 350,150 500,200 650,280" />
          </svg>
        </div>

        {/* Row 3: Card 03 (Right Aligned) */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex justify-center lg:justify-end lg:pr-[10%] relative z-20 mt-12 lg:mt-0"
        >
          <div className="relative inline-block">
            <ProcessCard number="03" title="Execution" desc={executionDesc} rotate="rotate-[3deg]" />
            {/* Arrow from 03 pointing to 04 (Leftward) */}
            <ArrowSvg className="hidden lg:block absolute -bottom-16 left-4 w-16 h-16 rotate-[130deg] z-50 text-black" />
          </div>
        </motion.div>

        {/* Connector 03 -> 04 (Right to Left) */}
        <div className="hidden lg:flex w-full justify-center -my-24 z-0 relative pointer-events-none">
          <svg className="w-[800px] h-[320px] opacity-40" viewBox="0 0 800 320" fill="none" stroke="#666" strokeWidth="2" strokeDasharray="6 6">
             <path d="M 650,40 C 450,150 350,200 150,280" />
          </svg>
        </div>

        {/* Row 4: Card 04 & Ready Text */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 lg:gap-0 mt-12 lg:mt-0 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-auto flex justify-center lg:justify-start lg:pl-[5%]"
          >
            <ProcessCard number="04" title="Growth" desc={growthDesc} rotate="-rotate-[4deg]" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-auto flex justify-center lg:justify-end lg:pr-10"
          >
            <div className="flex items-center gap-4 rotate-[2deg]">
              <svg className="hidden lg:block w-24 h-12 text-gray-400" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5">
                <path d="M 10 10 Q 50 40 90 30" />
              </svg>
              <span className="text-3xl text-gray-500 tracking-wider font-semibold" style={{ fontFamily: "Caveat, 'Comic Sans MS', cursive" }}>
               Let’s take your brand to the next level
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
