"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Use navbar height (64px) as threshold
      setIsScrolled(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Who we are", path: "/whoweare" },
    { name: "What we do", path: "/whatwedo" },
    { name: "How we work", path: "/howwework" },
    { name: "Our works", path: "/ourworks" },
    { name: "Blog", path: "/blog" },
  ];

  // Check if link is active
  const isActiveLink = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };
  
  const isSubpage = pathname !== "/";
  // If it's a subpage, or we are scrolled on the home page, we want the "dark" nav scheme
  const isDarkNav = isSubpage || isScrolled;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 h-20 ${
        isMenuOpen
          ? "bg-black text-white"
          : isDarkNav
            ? "bg-black/80 backdrop-blur-md text-white shadow-sm"
            : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 hover:opacity-80 transition-opacity">
          <div className="transition-all duration-500">
            {!imageError ? (
              <Image
                src={isDarkNav ? "/Images/adods_white_logo.png" : "/Images/adods.png"}
                alt="Addods Logo"
                width={120}
                height={40}
                className="object-contain transition-opacity duration-300"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <span className={`text-xl font-bold ${
                isDarkNav ? "text-white" : "text-black"
              }`}>
                ADDODS
              </span>
            )}
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 h-full">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.path);
            
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium tracking-wide transition-all duration-300 relative group h-full flex items-center ${
                  isDarkNav
                    ? isActive 
                      ? "text-white" 
                      : "text-gray-400 hover:text-white"
                    : isActive
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isDarkNav ? "bg-white" : "bg-black"
                  } ${isActive ? "w-full" : ""}`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Contact Us Button */}
        <Link
          href="/contact"
          className={`hidden md:flex items-center justify-center px-7 py-2.5 rounded-full font-semibold transition-all duration-300 ${
            isDarkNav
              ? "bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 transition-all duration-300 absolute ${
              isDarkNav || isMenuOpen ? "bg-white" : "bg-black"
            } ${isMenuOpen ? "rotate-45" : "-translate-y-2"}`}
          ></div>
          <div
            className={`w-6 h-0.5 transition-all duration-300 absolute ${
              isDarkNav || isMenuOpen ? "bg-white" : "bg-black"
            } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></div>
          <div
            className={`w-6 h-0.5 transition-all duration-300 absolute ${
              isDarkNav || isMenuOpen ? "bg-white" : "bg-black"
            } ${isMenuOpen ? "-rotate-45" : "translate-y-2"}`}
          ></div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center transition-all duration-500 z-40 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center w-full h-full space-y-8 pt-20">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.path);
              
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-3xl font-light tracking-wide transition-colors ${
                    isActive ? "text-white font-medium" : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-8 bg-white text-black px-10 py-4 rounded-full text-xl font-bold transition-transform hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}