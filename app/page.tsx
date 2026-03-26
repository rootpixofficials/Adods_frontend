// src/app/page.tsx
import Link from "next/link";
import Banner from "./components/Home/Banner";
import About from "./components/Home/About";
import HowWeWork from "./components/Home/HowWeWork";
import WhatWeDo from "./components/Home/WhatWeDo";
import Projects from "./components/Home/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen text-black">
      <Banner/>
      <About/>
      <HowWeWork/>
      <WhatWeDo/>
      <Projects/>
    </div>
  );
}