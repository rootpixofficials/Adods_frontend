// src/app/page.tsx
import Link from "next/link";
import Banner from "./components/Home/Banner";
import About from "./components/Home/About";

export default function Home() {
  return (
    <div className="relative min-h-screen text-black">
      <Banner/>
      <About/>
    </div>
  );
}