"use client";

import Link from "next/link";
import Banner from "./components/Home/Banner";
import About from "./components/Home/About";
import HowWeWork from "./components/Home/HowWeWork";
import WhatWeDo from "./components/Home/WhatWeDo";
import Projects from "./components/Home/Projects";
import Testimonial from "./components/Home/Testimonial";
import CTA from "./components/Home/CTA";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="relative min-h-screen text-black">
      <AnimatedSection direction="none">
        <Banner/>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.1}>
        <About/>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.1}>
        <HowWeWork/>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.1}>
        <WhatWeDo/>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.1}>
        <Projects/>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.1}>
        <Testimonial/>
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <CTA/>
      </AnimatedSection>
    </div>
  );
}