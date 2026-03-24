// src/components/Navbar.tsx
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
  ];

  // Check if link is active
  const isActiveLink = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 h-20 ${
        isScrolled
          ? "bg-black/30 backdrop-blur-md text-white shadow-sm"
          : "bg-transparent "
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="transition-all duration-500">
            {!imageError ? (
              <Image
                src={isScrolled ? "/Images/adods_white_logo.png" : "/Images/adods.png"}
                alt="Addods Logo"
                width={120}
                height={40}
                className="object-contain transition-opacity duration-300"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <span className={`text-xl font-bold ${
                isScrolled ? "text-white" : "text-black"
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
                className={`font-medium  tracking-wide transition-all duration-300 relative group h-full flex items-center ${
                  isScrolled
                    ? "text-white"
                    : isActive
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-white" : "bg-black"
                  } ${isActive ? "w-full" : ""}`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Contact Us Button */}
        <Link
          href="/contact"
          className={`hidden md:block px-6 py-2 rounded-full  font-medium transition-all duration-300 ${
            isScrolled
              ? "bg-white backdrop-blur-sm text-black border border-white/30 hover:bg-white/20"
              : pathname === "/contact"
              ? "bg-white text-black border border-black"
              : "bg-black text-white hover:bg-white hover:text-black border border-transparent hover:border-black"
          }`}
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 transition-all duration-300 absolute ${
              isScrolled ? "bg-white" : "bg-black"
            } ${isMenuOpen ? "rotate-45" : "-translate-y-2"}`}
          ></div>
          <div
            className={`w-6 h-0.5 transition-all duration-300 absolute ${
              isScrolled ? "bg-white" : "bg-black"
            } ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></div>
          <div
            className={`w-6 h-0.5 transition-all duration-300 absolute ${
              isScrolled ? "bg-white" : "bg-black"
            } ${isMenuOpen ? "-rotate-45" : "translate-y-2"}`}
          ></div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center justify-center transition-all duration-500 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
        >
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.path);
              
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-2xl font-light transition-colors ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`border px-8 py-3 rounded-full text-lg font-medium transition-colors mt-4 ${
                pathname === "/contact"
                  ? "bg-white text-black border-white"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
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